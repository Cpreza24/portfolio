import React from 'react';
import './Navbar.css';

function Navbar({ scrollToProjects, scrollToContact }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Cesar Preza</h1>
        <button onClick={scrollToProjects} className="nav-button">Projects</button>
        <button onClick={scrollToContact} className="nav-button">Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
