import React, { useState } from 'react'
import Header from './components/Header'
import StatsCard from './components/StatsCard'
import RecentActivity from './components/RecentActivity'
import SocialMediaStats from './components/SocialMediaStats'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode')
  }

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="dashboard">
        <div className="stats-grid">
          <StatsCard 
            platform="facebook"
            username="@nathanf"
            followers="1987"
            change={12}
            type="followers"
            darkMode={darkMode}
          />
          <StatsCard 
            platform="twitter"
            username="@nathanf"
            followers="1044"
            change={99}
            type="followers"
            darkMode={darkMode}
          />
          <StatsCard 
            platform="instagram"
            username="@realnathanf"
            followers="11k"
            change={1099}
            type="followers"
            darkMode={darkMode}
          />
          <StatsCard 
            platform="youtube"
            username="Nathan F."
            followers="8239"
            change={-144}
            type="subscribers"
            darkMode={darkMode}
          />
        </div>
        
        <h2 className="section-title">Overview - Today</h2>
        
        <div className="overview-grid">
          <SocialMediaStats 
            title="Page Views"
            platform="facebook"
            count="87"
            change={3}
            darkMode={darkMode}
          />
          <SocialMediaStats 
            title="Likes"
            platform="facebook"
            count="52"
            change={-2}
            darkMode={darkMode}
          />
          <SocialMediaStats 
            title="Likes"
            platform="instagram"
            count="5462"
            change={2257}
            darkMode={darkMode}
          />
          <SocialMediaStats 
            title="Profile Views"
            platform="instagram"
            count="52k"
            change={1375}
            darkMode={darkMode}
          />
          <SocialMediaStats 
            title="Retweets"
            platform="twitter"
            count="117"
            change={303}
            darkMode={darkMode}
          />
          <SocialMediaStats 
            title="Likes"
            platform="twitter"
            count="507"
            change={553}
            darkMode={darkMode}
          />
          <SocialMediaStats 
            title="Likes"
            platform="youtube"
            count="107"
            change={-19}
            darkMode={darkMode}
          />
          <SocialMediaStats 
            title="Total Views"
            platform="youtube"
            count="1407"
            change={-12}
            darkMode={darkMode}
          />
        </div>

        <RecentActivity darkMode={darkMode} />
      </main>
    </div>
  )
}

export default App