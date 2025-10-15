import React from 'react'

const Sidebar = ({ currentPage, onPageChange }) => {
  const menuItems = [
    { id: 'dashboard', icon: 'fas fa-home', label: 'Dashboard' },
    { id: 'profile', icon: 'fas fa-user', label: 'Profile' },
    { id: 'calendar', icon: 'fas fa-calendar', label: 'Schedule' },
    { id: 'assignments', icon: 'fas fa-tasks', label: 'Assignments' },
    { id: 'grades', icon: 'fas fa-chart-bar', label: 'Grades' },
  ]

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`sidebar-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => onPageChange(item.id)}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button className="sidebar-item">
          <i className="fas fa-cog"></i>
          <span>Settings</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar