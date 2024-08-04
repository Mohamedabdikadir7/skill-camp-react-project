import React from 'react';
import { FaGraduationCap, FaUniversalAccess, FaUsers, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container bg-slate-900 text-white p-6 md:p-12 rounded-md shadow-lg">
      <h2 className="font text-blue-600 font-extrabold mb-10 text-4xl md:text-5xl text-center" style={{ fontSize: '30px' }}>
        About SkillCamp
      </h2>
      <div className="max-w-4xl mx-auto">
        <p className=" jam text-lg md:text-xl font-medium leading-relaxed mb-8">
          Welcome to SkillCamp, your number one source for all things learning. We're dedicated to giving you the very best of e-learning experiences, with a focus on quality content, expert guidance, and a supportive community.
        </p>
       
        <p className="text-lg md:text-xl font-medium leading-relaxed mb-12">
          Our mission is to democratize education by providing access to a diverse range of courses, taught by industry experts. Whether you're looking to start a new career, improve your current skills, or explore new hobbies, SkillCamp has something for you.
        </p>

        <h3 className="text-blue-600 font-extrabold mt-12 mb-8 text-3xl md:text-4xl text-center" style={{ fontSize: '30px' }}>
          Our Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center bg-white text-black rounded-lg p-6 shadow-md">
            <FaGraduationCap className="text-blue-600 text-4xl mb-4" />
            <p className="text-lg text-center">
              <span className="font-bold">Quality Education:</span> We provide top-notch content created by industry experts.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white text-black rounded-lg p-6 shadow-md">
            <FaUniversalAccess className="text-blue-600 text-4xl mb-4" />
            <p className="text-lg text-center">
              <span className="font-bold">Accessibility:</span> Learning should be accessible to everyone, everywhere.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white text-black rounded-lg p-6 shadow-md">
            <FaUsers className="text-blue-600 text-4xl mb-4" />
            <p className="text-lg text-center">
              <span className="font-bold">Community:</span> Join a supportive community of learners and professionals.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white text-black rounded-lg p-6 shadow-md">
            <FaLightbulb className="text-blue-600 text-4xl mb-4" />
            <p className="text-lg text-center">
              <span className="font-bold">Innovation:</span> We continuously update our courses to reflect the latest industry trends.
            </p>
          </div>
        </div>

        <h3 className="text-blue-600 font-extrabold mt-16 mb-8 text-3xl md:text-4xl text-center" style={{ fontSize: '30px' }}>
          Join Us Today
        </h3>
        <p className="text-lg md:text-xl font-medium leading-relaxed mb-12 text-center">
          Start your learning journey with SkillCamp today and unlock your potential. Whether you're looking to advance your career, learn new skills, or explore new interests, SkillCamp is here to help you every step of the way.
        </p>
        <div className="flex justify-center">
          <Link
            to="/kourse"
            className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center"
          >
            Browse our Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
