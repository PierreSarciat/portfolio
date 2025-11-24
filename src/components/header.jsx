import React, { useState, useEffect } from "react";
import './header.scss'
import { NavLink } from "react-router-dom";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // seuil du scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
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



