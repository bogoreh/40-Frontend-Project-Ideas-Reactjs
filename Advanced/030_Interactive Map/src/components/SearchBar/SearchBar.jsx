import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)
    onSearch(value)
  }

  const handleClear = () => {
    setInputValue('')
    onSearch('')
  }

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search locations by name or type..."
          value={inputValue}
          onChange={handleInputChange}
          className="search-input"
        />
        {inputValue && (
          <button onClick={handleClear} className="clear-button">
            ✕
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar