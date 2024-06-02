// src/components/SearchForm.js
import React from 'react';

const SearchForm = () => {
  return (
    <div className="bg-white shadow-lg p-8 rounded-lg max-w-xl mx-auto -mt-16 relative z-10">
      <h2 className="text-2xl font-bold mb-4">Search for Rental Cars</h2>
      <form>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <select className="p-2 border rounded">
            <option>Select Make</option>
            <option>Audi</option>
            <option>BMW</option>
            <option>Mercedes</option>
          </select>
          <select className="p-2 border rounded">
            <option>Select Model</option>
            <option>Model S</option>
            <option>Model X</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="date" className="p-2 border rounded" />
          <input type="date" className="p-2 border rounded" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Location" className="p-2 border rounded" />
          <input type="number" placeholder="Max Price" className="p-2 border rounded" />
        </div>
        <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
