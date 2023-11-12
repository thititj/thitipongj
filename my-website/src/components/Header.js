import React from 'react';
import './Header.css'; // Add styling later
import  flukeImg  from '../images/fluke.png'

const Header = () => {
  return (
    <header className="header">
      <img src={flukeImg} alt="Your Name" />
    </header>
  );
}

export default Header;
