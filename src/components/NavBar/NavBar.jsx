import React from 'react';
import './Navbar.css';
 
const Navbar = () => {
return( <nav className="navbar">
    <div className="navbar-container">
    <a href="/" className="navbar-logo">MySite</a>
    <ul className="navbar-menu">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/contact">Contact</a></li>
    </ul>
    </div>
    </nav>)
};
 
export default Navbar;