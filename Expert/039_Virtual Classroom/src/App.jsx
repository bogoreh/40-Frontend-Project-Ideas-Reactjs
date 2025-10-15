import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Classroom from './pages/Classroom'
import Profile from './pages/Profile'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [selectedClassroom, setSelectedClassroom] = useState(null)

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onClassroomSelect={setSelectedClassroom} onPageChange={setCurrentPage} />
      case 'classroom':
        return <Classroom classroom={selectedClassroom} onBack={() => setCurrentPage('dashboard')} />
      case 'profile':
        return <Profile onBack={() => setCurrentPage('dashboard')} />
      default:
        return <Dashboard onClassroomSelect={setSelectedClassroom} onPageChange={setCurrentPage} />
    }
  }

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

export default App