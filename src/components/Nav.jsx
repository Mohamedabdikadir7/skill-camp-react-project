// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/jiko.png'; // Ensure this path is correct

const Nav = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-20 w-auto" /> {/* Adjusted size */}
          </Link>
        </div>

        {/* Centered Links */}
        <div className="flex space-x-6">
          <Link to="/" className="font text-white px-3 py-2 font-sans text-lg font-semibold hover:text-green-400 transition duration-300 style={{ fontSize: '16px' }}">Home</Link>
          <Link to="/Kourse" className="font text-white px-3 py-2 font-sans text-lg font-semibold hover:text-green-400 transition duration-300">Courses</Link>
          <Link to="/about" className="font text-white px-3 py-2 font-sans text-lg font-semibold hover:text-green-400 transition duration-300 ">About Us</Link>
         
          <Link to="/contact" className="font text-white px-3 py-2 font-sans text-lg font-semibold hover:text-green-400 transition duration-300">Contact</Link>
          {/* <Link to="/admin" className="font text-white px-3 py-2 font-sans text-lg font-semibold hover:text-green-400 transition duration-300">Admin</Link> */}
        </div>

        {/* Right-aligned Buttons */}
        <div className="flex space-x-4">
          <Link to="/Login" className="font bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300">Login</Link>
          <Link to="/Sign" className="font bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition duration-300">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
