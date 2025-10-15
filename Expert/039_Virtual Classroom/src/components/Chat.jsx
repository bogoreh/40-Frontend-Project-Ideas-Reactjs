import React, { useState } from 'react'

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'John Doe', text: 'Hello everyone!', time: '10:00 AM' },
    { id: 2, user: 'You', text: 'Hi John!', time: '10:01 AM' },
    { id: 3, user: 'Sarah Wilson', text: 'Good morning!', time: '10:02 AM' },
  ])
  const [newMessage, setNewMessage] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        user: 'You',
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
      setNewMessage('')
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>Class Chat</h3>
        <span className="online-count">24 online</span>
      </div>
      
      <div className="chat-messages">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.user === 'You' ? 'own-message' : ''}`}>
            <div className="message-header">
              <strong>{message.user}</strong>
              <span className="message-time">{message.time}</span>
            </div>
            <div className="message-text">{message.text}</div>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  )
}

export default Chat