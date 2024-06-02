// src/components/Brands.js
import React from 'react';

const Brands = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex justify-around items-center">
        <img src="brand1.png" alt="Brand 1" className="h-12" />
        <img src="brand2.png" alt="Brand 2" className="h-12" />
        <img src="brand3.png" alt="Brand 3" className="h-12" />
        <img src="brand4.png" alt="Brand 4" className="h-12" />
        <img src="brand5.png" alt="Brand 5" className="h-12" />
      </div>
    </section>
  );
};

export default Brands;
