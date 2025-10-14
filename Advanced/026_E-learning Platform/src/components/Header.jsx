import React from 'react'

const Header = ({ currentPage, onNavigate }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo" onClick={() => onNavigate('home')}>
          <span className="logo-icon">🎓</span>
          <span className="logo-text">EduLearn</span>
        </div>
        
        <nav className="nav">
          <button 
            className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
          <button 
            className={`nav-item ${currentPage === 'courses' ? 'active' : ''}`}
            onClick={() => onNavigate('courses')}
          >
            Courses
          </button>
          <button 
            className={`nav-item ${currentPage === 'dashboard' ? 'active' : ''}`}
            onClick={() => onNavigate('dashboard')}
          >
            My Learning
          </button>
        </nav>

        <div className="header-actions">
          <button className="btn-outline">Sign In</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </div>
    </header>
  )
}

export default Header