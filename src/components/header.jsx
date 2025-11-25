import React, { useState, useEffect } from "react";
import './header.scss'
import { NavLink, useLocation } from "react-router-dom";


const Header = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
            <NavLink to="/#presentation">
              Présentation
            </NavLink>
          </li>
          <li>
            <NavLink to="/#competences">
              Compétences
            </NavLink>
          </li>
          <li>
            <NavLink to="/#portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/#aboutMe">
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



