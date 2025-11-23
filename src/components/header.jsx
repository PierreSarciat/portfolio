import React from "react";
import './header.scss'
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <NavLink to="" >

      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="">
              Présentation
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              Compétences
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              A propos
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>




    </header>
  );
};

export default Header



