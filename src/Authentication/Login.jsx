import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../Components/ThemeContext/ThemeContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import googleImg from "../assets/web_light_sq_SU.svg";

const Login = () => {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
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
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      }
      // Perform login action here (e.g., call an API)
      alert("Login successful!");
    }
  };

  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        passwordInputRef.current &&
        !passwordInputRef.current.contains(event.target)
      ) {
        setShowPassword(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen flex items-center justify-center p-4`}
    >
      <div className="w-full max-w-md shadow-2xl p-6 mt-4 rounded-3xl space-y-8 bg-white dark:bg-gray-900">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold dark:text-white">
            {isForgotPassword ? "Forgot Password" : "Login"}
          </h2>
          <p className="mt-2 text-sm">
            {isForgotPassword
              ? "Reset your password"
              : "Welcome back to the Village Car Rent"}
          </p>
        </div>
        {isForgotPassword ? (
          <form className="mt-8 space-y-6">
            <div className="mb-5">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 rounded-3xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Reset Password
              </button>
            </div>
            <div className="flex items-center justify-center mt-6">
              <button
                type="button"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => setIsForgotPassword(false)}
              >
                Back to Login
              </button>
            </div>
          </form>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && <div className="text-red-500">{error}</div>}
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm space-y-6">
              <div className="mb-5">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 rounded-3xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-5 relative" ref={passwordInputRef}>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 rounded-3xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={() => setShowPassword(false)}
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-700 rounded"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-400"
                >
                  Keep me signed in
                </label>
              </div>

              <div className="text-sm">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={handleForgotPasswordClick}
                >
                  Forgot Password?
                </button>
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
              <span className="text-gray-500 dark:text-gray-400">
                or sign in with
              </span>
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
              <a
                href="/signup"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Create an account
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
