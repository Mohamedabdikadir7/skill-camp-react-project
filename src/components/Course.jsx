import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Make sure to create and import the App.css for styling

const Course = () => {
  return (
    <div className="courses-container bg-slate-900 text-white p-10 text-center rounded-md shadow-lg">
      <h2 className="title text-green-500" style={{ fontSize: '32px' }}>
        Featured Courses
      </h2>

      <div className="cards">
        <div className="card">
          <div className="image html-bg">
            <i className="fab fa-html5 fa-5x"></i>
          </div>
          <div className="content">
            <Link to="/html">
              <span className="title" style={{ fontSize: '22px' }}>HTML Basics</span>
            </Link>
            <p className="desc" style={{ fontSize: '16px' }}>
              Learn the fundamentals of web development with HTML.
            </p>
            <Link className="action bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition duration-300" to="/html">
              Find out more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="image css-bg">
            <i className="fab fa-css3-alt fa-5x"></i>
          </div>
          <div className="content">
            <Link to="/css">
              <span className="title" style={{ fontSize: '22px' }}>CSS Essentials</span>
            </Link>
            <p className="desc" style={{ fontSize: '16px' }}>
              Learn CSS to style your web pages with colors, fonts, and layouts.
            </p>
            <Link className="action bg-green-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition duration-300" to="/css">
              Find out more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="image js-bg">
          <i className="fab fa-js-square fa-5x icon-rounded"></i>
          </div>
          <div className="content">
            <Link to="/js">
              <span className="title" style={{ fontSize: '22px' }}>JavaScript for Beginners</span>
            </Link>
            <p className="desc" style={{ fontSize: '16px' }}>
              Master the basics of JavaScript and start building interactive websites.
            </p>
            <Link className="action bg-green-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition duration-300" to="/js">
              Find out more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <Link to="/kourse">
        <button className="btn-donate bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-full transition duration-300 mt-5">
          More Courses
        </button>
      </Link>
    </div>
  );
};

export default Course;
