import React from 'react'
import ChatContainer from './components/ChatContainer'

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>🤖 AI Assistant</h1>
        <p>Your intelligent chatbot powered by AI</p>
      </div>
      <ChatContainer />
    </div>
  )
}

export default App