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
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Available Poll</h2>
      {poll ? (
        <div>
          <h3>{poll[0][0]}</h3>
          <button onClick={() => handleVote(1)}>
            {poll[0][1]} ({poll[1][3]})
          </button>
          <button onClick={() => handleVote(2)}>
            {poll[0][2]} ({poll[1][4]})
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PollingWidget;
