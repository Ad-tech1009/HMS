import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import AboutUs from './pages/aboutus';
import HomePage from './pages/home';
import Contact from './pages/contact';

const App = () => {
  return (
    <Router>
        <Header />
      <Routes>
      <Route path="/" element={< HomePage/>} /> {/* Render homePage */}
        <Route path="/login" element={<LoginPage />} /> {/* Render LoginPage */}
        <Route path="/about" element={<AboutUs />} /> {/* Render AboutUs page */}
        <Route path="/contact" element={<Contact />} /> {/* Render AboutUs page */}
      </Routes>
    </Router>
    
  );
};

export default App;
