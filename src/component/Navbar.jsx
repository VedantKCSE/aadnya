import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/navbar.css";
import logo from "../img/logo without text.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/programs", label: "Programs" },
    { path: "/supported-by", label: "Supported By" },
    { path: "/register", label: "Register" },
    { path: "/donate", label: "Donate" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="floating-navbar">
      <div className="nav-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="nav-logo" onClick={closeMenu}>
            <img src={logo} alt="Logo" />
            <h3>
              AADNYA <span>FOUNDATION</span>
            </h3>
          </div>
        </Link>
        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <div className={`nav-links ${isOpen ? "show" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
