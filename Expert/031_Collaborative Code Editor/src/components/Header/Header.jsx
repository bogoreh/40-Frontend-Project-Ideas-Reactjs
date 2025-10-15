import React from 'react'
import { Code2, Menu, Moon, Sun } from 'lucide-react'
import './Header.css'

const Header = ({ theme, setTheme, isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className={`header ${theme}`}>
      <div className="header-left">
        <button 
          className="menu-button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu size={20} />
        </button>
        
        <div className="logo">
          <Code2 className="logo-icon" />
          <span>CollabEditor</span>
        </div>
      </div>
      
      <div className="header-center">
        <h1>Collaborative Code Editor</h1>
      </div>
      
      <div className="header-right">
        <button 
          className="theme-toggle"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        
        <div className="room-info">
          <span>Room: DevTeam</span>
        </div>
      </div>
    </header>
  )
}

export default Header