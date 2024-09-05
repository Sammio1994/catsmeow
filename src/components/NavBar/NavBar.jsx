import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">MyLogo</div>
            <ul className={isOpen ? "nav-links open" : "nav-links"}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="Product">CheckOut</a></li>
                <li><a href="#contact">ContactUs</a></li>
                <li><a href="#contact">Products</a></li>
                <li><a href="#contact">Basket</a></li>
            </ul>
            <div className={isOpen ? "" : ""} onClick={toggleMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
};

export default NavBar;