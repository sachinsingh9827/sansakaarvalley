import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/sanskaarvalley.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex flex-col bg-[#152259]" > 
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Logo */}
        <div className=" flex items-center text-2xl font-bold text-white ml-2">
          <Link to="/">
            <img
              className="max-w-[50px] h-auto border-solid-black border rounded-full mr-2"
              src={logo}
              alt="logo"
            />
          </Link> Sanskaar valley
        </div>

        {/* Menu Icon for Mobile */}
        <div className="block lg:hidden mt-2 mr-4 text-white">
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle Menu"
            className="focus:outline-none transition-transform  duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden lg:flex space-x-10">
    <Link to="/" className={`text-white hover:text-black font-semibold transition duration-300 no-underline`}>Home</Link>
    <Link to="/about" className="text-white  font-semibold transition duration-300 no-underline">About</Link>
    <Link to="/services" className="text-white  font-semibold transition duration-300 no-underline">Services</Link>
    <Link to="/contact" className="text-white  font-semibold transition duration-300 no-underline">Contact</Link>
    <Link to="/login" className="text-white px-4 hover:bg-[#0871b3] rounded-3xl ml-4 font-semibold no-underline border-2">Login</Link>
</div>

      </div>

      {/* Dropdown Menu for Mobile */}
     {/* Dropdown Menu for Mobile */}
<div
  className={`${
    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
  } lg:hidden transition-all duration-100 ease-in-out overflow-hidden bg-black mt-4 space-y-4 p-2`} // Adjusted to max-h-screen
>
  <Link to="/" className="block text-white hover:text-green-300 transition no-underline font-semibold duration-300">
    Home
  </Link>
  <Link to="/about" className="block text-white hover:text-green-300 no-underline font-semibold transition duration-300">
    About
  </Link>
  <Link to="/services" className="block text-white hover:text-green-300 no-underline font-semibold transition duration-300">
    Services
  </Link>
  <Link to="/contact" className="block text-white hover:text-green-300 no-underline font-semibold transition duration-300">
    Contact
  </Link>
  <Link to="/login" className="block text-white  no-underline font-semibold transition duration-300">
    Login
  </Link>
</div>
<div className="border-b border-white pb-2"/>
    </nav>
  );
};

export default Navbar;
