import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe)
    setCurrentView('detail')
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedRecipe(null)
  }

  return (
    <div className="app">
      <Navbar onBackToHome={handleBackToHome} currentView={currentView} />
      {currentView === 'home' ? (
        <Home onRecipeSelect={handleRecipeSelect} />
      ) : (
        <RecipeDetail recipe={selectedRecipe} onBack={handleBackToHome} />
      )}
    </div>
  )
}

export default App