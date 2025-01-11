import React from "react";

const QuoteList = () => {
  const quotes = [
    {
      text: "Whatever you ask for in your mind, the universe will deliver.",
      author: "Rhonda Byrne ",
      book: "The Secret",
    },
    
  ];

  return (
    <div className="max-w-2xl mx-auto p-6  rounded-lg shadow-md">
      
      {quotes.map((quote, index) => (
        <div
          key={index}
          className="mb-6 p-4  rounded-lg shadow-md "
        >
          <p className="text-lg font-medium text-neutral-700 mb-2">"{quote.text}"</p>
          <p className="text-sm text-neutral-500 text-right">
            - <span className="font-semibold">{quote.author}</span>, <em>{quote.book}</em>
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuoteList;
