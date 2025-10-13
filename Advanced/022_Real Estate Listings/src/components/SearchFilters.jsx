import { useState } from 'react'

function SearchFilters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: [0, 1000000],
    bedrooms: 'any'
  })

  const handleTypeChange = (type) => {
    const newFilters = { ...filters, type }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handlePriceChange = (min, max) => {
    const newFilters = { ...filters, priceRange: [min, max] }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleBedroomsChange = (bedrooms) => {
    const newFilters = { ...filters, bedrooms }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="filters">
      <div className="filter-group">
        <h3>Property Type</h3>
        <div className="filter-buttons">
          {['all', 'house', 'apartment', 'condo'].map(type => (
            <button
              key={type}
              className={`filter-btn ${filters.type === type ? 'active' : ''}`}
              onClick={() => handleTypeChange(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3>Price Range</h3>
        <div className="price-inputs">
          <input
            type="number"
            placeholder="Min"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange[1])}
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(filters.priceRange[0], Number(e.target.value))}
          />
        </div>
      </div>

      <div className="filter-group">
        <h3>Bedrooms</h3>
        <div className="filter-buttons">
          {['any', '1', '2', '3', '4+'].map(bedrooms => (
            <button
              key={bedrooms}
              className={`filter-btn ${filters.bedrooms === bedrooms ? 'active' : ''}`}
              onClick={() => handleBedroomsChange(bedrooms)}
            >
              {bedrooms === 'any' ? 'Any' : `${bedrooms} ${bedrooms === '4+' ? '' : '+'}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchFilters