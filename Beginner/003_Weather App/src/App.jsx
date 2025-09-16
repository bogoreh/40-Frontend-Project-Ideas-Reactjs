import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import LoadingSpinner from './components/LoadingSpinner'
import useWeather from './hooks/useWeather'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const { weatherData, loading, error, fetchWeather } = useWeather()

  const handleSearch = (searchCity) => {
    setCity(searchCity)
    fetchWeather(searchCity)
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="app-title">Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        
        {loading && <LoadingSpinner />}
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {weatherData && !loading && (
          <WeatherCard weatherData={weatherData} />
        )}
        
        {!weatherData && !loading && !error && (
          <div className="welcome-message">
            <p>Enter a city name to get weather information</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App