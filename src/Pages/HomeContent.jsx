import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from '../Components/Footer/Footer';
import { useTheme } from "../Components/ThemeContext/ThemeContext";

const HomeContent = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`bg-home-bg text-home-primary-text ${isDarkMode ? 'text-white' : ''} mt-20`}>
      <HeroSection />
      <Services />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomeContent;