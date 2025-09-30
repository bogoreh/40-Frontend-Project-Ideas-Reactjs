import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import RecipeCard from '../components/RecipeCard'
import { recipes } from '../data/recipes'

const Home = ({ onRecipeSelect }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...new Set(recipes.map(recipe => recipe.category))]

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Discover Amazing Recipes</h1>
        <p>Find your next favorite dish from our curated collection</p>
      </div>

      <div className="filters-section">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="recipes-grid">
        {filteredRecipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onClick={onRecipeSelect}
          />
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="no-results">
          <h3>No recipes found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}

export default Home