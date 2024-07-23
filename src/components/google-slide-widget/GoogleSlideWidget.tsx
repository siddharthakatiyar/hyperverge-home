import React from 'react';

const GoogleSlideWidget: React.FC = () => {
  return (
    <div className="widget bg-white p-6 rounded shadow-lg flex flex-col items-center w-full relative">
      <div className="relative w-full pb-[56.25%] h-0">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vQU4mbq8ozRVWJkRog9npoqI66_aRhoPi1k76RLUltKXU4VOceYlEALvh9voImutg/embed?start=true&loop=true&delayms=3000&rm=minimal"
          frameBorder="0"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          title='google-slide'
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleSlideWidget;
