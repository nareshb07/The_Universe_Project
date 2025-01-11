import React, { useState } from 'react';

const ShowMoreText = ({ text, limit = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-inherit">
      <p className={`text-gray-700 transition-all duration-300 ${isExpanded ? '' : 'truncate'}`}>
        {isExpanded ? text : `${text.slice(0, limit)}${text.length > limit ? '...' : ''}`}
      </p>
      {text.length > limit && (
        <button
          className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
          onClick={toggleExpand}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default ShowMoreText;
