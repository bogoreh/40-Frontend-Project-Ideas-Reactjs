import React from 'react'
import MusicCard from './MusicCard'

const RecommendationList = ({ recommendations }) => {
  if (recommendations.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">🎵</div>
        <h3>No music found</h3>
        <p>Try adjusting your search terms or genre filters</p>
      </div>
    )
  }

  return (
    <div className="recommendations-grid">
      {recommendations.map(music => (
        <MusicCard key={music.id} music={music} />
      ))}
    </div>
  )
}

export default RecommendationList