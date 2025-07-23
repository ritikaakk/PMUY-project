import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-card shadow">
        <h1 className="hero-title">Pradhan Mantri Ujjwala Yojana</h1>
        <p className="hero-subtext">
          Empowering rural households with LPG connections for a cleaner, healthier future.
        </p>
        <div className="btn-group">
          <Link to="/apply" className="btn gradient-btn">Apply Now</Link>
          <Link to="/status" className="btn btn-outline-dark">Check Status</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
