import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="top-row">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h3>
            AADYNYA <span>FOUNDATION</span>
          </h3>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* <Link to="/" className="active" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>
          Services
        </Link> */}

        {/* <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/supported-by" element={<SupportedBy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
 */}
        <Link to="/" className="active" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/programs" onClick={() => setIsOpen(false)}>
          Programs
        </Link>
        <Link to="/supported-by" onClick={() => setIsOpen(false)}>
          Supported By
        </Link>
        <Link to="/register" onClick={() => setIsOpen(false)}>
          Register
        </Link>
        <Link to="/donate" onClick={() => setIsOpen(false)}>
          Donate
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
