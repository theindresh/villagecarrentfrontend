import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <form>
            <input type="email" placeholder="Your Email" className="p-2 w-full mb-4 rounded bg-gray-800 text-white" />
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Village Car Rent. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
