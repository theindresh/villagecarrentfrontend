import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import AuthPage from '../Authentication/AuthPage';
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';
import Services from '../Pages/Services';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path='/AuthPage' element={<AuthPage />} />  
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    
  );
};

export default AllRoutes;
