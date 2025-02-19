import { useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../Images/logo.png";
=======
import logo from "./images/logo.png";
>>>>>>> origin/community

const Navbar = () => {
  // State to handle sidebar visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
<<<<<<< HEAD
    <nav className="bg-gradient-to-r from-white to-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-32 transition-transform duration-300 hover:scale-105" />
        </Link>

        {/* Mobile Toggle Button (Three Lines / X Icon) */}
        <button className="lg:hidden text-black focus:outline-none z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
        </button>

        {/* Mobile Sidebar */}
        <div
          className={`lg:hidden fixed top-0 right-0 w-3/4 sm:w-1/2 min-h-screen bg-white shadow-lg z-40 transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar Menu */}
          <ul className="flex flex-col items-center mt-16 space-y-6 text-bold text-gray-700">
            {["Home", "About", "Product", "Community", "Corporate", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block py-2 px-6 hover:text-blue-500 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          {["Home", "About", "Product", "Community", "Corporate", "Contact"].map((item, index) => (
            <Link key={index} to={`/${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-500 transition-all duration-300">
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden" onClick={() => setIsOpen(false)}></div>}
    </nav>
=======
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <img src={logo} alt="Zeropad Logo" className="h-10" />

      {/* Hamburger Icon for mobile */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-6 text-gray-700">
          <li>
            <a href="#" className="hover:text-black">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-black">About</a>
          </li>
          <li>
            <a href="/products" className="hover:text-black">Product</a>
          </li>
          <li>
            <a href="/Community" className="hover:text-black">Community</a>
          </li>
          <li>
            <a href="/corporate" className="hover:text-black">Corporate</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-black">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-700 bg-opacity-50 z-50 md:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar} // Close sidebar when clicking outside
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 md:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 p-6 text-gray-700">
          <li>
            <a href="#" className="hover:text-black" onClick={toggleSidebar}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black" onClick={toggleSidebar}>
              About
            </a>
          </li>
          <li>
            <a href="/products" className="hover:text-black" onClick={toggleSidebar}>
              Product
            </a>
          </li>
          <li>
            <a href="/Community" className="hover:text-black" onClick={toggleSidebar}>
              Community
            </a>
          </li>
          <li>
            <a href="/corporate" className="hover:text-black" onClick={toggleSidebar}>
              Corporate
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-black" onClick={toggleSidebar}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
>>>>>>> origin/community
  );
};

export default Navbar;