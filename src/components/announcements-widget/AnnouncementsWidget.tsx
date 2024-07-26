import React, { useEffect, useState } from 'react'
import { ReactComponent as AlertIcon } from '../../assets/icons/alert.svg'
import { getAnnouncements } from '../../services/announcementsService'

const AnnouncementsWidget: React.FC = () => {
  const [announcements, setAnnouncements] = useState<string[]>([])
  const [showPopup, setShowPopup] = useState<boolean>(false)

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const fetchedAnnouncements = await getAnnouncements()
        setAnnouncements(fetchedAnnouncements || [])
      } catch (error) {
        console.error('Error fetching announcements:', error)
      }
    }

    fetchAnnouncements()
  }, [])

  const handlePopupClick = () => {
    setShowPopup(!showPopup)
  }

  useEffect(() => {
    const notification = announcements.length > 0
    if (notification) {
      setTimeout(() => setShowPopup(true), 2000)
    }
  }, [announcements])

  return (
    <div className="relative">
      <div className="p-2 cursor-pointer" onClick={handlePopupClick}>
        <AlertIcon className="h-6 w-6 text-[#E2E2B6] fill-current" />
      </div>
      {showPopup && (
        <div className="absolute top-12 right-0 w-64 p-4 bg-[#03346E] text-[#E2E2B6] rounded-lg shadow-lg z-10">
          <h2 className="text-lg font-bold mb-2">Announcements</h2>
          <ul className="list-disc list-inside">
            {announcements.map((announcement, index) => (
              <li key={index} className="mb-2">
                {announcement}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default AnnouncementsWidget
