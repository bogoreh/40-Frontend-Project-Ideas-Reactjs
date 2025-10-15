import { useState } from 'react'
import { sendMessage } from '../utils/api'

export const useChat = () => {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const addMessage = async (text) => {
    if (!text.trim()) return

    const userMessage = {
      id: Date.now(),
      text,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await sendMessage(text)
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
        text: "Sorry, I encountered an error. Please try again.",
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return {
    messages,
    isLoading,
    addMessage
  }
}