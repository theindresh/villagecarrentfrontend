// src/components/Blog.js
import React from 'react';

const Blog = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 rounded shadow-lg">
            <img src="blog1.jpg" alt="Blog 1" className="mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">Lorem Ipsum Dolor Sit Amet</h3>
            <p className="text-gray-600">January 12, 2024</p>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero a justo facilisis cursus.</p>
            <a href="/" className="text-red-600 mt-4 block">Read More</a>
          </div>
          <div className="bg-gray-100 p-8 rounded shadow-lg">
            <img src="blog2.jpg" alt="Blog 2" className="mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">Lorem Ipsum Dolor Sit Amet</h3>
            <p className="text-gray-600">February 5, 2024</p>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero a justo facilisis cursus.</p>
            <a href="/" className="text-red-600 mt-4 block">Read More</a>
          </div>
          <div className="bg-gray-100 p-8 rounded shadow-lg">
            <img src="blog3.jpg" alt="Blog 3" className="mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">Lorem Ipsum Dolor Sit Amet</h3>
            <p className="text-gray-600">March 20, 2024</p>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero a justo facilisis cursus.</p>
            <a href="/" className="text-red-600 mt-4 block">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
