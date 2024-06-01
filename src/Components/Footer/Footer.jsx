import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#88bdbcbb] rounded-3xl mx-6 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* <div className="mb-4 lg:mb-0">
            <h2 className="text-lg font-semibold mb-2">About Us</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at scelerisque odio. Integer fringilla lectus sed massa pulvinar scelerisque.</p>
          </div> */}
          <div className="mb-4 lg:mb-0">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p className="text-sm">Pando India<br />Sector 59<br />Email: indresh.bharati@gmail.com<br />Phone: 7054220354</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Village Car Rent. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
