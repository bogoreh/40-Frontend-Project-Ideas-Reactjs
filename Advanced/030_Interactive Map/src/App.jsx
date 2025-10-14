import React, { useState } from 'react'
import Map from './components/Map/Map'
import SearchBar from './components/SearchBar/SearchBar'
import LocationCard from './components/LocationCard/LocationCard'
import { locations } from './data/locations'
import './App.css'

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [filteredLocations, setFilteredLocations] = useState(locations)
  const [searchTerm, setSearchTerm] = useState('')

  const handleLocationClick = (location) => {
    setSelectedLocation(location)
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term.trim() === '') {
      setFilteredLocations(locations)
    } else {
      const filtered = locations.filter(location =>
        location.name.toLowerCase().includes(term.toLowerCase()) ||
        location.type.toLowerCase().includes(term.toLowerCase())
      )
      setFilteredLocations(filtered)
    }
  }

  const handleCloseCard = () => {
    setSelectedLocation(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌍 Interactive World Map</h1>
        <p>Click on markers to explore amazing places around the world</p>
      </header>

      <div className="app-content">
        <div className="search-section">
          <SearchBar onSearch={handleSearch} />
          <div className="search-info">
            Showing {filteredLocations.length} locations
            {searchTerm && ` for "${searchTerm}"`}
          </div>
        </div>

        <div className="map-container">
          <Map
            locations={filteredLocations}
            onLocationClick={handleLocationClick}
            selectedLocation={selectedLocation}
          />
        </div>

        {selectedLocation && (
          <LocationCard
            location={selectedLocation}
            onClose={handleCloseCard}
          />
        )}
      </div>
    </div>
  )
}

export default App