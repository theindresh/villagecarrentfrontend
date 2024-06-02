// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-100 rounded shadow-lg">
            <p className="text-gray-600 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
            <p className="font-bold">John Doe</p>
          </div>
          <div className="p-8 bg-gray-100 rounded shadow-lg">
            <p className="text-gray-600 mb-4">"Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."</p>
            <p className="font-bold">Jane Smith</p>
          </div>
          <div className="p-8 bg-gray-100 rounded shadow-lg">
            <p className="text-gray-600 mb-4">"Sed nisi. Nulla quis sem at nibh elementum imperdiet."</p>
            <p className="font-bold">Mike Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
