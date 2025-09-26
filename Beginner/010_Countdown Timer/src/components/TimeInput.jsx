import React, { useState } from 'react'

const TimeInput = ({ onTimeSet }) => {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const handleSetTime = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds
    if (totalSeconds > 0) {
      onTimeSet(totalSeconds)
    }
  }

  return (
    <div className="time-input">
      <h3>Set Countdown Time</h3>
      <div className="input-group">
        <div className="input-field">
          <label>Hours</label>
          <input
            type="number"
            min="0"
            max="23"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value) || 0)}
          />
        </div>
        <div className="input-field">
          <label>Minutes</label>
          <input
            type="number"
            min="0"
            max="59"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
          />
        </div>
        <div className="input-field">
          <label>Seconds</label>
          <input
            type="number"
            min="0"
            max="59"
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value) || 0)}
          />
        </div>
      </div>
      <button onClick={handleSetTime} className="set-time-btn">
        Set Time
      </button>
    </div>
  )
}

export default TimeInput