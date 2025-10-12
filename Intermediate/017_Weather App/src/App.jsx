import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('London')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const API_KEY = '570dff81397ea2ea0267632b131129c4' // Replace with your OpenWeather API key
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`

  const fetchWeather = async (cityName = city) => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(
        `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
      )
      
      if (!response.ok) {
        throw new Error('City not found')
      }
      
      const data = await response.json()
      setWeather(data)
      setCity(cityName)
    } catch (err) {
      setError(err.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  const handleSearch = (searchCity) => {
    if (searchCity.trim()) {
      fetchWeather(searchCity)
    }
  }

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  )
}

export default App