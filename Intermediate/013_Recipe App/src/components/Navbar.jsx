import React from 'react'

const Navbar = ({ onBackToHome, currentView }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">🍳 RecipeMaster</h1>
        {currentView === 'detail' && (
          <button className="back-button" onClick={onBackToHome}>
            ← Back to Recipes
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar