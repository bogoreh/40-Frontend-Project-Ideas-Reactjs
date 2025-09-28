import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Message = ({ message }) => {
  const { currentUser } = useAuth();
  const isSent = message.sender === currentUser?.id;

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`message ${isSent ? 'message-sent' : 'message-received'}`}>
      {!isSent && (
        <div className="message-sender">{message.senderName}</div>
      )}
      <div className="message-text">{message.text}</div>
      <div className="message-timestamp">
        {formatTime(message.timestamp)}
      </div>
    </div>
  );
};

export default Message;