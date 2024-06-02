// src/components/HeroSection.js
import React from 'react';
import heroImage from '../assets/Slider/oldtimer-1197800_1920.jpg'; // replace with the actual path
import SearchForm from './SearchFrom';

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white h-screen flex flex-col justify-between">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover opacity-50" />
      </div>
      <div className="relative flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl lg:text-5xl font-bold text-center">
          Lorem Ipsum <span className="text-red-600">simply dummy</span> text.
        </h1>
        <p className="text-lg lg:text-xl mt-4 max-w-xl text-center">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded mt-6">
          Lorem Ipsum
        </button>
      </div>
      <div className="relative flex justify-center py-6">
        <SearchForm />
      </div>
    </section>
  );
};

export default HeroSection;
