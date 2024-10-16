import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white py-8 rounded-t-3xl " style={ {background: "linear-gradient(to right, #105183, #252472)"}}>
      <div className="container mx-auto px-4">
        {/* Footer top with columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="text-lg font-semibold font-montserrat mb-4">About Sanskaar Valley School</h2>
            <p className="text-white font-montserrat">
              Sanskaar Valley School is committed to providing quality education and nurturing students' all-round development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold font-montserrat mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="/"  className="text-white hover:text-black font-semibold transition duration-300 no-underline ">Home</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-white hover:text-black font-semibold transition duration-300 no-underline">Services</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-white hover:text-black font-semibold transition duration-300 no-underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact" to="/contact" className="text-white hover:text-black font-semibold transition duration-300 no-underline">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/login"  className="text-white hover:text-black font-semibold transition duration-300 no-underline">Login</a>
              </li>
             
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold font-montserrat mb-4">Contact Us</h2>
            <p className="text-white  font-montserrat mb-2">Address: 123 School Lane, City, Country</p>
            <p className="text-white  font-montserrat mb-2">Phone: +123 456 7890</p>
            <p className="text-white  font-montserrat mb-2">Email: info@sanskaarvalley.edu</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold font-montserrat mb-4">Follow Us</h2>
            <div className="flex  space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray   p-2 rounded-full transition-colors hover:border-black  hover:text-black"
          >
            <FaFacebookF className="text-2xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray   p-2 rounded-full transition-colors hover:border-black  hover:text-black"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray   p-2 rounded-full transition-colors hover:border-black  hover:text-black"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray   p-2 rounded-full transition-colors hover:border-black  hover:text-black"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Sanskaar Valley School. All rights reserved.</p>
        </div>
      </div>
      <div className="flex justify-center gap-4"> 
          <a className="text-gray font-bold no-underline" href="/privacy-policy">Privacy Policy</a>
          <a className="text-gray font-bold no-underline" href="/terms-and-conditions">Terms of Use</a>
          <a className="text-gray font-bold no-underline" href="/faq">f&#38;c</a>
      </div>
        
    </footer>
  );
};

export default Footer;
