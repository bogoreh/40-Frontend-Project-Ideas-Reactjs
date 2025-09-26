import { useState, useEffect, useCallback } from 'react'

const useCountdown = (initialTime = 0) => {
  const [timeLeft, setTimeLeft] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval = null

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsRunning(false)
    }

    return () => clearInterval(interval)
  }, [isRunning, timeLeft])

  const start = useCallback(() => setIsRunning(true), [])
  const pause = useCallback(() => setIsRunning(false), [])
  const reset = useCallback(() => {
    setIsRunning(false)
    setTimeLeft(initialTime)
  }, [initialTime])

  const setTime = useCallback((newTime) => {
    setIsRunning(false)
    setTimeLeft(newTime)
  }, [])

  return {
    timeLeft,
    isRunning,
    start,
    pause,
    reset,
    setTime
  }
}

export default useCountdown