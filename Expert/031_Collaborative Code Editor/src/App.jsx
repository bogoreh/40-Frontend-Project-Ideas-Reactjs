import React, { useState } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Editor from './components/Editor/Editor'
import UserList from './components/UserList/UserList'
import './styles/App.css'

function App() {
  const [code, setCode] = useState('// Welcome to Collaborative Code Editor\nconsole.log("Hello, World!");')
  const [language, setLanguage] = useState('javascript')
  const [theme, setTheme] = useState('dark')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className={`app ${theme}`}>
      <Header 
        theme={theme}
        setTheme={setTheme}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      
      <div className="app-content">
        {isSidebarOpen && (
          <Sidebar 
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            setTheme={setTheme}
          />
        )}
        
        <div className="editor-container">
          <Editor 
            code={code}
            setCode={setCode}
            language={language}
            theme={theme}
          />
        </div>
        
        <UserList />
      </div>
    </div>
  )
}

export default App