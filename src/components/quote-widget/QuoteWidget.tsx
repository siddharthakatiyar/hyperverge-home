import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuoteWidget: React.FC = () => {
  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        setQuote(response.data.content);
        setAuthor(response.data.author);
      } catch (error) {
        console.error('Error fetching the quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="text-center p-5 text-[#E2E2B6] bg-opacity-50 rounded-lg">
      <p className="text-2xl m-0">"{quote}"</p>
      <p className="text-xl m-0">- {author}</p>
    </div>
  );
};

export default QuoteWidget;
