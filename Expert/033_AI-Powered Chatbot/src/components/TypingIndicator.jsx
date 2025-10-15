import React from 'react'

const TypingIndicator = () => {
  return (
    <div className="message ai-message">
      <div className="message-avatar">
        🤖
      </div>
      <div className="message-content">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default TypingIndicator