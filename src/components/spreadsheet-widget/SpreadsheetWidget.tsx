import React from 'react'

const SpreadsheetWidget: React.FC = () => {
  return (
    <div className="p-4 bg-[#03346E] bg-opacity-40 shadow-lg rounded-lg">
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7PQLjibsclipAwZqhZ_psdGLXKAI9IcerwRKvlIkPv3ba3w8BMYn_44dYPqxcUdfFRyjBrU_uQZb4/pubhtml?gid=303495338&amp;single=true&amp;widget=true&amp;headers=false"
        width="100%"
        height="500px"
        style={{ border: 'none' }}
        title="Google Spreadsheet"
        className="rounded-lg"
      ></iframe>
    </div>
  )
}

export default SpreadsheetWidget
