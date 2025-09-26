import React from 'react'

const TimerDisplay = ({ timeLeft }) => {
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0')
    }
  }

  const { hours, minutes, seconds } = formatTime(timeLeft)

  return (
    <div className="timer-display">
      <div className="time-circle">
        <div className="time-digits">
          {hours !== '00' && (
            <>
              <span>{hours}</span>
              <span className="time-separator">:</span>
            </>
          )}
          <span>{minutes}</span>
          <span className="time-separator">:</span>
          <span>{seconds}</span>
        </div>
        <div className="time-labels">
          {hours !== '00' && <span>Hours</span>}
          <span>Minutes</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  )
}

export default TimerDisplay