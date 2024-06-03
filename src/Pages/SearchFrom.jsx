import React from 'react';
import { useTheme } from '../Components/ThemeContext/ThemeContext';

const SearchForm = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} shadow-lg p-8 rounded-lg max-w-xl mx-auto -mt-16 relative z-10`}>
      <h2 className="text-2xl font-bold mb-4">Choose A Car</h2>
      <form>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="date" className="p-2 border rounded" placeholder="Pickup Date" />
          <input type="date" className="p-2 border rounded" placeholder="Return Date" />
        </div>
        <div className="mb-4">
          <input type="text" placeholder="Location" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Search</button> 
      </form>
    </div>
  );
};

export default SearchForm;
