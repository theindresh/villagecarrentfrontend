// Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-black text-white flex flex-col">
      <div className="flex items-center justify-center h-16 border-b border-gray-800">
        <h1 className="text-2xl font-bold">CAR RENT</h1>
      </div>
      <div className="flex-grow">
        <nav className="mt-10">
          <SidebarItem to="/" icon="🏠" label="Dashboard" />
          <SidebarItem to="/drivers" icon="👥" label="Drivers" />
          <SidebarItem to="/bookings" icon="📅" label="Bookings" />
          <SidebarItem to="/notifications" icon="🔔" label="Notifications" />
          <SidebarItem to="/settings" icon="⚙️" label="Settings" />
        </nav>
      </div>
      <div className="border-t border-gray-800 p-4">
        <SidebarItem to="/payment-details" icon="💳" label="Payment Details" />
        <SidebarItem to="/transactions" icon="📄" label="Transactions" />
        <SidebarItem to="/car-report" icon="🚗" label="Car Report" />
        <button className="w-full flex items-center p-2 mt-4 text-red-600 hover:text-red-400">
          <span className="text-xl">🚪</span>
          <span className="ml-2">Logout</span>
        </button>
      </div>
    </div>
  );
};

const SidebarItem = ({ to, icon, label }) => (
  <Link
    to={to}
    className="flex items-center p-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-white"
    activeClassName="bg-blue-500 text-white"
  >
    <span className="text-xl">{icon}</span>
    <span className="ml-2">{label}</span>
  </Link>
);

export default Sidebar;
