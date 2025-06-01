import React, { useState, useEffect } from "react";
import "./css/banner.css";
import carosal1 from "../img/carosal1.jpeg";
import carosal2 from "../img/carosal2.jpeg";
import logo from "../img/logo.png";
import downArrow from "../img/arrow.png"; // Assuming you have a down arrow image
import { Link } from "react-router-dom";
import "./css/homeAbout.css"; // Import the CSS for the home page
import "./css/homeMisson.css"; // Import the CSS for the mission section
import { Heart, HelpingHand, School } from "lucide-react";

const emojis = ["💖", "❤️", "₹", "💰", "🌟", "🙏", "🤝", "🌍", "🎗️", "✨"];
const programs = [
  {
    icon: <Heart size={36} color="#ef4444" />,
    title: "Orphan Care",
    description:
      "Support and resources for orphaned children to thrive in society.",
  },
  {
    icon: <HelpingHand size={36} color="#10b981" />,
    title: "Disability Support",
    description:
      "Inclusive programs and assistance for individuals with disabilities.",
  },
  {
    icon: <School size={36} color="#3b82f6" />,
    title: "Education Access",
    description: "Ensuring education and mentorship reaches every needy child.",
  },
];

const FloatingEmojis = () => {
  return (
    <div className="floating-emojis">
      {Array.from({ length: 20 }).map((_, i) => {
        const emoji = emojis[i % emojis.length];
        const style = {
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          fontSize: `${16 + Math.random() * 20}px`,
          opacity: 0.5 + Math.random() * 0.3, // slightly refined opacity range
          animationDuration: `${10 + Math.random() * 10}s`,
        };
        return (
          <span key={i} className="floating-emoji" style={style}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
};

const Home = () => {
  const items = [carosal1, carosal2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="home_container">
      <section className="banner">
        <FloatingEmojis />

        <div className="carousel">
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel_item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={item} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <header className="banner_content">
          <figure>
            <img src={logo} alt="Organization Logo" className="banner_logo" />
          </figure>

          <h2 className="tagline">Give hope. Create change.</h2>

          <h1 className="banner_heading">
            <span>CHARITY</span> DOESN'T <span>DECREASE</span> WEALTH
          </h1>

          <p>
            "Charity is not about giving what you have left over; it’s about
            sharing what you have with those who need it most."
          </p>

          <nav className="buttons" aria-label="Call to action">
            <button
              className="btn btn-primary attention"
              aria-label="Donate Now - help those in need"
            >
              💖 Donate Now 🌟
            </button>
            <button
              className="btn btn-secondary"
              aria-label="Join as Volunteer"
            >
              🙌 Register as Volunteer
            </button>
          </nav>
        </header>

        <div className="down_arrow" aria-hidden="true">
          <a href="#about" aria-label="Scroll to About Section">
            <img src={downArrow} alt="" className="arrow_icon" />
          </a>
        </div>
      </section>

      <section className="mission-section" id="about">
        <div className="mission-container">
          <div className="mission-header">
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-description">
              To provide comprehensive support to orphans, people with
              disabilities, and the needy across Maharashtra, creating a more
              inclusive and compassionate society.
            </p>
          </div>

          <div className="mission-grid">
            {programs.map((program, index) => (
              <div key={index} className="mission-card">
                <div className="mission-icon">{program.icon}</div>
                <h3 className="mission-card-title">{program.title}</h3>
                <p className="mission-card-description">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="impact-container">
          <div className="impact-content">
            <h2 className="impact-heading">Your Support Makes a Difference</h2>

            <div className="impact-grid">
              <div className="impact-stat">
                <div className="impact-number primary">2023</div>
                <div className="impact-label">Established</div>
              </div>
              <div className="impact-stat">
                <div className="impact-number secondary">100+</div>
                <div className="impact-label">Lives Impacted</div>
              </div>
              <div className="impact-stat">
                <div className="impact-number accent">24/7</div>
                <div className="impact-label">Support Available</div>
              </div>
            </div>

            <div className="impact-quote-box">
              <blockquote className="impact-quote">
                "He/she just needs to feel that there is someone who shows
                concern towards them"
              </blockquote>
              <p className="impact-message">
                Your support can turn loneliness into a story of hope and love
              </p>

              <Link to="/about" className="impact-button">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
