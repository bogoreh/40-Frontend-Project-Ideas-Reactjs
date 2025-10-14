import React from 'react'
import './Map.css'

const Map = ({ locations, onLocationClick, selectedLocation }) => {
  // Simple SVG-based world map with clickable markers
  const handleMarkerClick = (location) => {
    onLocationClick(location)
  }

  return (
    <div className="map">
      <svg viewBox="0 0 800 400" className="world-map">
        {/* Simplified world map outline */}
        <path
          d="M100,200 Q200,150 300,200 Q400,250 500,200 Q600,150 700,200 L700,300 Q600,350 500,300 Q400,250 300,300 Q200,350 100,300 Z"
          fill="#e3f2fd"
          stroke="#90caf9"
          strokeWidth="2"
        />
        
        {/* Markers */}
        {locations.map((location) => (
          <g
            key={location.id}
            className={`marker ${selectedLocation?.id === location.id ? 'active' : ''}`}
            onClick={() => handleMarkerClick(location)}
            style={{ cursor: 'pointer' }}
          >
            <circle
              cx={location.coordinates.x / 90 * 800}
              cy={200 - (location.coordinates.y / 90 * 200)}
              r="8"
              fill={selectedLocation?.id === location.id ? "#ff6b6b" : "#667eea"}
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx={location.coordinates.x / 90 * 800}
              cy={200 - (location.coordinates.y / 90 * 200)}
              r="12"
              fill="transparent"
              stroke={selectedLocation?.id === location.id ? "#ff6b6b" : "#667eea"}
              strokeWidth="2"
              className="pulse"
            />
          </g>
        ))}
      </svg>
      
      <div className="map-legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#667eea' }}></div>
          <span>Location</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#ff6b6b' }}></div>
          <span>Selected</span>
        </div>
      </div>
    </div>
  )
}

export default Map