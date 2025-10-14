import React from 'react'

const WorkoutList = ({ workouts, onDeleteWorkout }) => {
  const getWorkoutIcon = (type) => {
    const icons = {
      cardio: '🏃',
      strength: '💪',
      yoga: '🧘',
      sports: '⚽',
      other: '🏋️'
    }
    return icons[type] || '🏋️'
  }

  if (workouts.length === 0) {
    return (
      <div className="workout-list">
        <h2>Workout History</h2>
        <div className="no-data">
          <p>No workouts recorded yet.</p>
          <p>Start by adding your first workout! 🏃‍♂️</p>
        </div>
      </div>
    )
  }

  return (
    <div className="workout-list">
      <h2>Workout History</h2>
      <div className="workouts-container">
        {workouts.map(workout => (
          <div key={workout.id} className="workout-item">
            <div className="workout-header">
              <div className="workout-type">
                <span className="workout-icon">
                  {getWorkoutIcon(workout.type)}
                </span>
                <span className="workout-type-text">
                  {workout.type.charAt(0).toUpperCase() + workout.type.slice(1)}
                </span>
              </div>
              <button
                onClick={() => onDeleteWorkout(workout.id)}
                className="delete-btn"
                title="Delete workout"
              >
                🗑️
              </button>
            </div>
            
            <div className="workout-stats">
              <div className="stat">
                <span className="stat-label">Duration:</span>
                <span className="stat-value">{workout.duration} min</span>
              </div>
              <div className="stat">
                <span className="stat-label">Calories:</span>
                <span className="stat-value">{workout.calories} cal</span>
              </div>
            </div>
            
            {workout.notes && (
              <div className="workout-notes">
                <p>{workout.notes}</p>
              </div>
            )}
            
            <div className="workout-date">
              {new Date(workout.date).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkoutList