import React from 'react';

const EarningSummaryChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <div className="text-gray-600 mb-2">Earning Summary</div>
      <svg viewBox="0 0 100 50" className="w-full h-40">
        {/* Background grid */}
        <line x1="10" y1="10" x2="90" y2="10" stroke="#e5e7eb" strokeWidth="0.5" />
        <line x1="10" y1="20" x2="90" y2="20" stroke="#e5e7eb" strokeWidth="0.5" />
        <line x1="10" y1="30" x2="90" y2="30" stroke="#e5e7eb" strokeWidth="0.5" />
        <line x1="10" y1="40" x2="90" y2="40" stroke="#e5e7eb" strokeWidth="0.5" />
        
        {/* Line for "Last 6 months" */}
        <polyline
          fill="none"
          stroke="rgba(75, 192, 192, 1)"
          strokeWidth="1"
          points="10,40 20,30 30,35 40,20 50,25 60,10 70,15 80,0"
        />
        
        {/* Line for "Same period last year" */}
        <polyline
          fill="none"
          stroke="rgba(153, 102, 255, 1)"
          strokeWidth="1"
          points="10,35 20,25 30,30 40,15 50,20 60,5 70,10 80,0"
        />
      </svg>
    </div>
  );
};

export default EarningSummaryChart;
