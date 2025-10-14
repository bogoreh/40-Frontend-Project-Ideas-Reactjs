import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Dashboard from './pages/Dashboard'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedCourse, setSelectedCourse] = useState(null)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} onSelectCourse={setSelectedCourse} />
      case 'courses':
        return <Courses onNavigate={setCurrentPage} onSelectCourse={setSelectedCourse} />
      case 'course-detail':
        return <CourseDetail course={selectedCourse} onNavigate={setCurrentPage} />
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />
      default:
        return <Home onNavigate={setCurrentPage} onSelectCourse={setSelectedCourse} />
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  )
}

export default App