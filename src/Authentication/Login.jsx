import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../Components/ThemeContext/ThemeContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Login = () => {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const passwordInputRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
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
      if (rememberMe) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      }
      // Perform login action here (e.g., call an API)
      alert('Login successful!');
    }
  };

  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (passwordInputRef.current && !passwordInputRef.current.contains(event.target)) {
        setShowPassword(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen flex items-center justify-center p-4`}>
      <div className="w-full max-w-md shadow-2xl p-6 mt-4 rounded-3xl space-y-8 ">
        <div className="text-center">
          <h2 className="mt-6 text-xl">{isForgotPassword ? 'Forgot Password' : 'Login'}</h2>
          <p className="mt-2 text-sm">
            {isForgotPassword ? 'Reset your password' : 'Welcome back to the Village Car Rent'}
          </p>
        </div>
        {isForgotPassword ? (
          <form className="mt-8 space-y-6">
            <div className='mb-5'>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none block w-full px-3 py-2 border placeholder-gray-500 rounded-3xl focus:outline-none focus:ring focus:border-blue-300 sm:text-sm ${isDarkMode ? 'border-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-700' : 'border-gray-300'}`}
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${isDarkMode ? 'text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-indigo-500' : 'text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
              >
                Reset Password
              </button>
            </div>
            <div className="flex items-center justify-center mt-6">
              <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500" onClick={() => setIsForgotPassword(false)}>
                Back to Login
              </button>
            </div>
          </form>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && <div className="text-red-500">{error}</div>}
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm space-y-6">
              <div className='mb-5'>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`appearance-none block w-full px-3 py-2 border placeholder-gray-500 rounded-3xl focus:outline-none focus:ring focus:border-blue-300 sm:text-sm ${isDarkMode ? 'border-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-700' : 'border-gray-300'}`}
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className='mb-5 relative' ref={passwordInputRef}>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className={`appearance-none block w-full px-3 py-2 border placeholder-gray-500 rounded-3xl focus:outline-none focus:ring focus:border-blue-300 sm:text-sm ${isDarkMode ? 'border-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-700' : 'border-gray-300'}`}
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={() => setShowPassword(false)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash className="text-gray-500 dark:text-gray-400" /> : <FaEye className="text-gray-500 dark:text-gray-400" />}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <button type="button" className="text-indigo-600 hover:text-indigo-500" onClick={handleForgotPasswordClick}>
                    Forgot your password?
                  </button>
                </div>
              </div> 
              <div>
                <button
                  type="submit"
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${isDarkMode ? 'text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-indigo-500' : 'text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        )}
        <div className="flex items-center justify-center">
          {/* Use Link component from react-router-dom */}
          <span className="text-sm text-gray-600">Already have an account? </span>
          <Link to="/signup" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
           Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
 

