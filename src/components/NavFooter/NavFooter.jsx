import React from 'react';
import './NavFooter.css'; // اگر فایل استایل دارید

const NavFooter = () => {
  return (
    <footer className="nav-footer">
      <div className="nav-footer-item">
        <img src="/image/cat1.jpg" alt="Buying the Cat" />
        <p>Buying the Cat</p>
      </div>
      <div className="nav-footer-item">
        <img src="/images/adopting.jpg" alt="Adopting" />
        <p>Adopting</p>
      </div>
    </footer>
  );
};

export default NavFooter;