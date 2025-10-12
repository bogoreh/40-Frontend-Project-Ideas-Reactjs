const WeatherCard = ({ weather }) => {
  if (!weather) return null

  const { name, main, weather: weatherInfo, wind } = weather
  const { temp, humidity, feels_like } = main
  const { description, icon } = weatherInfo[0]

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-main">
        <img 
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
          alt={description}
        />
        <div className="temperature">{Math.round(temp)}°C</div>
      </div>
      <div className="weather-description">{description}</div>
      <div className="weather-details">
        <div className="detail">
          <span>Feels like:</span>
          <span>{Math.round(feels_like)}°C</span>
        </div>
        <div className="detail">
          <span>Humidity:</span>
          <span>{humidity}%</span>
        </div>
        <div className="detail">
          <span>Wind:</span>
          <span>{wind.speed} m/s</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard