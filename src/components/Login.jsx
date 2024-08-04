import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/users');
      const user = response.data.find(
        (user) => user.email === formData.email && user.password === formData.password
      );
      if (user) {
        alert('Login successful');
        navigate('/kourse'); // Redirect to the course page
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full relative flex flex-col p-8 rounded-md text-black bg-white shadow-md">
        <div className="text-3xl font-bold mb-4 text-[#1e0e4b] text-center">Welcome back</div>
        <div className="text-lg font-normal mb-6 text-center text-[#1e0e4b]">Log in to your account</div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="block relative">
            <label htmlFor="email" className="block text-gray-600 cursor-text text-lg leading-[140%] font-normal mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded border border-gray-200 text-lg w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-12 m-0 p-[14px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="block relative">
            <label htmlFor="password" className="block text-gray-600 cursor-text text-lg leading-[140%] font-normal mb-2">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="rounded border border-gray-200 text-lg w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-12 m-0 p-[14px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
         
          <button type="submit" className="bg-[#1525b8] w-max m-auto px-8 py-3 rounded text-white text-lg font-normal">Submit</button>
        </form>
        <div className="text-lg text-center mt-[1.6rem]">Don’t have an account yet? <Link className="text-lg text-[#5d29ee]" to="/sign">Sign up for free!</Link></div>
      </div>
    </div>
  );
};

export default Login;
