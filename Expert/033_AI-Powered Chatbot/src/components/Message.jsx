import React from 'react'

const Message = ({ message }) => {
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  return (
    <div className={`message ${message.isUser ? 'user-message' : 'ai-message'}`}>
      <div className="message-avatar">
        {message.isUser ? '👤' : '🤖'}
      </div>
      <div className="message-content">
        <div className="message-text">
          {message.text}
        </div>
        <div className="message-time">
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  )
}

export default Message