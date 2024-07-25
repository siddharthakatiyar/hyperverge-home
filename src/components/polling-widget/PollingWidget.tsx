import React, { useEffect, useState } from 'react';
import { getFormLink } from '../../services/pollService';

const GoogleFormWidget: React.FC = () => {
  const [formLink, setFormLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFormLink = async () => {
      try {
        const link = await getFormLink();
        setFormLink(link[0]);
      } catch (err) {
        setError('Error fetching Google Form link.');
        console.error(err);
      }
    };

    fetchFormLink();
  }, []);

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div className="flex justify-center p-4 bg-white shadow-lg rounded-lg">
      {formLink ? (
        <iframe
          src={formLink}
          style={{ width: '100%', height: '100%', maxHeight: '800px' }}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="w-full h-full"
          title="Google Form"
        >
          Loading…
        </iframe>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default GoogleFormWidget;
