import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../Images/logo1.png'; // <-- Use relative path
import logo2 from '../Images/logo2.png'; // <-- Use relative path

function Header() {
  const [currentLogo, setCurrentLogo] = useState(logo1);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo(prevLogo => (prevLogo === logo1 ? logo2 : logo1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <img
          src={currentLogo}
          alt="Isumi Consulting Logo"
          className="h-20 w-auto transition-opacity duration-1000"
        />

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 font-semibold text-blue-600 text-base">
          <li><Link to="/" className="hover:text-red-500">Home</Link></li>
          <li><Link to="/AboutUs" className="hover:text-red-500">About Us</Link></li>
          <li><Link to="/services" className="hover:text-red-500">Services</Link></li>
          <li><Link to="/Contact" className="hover:text-red-500">Contact</Link></li>
          <li><Link to="/Blog" className="hover:text-red-500">Blog</Link></li>
          <li><Link to="/client-portal" className="hover:text-red-500">Client Portal</Link></li>
          <li><Link to="/internship" className="hover:text-red-500">Internship</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-white text-blue-600 font-semibold text-base">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Home</Link></li>
          <li><Link to="/AboutUs" onClick={() => setMenuOpen(false)} className="hover:text-red-500">About Us</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Services</Link></li>
          <li><Link to="/Contact" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Contact</Link></li>
          <li><Link to="/Blog" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Blog</Link></li>
          <li><Link to="/client-portal" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Client Portal</Link></li>
          <li><Link to="/internship" onClick={() => setMenuOpen(false)} className="hover:text-red-500">Internship</Link></li>
        </ul>
      )}
    </header>
  );
}

export default Header;
