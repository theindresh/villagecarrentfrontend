import React from 'react';

const AboutUs = () => {
  return (
    <div className="container bg-custom-gradient mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-4">About Us</h2>
          <p className="text-sm md:text-base text-gray-700">
            We are a car rental company that offers a wide range of vehicles
            for hire. Our fleet includes cars, SUVs, and vans. We provide
            excellent customer service and competitive rates. Whether you need a
            background: radial-gradient(53.64% 40.08% at 50% 59.92%, rgba(93, 100, 118, 0.68) 0%, rgba(18, 20, 36, 0.68) 100%);

            vehicle for a day, a week, or a month, we have you covered. Contact
            us today to learn more about our services and to make a reservation.
          </p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Our Services</h2>
          <ul className="list-disc text-sm md:text-base text-gray-700">
            <li>Car Rental</li>
            <li>SUV Rental</li>
            <li>Van Rental</li>
            <li>Long-Term Rental</li>
            <li>Short-Term Rental</li>
            <li>24/7 Customer Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;