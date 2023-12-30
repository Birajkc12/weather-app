import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Explore Weather App</h3>
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Connect with Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm">&copy; 2023 Weather App | Made with ❤️ by Biraj Kc</p>
      </div>
    </footer>
  );
};

export default Footer;
