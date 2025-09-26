import React, { useState } from 'react'
import useCountdown from '../hooks/useCountdown'
import TimeInput from './TimeInput'
import TimerDisplay from './TimerDisplay'
import TimerControls from './TimerControls'
import '../styles/CountdownTimer.css'

const CountdownTimer = () => {
  const [initialTime, setInitialTime] = useState(0)
  const { timeLeft, isRunning, start, pause, reset, setTime } = useCountdown(initialTime)

  const handleTimeSet = (totalSeconds) => {
    setInitialTime(totalSeconds)
    setTime(totalSeconds)
  }

  return (
    <div className="countdown-timer">
      <TimeInput onTimeSet={handleTimeSet} />
      
      <TimerDisplay timeLeft={timeLeft} />
      
      <TimerControls
        isRunning={isRunning}
        onStart={start}
        onPause={pause}
        onReset={() => reset()}
        timeLeft={timeLeft}
      />

      {timeLeft === 0 && initialTime > 0 && (
        <div className="timer-complete">
          <h2>Time's Up! 🎉</h2>
        </div>
      )}
    </div>
  )
}

export default CountdownTimer