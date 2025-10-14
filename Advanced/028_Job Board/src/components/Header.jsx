import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>JobBoard</h1>
            <span>Find Your Dream Job</span>
          </div>
          <nav className="nav">
            <a href="#jobs">Jobs</a>
            <a href="#companies">Companies</a>
            <a href="#about">About</a>
            <button className="btn-primary">Post a Job</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header