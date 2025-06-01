import React, { useState } from "react";
import "./css/navbar.css";
import logo from "../img/logo without text.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="Navbar">
      {/* Top Row: Logo + Hamburger */}
      <div className="top-row">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h3>
            AADYNYA <span>FOUNDATION</span>
          </h3>
        </div>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>

      {/* Navigation links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/" className="active" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a href="/about" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
        <a href="/services" onClick={() => setIsOpen(false)}>
          Services
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
