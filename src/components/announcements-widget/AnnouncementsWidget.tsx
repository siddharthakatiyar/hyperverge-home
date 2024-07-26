import React, { useEffect, useState } from 'react';
import { ReactComponent as AlertIcon } from '../../assets/icons/alert.svg';
import { getAnnouncements } from '../../services/announcementsService';

const AnnouncementsWidget: React.FC = () => {
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const fetchedAnnouncements = await getAnnouncements();
        setAnnouncements(fetchedAnnouncements || []);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchAnnouncements();
  }, []);

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
      <div className="p-2 cursor-pointer" onClick={handlePopupClick}>
        <AlertIcon className="h-6 w-6 text-[#E2E2B6] fill-current" />
      </div>
      {showPopup && (
        <div
          style={{
            position: 'absolute',
            top: '3rem',
            right: '0',
            width: '20rem',
            height: '18rem',
            padding: '1rem',
            backgroundColor: '#03346E',
            color: '#E2E2B6',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 10,
            overflowY: 'auto',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Announcements</h2>
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '1.5rem' }}>
            {announcements.map((announcement, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{announcement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AnnouncementsWidget;
