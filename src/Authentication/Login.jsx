import React from 'react';
import googleImg from '../assets/web_light_sq_SU.svg';
import { useTheme } from '../Components/ThemeContext/ThemeContext';

const Login = () => {
  const { isDarkMode } = useTheme();
  return (
    
    <div className={`${isDarkMode?'bg-black text-white':'bg-white text-black'} min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold  dark:text-white">Login</h2>
          <p className="mt-2 text-sm  ">
            Welcome back to the app
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Email address" 
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                autoComplete="current-password" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Password" 
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                id="remember_me" 
                name="remember_me" 
                type="checkbox" 
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-700 rounded" 
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900 dark:text-gray-400">
                Keep me signed in
              </label>
            </div>

            <div className="text-sm">
              <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot Password?
              </a>
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>

          <div className="flex items-center justify-center mt-4">
            <span className="text-gray-500 dark:text-gray-400">or sign in with</span>
          </div>
          <div>
            <button 
              type="button" 
              className="w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <img className="mr-2" src={googleImg} alt="Google logo" />
            </button>
          </div>

          <div className="flex items-center justify-center mt-6">
            <a href="/signup" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
