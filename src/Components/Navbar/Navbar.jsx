import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../ThemeContext/ThemeContext";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? "bg-[#262626] text-white" : "bg-white text-black"
      } shadow-2xl transition duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <span
              className={`cursor-pointer text-2xl font-bold uppercase ${isDarkMode ? "text-white" : "text-black"
                }`}
            >
              Village Car Rent
            </span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/">
                <span
                  className={`cursor-pointer hover:text-gray-300 ${isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span
                  className={`cursor-pointer hover:text-gray-300 ${isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <span
                  className={`cursor-pointer hover:text-gray-300 ${isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  Services
                </span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span
                  className={`cursor-pointer hover:text-gray-300 ${isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  Contact
                </span>
              </Link>
            </li>
            <li>
              <Link to="/AuthPage">
                <span
                  className={`cursor-pointer hover:text-gray-300 ${isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  Login
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none focus:text-gray-300"
          >
            {isOpen ? (
              <FaTimes className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`} />
            ) : (
              <FaBars className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`} />
            )}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 focus:outline-none focus:text-gray-300"
          >
            {isDarkMode ? (
              <FaSun className="h-6 w-6 text-yellow-400" />
            ) : (
              <FaMoon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 left-0 right-0 bottom-0  flex items-center justify-center ${isDarkMode ? "bg-[#262626] text-white" : "bg-white text-black "}`}
        >
          <div
            onClick={toggleMenu}
            className="absolute top-0 left-0 bottom-0 right-0"
          ></div>
          <div className="relative flex flex-col w-full max-w-sm">
            <div className="absolute top-0 right-0 p-4">
              <button onClick={toggleMenu} className="focus:outline-none">
                <FaTimes className={`h-6 w-6 `} />
              </button>
            </div>
            <div className="px-6 flex justify-evenly gap-6 mt-20">
              <div className="w-full">

              <Link to="/login" onClick={toggleMenu} className="block w-full">
                <button className="block w-full bg-[#1877A6] hover:bg-[#EEF4F9] font-medium py-5 rounded-xl">
                 Login
                </button>
              </Link>
              </div>
              <div className="w-full">

              <Link to="/signup" onClick={toggleMenu} className="block w-full">
                <button className="block w-full bg-[#1877A6] hover:bg-[#EEF4F9] font-medium py-5 rounded-xl">
                 Sign Up
                </button>
              </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 overflow-y-auto"
            >
              <nav className="mt-5 px-2 space-y-4">
                <Link to="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Home
                  </motion.span>
                </Link>
                <Link to="/about" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    About
                  </motion.span>
                </Link>
                <Link to="/services" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Services
                  </motion.span>
                </Link>
                <Link to="/contact" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact
                  </motion.span>
                </Link>
                <Link to="/AuthPage" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Login
                  </motion.span>
                </Link>
              </nav>
            </motion.div>
            <div className="fixed bottom-4 left-0 right-0">
              <div className="flex items-center justify-center w-full">
                <p className="text-sm">
                  &copy; 2024 Village Car Rent. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
