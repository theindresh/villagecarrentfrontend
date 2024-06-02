// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded shadow-lg">
            <img src="service1.jpg" alt="Service 1" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Tire and Wheels</h3>
          </div>
          <div className="bg-white p-8 rounded shadow-lg">
            <img src="service2.jpg" alt="Service 2" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Brake Repair</h3>
          </div>
          <div className="bg-white p-8 rounded shadow-lg">
            <img src="service3.jpg" alt="Service 3" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Engine Diagnostics</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
