import React from "react";
import "./css/about/about.css";
import logo from "../img/logo without text.png";
// Importing the logo image for the About page
// This logo will be displayed at the top of the About page
//lucide-react


const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="header-line"></div>
        <h1>
          ABOUT <span className="AADNYA"> AADNYA </span>{" "}
          <span> FOUNDATION</span>
        </h1>
        <p className="subtitle">Empowering communities across Maharashtra</p>
      </div>
      <div className="about-content">
        <p>
          AADNYA Foundation Trust is one of the noble organizations working
          across Maharashtra registered since 2023 has been working with Orphan
          , People with Disability ( PWD ) and needy by way of supporting,
          Disability awareness, Disability Medical Health & Welfare , Skill
          Development , Disability Education & Empower
        </p>
      </div>
      <div className="OurCoreValues">
        <h2>Our Core Values</h2>
        <ul>
          <li>
            <span className="value-icon">❤️</span>
            <span className="value-text">Compassion</span>
            <p>
              We believe in the power of compassion to transform lives and
              communities. Our work is driven by empathy and a commitment to
              uplift those in need.
            </p>
          </li>
          <li>
            {/* Integrity */}
            <span className="value-icon">🤝</span>
            <span className="value-text">Integrity</span>
            <p>
              We uphold the highest standards of integrity in all our actions,
              ensuring transparency and accountability in our operations.
            </p>
          </li>
          <li>
            {/* Community */}
            <span className="value-icon">🌍</span>
            <span className="value-text">Community</span>
            <p>
              We believe in the strength of community and work collaboratively
              to create a supportive environment for all.
            </p>
          </li>
        </ul>
      </div>

      <div className="vision-mission-section">
        <div className="vision-card">
          <span className="vm-icon">🌟</span>
          <h2>Our Vision</h2>
          <p>
            To open a world of opportunities for every vulnerable person by
            ensuring food security.
          </p>
        </div>
        <div className="mission-card">
          <span className="vm-icon">🎯</span>
          <h2>Our Mission</h2>
          <p>
            To provide help to beneficiaries every day across different
            vulnerable situations.
          </p>
        </div>
      </div>

      {/* quotebox */}
      <div className="quote-box">
        <p>
          "Empowering lives, one step at a time. Together, we can make a
          difference."
        </p>
        <p className="quote-author">- AADNYA Foundation</p>
      </div>
    </div>
  );
};

export default About;
