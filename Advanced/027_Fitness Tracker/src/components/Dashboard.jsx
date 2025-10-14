import React from 'react'

const Dashboard = ({ workouts }) => {
  const totalWorkouts = workouts.length
  const totalCalories = workouts.reduce((sum, workout) => sum + workout.calories, 0)
  const totalDuration = workouts.reduce((sum, workout) => sum + workout.duration, 0)
  
  const recentWorkouts = workouts.slice(0, 3)

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🏋️</div>
          <div className="stat-info">
            <h3>{totalWorkouts}</h3>
            <p>Total Workouts</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🔥</div>
          <div className="stat-info">
            <h3>{totalCalories}</h3>
            <p>Calories Burned</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-info">
            <h3>{totalDuration}</h3>
            <p>Total Minutes</p>
          </div>
        </div>
      </div>

      <div className="recent-workouts">
        <h3>Recent Workouts</h3>
        {recentWorkouts.length > 0 ? (
          <div className="workout-cards">
            {recentWorkouts.map(workout => (
              <div key={workout.id} className="workout-card">
                <div className="workout-type">{workout.type}</div>
                <div className="workout-details">
                  <span>Duration: {workout.duration}min</span>
                  <span>Calories: {workout.calories}</span>
                </div>
                <div className="workout-date">
                  {new Date(workout.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-data">No workouts yet. Start by adding your first workout!</p>
        )}
      </div>
    </div>
  )
}

export default Dashboard