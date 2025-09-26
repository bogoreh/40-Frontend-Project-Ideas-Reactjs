import React from 'react'

const TimerControls = ({ isRunning, onStart, onPause, onReset, timeLeft }) => {
  return (
    <div className="timer-controls">
      {!isRunning ? (
        <button 
          onClick={onStart} 
          disabled={timeLeft === 0}
          className="control-btn start-btn"
        >
          Start
        </button>
      ) : (
        <button onClick={onPause} className="control-btn pause-btn">
          Pause
        </button>
      )}
      <button onClick={onReset} className="control-btn reset-btn">
        Reset
      </button>
    </div>
  )
}

export default TimerControls