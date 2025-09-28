# Chat Application MVP

A real-time chat application built with React.js and Socket.IO, featuring one-to-one messaging, user authentication, and online status indicators.

## 🚀 Features

- **Real-time Messaging**: Instant message delivery using Socket.IO
- **User Authentication**: Simple email/password registration and login
- **One-to-One Chat**: Private conversations between users
- **Online Status**: See which users are online/offline
- **Message Timestamps**: Time tracking for all messages
- **Emoji Support**: Basic emoji insertion in messages
- **Responsive UI**: Clean and minimal interface

## 🛠️ Tech Stack

**Frontend:**
- React.js 18
- Vite
- Socket.IO Client
- CSS3

**Backend:**
- Node.js
- Socket.IO
- In-memory storage (for development)

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm

### Backend Setup

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm run dev
   ```
   The backend will run on `http://localhost:3001`

### Frontend Setup

1. **Navigate to project root:**
   ```bash
   cd /home/abdibogoreh/Documents/40\ frontend\ project/Intermediate/chat-application
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 🎯 Usage

1. **Access the application:**
   Open your browser and go to `http://localhost:5173`

2. **Create an account:**
   - Click "Sign up"
   - Enter your name, email, and password
   - Submit the form

3. **Start chatting:**
   - Select a conversation from the left sidebar
   - Type your message in the input field
   - Press Enter or click Send to deliver the message
   - Use the emoji button to add emojis

4. **See online status:**
   - Green indicator shows online users
   - Gray indicator shows offline users

## 📁 Project Structure

```
chat-application/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Auth/          # Authentication components
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   ├── Chat/          # Chat interface components
│   │   │   ├── ContactList.jsx
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── Message.jsx
│   │   │   └── MessageInput.jsx
│   │   └── Layout/        # Layout components
│   │       └── Header.jsx
│   ├── context/           # React Context providers
│   │   ├── AuthContext.jsx
│   │   └── SocketContext.jsx
│   ├── hooks/             # Custom React hooks
│   │   └── useChat.js
│   ├── utils/             # Utility functions
│   │   └── auth.js
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # React DOM entry point
│   └── index.css          # Global styles
├── server/                # Backend server
│   ├── index.js           # Socket.IO server
│   └── package.json       # Server dependencies
├── package.json           # Frontend dependencies
└── vite.config.js         # Vite configuration
```

## 🔧 Development

### Running in Development Mode

Start both servers in separate terminals:

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Building for Production

**Frontend:**
```bash
npm run build
```

**Backend:**
```bash
cd server
npm start
```

## 🎨 Core Components

- **AuthContext**: Manages user authentication state
- **SocketContext**: Handles real-time socket connections
- **useChat Hook**: Centralizes chat functionality
- **ContactList**: Displays available conversations
- **ChatWindow**: Main chat interface with messages
- **MessageInput**: Message composition with emoji support

## 🔌 API Events

### Socket Events

**Client to Server:**
- `user_online`: Notify when user comes online
- `join_conversation`: Join a specific conversation room
- `send_message`: Send a new message
- `get_conversation`: Request conversation history

**Server to Client:**
- `users_online`: List of online users
- `receive_message`: New incoming message
- `conversation_history`: Previous messages in conversation
- `conversation_updated`: Conversation metadata updates

## 🚧 Limitations & Next Steps

### Current Limitations (MVP)
- In-memory storage (data lost on server restart)
- Basic authentication (passwords stored in plain text)
- No message persistence
- No media uploads
- No group chats
- No push notifications

### Planned Enhancements
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Password hashing and JWT tokens
- [ ] Message persistence
- [ ] File upload support
- [ ] Group conversations
- [ ] Typing indicators
- [ ] Message read receipts
- [ ] Push notifications
- [ ] Dark mode
- [ ] Message search

## 🐛 Troubleshooting

### Common Issues

1. **Socket connection errors:**
   - Ensure backend is running on port 3001
   - Check CORS configuration

2. **Module not found errors:**
   - Run `npm install` in both frontend and backend directories
   - Delete `node_modules` and reinstall if needed

3. **Port already in use:**
   ```bash
   npx kill-port 5173  # Frontend port
   npx kill-port 3001  # Backend port
   ```

## 📄 License

This project is for educational purposes as part of frontend development learning.

## 👥 Contributing

This is a learning project. Feel free to fork and extend with additional features!

## 📞 Support

For issues and questions related to this implementation, refer to the project documentation or seek help through appropriate learning channels.

---

**Note**: This is a Minimum Viable Product (MVP) focused on core messaging functionality. Additional features can be built upon this foundation based on user feedback and requirements.
