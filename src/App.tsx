import React from 'react';
import GoogleSlideWidget from './components/google-slide-widget/GoogleSlideWidget';
import PomodoroTimer from './components/pomodoro-timer-widget/PomodoroTimer';
import MusicWidget from './components/music-widget/MusicWidget';
import PollingWidget from './components/polling-widget/PollingWidget';
import TodayTasksWidget from './components/today-tasks-widget/TodayTasksWidget';
import QuoteWidget from './components/quote-widget/QuoteWidget';
import AnnouncementsWidget from './components/announcements-widget/AnnouncementsWidget';
import ClockWidget from './components/clock-widget/ClockWidget';
import hyperverge from './assets/logo/hyperverge.png';
import FormsWidget from './components/forms-widget/FormsWidget';
import SpreadsheetWidget from './components/spreadsheet-widget/SpreadsheetWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/background/main.jpg')", backgroundAttachment: 'fixed' }}>
      <header className="text-[#E2E2B6] p-6 shadow-lg sticky top-0 bg-opacity-75 bg-[#021526] z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={hyperverge} className='h-10 w-10' />
            <span className="text-2xl font-bold">HyperVerge - Home</span>
          </div>
          <div>
            <AnnouncementsWidget />
          </div>
        </div>
      </header>
      <main className="flex-grow p-6 grid grid-cols-1 lg:grid-cols-8 gap-4 auto-rows-auto">
        <div className='lg:col-span-8 flex flex-col h-96 items-center justify-center'>
          <ClockWidget />
          <QuoteWidget />
        </div>
        <div className="lg:col-span-2 flex flex-col space-y-6">
          <PomodoroTimer />
          <PollingWidget />
        </div>
        <div className="lg:col-span-4 flex flex-col space-y-6">
          <GoogleSlideWidget />
        </div>
        <div className="lg:col-span-2 flex flex-col space-y-6">
          <MusicWidget />
          <TodayTasksWidget />
        </div>
        <div className="lg:col-span-3 flex flex-col space-y-6">
          <FormsWidget />
        </div>
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <SpreadsheetWidget />
        </div>
      </main>
    </div>
  );
};

export default App;
