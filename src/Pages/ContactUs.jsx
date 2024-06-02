// src/components/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" className="w-full p-2 border rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
