// src/components/WhyChooseUs.js
import React from 'react';
import carImage from '../assets/web_light_sq_SU.svg'; // replace with actual path

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-red-600 text-white p-8 rounded shadow-lg">
            <div className="mb-4">
              <i className="fas fa-user-cog text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-black text-white p-8 rounded shadow-lg">
            <div className="mb-4">
              <i className="fas fa-clock text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-red-600 text-white p-8 rounded shadow-lg">
            <div className="mb-4">
              <i className="fas fa-dollar-sign text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Best Price</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-black text-white p-8 rounded shadow-lg">
            <div className="mb-4">
              <i className="fas fa-thumbs-up text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Trusted Company</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <img src={carImage} alt="Car" className="mx-auto mt-8" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
