import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';

function More() {
  return (
    <div style={{ backgroundColor: '#f3f4f6', color: '#1E293B' }} className="py-24 px-6">
      <h1 className="text-center font-extrabold text-3xl mb-6">
        Learn Practical Tech Skills from Experts
      </h1>
      <p className="text-center text-lg mb-8">
        With over 200 courses in JavaScript, React, and TypeScript to Node.js, Fullstack, and Backend
      </p>
      <div className="flex justify-center space-x-12 text-blue-500">
        <FaHtml5 size={80} />
        <FaCss3Alt size={80} />
        <FaBootstrap size={80} />
        <FaJsSquare size={80} />
        <FaReact size={80} />
        <FaNodeJs size={80} />
      </div>
    </div>
  );
}

export default More;
