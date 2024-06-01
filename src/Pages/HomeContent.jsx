// HomeContent.js
import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useTheme } from '../Components/ThemeContext/ThemeContext';

const HomeContent = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`w-full h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black' } flex flex-col`}>
        <Navbar />
    </div>
  );
};

export default HomeContent;
