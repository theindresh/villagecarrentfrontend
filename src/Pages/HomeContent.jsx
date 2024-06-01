import React from "react";
import { useTheme } from "../Components/ThemeContext/ThemeContext";
import Services from "./Services";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const HomeContent = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`w-full ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } `}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to our site</h1>
        <p className="text-lg">We provide the best services in town</p>
      </div>
      <Services />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default HomeContent;
