import React from 'react'

const BMIResult = ({ bmi, category }) => {
  const getCategoryColor = () => {
    switch (category) {
      case 'Underweight':
        return '#3498db'
      case 'Normal weight':
        return '#27ae60'
      case 'Overweight':
        return '#f39c12'
      case 'Obesity':
        return '#e74c3c'
      default:
        return '#7f8c8d'
    }
  }

  return (
    <div className="bmi-result" style={{ borderColor: getCategoryColor() }}>
      <h3>Your BMI Result</h3>
      <div className="bmi-value" style={{ color: getCategoryColor() }}>
        {bmi.toFixed(1)}
      </div>
      <div className="bmi-category" style={{ color: getCategoryColor() }}>
        {category}
      </div>
    </div>
  )
}

export default BMIResult