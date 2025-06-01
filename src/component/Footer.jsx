import React from "react";
import { Heart, Phone, Mail } from "lucide-react";
import "./Footer.css"; // Import the external stylesheet
import logo from "../img/logo.png"; // Import the logo image
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Organization Info */}
          <div className="footer-section">
            <div className="footer-brand">
              <img
                src={logo}
                alt="Aadnya Foundation Trust"
                className="footer-logo"
              />
              <h3 className="footer-title">Aadnya Foundation Trust</h3>
            </div>
            <p className="footer-text">
              Established in 2023, working across Maharashtra to support
              orphans, people with disabilities, and those in need.
            </p>
            <div className="footer-row">
              <Heart className="footer-icon" size={16} />
              <span className="footer-small-text">
                Registered NGO since 2023
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-subtitle">Quick Links</h3>
            <div className="footer-links">
              <a href="/about">About Us</a>
              <a href="/programs">Programs</a>
              <a href="/donate">Donate</a>
              <a href="/register">Register</a>
              <a href="/supporters">Supporters</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-subtitle">Contact Us</h3>
            <div className="footer-contact">
              <div className="footer-row">
                <Phone size={16} className="footer-icon" />
                <span>7021546218</span>
              </div>
              <div className="footer-row">
                <Mail size={16} className="footer-icon" />
                <span>aadnyafoundation@gmail.com</span>
              </div>
              <div className="footer-bank-details">
                <p>HDFC Bank Badlapur(West)</p>
                <p>Account: 50200097236027</p>
                <p>IFSC: HDFC0008382</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Aadnya Foundation Trust. All rights reserved.</p>
          <p>
            Design & Developed With ❤️ By{" "}
            <a
              href="https://origin7.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Origin7 Technologies
            </a>
            <span className="footer-dot"> - Pavan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
