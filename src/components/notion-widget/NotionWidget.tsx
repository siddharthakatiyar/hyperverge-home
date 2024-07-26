import React from 'react';

const NotionWidget: React.FC = () => {
  return (
    <div>
      <iframe
          src="https://iframe.embednpages.com/csACoVWHqAZ61uevP1Uy"
          style={{ width: '100%', height: '100%', minHeight: '300px', padding: 0, border: '2px solid #ccc', borderRadius: '10px' }}
      ></iframe>
    </div>
  );
};

export default NotionWidget;