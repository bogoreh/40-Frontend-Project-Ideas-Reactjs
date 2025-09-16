import { useState, useCallback } from 'react'
import { fetchWeatherData, fetchWeatherByCoords } from '../services/weatherApi'

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchWeather = useCallback(async (city) => {
    setLoading(true)
    setError(null)
    
    try {
      const data = await fetchWeatherData(city)
      setWeatherData(data)
    } catch (err) {
      setError(err.message)
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchWeatherByLocation = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords
            const data = await fetchWeatherByCoords(latitude, longitude)
            setWeatherData(data)
            setLoading(false)
          },
          (error) => {
            setError('Geolocation permission denied')
            setLoading(false)
          }
        )
      } else {
        setError('Geolocation is not supported by this browser')
        setLoading(false)
      }
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }, [])

  return {
    weatherData,
    loading,
    error,
    fetchWeather,
    fetchWeatherByLocation
  }
}

export default useWeather