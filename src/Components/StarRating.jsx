// StarRating.js

import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => handleStarClick(value)}
        />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={`w-6 h-6 cursor-pointer ${filled ? 'text-yellow-500' : 'text-gray-300'}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 2c-.1 0-.2 0-.3.1l-4.5 1.3-3.3 4.8c-.1.1-.2.2-.2.4l1 5.3-4 3.8c-.1.1-.1.2-.1.4l1.1 5.3 4.8-2.7c.2-.1.4-.1.6 0l5.7 3.2 5.8-3.2c.2-.1.3-.2.4-.4l2.7-4.6-2-5.2c-.1-.2-.2-.3-.4-.4l-5.2-2.3-2.2-5.1c-.1-.1-.2-.2-.4-.3l-4.9-2.2z"></path>
    </svg>
  );
};

export default StarRating;
