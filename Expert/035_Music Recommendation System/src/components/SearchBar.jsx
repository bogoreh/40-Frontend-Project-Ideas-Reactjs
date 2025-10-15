import React, { useState } from 'react'

const SearchBar = ({ onSearch, genres, selectedGenre }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm, selectedGenre)
  }

  const handleGenreChange = (genre) => {
    onSearch(searchTerm, genre)
  }

  return (
    <div className="search-section">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            placeholder="Search for artists, songs, or albums..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            🔍 Search
          </button>
        </div>
      </form>

      <div className="genre-filters">
        <h3>Filter by Genre:</h3>
        <div className="genre-buttons">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => handleGenreChange(genre)}
              className={`genre-button ${selectedGenre === genre ? 'active' : ''}`}
            >
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchBar