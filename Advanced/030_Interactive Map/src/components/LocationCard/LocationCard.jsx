import React from 'react'
import './LocationCard.css'

const LocationCard = ({ location, onClose }) => {
  if (!location) return null

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < Math.floor(rating) ? 'filled' : ''}`}
      >
        {index < Math.floor(rating) ? '★' : '☆'}
      </span>
    ))
  }

  return (
    <div className="location-card-overlay" onClick={onClose}>
      <div className="location-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        
        <div className="card-image">
          <img src={location.image} alt={location.name} />
          <div className="image-overlay">
            <span className="location-type">{location.type}</span>
          </div>
        </div>
        
        <div className="card-content">
          <h2>{location.name}</h2>
          <div className="rating">
            {renderStars(location.rating)}
            <span className="rating-text">{location.rating}/5</span>
          </div>
          <p className="description">{location.description}</p>
          <div className="location-meta">
            <div className="meta-item">
              <span className="meta-label">Coordinates</span>
              <span className="meta-value">
                {location.coordinates.x}°N, {location.coordinates.y}°E
              </span>
            </div>
          </div>
        </div>
        
        <div className="card-actions">
          <button className="action-button primary">
            📍 View on Map
          </button>
          <button className="action-button secondary">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default LocationCard