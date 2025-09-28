import { Server } from 'socket.io';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3001;

// Create HTTP server
const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// In-memory storage (replace with database in production)
const users = new Map();
const messages = new Map(); // Map of conversationId -> messages

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // User joins the app
  socket.on('user_online', (userData) => {
    users.set(socket.id, {
      id: userData.id,
      email: userData.email,
      name: userData.name,
      socketId: socket.id,
      online: true,
      lastSeen: new Date()
    });
    
    // Notify all users about online status
    io.emit('users_online', Array.from(users.values()));
    console.log('User online:', userData.name);
  });

  // Join a conversation
  socket.on('join_conversation', (conversationId) => {
    socket.join(conversationId);
    console.log(`User ${socket.id} joined conversation: ${conversationId}`);
  });

  // Send message
  socket.on('send_message', (data) => {
    const { conversationId, message, sender } = data;
    
    // Store message
    if (!messages.has(conversationId)) {
      messages.set(conversationId, []);
    }
    
    const messageData = {
      id: Date.now().toString(),
      text: message,
      sender: sender.id,
      senderName: sender.name,
      timestamp: new Date(),
      conversationId
    };
    
    messages.get(conversationId).push(messageData);
    
    // Emit to all users in the conversation
    io.to(conversationId).emit('receive_message', messageData);
    
    // Notify users about new message
    io.emit('conversation_updated', {
      conversationId,
      lastMessage: messageData
    });

    console.log('Message sent in conversation:', conversationId);
  });

  // Get conversation history
  socket.on('get_conversation', (conversationId) => {
    const conversationMessages = messages.get(conversationId) || [];
    socket.emit('conversation_history', conversationMessages);
    console.log('Sent conversation history for:', conversationId);
  });

  // User goes offline
  socket.on('disconnect', () => {
    const user = users.get(socket.id);
    if (user) {
      users.set(socket.id, { ...user, online: false, lastSeen: new Date() });
      io.emit('users_online', Array.from(users.values()));
      console.log('User offline:', user.name);
    }
    users.delete(socket.id);
    console.log('User disconnected:', socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});