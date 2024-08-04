// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Kourse from './components/Kourse';
import Nav from './components/Nav';
import Sign from './components/Sign';
import Login from './components/Login';
import Js from './components/Js';
import Html from './components/Html';
import Css from './components/Css';
import Admin from './components/Admin';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Reacts from './components/Reacts';
import Tail from './components/Tail';
import Boot from './components/Boot';

const App = () => {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
      
        <Route path="/kourse" element={<Kourse />} />
        <Route path="/about" element={<About />} />
        <Route path="/js" element={<Js />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/reacts" element={<Reacts/>}/>
        <Route path="/boot" element={<Boot/>}/>
        <Route path="/tail" element={<Tail/>}/>
      </Routes>
      
    </Router>
    
 <Footer />
    </>
   
  );
};

export default App;
