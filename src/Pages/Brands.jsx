import React from 'react';
import Maruti from '../assets/Brands/maruti-suzuki1647009823420.jpg';
import Hyundai from '../assets/Brands/hyundai.jpg';
import Tata from '../assets/Brands/tata.jpg';
import Mahindra from '../assets/Brands/mahindra.jpg';
import Honda from '../assets/Brands/hyundai.jpg';


const Brands = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">Car Brands in India</h2>
        <div className="flex justify-center overflow-x-auto">
          <img src={Maruti} alt="Maruti Suzuki" className="h-16 mx-4" />
          <img src={Hyundai} alt="Hyundai" className="h-16 mx-4" />
          <img src={Tata} alt="Tata" className="h-16 mx-4" />
          <img src={Mahindra} alt="Mahindra" className="h-16 mx-4" />
          <img src={Honda} alt="Honda" className="h-16 mx-4" />
          
        </div>
      </div>
    </section>
  );
};

export default Brands;
