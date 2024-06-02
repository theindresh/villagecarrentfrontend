
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../Authentication/AuthPage";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Services from "../Pages/Services";
import LandingPage from "../Pages/LandingPage";
import HomeContent from "../Pages/HomeContent";
import Navbar from "../Components/Navbar/Navbar";
import { useTheme } from "../Components/ThemeContext/ThemeContext";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import Congratulations from "../Authentication/CongrateLogin";

const AllRoutes = () => {
  const { isDarkMode } = useTheme();
  const [showLandingPage, setShowLandingPage] = useState(
    localStorage.getItem("showLandingPage") === "false" ? false : true
  );

  const handleRentNowClick = () => {
    setShowLandingPage(false);
    localStorage.setItem("showLandingPage", "false");
  };

  return (
    <div>
      {showLandingPage ? (
        <LandingPage onRentNow={handleRentNowClick} />
      ) : (
        <div>
          <div
            className={`w-full ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            } flex flex-col`}
          >
            <Navbar />
          </div>
          <Routes>
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/" element={<HomeContent />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/AuthPage" element={<AuthPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/congratulations" element={<Congratulations />} /> 
          </Routes>
        </div>
      )}
    </div>
  );
};

export default AllRoutes;
