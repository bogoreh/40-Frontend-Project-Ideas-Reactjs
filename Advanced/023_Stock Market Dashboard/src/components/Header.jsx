import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">
          📈 Stock Market Dashboard
        </h1>
        <div className="header__info">
          <span className="current-time">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header