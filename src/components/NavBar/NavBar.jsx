import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Style it in Navbar.css

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/basket">Basket</Link>
        </li>
        <li className="navbar-item">
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;