import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editContactId, setEditContactId] = useState(null);
  const [userForm, setUserForm] = useState({ email: '', password: '' });
  const [contactForm, setContactForm] = useState({ firstName: '', lastName: '', email: '', contactNumber: '', message: '' });

  useEffect(() => {
    fetchUsers();
    fetchContacts();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/contacts/${id}`);
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const editUser = (user) => {
    setEditUserId(user.id);
    setUserForm({ email: user.email, password: user.password });
  };

  const editContact = (contact) => {
    setEditContactId(contact.id);
    setContactForm({ 
      firstName: contact.firstName, 
      lastName: contact.lastName, 
      email: contact.email, 
      contactNumber: contact.contactNumber, 
      message: contact.message 
    });
  };

  const handleUserFormChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const saveUser = async () => {
    try {
      await axios.put(`http://localhost:3001/users/${editUserId}`, userForm);
      setUsers(users.map(user => (user.id === editUserId ? { ...user, ...userForm } : user)));
      setEditUserId(null);
      setUserForm({ email: '', password: '' });
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const saveContact = async () => {
    try {
      await axios.put(`http://localhost:3001/contacts/${editContactId}`, contactForm);
      setContacts(contacts.map(contact => (contact.id === editContactId ? { ...contact, ...contactForm } : contact)));
      setEditContactId(null);
      setContactForm({ firstName: '', lastName: '', email: '', contactNumber: '', message: '' });
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const cancelEditUser = () => {
    setEditUserId(null);
    setUserForm({ email: '', password: '' });
  };

  const cancelEditContact = () => {
    setEditContactId(null);
    setContactForm({ firstName: '', lastName: '', email: '', contactNumber: '', message: '' });
  };

  return (
    <div className="p-4 space-y-8">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4 bg-white">
        <h1 className="text-2xl font-bold mb-6 text-center">User Data</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Password</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.id}
                </th>
                <td className="px-6 py-4">
                  {editUserId === user.id ? (
                    <input 
                      type="text" 
                      name="email" 
                      value={userForm.email} 
                      onChange={handleUserFormChange} 
                      className="border rounded p-1"
                    />
                  ) : user.email}
                </td>
                <td className="px-6 py-4">
                  {editUserId === user.id ? (
                    <input 
                      type="text" 
                      name="password" 
                      value={userForm.password} 
                      onChange={handleUserFormChange} 
                      className="border rounded p-1"
                    />
                  ) : user.password}
                </td>
                <td className="px-6 py-4">
                  {editUserId === user.id ? (
                    <>
                      <button 
                        className="text-green-600 hover:text-green-800 mr-2" 
                        onClick={saveUser}
                      >
                        Save
                      </button>
                      <button 
                        className="text-gray-600 hover:text-gray-800" 
                        onClick={cancelEditUser}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        className="text-blue-600 hover:text-blue-800 mr-2" 
                        onClick={() => editUser(user)}
                      >
                        <FaEdit />
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-800" 
                        onClick={() => deleteUser(user.id)}
                      >
                        <FaTrash />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4 bg-white">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact Data</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">First Name</th>
              <th scope="col" className="px-6 py-3">Last Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Contact Number</th>
              <th scope="col" className="px-6 py-3">Message</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {contact.id}
                </th>
                <td className="px-6 py-4">
                  {editContactId === contact.id ? (
                    <input 
                      type="text" 
                      name="firstName" 
                      value={contactForm.firstName} 
                      onChange={handleContactFormChange} 
                      className="border rounded p-1"
                    />
                  ) : contact.firstName}
                </td>
                <td className="px-6 py-4">
                  {editContactId === contact.id ? (
                    <input 
                      type="text" 
                      name="lastName" 
                      value={contactForm.lastName} 
                      onChange={handleContactFormChange} 
                      className="border rounded p-1"
                    />
                  ) : contact.lastName}
                </td>
                <td className="px-6 py-4">
                  {editContactId === contact.id ? (
                    <input 
                      type="text" 
                      name="email" 
                      value={contactForm.email} 
                      onChange={handleContactFormChange} 
                      className="border rounded p-1"
                    />
                  ) : contact.email}
                </td>
                <td className="px-6 py-4">
                  {editContactId === contact.id ? (
                    <input 
                      type="text" 
                      name="contactNumber" 
                      value={contactForm.contactNumber} 
                      onChange={handleContactFormChange} 
                      className="border rounded p-1"
                    />
                  ) : contact.contactNumber}
                </td>
                <td className="px-6 py-4">
                  {editContactId === contact.id ? (
                    <input 
                      type="text" 
                      name="message" 
                      value={contactForm.message} 
                      onChange={handleContactFormChange} 
                      className="border rounded p-1"
                    />
                  ) : contact.message}
                </td>
                <td className="px-6 py-4">
                  {editContactId === contact.id ? (
                    <>
                      <button 
                        className="text-green-600 hover:text-green-800 mr-2" 
                        onClick={saveContact}
                      >
                        Save
                      </button>
                      <button 
                        className="text-gray-600 hover:text-gray-800" 
                        onClick={cancelEditContact}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        className="text-blue-600 hover:text-blue-800 mr-2" 
                        onClick={() => editContact(contact)}
                      >
                        <FaEdit />
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-800" 
                        onClick={() => deleteContact(contact.id)}
                      >
                        <FaTrash />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
