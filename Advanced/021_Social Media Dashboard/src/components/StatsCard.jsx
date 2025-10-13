import React from 'react'

const StatsCard = ({ platform, username, followers, change, type, darkMode }) => {
  const isPositive = change >= 0;
  
  const platformColors = {
    facebook: '#1877F2',
    twitter: '#1DA1F2',
    instagram: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    youtube: '#FF0000'
  }

  return (
    <div className={`stats-card ${darkMode ? 'dark' : ''}`}>
      <div className="card-border" style={{ background: platformColors[platform] }}></div>
      <div className="card-header">
        <div 
          className="platform-icon"
          style={{ 
            background: platform === 'instagram' 
              ? platformColors[platform] 
              : platformColors[platform] 
          }}
        >
          {platform === 'facebook' && 'f'}
          {platform === 'twitter' && 't'}
          {platform === 'instagram' && 'i'}
          {platform === 'youtube' && 'y'}
        </div>
        <span className="username">{username}</span>
      </div>
      
      <div className="card-body">
        <h3 className="followers-count">{followers}</h3>
        <p className="followers-text">{type}</p>
      </div>
      
      <div className="card-footer">
        <span className={`change ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '↑' : '↓'} {Math.abs(change)} Today
        </span>
      </div>
    </div>
  )
}

export default StatsCard