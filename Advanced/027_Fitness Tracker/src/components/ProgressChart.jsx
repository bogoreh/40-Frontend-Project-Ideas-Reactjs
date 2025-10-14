import React from 'react'

const ProgressChart = ({ workouts }) => {
  const getLast7Days = () => {
    const days = []
    for (let i = 6; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      days.push(date.toLocaleDateString('en-US', { weekday: 'short' }))
    }
    return days
  }

  const getWeeklyData = () => {
    const last7Days = getLast7Days()
    const dailyData = {}
    
    last7Days.forEach(day => {
      dailyData[day] = { calories: 0, duration: 0, count: 0 }
    })

    workouts.forEach(workout => {
      const workoutDate = new Date(workout.date)
      const dayName = workoutDate.toLocaleDateString('en-US', { weekday: 'short' })
      const today = new Date()
      const diffTime = Math.abs(today - workoutDate)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      if (diffDays <= 7) {
        dailyData[dayName].calories += workout.calories
        dailyData[dayName].duration += workout.duration
        dailyData[dayName].count += 1
      }
    })

    return dailyData
  }

  const weeklyData = getWeeklyData()
  const days = getLast7Days()

  const maxCalories = Math.max(...Object.values(weeklyData).map(d => d.calories), 100)

  return (
    <div className="progress-chart">
      <h2>Weekly Progress</h2>
      
      <div className="chart-container">
        <div className="chart">
          {days.map(day => {
            const data = weeklyData[day]
            const height = (data.calories / maxCalories) * 150
            
            return (
              <div key={day} className="chart-bar-container">
                <div className="chart-bar" style={{ height: `${height}px` }}>
                  <div className="chart-value">{data.calories}</div>
                </div>
                <div className="chart-label">{day}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="progress-stats">
        <div className="progress-stat">
          <h3>This Week</h3>
          <div className="stat-grid">
            <div className="stat-item">
              <span className="stat-number">
                {Object.values(weeklyData).reduce((sum, day) => sum + day.count, 0)}
              </span>
              <span className="stat-desc">Workouts</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {Object.values(weeklyData).reduce((sum, day) => sum + day.calories, 0)}
              </span>
              <span className="stat-desc">Calories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {Object.values(weeklyData).reduce((sum, day) => sum + day.duration, 0)}
              </span>
              <span className="stat-desc">Minutes</span>
            </div>
          </div>
        </div>
      </div>

      {workouts.length === 0 && (
        <div className="no-data">
          <p>No data to show. Start tracking your workouts! 📊</p>
        </div>
      )}
    </div>
  )
}

export default ProgressChart