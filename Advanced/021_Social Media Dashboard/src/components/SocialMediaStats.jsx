import React from 'react'

const SocialMediaStats = ({ title, platform, count, change, darkMode }) => {
  const isPositive = change >= 0;
  
  const platformColors = {
    facebook: '#1877F2',
    twitter: '#1DA1F2',
    instagram: '#E4405F',
    youtube: '#FF0000'
  }

  return (
    <div className={`social-stats-card ${darkMode ? 'dark' : ''}`}>
      <div className="stats-header">
        <span className="stats-title">{title}</span>
        <div 
          className="platform-icon small"
          style={{ background: platformColors[platform] }}
        >
          {platform === 'facebook' && 'f'}
          {platform === 'twitter' && 't'}
          {platform === 'instagram' && 'i'}
          {platform === 'youtube' && 'y'}
        </div>
      </div>
      
      <div className="stats-body">
        <h3 className="stats-count">{count}</h3>
        <div className="stats-change">
          <span className={`change ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? '↑' : '↓'} {Math.abs(change)}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default SocialMediaStats