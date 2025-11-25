import React from "react";
import { NavLink } from "react-router-dom";
import Facebook from '@assets/logo/facebook.png';
import Instagram from '@assets/logo/instagram.jpg';
import Twitter from '@assets/logo/twitter.jpg';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <nav>
        <ul>
          <li>
            <NavLink to=""> <img src={Facebook} alt="logo facebook" className="footer-logo" /></NavLink>
          </li>
          <li>
            <NavLink to=""> <img src={Instagram} alt="logo instagram" className="footer-logo" /></NavLink>
          </li>
          <li>
            <NavLink to=""> <img src={Twitter} alt="logo twitter" className="footer-logo" /></NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
