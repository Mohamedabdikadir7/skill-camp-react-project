import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrosoft, FaGoogle, FaApple, FaAmazon, FaFacebook } from 'react-icons/fa';

function Our() {
  return (
    <div style={{ backgroundColor: '#333333', color: 'white', padding: '3rem', textAlign: 'center', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '5rem' }}>
        Learn Straight from the Experts Who Shape the Modern Web
      </p>
      <p style={{ fontSize: '1.25rem', marginBottom: '4rem', maxWidth: '40rem', margin: 'auto' }}>
        Our courses are taught by experts from these top companies and more.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem' }}>
        <FaMicrosoft className="text-6xl" />
        <FaGoogle className="text-6xl" />
        <FaApple className="text-6xl" />
        <FaAmazon className="text-6xl" />
        <FaFacebook className="text-6xl" />
      </div>
      <Link to="/sign">
        <button
          style={{
            backgroundColor: '#2563EB',
            color: 'white',
            fontWeight: 'bold',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#22C55E')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2563EB')}
        >
          Enroll Now
        </button>
      </Link>
    </div>
  );
}

export default Our;
