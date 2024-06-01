import React, { useState } from 'react';
import LandingPage from './LandingPage';
import HomeContent from './HomeContent';



const Home = () => {
  const [showLandingPage, setShowLandingPage] = useState(localStorage.getItem('showLandingPage') === 'false' ? false : true);

  const handleRentNowClick = () => {
    setShowLandingPage(false);
    localStorage.setItem('showLandingPage', 'false');
  };


  return (
    <div>
      {showLandingPage ? (
        <LandingPage onRentNow={handleRentNowClick} />
      ) : (
        <HomeContent />
      )}
    </div>
  );
};

export default Home;
