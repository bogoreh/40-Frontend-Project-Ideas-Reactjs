import React from 'react'

const Header = ({ view, setView }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">
          <i className="icon">🚗</i>
          Vehicle Tracker
        </h1>
        
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${view === 'list' ? 'active' : ''}`}
            onClick={() => setView('list')}
          >
            <i>📋</i> List View
          </button>
          <button 
            className={`toggle-btn ${view === 'map' ? 'active' : ''}`}
            onClick={() => setView('map')}
          >
            <i>🗺️</i> Map View
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header