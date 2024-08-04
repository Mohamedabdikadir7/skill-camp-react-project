import React from 'react';
import More from './More';
import Why from './Why';
import Course from './Course';
import Our from './Our';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section style={{ backgroundColor: '#1E293B', color: 'white' }} className="py-24 px-6 flex flex-col items-center justify-center text-center">
        <h1 className=" font text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Become a Frontend Developer in <span className="text-yellow-300">Just 3 Months!</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Jumpstart your career with our immersive program. Get hands-on experience, build real-world projects, and master the skills to stand out in the tech industry.
        </p>
        <div className="flex space-x-4">
        <Link to="/sign" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
        Start Your Journey
      </Link>
      <Link to="/kourse" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
        Explore Courses
      </Link>
        </div>
      </section>
      <More />
      <Why />
      <Course />
      <Our />
      <br></br>
     
    
    </div>
  );
};

export default Home;
