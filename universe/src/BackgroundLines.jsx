import React from 'react';

function BackgroundLines() {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden bg-gradient-to-tr from-gray-800 via-gray-600 to-gray-900 blur-lg"
        style={{
          clipPath: 'polygon(74% 44%, 98% 74%, 85% 93%, 50% 100%, 24% 91%, 10% 72%, 4% 46%, 14% 19%, 39% 0%, 65% 0%)',
        }}
      />
      <div className="relative z-10 p-10 text-center">
        <h1 className="text-3xl font-bold text-white">Background Lines</h1>
        <p className="mt-4 text-lg text-gray-300">
          This is an example of a background lines component using Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default BackgroundLines;
