import './WeatherDetails.css'

const WeatherDetails = ({ humidity, windSpeed, feelsLike, pressure }) => {
  return (
    <div className="weather-details">
      <h3 className="details-title">Weather Details</h3>
      <div className="details-grid">
        <div className="detail-item">
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">{Math.round(feelsLike)}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{windSpeed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{pressure} hPa</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherDetails