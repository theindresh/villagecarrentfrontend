// src/components/Team.js
import React from 'react';

const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gray-100 p-8 rounded shadow-lg">
            <img src="team1.jpg" alt="Team Member 1" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">John Doe</h3>
          </div>
          <div className="bg-gray-100 p-8 rounded shadow-lg">
            <img src="team2.jpg" alt="Team Member 2" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
          </div>
          <div className="bg-gray-100 p-8 rounded shadow-lg">
            <img src="team3.jpg" alt="Team Member 3" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Mike Johnson</h3>
          </div>
          <div className="bg-gray-100 p-8 rounded shadow-lg">
            <img src="team4.jpg" alt="Team Member 4" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Sarah Williams</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
