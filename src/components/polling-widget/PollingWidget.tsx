import React, { useEffect, useState } from 'react'
import { getPolls, submitVote } from '../../services/pollService'

const PollingWidget: React.FC = () => {
  const [poll, setPoll] = useState<string[][] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const pollData = await getPolls()
        setPoll(pollData)
      } catch (err) {
        setError('Error fetching poll.')
        console.error(err)
      }
    }

    fetchPoll()
  }, [])

  const handleVote = async (optionIndex: number) => {
    try {
      await submitVote(optionIndex)
      const updatedPoll = await getPolls()
      setPoll(updatedPoll)
    } catch (err) {
      setError('Error submitting vote.')
      console.error(err)
    }
  }

  if (error) {
    return <div className="text-red-600">{error}</div>
  }

  if (!poll) {
    return <div>Loading...</div>
  }

  const question = poll[1][0]
  const options = poll[1].slice(1, 5)
  const counts = poll[1].slice(5, 9)

  return (
    <div className="h-auto flex flex-col justify-center items-center bg-cover bg-center p-4 rounded-lg bg-[#304050] bg-opacity-40">
      <h2 className="text-2xl font-semibold mb-4 text-[#E2E2B6]">POOOLLL!!!</h2>
      <h3 className="text-xl font-medium mb-2 text-[#E2E2B6]">{question}</h3>
      <div className="flex flex-col space-y-2 w-full px-4">
        {options.map(
          (option, index) =>
            option && (
              <button
                key={index}
                onClick={() => handleVote(index + 1)}
                className="font-bold text-sm py-1.5 px-3 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#E2E2B6] focus:ring-opacity-50 border border-[#E2E2B6] text-[#E2E2B6] hover:bg-[#E2E2B6] hover:text-black"
              >
                {option}
              </button>
            )
        )}
      </div>
    </div>
  )
}

export default PollingWidget
