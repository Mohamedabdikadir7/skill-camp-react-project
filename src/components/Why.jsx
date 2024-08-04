import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Why = () => {
  const [students, setStudents] = useState(0);
  const [graduates, setGraduates] = useState(0);
  const [partners, setPartners] = useState(0);
  const [employmentRate, setEmploymentRate] = useState(0);

  const incrementNumber = (target, setState) => {
    let current = 0;
    const incrementTime = Math.abs(Math.floor(2000 / target));
    const timer = setInterval(() => {
      current += 1;
      setState(current);
      if (current === target) {
        clearInterval(timer);
      }
    }, incrementTime);
  };

  useEffect(() => {
    incrementNumber(100, setStudents);
    incrementNumber(300, setGraduates);
    incrementNumber(20, setPartners);
    incrementNumber(85, setEmploymentRate);
  }, []);

  return (
    <div className="relative bg-slate-900 p-8">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-900 to-black opacity-50"></div>
      <div className="relative flex flex-col md:flex-row items-center">
        <div className="flex-none mb-8 md:mb-0">
          <img 
            src="https://pbs.twimg.com/media/GPSU1oxXIAAUGhx?format=jpg&name=large" 
            alt="Skill Mentors" 
            className="w-full md:w-[415px] h-[398px] object-cover rounded-lg shadow-lg" 
          />
        </div>
        <div className="text-white md:ml-24 pl-7">
          <h2 className="font text-4xl font-extrabold mb-2 leading-tight style={{ fontSize: '16px' }}">
            Why Choose SkillCamp?
          </h2>
          <p className=" jam text-lg font-medium leading-relaxed max-w-lg" style={{ lineHeight: '1.9', opacity: 0.7 }}>
  At SkillCamp, you'll get hands-on guidance from industry experts who are dedicated to your success. Dive into real-world projects, stay ahead with cutting-edge curriculum, and join a dynamic community of learners. Transform your passion into a profession—start with SkillCamp today!
</p>

          <div className="flex justify-center mt-6">
          <Link 
        to="/kourse" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300"
      >
        Browse our Courses
      </Link>
          </div>
        </div>
      </div>
      <div className="relative flex flex-wrap justify-between items-center mt-12 w-full px-6">
        <div className="flex flex-col items-center mb-6 md:mb-0 w-1/2 md:w-auto">
          <h3 className="text-3xl font-bold text-blue-500">{students}+</h3>
          <p className="text-xl text-white">Enrolled Students</p>
        </div>
        <div className="flex flex-col items-center mb-6 md:mb-0 w-1/2 md:w-auto">
          <h3 className="text-3xl font-bold text-blue-500">{graduates}+</h3>
          <p className="text-xl text-white">Graduates</p>
        </div>
        <div className="flex flex-col items-center mb-6 md:mb-0 w-1/2 md:w-auto">
          <h3 className="text-3xl font-bold text-blue-500">{partners}+</h3>
          <p className="text-xl text-white">Employer Partners</p>
        </div>
        <div className="flex flex-col items-center mb-6 md:mb-0 w-1/2 md:w-auto">
          <h3 className="text-3xl font-bold text-blue-500">{employmentRate}%</h3>
          <p className="text-xl text-white">Employment Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Why;
