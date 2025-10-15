import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <i className="fas fa-chalkboard-teacher"></i>
          <span>Virtual Classroom</span>
        </div>
        <div className="header-actions">
          <button className="notification-btn">
            <i className="fas fa-bell"></i>
          </button>
          <div className="user-profile">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
              alt="Profile" 
              className="profile-pic"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header