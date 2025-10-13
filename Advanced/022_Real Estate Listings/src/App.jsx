import { useState } from 'react'
import Header from './components/Header'
import SearchFilters from './components/SearchFilters'
import PropertyCard from './components/PropertyCard'
import { properties } from './data/properties'

function App() {
  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: [0, 1000000],
    bedrooms: 'any'
  })

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    
    const filtered = properties.filter(property => {
      const matchesType = newFilters.type === 'all' || property.type === newFilters.type
      const matchesPrice = property.price >= newFilters.priceRange[0] && property.price <= newFilters.priceRange[1]
      const matchesBedrooms = newFilters.bedrooms === 'any' || property.bedrooms >= parseInt(newFilters.bedrooms)
      
      return matchesType && matchesPrice && matchesBedrooms
    })
    
    setFilteredProperties(filtered)
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <SearchFilters onFilterChange={handleFilterChange} />
        <div className="properties-grid">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        {filteredProperties.length === 0 && (
          <div className="no-results">
            <h3>No properties found matching your criteria</h3>
            <p>Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App