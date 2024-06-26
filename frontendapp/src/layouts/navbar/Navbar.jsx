import React from 'react';
import './navbar.css';
import { Col, Row } from 'reactstrap';
import image from '../../image/team-1.jpg'
import { ProgressBar } from 'primereact/progressbar';

function Navbar({ sizeNav, onNavToggle, sizeNavWidth }) {
  return (
    <>
      <nav className="stylenavbar" style={{ width: sizeNav, left: sizeNavWidth }}>
      <div className="navbar-menu-toggle">
        <button className="menu-toggle-button" onClick={onNavToggle}>
          <i className="bi bi-blockquote-right"></i>
        </button>
      </div>

      <div className="navbar-icons">
        <Row>
          <Col className='mt-1'><i className="bi bi-bell-fill fs-4"></i></Col>
          <Col className='mt-1'><i className="bi bi-chat-right-fill fs-4"></i></Col>
          <Col>
            <Row>
              <Col></Col>
              <Col></Col>
            </Row>
            <img src={image} alt="User" className="user-photo" />
          </Col>
        </Row>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
