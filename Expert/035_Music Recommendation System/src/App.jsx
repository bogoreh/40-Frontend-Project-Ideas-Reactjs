import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import RecommendationList from './components/RecommendationList'
import { musicData, getRecommendations } from './data/musicData'

function App() {
  const [recommendations, setRecommendations] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')

  useEffect(() => {
    setRecommendations(getRecommendations('', 'all'))
  }, [])

  const handleSearch = (term, genre) => {
    setSearchTerm(term)
    setSelectedGenre(genre)
    setRecommendations(getRecommendations(term, genre))
  }

  const genres = ['all', 'pop', 'rock', 'jazz', 'electronic', 'hiphop', 'classical']

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1 className="app-title">🎵 MelodyMatch</h1>
          <p className="app-subtitle">Discover your next favorite song</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <SearchBar 
            onSearch={handleSearch}
            genres={genres}
            selectedGenre={selectedGenre}
          />
          
          <div className="stats-bar">
            <span>Found {recommendations.length} recommendations</span>
            {searchTerm && <span>for "{searchTerm}"</span>}
            {selectedGenre !== 'all' && <span>in {selectedGenre}</span>}
          </div>

          <RecommendationList recommendations={recommendations} />
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2024 MelodyMatch. Discover your sound.</p>
        </div>
      </footer>
    </div>
  )
}

export default App