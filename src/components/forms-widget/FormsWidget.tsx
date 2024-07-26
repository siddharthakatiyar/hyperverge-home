import React from 'react'

const FormsWidget: React.FC = () => {
  return (
    <div className="h-auto flex flex-col justify-center items-center bg-cover bg-center p-4 rounded-lg bg-[#304050] bg-opacity-40">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe3Z-5ZB58hy-9XiFuhATeeUvfwF37RadV8ePT5iK-qyZsZRQ/viewform?embedded=true"
        width="640"
        height="660"
        frameBorder="0"
        style={{
          background: 'rgba(48, 64, 80, 0.7)',
          color: '#E2E2B6',
          border: 'none',
          borderRadius: '8px'
        }}
      >
        Loading…
      </iframe>
    </div>
  )
}

export default FormsWidget
