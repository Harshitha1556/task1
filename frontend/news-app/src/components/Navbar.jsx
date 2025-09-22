import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>News App</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/support">Support</Link>
      </div>
    </nav>
  );
};

export default Navbar;
