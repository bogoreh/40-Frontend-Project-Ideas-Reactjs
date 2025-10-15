import React from 'react'
import VehicleCard from './VehicleCard'

const VehicleList = ({ vehicles, selectedVehicle, onVehicleSelect }) => {
  return (
    <div className="vehicle-list">
      <div className="list-header">
        <h2>Fleet Overview</h2>
        <span className="vehicle-count">{vehicles.length} vehicles</span>
      </div>
      
      <div className="vehicles-grid">
        {vehicles.map(vehicle => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            isSelected={selectedVehicle?.id === vehicle.id}
            onSelect={onVehicleSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default VehicleList