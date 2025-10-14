import React from 'react'

const Header = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'add', label: 'Add Workout', icon: '➕' },
    { id: 'history', label: 'History', icon: '📝' },
    { id: 'progress', label: 'Progress', icon: '📈' }
  ]

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">
          💪 Fitness Tracker
        </h1>
        <nav className="nav">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="nav-icon">{tab.icon}</span>
              <span className="nav-label">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header