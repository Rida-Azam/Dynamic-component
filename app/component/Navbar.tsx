// src/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-md rounded-b-lg p-4">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-6">
          <li>
            <a
              href="/"
              className="text-white hover:text-yellow-950 font-semibold transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-white hover:text-yellow-950 font-semibold transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/country"
              className="text-white hover:text-yellow-950 font-semibold transition duration-300"
            >
              Country
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
