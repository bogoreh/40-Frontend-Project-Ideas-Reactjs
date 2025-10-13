import React from 'react'

const Chart = ({ data }) => {
  // Simple SVG chart for demonstration
  const chartPoints = data.map((point, index) => {
    const x = (index / (data.length - 1)) * 300
    const y = 150 - (point.price - Math.min(...data.map(d => d.price))) / 
              (Math.max(...data.map(d => d.price)) - Math.min(...data.map(d => d.price))) * 100
    return `${x},${y}`
  }).join(' ')

  return (
    <div className="chart">
      <h3 className="chart__title">Stock Performance</h3>
      <div className="chart__container">
        <svg width="100%" height="200" viewBox="0 0 300 150">
          <polyline
            fill="none"
            stroke="var(--accent-color)"
            strokeWidth="2"
            points={chartPoints}
          />
          <line
            x1="0"
            y1="150"
            x2="300"
            y2="150"
            stroke="var(--border-color)"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  )
}

export default Chart