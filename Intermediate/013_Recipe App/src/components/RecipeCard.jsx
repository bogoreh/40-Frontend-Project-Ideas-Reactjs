import React from 'react'

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={() => onClick(recipe)}>
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
        <div className="recipe-time">
          ⏱️ {recipe.cookingTime}
        </div>
      </div>
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-meta">
          <span className="difficulty">{recipe.difficulty}</span>
          <span className="category">{recipe.category}</span>
        </div>
        <div className="recipe-stats">
          <span>👤 {recipe.servings}</span>
          <span>⭐ {recipe.rating}</span>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard