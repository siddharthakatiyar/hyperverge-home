import React, { useState, useEffect, useRef } from 'react'
import { ReactComponent as RestartIcon } from '../../assets/icons/restart.svg'

const PomodoroTimer = () => {
  const pomodoroTime = 25 * 60 // 25 minutes
  const shortBreakTime = 5 * 60 // 5 minutes
  const longBreakTime = 30 * 60 // 30 minutes
  const [timeLeft, setTimeLeft] = useState(pomodoroTime)
  const [isActive, setIsActive] = useState(false)
  const [activeMode, setActiveMode] = useState('pomodoro')
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (isActive) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft(time => (time > 0 ? time - 1 : 0))
      }, 1000)
    } else if (!isActive && timeLeft !== 0 && intervalRef.current !== null) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isActive, timeLeft])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    if (activeMode === 'pomodoro') setTimeLeft(pomodoroTime)
    else if (activeMode === 'short break') setTimeLeft(shortBreakTime)
    else setTimeLeft(longBreakTime)
  }

  const setPomodoro = () => {
    setIsActive(false)
    setTimeLeft(pomodoroTime)
    setActiveMode('pomodoro')
  }

  const setShortBreak = () => {
    setIsActive(false)
    setTimeLeft(shortBreakTime)
    setActiveMode('short break')
  }

  const setLongBreak = () => {
    setIsActive(false)
    setTimeLeft(longBreakTime)
    setActiveMode('long break')
  }

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const buttonClass = (mode: string) =>
    `font-bold text-sm py-1.5 px-3 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#E2E2B6] focus:ring-opacity-50
     ${activeMode === mode ? 'bg-[#E2E2B6] text-black' : 'border border-[#E2E2B6] text-[#E2E2B6] hover:bg-[#E2E2B6] hover:text-black'}`

  return (
    <div className="h-auto flex flex-col justify-center items-center bg-cover bg-center p-4 rounded-lg bg-[#304050] bg-opacity-75">
      <div className="flex space-x-1 mb-8">
        <button onClick={setPomodoro} className={buttonClass('pomodoro')}>
          pomodoro
        </button>
        <button onClick={setShortBreak} className={buttonClass('short break')}>
          short break
        </button>
        <button onClick={setLongBreak} className={buttonClass('long break')}>
          long break
        </button>
      </div>
      <div className="text-[#E2E2B6] text-5xl font-bold mb-8">
        {formatTime()}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={toggleTimer}
          className="bg-[#E2E2B6] text-black hover:bg-[#304050] font-bold text-sm py-1.5 px-6 rounded-full shadow-md focus:outline-[#E2E2B6] focus:ring-2 focus:ring-[#E2E2B6] focus:ring-opacity-50"
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer}>
          <span className="inline-block transform rotate-0">
            <RestartIcon className="text-[#E2E2B6] h-6 w-6" />
          </span>
        </button>
      </div>
    </div>
  )
}

export default PomodoroTimer
