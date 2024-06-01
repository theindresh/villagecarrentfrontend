import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#88bdbcbb] shadow-2xl rounded-3xl mx-6 mt-6 z-100">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <span className="cursor-pointer text-2xl font-bold uppercase">
              Village Car Rent
            </span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/">
                <span className="cursor-pointer hover:text-gray-300">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="cursor-pointer hover:text-gray-300">About</span>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <span className="cursor-pointer hover:text-gray-300">Services</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span className="cursor-pointer hover:text-gray-300">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* Render toggle button for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none focus:text-gray-300"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Render menu at bottom for mobile */}
      {isOpen && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#88bdbcbb] p-4 flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <Link to="/">
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Insert home icon SVG here */}
                  <path d="M12 2L0 9l2 2v11a2 2 0 002 2h4a2 2 0 002-2v-4h4v4a2 2 0 002 2h4a2 2 0 002-2V11l2-2 1-1L12 2z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Insert about icon SVG here */}
                  <path d="M12 2L0 9l2 2v11a2 2 0 002 2h4a2 2 0 002-2v-4h4v4a2 2 0 002 2h4a2 2 0 002-2V11l2-2 1-1L12 2z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Insert services icon SVG here */}
                  <path d="M12 2L0 9l2 2v11a2 2 0 002 2h4a2 2 0 002-2v-4h4v4a2 2 0 002 2h4a2 2 0 002-2V11l2-2 1-1L12 2z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L0 9l2 2v11a2 2 0 002 2h4a2 2 0 002-2v-4h4v4a2 2 0 002 2h4a2 2 0 002-2V11l2-2 1-1L12 2z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
