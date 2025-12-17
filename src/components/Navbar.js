import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-text">Tech</span>
            <span className="logo-highlight">Innovators</span>
          </Link>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>
              About
            </Link>
            <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>
              Services
            </Link>
            <Link to="/team" className={`nav-link ${isActive('/team')}`} onClick={closeMenu}>
              Team
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>
              Contact
            </Link>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
