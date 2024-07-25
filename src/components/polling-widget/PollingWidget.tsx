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

  if (!poll) {
    return <div>Loading...</div>;
  }

  const question = poll[1][0];
  const options = poll[1].slice(1, 5);
  const counts = poll[1].slice(5, 9);

  return (
    <div className="h-auto flex flex-col justify-center items-center bg-cover bg-center p-4" style={{ backgroundImage: 'url(/background/pomodoro.jpeg)', fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="text-2xl font-semibold mb-4 text-white">Available Poll</h2>
      <h3 className="text-xl font-medium mb-2 text-white">{question}</h3>
      <div className="flex flex-col space-y-2 w-full px-4">
        {options.map((option, index) => option && (
          <button
            key={index}
            onClick={() => handleVote(index + 1)}
            className={`py-2 px-4 rounded-full hover:bg-opacity-75 transition text-white text-lg font-bold ${
              index === 0
                ? 'bg-blue-500'
                : index === 1
                ? 'bg-green-500'
                : index === 2
                ? 'bg-red-500'
                : 'bg-yellow-500'
            }`}
          >
            {option} ({counts[index]})
          </button>
        ))}
      </div>
    </div>
  );
};

export default PollingWidget;
