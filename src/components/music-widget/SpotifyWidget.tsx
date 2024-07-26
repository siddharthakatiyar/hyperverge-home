import React from 'react'

const SpotifyWidget: React.FC = () => {
  return (
    <div>
      <iframe
        src="https://open.spotify.com/embed/playlist/1mXjuYjLfo5C6nCHxASRXI?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default SpotifyWidget
