import React, { useEffect, useState } from 'react';
import { getPolls, submitVote } from '../../services/pollService';

const PollingWidget: React.FC = () => {
  const [poll, setPoll] = useState<string[][] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const pollData = await getPolls();
        setPoll(pollData);
      } catch (err) {
        setError('Error fetching poll.');
        console.error(err);
      }
    };

    fetchPoll();
  }, []);

  const handleVote = async (optionIndex: number) => {
    try {
      await submitVote(optionIndex);
      // Fetch updated poll data
      const updatedPoll = await getPolls();
      setPoll(updatedPoll);
    } catch (err) {
      setError('Error submitting vote.');
      console.error(err);
    }
  };

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Available Poll</h2>
      {poll ? (
        <div>
          <h3 className="text-xl font-medium mb-2">{poll[1][0]}</h3>
          <div className="flex space-x-4">
            <button
              onClick={() => handleVote(1)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              {poll[1][1]} ({poll[1][3]})
            </button>
            <button
              onClick={() => handleVote(2)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition"
            >
              {poll[1][2]} ({poll[1][4]})
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PollingWidget;
