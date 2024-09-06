import React from 'react';
import './NavFooter.css';

const NavFooter = () => {
  return (
    <div className="nav-footer">
      <div className="nav-footer-item">
        <img src="/images/cat1.jpg" alt="Cat Image 1" />
        <p>Buying the Cat</p>
      </div>
      <div className="nav-footer-item">
        <img src="/images/cat2.jpg" alt="Cat Image 2" />
        <p>Adopting</p>
      </div>
    </div>
  );
};

export default NavFooter;