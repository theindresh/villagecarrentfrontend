import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from '../Components/Footer/Footer';
import CarSlider from "./CarSlider";
import Team from "./Team";
import Blog from "./Blog";
import Brands from "./Brands";
import WhyChooseUs from "./WhyChooseUs";
import { useTheme } from "../Components/ThemeContext/ThemeContext";


const HomeContent = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`bg-home-bg text-home-primary-text ${isDarkMode ? 'text-white' : ''} mt-20`}>
      <HeroSection />
      <Services />
      <AboutUs />
      <Testimonials />
      <CarSlider />
      <Team />
      <Blog />
      <Brands />
      <WhyChooseUs />
      <ContactUs />
      {/* HeroSection
Services
AboutUs
Testimonials
ContactUs
SearchForm
CarSlider
Team
Blog
Brands
WhyChooseUs
Footer */}


      <Footer />
    </div>
  );
};

export default HomeContent;