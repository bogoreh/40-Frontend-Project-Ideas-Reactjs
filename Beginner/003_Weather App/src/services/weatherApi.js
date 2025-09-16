const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
    
    if (!response.ok) {
      throw new Error('City not found')
    }
    
    return await response.json()
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch weather data')
  }
}

export const fetchWeatherByCoords = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    
    if (!response.ok) {
      throw new Error('Location not found')
    }
    
    return await response.json()
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch weather data')
  }
}