import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout
} from '@react-oauth/google'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const GoogleMeetWidget: React.FC = () => {
  const [meetLink, setMeetLink] = useState<string>('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessToken, setAccessToken] = useState<string | null>(null)

  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

  const handleLoginSuccess = (credentialResponse: any) => {
    setAccessToken(credentialResponse.credential)
    setIsAuthenticated(true)
  }

  const handleLoginFailure = () => {
    console.error('Login failed')
  }

  const handleLogout = () => {
    googleLogout()
    setIsAuthenticated(false)
    setAccessToken(null)
  }

  const createMeet = async () => {
    if (!accessToken || !apiKey) return
    try {
      const response = await axios.post(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${apiKey}`,
        {
          start: {
            dateTime: new Date().toISOString(),
            timeZone: 'UTC'
          },
          end: {
            dateTime: new Date(Date.now() + 3600000).toISOString(), // 1 hour later
            timeZone: 'UTC'
          },
          conferenceData: {
            createRequest: {
              requestId: `sample123`,
              conferenceSolutionKey: {
                type: 'hangoutsMeet'
              }
            }
          },
          summary: 'New Meeting'
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          params: {
            conferenceDataVersion: '1'
          }
        }
      )
      const meetLink = response.data.hangoutLink
      setMeetLink(meetLink)
    } catch (error) {
      console.error('Error creating Google Meet:', error)
    }
  }

  useEffect(() => {
    const loadGapiClient = () => {
      window.gapi.load('client', () => {
        window.gapi.client.init({
          apiKey,
          clientId,
          discoveryDocs: [
            'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
          ],
          scope: 'https://www.googleapis.com/auth/calendar.events'
        })
      })
    }

    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/api.js'
    script.onload = loadGapiClient
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [apiKey, clientId])

  return (
    <GoogleOAuthProvider clientId={clientId as string}>
      <div className="p-2 bg-white shadow-lg rounded-lg flex justify-center items-center w-20 h-20">
        {isAuthenticated ? (
          <>
            <CopyToClipboard text={meetLink}>
              <button onClick={createMeet} className="focus:outline-none">
                <img
                  src="https://i.pinimg.com/474x/71/f9/6f/71f96f743fd22f3bf52aad94bb8c926a.jpg"
                  alt="Google Meet"
                  className="h-12 w-12"
                />
              </button>
            </CopyToClipboard>
            <button onClick={handleLogout} className="focus:outline-none mt-2">
              Logout
            </button>
          </>
        ) : (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
        )}
      </div>
    </GoogleOAuthProvider>
  )
}

export default GoogleMeetWidget
