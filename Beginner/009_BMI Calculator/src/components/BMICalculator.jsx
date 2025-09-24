import React, { useState } from 'react'
import { calculateBMI, getBMICategory } from '../utils/bmiCalculator'
import BMIResult from './BMIResult'
import InputField from './InputField'
import '../styles/BMICalculator.css'

const BMICalculator = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [unit, setUnit] = useState('metric') // 'metric' or 'imperial'
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState('')

  const handleCalculate = () => {
    if (!height || !weight) {
      alert('Please enter both height and weight')
      return
    }

    const calculatedBMI = calculateBMI(height, weight, unit)
    const bmiCategory = getBMICategory(calculatedBMI)
    
    setBmi(calculatedBMI)
    setCategory(bmiCategory)
  }

  const handleReset = () => {
    setHeight('')
    setWeight('')
    setBmi(null)
    setCategory('')
  }

  return (
    <div className="bmi-calculator">
      <div className="unit-toggle">
        <label>
          <input
            type="radio"
            value="metric"
            checked={unit === 'metric'}
            onChange={(e) => setUnit(e.target.value)}
          />
          Metric (kg, cm)
        </label>
        <label>
          <input
            type="radio"
            value="imperial"
            checked={unit === 'imperial'}
            onChange={(e) => setUnit(e.target.value)}
          />
          Imperial (lbs, inches)
        </label>
      </div>

      <div className="input-fields">
        <InputField
          label={unit === 'metric' ? 'Height (cm)' : 'Height (inches)'}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder={unit === 'metric' ? 'Enter height in cm' : 'Enter height in inches'}
        />
        
        <InputField
          label={unit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder={unit === 'metric' ? 'Enter weight in kg' : 'Enter weight in lbs'}
        />
      </div>

      <div className="buttons">
        <button onClick={handleCalculate} className="calculate-btn">
          Calculate BMI
        </button>
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </div>

      {bmi && <BMIResult bmi={bmi} category={category} />}
    </div>
  )
}

export default BMICalculator