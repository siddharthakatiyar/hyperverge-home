import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteWidget: React.FC = () => {
  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        setQuote(response.data.content);
        setAuthor(response.data.author);
        setError(null);
      } catch (error) {
        console.error('Error fetching the quote', error);
        setError('Could not fetch the quote. Please try again later.');
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg text-center">
      <p className="text-xl font-semibold mb-2">Here's a random quote :)</p>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <p className="text-lg italic mb-4">"{quote}"</p>
          <p className="text-sm font-light">- {author}</p>
        </>
      )}
    </div>
  );
};

export default QuoteWidget;
