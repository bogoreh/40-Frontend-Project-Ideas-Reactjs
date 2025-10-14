import React, { useState } from 'react'

const WorkoutForm = ({ onAddWorkout }) => {
  const [formData, setFormData] = useState({
    type: 'cardio',
    duration: '',
    calories: '',
    notes: ''
  })

  const workoutTypes = [
    { value: 'cardio', label: 'Cardio', icon: '🏃' },
    { value: 'strength', label: 'Strength', icon: '💪' },
    { value: 'yoga', label: 'Yoga', icon: '🧘' },
    { value: 'sports', label: 'Sports', icon: '⚽' },
    { value: 'other', label: 'Other', icon: '🏋️' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.duration && formData.calories) {
      onAddWorkout({
        ...formData,
        duration: parseInt(formData.duration),
        calories: parseInt(formData.calories)
      })
      setFormData({
        type: 'cardio',
        duration: '',
        calories: '',
        notes: ''
      })
      alert('Workout added successfully! 🎉')
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="workout-form">
      <h2>Add New Workout</h2>
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Workout Type</label>
          <div className="type-selector">
            {workoutTypes.map(type => (
              <label key={type.value} className="type-option">
                <input
                  type="radio"
                  name="type"
                  value={type.value}
                  checked={formData.type === type.value}
                  onChange={handleChange}
                />
                <div className="type-card">
                  <span className="type-icon">{type.icon}</span>
                  <span>{type.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Duration (minutes)</label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 30"
              min="1"
              required
            />
          </div>

          <div className="form-group">
            <label>Calories Burned</label>
            <input
              type="number"
              name="calories"
              value={formData.calories}
              onChange={handleChange}
              placeholder="e.g., 300"
              min="1"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Notes (Optional)</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any additional notes about your workout..."
            rows="3"
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Workout 🏋️
        </button>
      </form>
    </div>
  )
}

export default WorkoutForm