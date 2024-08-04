import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'white', color: 'black', padding: '2rem 0' }}>
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-blue-500">SkillCamp</h3>
        </div>
        <div className="flex justify-center space-x-6 mb-6 text-black">
          <a href="#" className="hover:text-blue-500 transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="mb-6">
          <p>&copy; {new Date().getFullYear()} SkillCamp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
