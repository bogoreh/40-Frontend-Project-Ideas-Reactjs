import { useState, useEffect, useRef } from 'react';
import { useSocket } from '../context/SocketContext';

export const useChat = () => {
  const { socket, onlineUsers } = useSocket();
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Sample conversations (replace with actual data from backend)
  const sampleConversations = [
    {
      id: '1',
      participant: { id: '2', name: 'John Doe', email: 'john@example.com' },
      lastMessage: 'Hey, how are you?',
      lastMessageTime: new Date()
    },
    {
      id: '2',
      participant: { id: '3', name: 'Jane Smith', email: 'jane@example.com' },
      lastMessage: 'Meeting at 3 PM',
      lastMessageTime: new Date()
    }
  ];

  useEffect(() => {
    setConversations(sampleConversations);
  }, []);

  useEffect(() => {
    if (socket && activeConversation) {
      socket.emit('join_conversation', activeConversation.id);
      socket.emit('get_conversation', activeConversation.id);

      socket.on('conversation_history', (conversationMessages) => {
        setMessages(conversationMessages);
      });

      socket.on('receive_message', (message) => {
        if (message.conversationId === activeConversation.id) {
          setMessages(prev => [...prev, message]);
        }
      });

      socket.on('conversation_updated', (data) => {
        if (data.conversationId === activeConversation.id) {
          // Update last message in conversations list
          setConversations(prev => 
            prev.map(conv => 
              conv.id === data.conversationId 
                ? { ...conv, lastMessage: data.lastMessage.text }
                : conv
            )
          );
        }
      });

      return () => {
        socket.off('conversation_history');
        socket.off('receive_message');
        socket.off('conversation_updated');
      };
    }
  }, [socket, activeConversation]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = (text) => {
    if (!socket || !activeConversation || !text.trim()) return;

    const messageData = {
      conversationId: activeConversation.id,
      message: text,
      sender: {
        id: socket.id,
        name: 'Current User' // This would come from auth context
      }
    };

    socket.emit('send_message', messageData);
  };

  const isUserOnline = (userId) => {
    return onlineUsers.some(user => user.id === userId && user.online);
  };

  return {
    conversations,
    activeConversation,
    setActiveConversation,
    messages,
    sendMessage,
    isUserOnline,
    messagesEndRef
  };
};