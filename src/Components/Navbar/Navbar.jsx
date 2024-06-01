import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../ThemeContext/ThemeContext';
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-${isDarkMode ? 'gray-800' : '#88bdbcbb'} shadow-2xl rounded-3xl mx-6 mt-6 z-100`}>
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <span className={`cursor-pointer text-2xl font-bold uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Village Car Rent
            </span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/">
                <span className={`cursor-pointer hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className={`cursor-pointer hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>About</span>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <span className={`cursor-pointer hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Services</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span className={`cursor-pointer hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact</span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span className={`cursor-pointer hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Login</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none focus:text-gray-300"
          >
            {isOpen ? '' : <FaBars className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 focus:outline-none focus:text-gray-300"
          >
            {isDarkMode ? <FaSun className={`h-6 w-6 ${isDarkMode ? 'text-yellow-400' : 'text-gray-600'}`} /> : <FaMoon className={`h-6 w-6 ${isDarkMode ? 'text-yellow-400' : 'text-gray-600'}`} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-25 left-0 right-0 p-4 flex justify-center z-50">
          <div className="flex flex-col space-y-4 bg-white rounded-lg shadow-lg w-full max-w-md">
            <button onClick={toggleMenu} className="self-end focus:outline-none p-2">
              <FaTimes className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            </button>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link to="/" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-200 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-200 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-200 transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-200 transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-200 transition duration-300">
                  <span className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}>Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
