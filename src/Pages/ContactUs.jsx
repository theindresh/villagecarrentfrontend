import React from 'react';
import { useTheme } from "../Components/ThemeContext/ThemeContext";

const ContactUs = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`container mx-auto px-4 py-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input type="text" id="name" name="name" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`} />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input type="email" id="email" name="email" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`} />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
          <textarea id="message" name="message" rows="4" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}></textarea>
        </div>

        <button type="submit" className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 hover:bg-gray-900' : ''}`}>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;