import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ scrollToProjects, scrollToContact, scrollToAbout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (scrollFunction) => {
    scrollFunction();
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src="/images/logo.png" alt="CP Logo" className="about-logo" />

        <button className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => handleNavClick(scrollToAbout)} className='nav-button'>About</button>
          <button onClick={() => handleNavClick(scrollToProjects)} className="nav-button">Projects</button>
          <button onClick={() => handleNavClick(scrollToContact)} className="nav-button">Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
