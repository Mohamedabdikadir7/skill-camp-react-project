import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then(data => {
        alert('Form submitted successfully');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          contactNumber: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('Error submitting the form:', error);
        alert('Form submission failed');
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded-lg p-10 w-full max-w-lg" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="firstName">First Name</label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="lastName">Last Name</label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="contactNumber">Contact Number</label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="tel"
            name="contactNumber"
            id="contactNumber"
            placeholder="Contact number"
            required
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            name="message"
            id="message"
            placeholder="Message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
