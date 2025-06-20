"use client"
import React, { useState } from 'react'; // Import useState for managing mobile menu state

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control mobile menu visibility

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      style={{ backgroundColor: 'rgb(1, 82, 226)' }}
      className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-md" // Added shadow for depth
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Left: Logo and Brand Name */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="rounded-full transition-colors duration-200 hover:bg-[#001F61] text-white p-1">
            {/* Using the 8K enhanced image for the logo */}
            <img src="wallii.png" className="h-10 w-10" alt="Walli-i Logo" />
          </div>
          <span className="self-center text-2xl font-extrabold whitespace-nowrap text-white">
            Wall-i
          </span>
        </a>

        {/* Right: Get Started Button & Mobile Menu Toggle */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
         <button
  type="button"
  className="text-white bg-[#012F99] hover:bg-[#001F61] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
             text-base px-4 py-2  md:text-xl md:px-5 md:py-2.5   // Responsive text and padding
             text-center transition-all duration-100 ease-in-out transform hover:scale-101"
>
  Get started
</button>
          <button
            onClick={toggleMobileMenu} // Attach click handler
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 transition-colors duration-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen ? "true" : "false"} // Dynamically set aria-expanded
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              stroke="currentColor" // Changed fill to stroke for better icon visibility
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Middle: Nav Items (Responsive) */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden' // Conditional rendering based on state
          } items-center   justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out`} // Added transition for smooth opening/closing
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 w-full"> {/* Changed md:bg-white to md:bg-transparent */}
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-white   md: md:text-white text-xl md:px-4  rounded-full dark:text-white hover:bg-[#001F61]  transition-colors duration-200" // Hover effects
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-white   md: md:text-white text-xl md:px-4 rounded-full  dark:text-white hover:bg-[#001F61]  transition-colors duration-200" // Adjusted text color and hover
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-white   md: md:text-white text-xl md:px-4 rounded-full dark:text-white hover:bg-[#001F61]  transition-colors duration-200" // Adjusted text color and hover
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-white   md: md:text-white text-xl md:px-4 rounded-full  dark:text-white hover:bg-[#001F61]  transition-colors duration-200" // Adjusted text color and hover
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;