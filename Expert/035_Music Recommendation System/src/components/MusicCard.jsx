import React from 'react'

const MusicCard = ({ music }) => {
  const getPopularityStars = (popularity) => {
    const stars = '★'.repeat(Math.floor(popularity / 20))
    return stars
  }

  return (
    <div className="music-card">
      <div className="music-image">
        <div className="image-placeholder">
          {music.emoji}
        </div>
      </div>
      
      <div className="music-info">
        <h3 className="music-title">{music.title}</h3>
        <p className="music-artist">{music.artist}</p>
        <p className="music-album">Album: {music.album}</p>
        
        <div className="music-meta">
          <span className={`genre-tag genre-${music.genre}`}>
            {music.genre}
          </span>
          <span className="music-year">{music.year}</span>
        </div>
        
        <div className="music-stats">
          <span className="popularity">
            {getPopularityStars(music.popularity)}
            <span className="popularity-text">({music.popularity}%)</span>
          </span>
          <span className="duration">{music.duration}</span>
        </div>
        
        <div className="music-features">
          <span className="feature">Energy: {music.features.energy}%</span>
          <span className="feature">Dance: {music.features.danceability}%</span>
        </div>
      </div>
      
      <button className="play-button">
        ▶ Play
      </button>
    </div>
  )
}

export default MusicCard