import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Pradhan Mantri Ujjwala Yojana | All Rights Reserved</p>
      <p>
        Official Info: <a href="https://pmuy.gov.in" target="_blank" rel="noreferrer">pmuy.gov.in</a>
      </p>
    </footer>
  );
}

export default Footer;
