import React from 'react';

const CarAvailability = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <div className="text-gray-600 mb-2">Car Availability</div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Car number"
          className="border rounded px-4 py-2 w-full"
        />
        <input
          type="date"
          className="border rounded px-4 py-2"
        />
        <input
          type="time"
          className="border rounded px-4 py-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Check
        </button>
      </div>
    </div>
  );
};

export default CarAvailability;
