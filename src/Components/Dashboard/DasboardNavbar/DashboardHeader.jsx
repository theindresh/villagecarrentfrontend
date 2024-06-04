import React from 'react';

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <div className="text-lg font-semibold">Todays Statistics</div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search here"
          className="border rounded-l px-4 py-2 w-64"
        />
        <button className="bg-blue-500 text-white p-2 rounded-r">
          🔍
        </button>
        <span className="w-6 h-6 text-gray-600 ml-4">🔔</span>
      </div>
    </header>
  );
};

export default DashboardHeader;
