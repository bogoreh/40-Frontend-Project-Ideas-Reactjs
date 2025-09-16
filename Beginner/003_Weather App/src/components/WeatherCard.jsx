import WeatherDetails from './WeatherDetails'
import './WeatherCard.css'

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null

  const { name, main, weather, wind, sys } = weatherData
  const currentWeather = weather[0]

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">{name}, {sys.country}</h2>
        <p className="weather-description">{currentWeather.description}</p>
      </div>
      
      <div className="weather-main">
        <div className="temperature">
          {Math.round(main.temp)}°C
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
          alt={currentWeather.description}
          className="weather-icon"
        />
      </div>

      <WeatherDetails 
        humidity={main.humidity}
        windSpeed={wind.speed}
        feelsLike={main.feels_like}
        pressure={main.pressure}
      />
    </div>
  )
}

export default WeatherCard