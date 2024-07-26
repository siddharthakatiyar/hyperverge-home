import React, { useEffect, useState } from 'react';
import { ReactComponent as AlertIcon } from '../../assets/icons/alert.svg';

const AnnouncementsWidget: React.FC = () => {
  const [announcements, setAnnouncements] = useState<string[]>([
    'Welcome to the HyperVerge home page!',
    "Don't forget to submit your daily report.",
    'Team meeting on Friday at 3 PM.'
  ]);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handlePopupClick = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const notification = announcements.length > 0;
    if (notification) {
      setTimeout(() => setShowPopup(true), 2000);
    }
  }, [announcements]);

  return (
    <div className="relative">
      <div 
        className="p-2 cursor-pointer" 
        onClick={handlePopupClick}
      >
        <AlertIcon className="h-6 w-6 text-[#E2E2B6] fill-current" />
      </div>
      {showPopup && (
        <div className="absolute top-12 right-0 w-64 p-4 bg-[#03346E] text-[#E2E2B6] rounded-lg shadow-lg z-10">
          <h2 className="text-lg font-bold mb-2">Announcements</h2>
          <ul className="list-disc list-inside">
            {announcements.map((announcement, index) => (
              <li key={index} className="mb-2">{announcement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AnnouncementsWidget;
