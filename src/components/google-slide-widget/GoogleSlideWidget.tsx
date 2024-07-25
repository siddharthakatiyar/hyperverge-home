import React from 'react'

const GoogleSlideWidget: React.FC = () => {
  return (
    <div className="widget bg-white p-6 rounded shadow-lg flex flex-col items-center w-full relative">
      <div className="relative w-full pb-[56.25%] h-0">
        <iframe
          src="https://docs.google.com/presentation/d/1IhrjtCKyxXjwzQNSK0hr4W6Wwcxnr4p1yCE6UW72uyo/embed?start=true&loop=true&delayms=3000&rm=minimal"
          frameBorder="0"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          title="google-slide"
        ></iframe>
      </div>
    </div>
  )
}

export default GoogleSlideWidget
