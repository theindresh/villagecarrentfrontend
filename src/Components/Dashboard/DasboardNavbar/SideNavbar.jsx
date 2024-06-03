import React from 'react';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-center text-2xl font-semibold border-b border-gray-700">
        Village Car Rent
      </div>
      <nav className="flex-grow">
        <ul className="mt-4 space-y-2">
          <li>
            <Link to="/" className="block py-2.5 px-4 hover:bg-gray-700 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cars" className="block py-2.5 px-4 hover:bg-gray-700 rounded">
              Available Cars
            </Link>
          </li>
          <li>
            <Link to="/booking" className="block py-2.5 px-4 hover:bg-gray-700 rounded">
              Booking
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2.5 px-4 hover:bg-gray-700 rounded">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <p className="text-center text-sm">&copy; 2024 Village Car Rent</p>
      </div>
    </div>
  );
};

export default SideNavbar;
