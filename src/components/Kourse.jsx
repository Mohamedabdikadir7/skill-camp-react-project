import React from 'react';
import { Link } from 'react-router-dom';

const Kourse = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Courses</h1>
      <p className="text-center text-lg mb-8">
        These courses are self-paced. And you can study at your convenient time.
      </p>

      <div className="bg-gray-200 p-6 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="font-semibold text-lg">What you'll learn?</p>
            <p className="font-bold text-gray-900">The full frontend development</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg">Duration?</p>
            <p className="font-bold text-gray-900">3 months</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg">Commitment?</p>
            <p className="font-bold text-gray-900">35 hours per week</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg">Format?</p>
            <p className="font-bold text-gray-900">Online, self-paced with <br />live support and mentoring</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* HTML Basics card */}
        <div className="card max-w-sm rounded-lg overflow-hidden shadow-xl bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200">
          <div className="image html-bg bg-red-500 flex items-center justify-center h-40 rounded-t-lg">
            <i className="fab fa-html5 fa-5x text-white"></i>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">HTML Basics</div>
            <p className="text-gray-700 text-base">Learn the fundamentals of web development with HTML.</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Link to="/html" className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition duration-300">
              Find out more<span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>

        {/* CSS Essentials card */}
        <div className="card max-w-sm rounded-lg overflow-hidden shadow-xl bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200">
          <div className="image css-bg bg-blue-500 flex items-center justify-center h-40 rounded-t-lg">
            <i className="fab fa-css3-alt fa-5x text-white"></i>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">CSS Essentials</div>
            <p className="text-gray-700 text-base">Learn CSS to style your web pages with colors, fonts, and layouts.</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Link to="/css" className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition duration-300">
              Find out more<span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>

        {/* JavaScript for Beginners card */}
        <div className="card max-w-sm rounded-lg overflow-hidden shadow-xl bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200">
          <div className="image js-bg bg-yellow-500 flex items-center justify-center h-40 rounded-t-lg">
            <i className="fab fa-js-square fa-5x text-white"></i>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">JavaScript for Beginners</div>
            <p className="text-gray-700 text-base">Master the basics of JavaScript and start building interactive websites.</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Link to="/js" className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition duration-300">
              Find out more<span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>

        {/* React Fundamentals card */}
        <div className="card max-w-sm rounded-lg overflow-hidden shadow-xl bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200">
          <div className="image react-bg bg-purple-500 flex items-center justify-center h-40 rounded-t-lg">
            <i className="fab fa-react fa-5x text-white"></i>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">React Fundamentals</div>
            <p className="text-gray-700 text-base">Learn to build dynamic web applications using React.</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Link to="/reacts" className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition duration-300">
              Find out more<span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>

      
        <div className="card max-w-sm rounded-lg overflow-hidden shadow-xl bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200">
          <div className="image bootstrap-bg bg-pink-500 flex items-center justify-center h-40 rounded-t-lg">
            <i className="fab fa-bootstrap fa-5x text-white"></i>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Bootstrap Essentials</div>
            <p className="text-gray-700 text-base">Master Bootstrap to quickly design and customize responsive mobile-first sites.</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Link to="/boot" className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition duration-300">
              Find out more<span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>

        {/* Figma for Designers card */}
        <div className="card max-w-sm rounded-lg overflow-hidden shadow-xl bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200">
          <div className="image figma-bg bg-teal-500 flex items-center justify-center h-40 rounded-t-lg">
            <i className="fab fa-figma fa-5x text-white"></i>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Figma for Designers</div>
            <p className="text-gray-700 text-base">Learn how to use Figma for designing user interfaces and user experiences.</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Link to="/tail" className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition duration-300">
              Find out more<span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kourse;