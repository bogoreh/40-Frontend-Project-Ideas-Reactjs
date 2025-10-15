import React, { useState, useRef, useEffect } from 'react'
import Message from './Message'
import TypingIndicator from './TypingIndicator'
import { sendMessage } from '../utils/api'

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    try {
      const response = await sendMessage(inputMessage)
      
      const aiMessage = {
        id: Date.now() + 1,
        text: response,
        isUser: false,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble responding right now. Please try again.",
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="input-container">
        <div className="input-wrapper">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            rows="1"
            className="message-input"
          />
          <button 
            onClick={handleSend} 
            disabled={!inputMessage.trim() || isTyping}
            className="send-button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatContainer