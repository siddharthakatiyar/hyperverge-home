import React, { useEffect, useState } from 'react';

const ClockWidget: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      setTime(formattedTime);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center p-5 text-[#E2E2B6] bg-opacity-50 rounded-lg">
      <h1 className="md:text-7xl font-bold m-0">{time}</h1>
    </div>
  );
};

export default ClockWidget;
