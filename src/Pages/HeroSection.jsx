// src/components/HeroSection.js
import React from 'react';
import heroImage from '../assets/Slider/oldtimer-1197800_1920.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white h-screen flex flex-col justify-between">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover opacity-50" />
      </div>
      <div className="relative flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl lg:text-5xl font-bold text-center">
          Explore Village Roads with <span className="text-red-600">Car Rentals</span>
        </h1>
        <p className="text-lg lg:text-xl mt-4 max-w-xl text-center">
          Experience the charm of rural areas with our reliable car rental services.
        </p>
        <Link to='/AuthPage' className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded mt-6">
          Book Now
        </Link>
      </div>
      
    </section>
  );
};

export default HeroSection;
