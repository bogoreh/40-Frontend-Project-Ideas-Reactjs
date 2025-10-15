import React, { useState } from 'react'
import Header from './components/Header'
import VehicleList from './components/VehicleList'
import MapView from './components/MapView'
import { vehicles } from './data/mockData'

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [view, setView] = useState('list') // 'list' or 'map'

  return (
    <div className="app">
      <Header view={view} setView={setView} />
      
      <div className="main-content">
        {view === 'list' ? (
          <VehicleList 
            vehicles={vehicles} 
            selectedVehicle={selectedVehicle}
            onVehicleSelect={setSelectedVehicle}
          />
        ) : (
          <MapView 
            vehicles={vehicles}
            selectedVehicle={selectedVehicle}
            onVehicleSelect={setSelectedVehicle}
          />
        )}
      </div>
    </div>
  )
}

export default App