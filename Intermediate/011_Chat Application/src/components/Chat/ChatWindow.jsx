import React from 'react';
import { useChat } from '../../hooks/useChat';
import Message from './Message';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  const { activeConversation, messages, messagesEndRef } = useChat();

  if (!activeConversation) {
    return (
      <div className="chat-window">
        <div className="no-chat-selected">
          Select a conversation to start chatting
        </div>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>{activeConversation.participant.name}</h3>
        <div className="chat-status">
          {activeConversation.participant.email}
        </div>
      </div>
      <div className="messages">
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatWindow;