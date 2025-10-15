// Mock AI response - Replace this with actual API call
export const sendMessage = async (message) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
  
  // Mock responses - Replace with actual AI service like OpenAI, Claude, etc.
  const responses = [
    "I understand you're asking about: " + message + ". This is a mock response. In a real app, this would connect to an AI service like OpenAI.",
    "That's an interesting question! Based on my knowledge: " + message.substring(0, 50) + "...",
    "I'd be happy to help with that! Here's what I think about your query.",
    "Great question! Let me provide some insights about that topic.",
    "I've processed your request and here's my response to: " + message
  ]
  
  return responses[Math.floor(Math.random() * responses.length)]
}