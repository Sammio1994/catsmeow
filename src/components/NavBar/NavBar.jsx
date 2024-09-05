import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Style it in Navbar.css
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa'; // Add FontAwesome icons


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaBars className="menu-icon" onClick={toggleMenu} />
        <ul className={`menu-list ${isMenuOpen ? 'show' : ''}`}>
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
      </div>
      <div className="navbar-right">
        <FaSearch className="icon search-icon" />
        <Link to="/basket">
          <FaShoppingCart className="icon cart-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;