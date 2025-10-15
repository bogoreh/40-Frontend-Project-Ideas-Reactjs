import React from 'react'
import { FileCode, Settings, Users, Share2 } from 'lucide-react'
import './Sidebar.css'

const Sidebar = ({ language, setLanguage, theme, setTheme }) => {
  const languages = [
    'javascript', 'typescript', 'python', 'java', 'cpp', 
    'html', 'css', 'php', 'ruby', 'go'
  ]

  const files = [
    { name: 'main.js', type: 'javascript' },
    { name: 'styles.css', type: 'css' },
    { name: 'index.html', type: 'html' },
    { name: 'utils.py', type: 'python' }
  ]

  return (
    <aside className={`sidebar ${theme}`}>
      <div className="sidebar-section">
        <h3>
          <FileCode size={18} />
          Files
        </h3>
        <div className="file-list">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <FileCode size={14} />
              <span>{file.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h3>
          <Settings size={18} />
          Settings
        </h3>
        
        <div className="setting-group">
          <label>Language</label>
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className="setting-select"
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="setting-group">
          <label>Theme</label>
          <select 
            value={theme} 
            onChange={(e) => setTheme(e.target.value)}
            className="setting-select"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
      </div>

      <div className="sidebar-section">
        <h3>
          <Share2 size={18} />
          Share
        </h3>
        <button className="share-button">
          Copy Room Link
        </button>
      </div>
    </aside>
  )
}

export default Sidebar