import React from 'react'

const RecipeDetail = ({ recipe, onBack }) => {
  if (!recipe) return null

  return (
    <div className="recipe-detail">
      <div className="detail-header">
        <img src={recipe.image} alt={recipe.title} className="detail-image" />
        <div className="detail-overlay">
          <h1>{recipe.title}</h1>
          <p className="detail-description">{recipe.description}</p>
          <div className="detail-meta">
            <span>⏱️ {recipe.cookingTime}</span>
            <span>👤 {recipe.servings}</span>
            <span>📊 {recipe.difficulty}</span>
            <span>⭐ {recipe.rating}</span>
          </div>
        </div>
      </div>

      <div className="detail-content">
        <div className="ingredients-section">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="instructions-section">
          <h2>Instructions</h2>
          <ol className="instructions-list">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>

        <div className="nutrition-section">
          <h2>Nutrition Information</h2>
          <div className="nutrition-grid">
            <div className="nutrition-item">
              <span className="nutrition-value">{recipe.nutrition.calories}</span>
              <span className="nutrition-label">Calories</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-value">{recipe.nutrition.protein}g</span>
              <span className="nutrition-label">Protein</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-value">{recipe.nutrition.carbs}g</span>
              <span className="nutrition-label">Carbs</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-value">{recipe.nutrition.fat}g</span>
              <span className="nutrition-label">Fat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail