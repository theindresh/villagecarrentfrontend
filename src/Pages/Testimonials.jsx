import React from 'react';

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          name="Director"
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper lorem vitae luctus blandit. Proin non dolor nunc. Fusce rutrum posuere elit, in tempus justo pretium nec."
        />
        <TestimonialCard
          name="Team Leader"
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper lorem vitae luctus blandit. Proin non dolor nunc. Fusce rutrum posuere elit, in tempus justo pretium nec."
        />
        <TestimonialCard
          name="Senior Developer"
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper lorem vitae luctus blandit. Proin non dolor nunc. Fusce rutrum posuere elit, in tempus justo pretium nec."
        />
        <TestimonialCard
          name="Developer"
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper lorem vitae luctus blandit. Proin non dolor nunc. Fusce rutrum posuere elit, in tempus justo pretium nec."
        />
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, quote }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <p className="text-gray-700 italic">&ldquo;{quote}&rdquo;</p>
      <p className="text-gray-800 font-bold mt-4">{name}</p>
    </div>
  );
};

export default Testimonials;
