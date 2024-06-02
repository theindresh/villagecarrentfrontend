import React from 'react';
import { useTheme } from "../Components/ThemeContext/ThemeContext";

const Services = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`container mx-auto px-4 py-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ServiceCard 
          title="Wide Vehicle Selection"
          description="Choose from a variety of vehicles suitable for rural terrain, including SUVs, trucks, and off-road vehicles."
          icon="🚗"
          isDarkMode={isDarkMode}
        />
        <ServiceCard 
          title="Flexible Rental Options"
          description="Rent by the hour, day, or week, with flexible pickup and drop-off locations to suit your needs."
          icon="🕒"
          isDarkMode={isDarkMode}
        />
        <ServiceCard 
          title="Affordable Rates"
          description="Enjoy competitive pricing and special discounts for long-term rentals, making transportation affordable for rural communities."
          icon="💰"
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};
const ServiceCard = ({ title, description, icon, isDarkMode }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <div className="text-2xl mb-4">{icon}</div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Services;