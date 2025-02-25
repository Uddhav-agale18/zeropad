import { useState } from "react";
import logo from "./images/logo.png";

const Navbar = () => {
  // State to handle sidebar visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="w-full bg-white shadow-md px-10 py-3 flex justify-between items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Logo */}
      <a href="/">
        <img src={logo} alt="Zeropad Logo" className="h-12" />
      </a>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-8 font-medium">
          <li>
            <a href="/" className="text-black no-underline hover:text-black transition duration-300">Home</a>
          </li>
          <li>
            <a href="/about" className="text-black no-underline hover:text-black transition duration-300">About</a>
          </li>
          <li>
            <a href="/products" className="text-black no-underline hover:text-black transition duration-300">Products</a>
          </li>
          <li>
            <a href="/community" className="text-black no-underline hover:text-black transition duration-300">Community</a>
          </li>
          <li>
            <a href="/corporate" className="text-black no-underline hover:text-black transition duration-300">Corporate</a>
          </li>
          <li>
            <a href="/contact" className="text-black no-underline hover:text-black transition duration-300">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar} // Close sidebar when clicking outside
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 md:hidden transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="Zeropad Logo" className="h-10" />
          <button className="text-black focus:outline-none" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col text-lg font-medium p-6 space-y-6">
          <li>
            <a href="/" className="text-black no-underline hover:text-black transition duration-300" onClick={toggleSidebar}>Home</a>
          </li>
          <li>
            <a href="/about" className="text-black no-underline hover:text-black transition duration-300" onClick={toggleSidebar}>About</a>
          </li>
          <li>
            <a href="/products" className="text-black no-underline hover:text-black transition duration-300" onClick={toggleSidebar}>Products</a>
          </li>
          <li>
            <a href="/community" className="text-black no-underline hover:text-black transition duration-300" onClick={toggleSidebar}>Community</a>
          </li>
          <li>
            <a href="/corporate" className="text-black no-underline hover:text-black transition duration-300" onClick={toggleSidebar}>Corporate</a>
          </li>
          <li>
            <a href="/contact" className="text-black no-underline hover:text-black transition duration-300" onClick={toggleSidebar}>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
