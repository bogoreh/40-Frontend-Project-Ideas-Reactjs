import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AdminPanel from './components/Admin/AdminPanel'
import { portfolioData } from './data/portfolioData'
import './styles/globals.css'

function App() {
  const [data, setData] = useState(portfolioData)
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <div className="App">
      {!isAdmin ? (
        <>
          <Header onAdminClick={() => setIsAdmin(true)} />
          <Hero data={data.hero} />
          <About data={data.about} />
          <Projects data={data.projects} />
          <Contact data={data.contact} />
        </>
      ) : (
        <AdminPanel 
          data={data} 
          setData={setData} 
          onExit={() => setIsAdmin(false)} 
        />
      )}
    </div>
  )
}

export default App