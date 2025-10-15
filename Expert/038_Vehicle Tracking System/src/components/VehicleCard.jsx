import React from 'react'

const VehicleCard = ({ vehicle, isSelected, onSelect }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#10b981'
      case 'idle': return '#f59e0b'
      case 'maintenance': return '#ef4444'
      default: return '#6b7280'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return '🟢'
      case 'idle': return '🟡'
      case 'maintenance': return '🔴'
      default: return '⚫'
    }
  }

  return (
    <div 
      className={`vehicle-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(vehicle)}
    >
      <div className="card-header">
        <div className="vehicle-info">
          <h3 className="vehicle-name">{vehicle.name}</h3>
          <span className="vehicle-type">{vehicle.type}</span>
        </div>
        <div className="status-indicator">
          <span 
            className="status-dot"
            style={{ backgroundColor: getStatusColor(vehicle.status) }}
          ></span>
          <span className="status-text">{vehicle.status}</span>
        </div>
      </div>

      <div className="card-content">
        <div className="info-row">
          <span className="label">Driver:</span>
          <span className="value">{vehicle.driver}</span>
        </div>
        <div className="info-row">
          <span className="label">Location:</span>
          <span className="value">{vehicle.location}</span>
        </div>
        <div className="info-row">
          <span className="label">Speed:</span>
          <span className="value">{vehicle.speed} km/h</span>
        </div>
        <div className="info-row">
          <span className="label">Last Update:</span>
          <span className="value">{vehicle.lastUpdate}</span>
        </div>
      </div>

      <div className="card-footer">
        <div className="metrics">
          <div className="metric">
            <span className="metric-value">{vehicle.fuel}%</span>
            <span className="metric-label">Fuel</span>
          </div>
          <div className="metric">
            <span className="metric-value">{vehicle.mileage}</span>
            <span className="metric-label">Mileage</span>
          </div>
        </div>
        <div className="status-icon">
          {getStatusIcon(vehicle.status)}
        </div>
      </div>
    </div>
  )
}

export default VehicleCard