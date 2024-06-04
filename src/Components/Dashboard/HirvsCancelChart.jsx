import React from 'react';

const HireCancelChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <div className="text-gray-600 mb-2">Hire vs Cancel</div>
      <div className="flex justify-center">
        <svg viewBox="0 0 32 32" className="w-32 h-32">
          <circle
            r="16"
            cx="16"
            cy="16"
            fill="white"
            stroke="transparent"
            strokeWidth="32"
            strokeDasharray="54 20 26"
            strokeDashoffset="0"
            transform="rotate(-90) translate(-32)"
            style={{ stroke: '#4caf50', strokeWidth: '16' }}
          />
          <circle
            r="16"
            cx="16"
            cy="16"
            fill="transparent"
            stroke="#f44336"
            strokeWidth="32"
            strokeDasharray="20 80"
            strokeDashoffset="-54"
            transform="rotate(-90) translate(-32)"
          />
          <circle
            r="16"
            cx="16"
            cy="16"
            fill="transparent"
            stroke="#ff9800"
            strokeWidth="32"
            strokeDasharray="26 74"
            strokeDashoffset="-74"
            transform="rotate(-90) translate(-32)"
          />
        </svg>
      </div>
    </div>
  );
};

export default HireCancelChart;
