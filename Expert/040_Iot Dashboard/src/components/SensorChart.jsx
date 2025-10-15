import React from 'react';

const SensorChart = ({ data }) => {
  const maxValue = Math.max(...data.temperature, ...data.humidity, ...data.power);
  const chartHeight = 120;

  const getYPosition = (value) => {
    return chartHeight - (value / maxValue) * chartHeight;
  };

  return (
    <div className="sensor-chart">
      <h3>Sensor Data Overview</h3>
      <div className="chart-container">
        <svg width="100%" height={chartHeight + 30} className="chart-svg">
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => (
            <line
              key={index}
              x1="0"
              y1={chartHeight * ratio}
              x2="100%"
              y2={chartHeight * ratio}
              stroke="#E5E7EB"
              strokeWidth="1"
            />
          ))}
          
          {/* Temperature line */}
          <polyline
            fill="none"
            stroke="#EF4444"
            strokeWidth="2"
            points={data.temperature.map((temp, index) => 
              `${(index * 100) / (data.temperature.length - 1)},${getYPosition(temp)}`
            ).join(' ')}
          />
          
          {/* Humidity line */}
          <polyline
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            points={data.humidity.map((hum, index) => 
              `${(index * 100) / (data.humidity.length - 1)},${getYPosition(hum)}`
            ).join(' ')}
          />
          
          {/* Power line */}
          <polyline
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            points={data.power.map((power, index) => 
              `${(index * 100) / (data.power.length - 1)},${getYPosition(power)}`
            ).join(' ')}
          />
          
          {/* Labels */}
          {data.labels.map((label, index) => (
            <text
              key={index}
              x={`${(index * 100) / (data.labels.length - 1)}%`}
              y={chartHeight + 20}
              textAnchor="middle"
              fontSize="10"
              fill="#6B7280"
            >
              {label}
            </text>
          ))}
        </svg>
      </div>
      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-color temperature"></div>
          <span>Temperature (°C)</span>
        </div>
        <div className="legend-item">
          <div className="legend-color humidity"></div>
          <span>Humidity (%)</span>
        </div>
        <div className="legend-item">
          <div className="legend-color power"></div>
          <span>Power (W)</span>
        </div>
      </div>
    </div>
  );
};

export default SensorChart;