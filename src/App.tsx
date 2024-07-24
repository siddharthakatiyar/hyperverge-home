import React from 'react'
import GoogleSlideWidget from './components/google-slide-widget/GoogleSlideWidget'
import PomodoroTimer from './components/pomodoro-timer-widget/PomodoroTimer'
import MusicWidget from './components/music-widget/MusicWidget'
import PollingWidget from './components/polling-widget/PollingWidget'

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <header className="bg-gray-800 text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">HyperVerge - Home</h1>
      </header>
      <main className="flex-grow p-6 grid grid-cols-1 lg:grid-cols-4 gap-4 auto-rows-auto">
        <div className="lg:col-span-1 flex flex-col space-y-6">
          <PomodoroTimer />
          <PollingWidget />
        </div>
        <div className="lg:col-span-2 flex flex-col space-y-6">
          <GoogleSlideWidget />
        </div>
        <div className="lg:col-span-1 flex flex-col space-y-6">
          <MusicWidget />
        </div>
      </main>
    </div>
  )
}

export default App
