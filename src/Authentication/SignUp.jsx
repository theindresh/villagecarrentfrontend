import React, { useState } from 'react';
import { useTheme } from '../Components/ThemeContext/ThemeContext';
import googleImg from '../assets/web_light_sq_SU.svg'; // Ensure the path to the image is correct
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const { isDarkMode } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform sign-up action here (e.g., call an API)
      alert('Sign up successful!');
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-md w-full shadow-2xl px-16 pb-4 mt-4 rounded-3xl space-y-8 bg-white dark:bg-gray-900">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold dark:text-white">Create an account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-500">{error}</div>}
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-3xl shadow-sm">
            <div className='mb-5'>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 rounded-3xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                value={name}
                onChange={handleInputChange(setName)}
              />
            </div>
            <div className='mb-5'>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 rounded-3xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={handleInputChange(setEmail)}
              />
            </div>
            <div className="mb-5 relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 rounded-3xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={handleInputChange(setPassword)}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-500 dark:text-gray-400" />
                ) : (
                  <FaEye className="text-gray-500 dark:text-gray-400" />
                )}
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            By continuing, you agree to our <a href="/" className="text-blue-600">terms of service</a>.
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
              <img className="h-5 w-5 mr-2" src={googleImg} alt="Google logo" />
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
