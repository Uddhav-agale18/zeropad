import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import logo from "../Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-white to-purple-200 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-32 transition-transform duration-300 hover:scale-105" />
        </Link>

        {/* Mobile Toggle Button */}
        <button className="lg:hidden text-black focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
        </button>

        {/* Mobile Menu (Opens from Right) */}
        <div
          className={`lg:hidden fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out`}
        >
          <button className="absolute top-4 right-4 text-gray-700" onClick={() => setIsOpen(false)}>
            <XMarkIcon className="h-8 w-8" />
          </button>

          <ul className="flex flex-col items-center mt-16 space-y-6 text-gray-700">
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

        {/* User Profile Icon */}
        <div className="hidden lg:flex items-center">
          <UserCircleIcon className="h-10 w-10 text-black transition-transform duration-300 hover:scale-110 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
