import React from 'react';
import { Link } from 'react-router-dom';
import welcoming from '../assets/4957136.jpg';
import { useTheme } from '../Components/ThemeContext/ThemeContext';

const WelcomePage = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={ `${isDarkMode?'bg-black text-white':'bg-white text-black'} mt-20 flex flex-col items-center justify-center h-screen p-4`}>
      <div className={`max-w-md w-full ${isDarkMode ? 'bg-black border-red-400' : 'bg-white'} rounded-lg shadow-lg p-8`}>
       <div className="flex justify-center mb-6">
          <img src={welcoming} alt="Welcome" className="w-3/5 h-auto" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">Welcome to The Village Car Rent</h1>
        <p className="text-center mb-6">We're excited to help you book and manage your service appointments with ease.</p>
        <div className="flex flex-col space-y-4">
          <Link to="/login" className="bg-[#1877A6] hover:bg-[#1877a681] text-white font-semibold py-2 px-4 min-w-full rounded-full text-center">
            Login
          </Link>
          <Link to="/signup" className="text-[#1877A6] hover:underline text-center">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
