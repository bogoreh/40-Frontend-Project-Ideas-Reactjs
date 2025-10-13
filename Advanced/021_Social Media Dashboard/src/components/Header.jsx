import React from 'react'

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-info">
          <h1 className="header-title">Social Media Dashboard</h1>
          <p className="header-subtitle">Total Followers: 23,004</p>
        </div>
        <div className="theme-toggle">
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </header>
  )
}

export default Header