import React from 'react';
import './NavFooter.css'; 

const NavFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="footer-social">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
        <div className="footer-contact">
          <p>Email: info@catmeow.com</p>
          <p>Phone: +123 456 789</p>
        </div>
        <div className="footer-newsletter">
          <form>
            <input type="email" placeholder="Subscribe to newsletter" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Brand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default NavFooter;