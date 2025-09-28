import React, { useState } from 'react';
import { useChat } from '../../hooks/useChat';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { sendMessage, activeConversation } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && activeConversation) {
      sendMessage(message);
      setMessage('');
    }
  };

  const handleEmojiClick = (emoji) => {
    setMessage(prev => prev + emoji);
  };

  return (
    <div className="message-input-container">
      <form onSubmit={handleSubmit} className="message-input-form">
        <button
          type="button"
          className="emoji-button"
          onClick={() => handleEmojiClick('😊')}
        >
          😊
        </button>
        <input
          type="text"
          className="message-input"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button 
          type="submit" 
          className="send-button"
          disabled={!message.trim() || !activeConversation}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageInput;