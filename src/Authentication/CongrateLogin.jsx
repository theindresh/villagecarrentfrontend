import React from 'react';
import CongratulationsImg from '../assets/3021.jpg';
import { Link } from 'react-router-dom';

const Congratulations = () => {
  return (
    <div className=" mt-8 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <img className="mx-auto my-auto rounded-3xl shadow-2xl" src={CongratulationsImg} alt="Congratulations" />
          <h2 className="mt-6 text-2xl font-semibold">You have successfully created your account.</h2>
         
        </div>
        <div className="mt-6">
       <Link to="/login"  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1877A6] hover:bg-[#1877a6cc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1877a681]">Procede To Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
