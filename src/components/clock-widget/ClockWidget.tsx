import React, { useEffect, useState } from 'react';

const ClockWidget: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
      const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

      const strTime = `${hours}:${minutesStr}:${secondsStr} ${ampm}`;
      setTime(strTime);

      const currentHour = now.getHours();
      if (currentHour < 12) {
        setGreeting('Good Morning');
      } else if (currentHour < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };

    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#333', color: '#fff', fontFamily: 'Poppins, sans-serif', borderRadius: '10px', padding: '10px' }}>
      <div style={{ fontSize: '48px', fontWeight: 'bold' }}>{time}</div>
      <div style={{ fontSize: '24px', marginTop: '10px' }}>{greeting}</div>
    </div>
  );
};

export default ClockWidget;
