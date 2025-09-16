export const formatDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString()
}

export const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString()
}

export const getWindDirection = (degrees) => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  const index = Math.round(degrees / 45) % 8
  return directions[index]
}