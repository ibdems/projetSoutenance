import React from 'react';
import './navbar.css';

function Navbar({ sizeNav, onNavToggle, sizeNavWidth }) {
  return (
    <nav className="stylenavbar" style={{ width: sizeNav, transition: 'width 0.3s ease-in-out' , left: sizeNavWidth }}>
      <div className="navbar-menu-toggle">
        <button className="menu-toggle-button" onClick={onNavToggle}>
          <i className="bi bi-blockquote-right"></i>
        </button>
      </div>
      <div className="navbar-icons">
        <button className="notification-button">
          <i className="bi bi-bell"></i> {/* Icône de notification */}
        </button>
        <div className="user-profile">
          <img src="user-photo.jpg" alt="User" className="user-photo" /> {/* Photo de l'utilisateur */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
