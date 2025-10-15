import React from 'react'

const MapView = ({ vehicles, selectedVehicle, onVehicleSelect }) => {
  // Simple map simulation with vehicle markers
  return (
    <div className="map-view">
      <div className="map-container">
        <div className="map-background">
          {/* This would be your actual map component (Google Maps, Leaflet, etc.) */}
          <div className="simple-map">
            {vehicles.map(vehicle => (
              <div
                key={vehicle.id}
                className={`map-marker ${vehicle.status} ${
                  selectedVehicle?.id === vehicle.id ? 'selected' : ''
                }`}
                style={{
                  left: `${vehicle.position.x}%`,
                  top: `${vehicle.position.y}%`
                }}
                onClick={() => onVehicleSelect(vehicle)}
              >
                <div className="marker-icon">🚗</div>
                <div className="marker-info">
                  <strong>{vehicle.name}</strong>
                  <span>{vehicle.speed} km/h</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedVehicle && (
        <div className="map-sidebar">
          <div className="sidebar-header">
            <h3>Vehicle Details</h3>
            <button onClick={() => onVehicleSelect(null)}>✕</button>
          </div>
          <div className="sidebar-content">
            <h4>{selectedVehicle.name}</h4>
            <p><strong>Driver:</strong> {selectedVehicle.driver}</p>
            <p><strong>Location:</strong> {selectedVehicle.location}</p>
            <p><strong>Status:</strong> {selectedVehicle.status}</p>
            <p><strong>Speed:</strong> {selectedVehicle.speed} km/h</p>
            <p><strong>Fuel:</strong> {selectedVehicle.fuel}%</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default MapView