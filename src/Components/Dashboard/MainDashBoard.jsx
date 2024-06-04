import React from 'react';
import Sidebar from './DasboardNavbar/Sidebar';
import Header from './DasboardNavbar/DashboardHeader';
import Statistics from './Statistics';
import CarAvailability from './CarAvailability';
import LiveCarStatus from './LiveCarStatus';
import HireCancelChart from './HirvsCancelChart';
import EarningSummaryChart from './EarningSummaryChart';

const MainDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <Header />
        <div className="mt-4">
          <Statistics />
          <CarAvailability />
          <LiveCarStatus />
          <HireCancelChart />
          <EarningSummaryChart />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
