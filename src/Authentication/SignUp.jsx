import React from 'react';
import { useTheme } from '../Components/ThemeContext/ThemeContext';

const SignUp = () => {


  const { isDarkMode } = useTheme();
  return (
    <div className={`${isDarkMode?'bg-black text-white':'bg-white text-black'} min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold">Create an account</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                autoComplete="name" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Name" 
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
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

          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            By continuing, you agree to our <a href="/" className="text-blue-600">terms of service</a>.
          </div>

          <div>
            <button 
              type="submit" 
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => window.location.href = '/congratulations'}
            >
              Sign up
            </button>
          </div>

          <div className="flex items-center justify-center mt-4">
            <span className="text-gray-500 dark:text-gray-400">or</span>
          </div>
          <div>
            <button 
              type="button" 
              className="w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <img className="h-5 w-5 mr-2" src="/path/to/google-logo.png" alt="Google logo" />
              Continue with Google
            </button>
          </div>

          <div className="flex items-center justify-center mt-6">
            <span className="text-sm text-gray-600 dark:text-gray-400">Already have an account? </span>
            <a href="/signin" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 ml-1">
              Sign in here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
