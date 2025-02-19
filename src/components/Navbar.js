import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
  );
};

export default Navbar;
