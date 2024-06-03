import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AuthPage from "../Authentication/AuthPage";
import LandingPage from "../Pages/LandingPage";
import HomeContent from "../Pages/HomeContent";
import Navbar from "../Components/Navbar/Navbar";
import { useTheme } from "../Components/ThemeContext/ThemeContext";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import Congratulations from "../Authentication/CongrateLogin";
import MainDashBoard from "../Components/Dashboard/MainDashBoard";
import PrivateRoutes from "../Routes/PrivateRoutes";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

const AllRoutes = () => {
  const { isDarkMode } = useTheme();
  const [showLandingPage, setShowLandingPage] = useState(localStorage.getItem("showLandingPage") === "false" ? false : true);
  const login = localStorage.getItem("login") === "true";
  const location = useLocation();

  useEffect(() => {
    if (login && location.pathname !== "/dashboard") {
      window.location.href = "/dashboard";
    }
  }, [login, location]);

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
          {!login && (
            <div
              className={`w-full ${
                isDarkMode ? "bg-black text-white" : "bg-white text-black"
              } flex flex-col`}
            >
              <Navbar />
            </div>
          )}

          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<HomeContent />} />
            <Route path="/login" element={login ? <Navigate to="/dashboard" /> : <Login />} />
            <Route path="/signup" element={login ? <Navigate to="/dashboard" /> : <SignUp />} />
            <Route path="/AuthPage" element={login ? <Navigate to="/dashboard" /> : <AuthPage />} />
            <Route path="/congratulations" element={login ? <Navigate to="/dashboard" /> : <Congratulations />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<MainDashBoard />} />
            </Route>
          </Routes>
        </div>
      )}
    </div>
  );
};

export default AllRoutes;
