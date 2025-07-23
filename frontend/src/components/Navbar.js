import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import pmuyLogo from '../assets/pumy-logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={pmuyLogo} alt="PMUY Logo" className="nav-logo" />
          <span className="brand-text ms-2">PMUY Portal</span>
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/apply">Apply</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/status">Check Status</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admin">Admin Panel</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
