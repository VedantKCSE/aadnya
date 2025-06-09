import React, { useState, useEffect, useRef } from "react";
import "./css/banner.css";
import carosal1 from "../img/images/carosal3.jpg";
import carosal2 from "../img/images/carosal2.jpg";
import carosal3 from "../img/images/carosal1.jpg";
import carosal4 from "../img/images/carosal4.jpg";
import carosal5 from "../img/images/carosal5.jpg";
// import carosal2 from "../img/carosal2.jpeg";
import { Link } from "react-router-dom";
import "./css/homeMisson.css"; // Import the CSS for the mission section
import "./css/homeAbout.css"; // Import the CSS for the home page
import { Heart, HelpingHand, School } from "lucide-react";
import "./css/home.css"; // Import the main CSS for the home page

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

const FadeInSection = ({ children }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Animate once
        }
      });
    });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const items = [carosal1, carosal2,carosal3,carosal4,carosal5];
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
         

          <h1 className="banner_heading">
            <span>CHARITY</span> DOESN'T <span>DECREASE</span> WEALTH
          </h1>

          

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

        
      </section>

      <FadeInSection>
        <section className="mission-section" id="about">
          <div className="mission-container">
            <div className="mission-header">
              <h2 className="mission-title">
                Our <span>Mission</span>
              </h2>
              <p className="mission-description">
                Empowering orphans, individuals with disabilities, and
                underserved communities across Maharashtra by fostering
                inclusion, dignity, and opportunity.
              </p>
            </div>

            <div className="mission-grid">
              {programs.map((program, index) => (
                <div key={index} className="mission-card">
                  <div className="mission-icon-wrapper">
                    <div className="mission-icon">{program.icon}</div>
                  </div>
                  <h3 className="mission-card-title">{program.title}</h3>
                  <p className="mission-card-description">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
      <section className="impact-section">
        <div className="impact-container">
          <div className="impact-content">
            <h2 className="impact-heading">
              Your
              <span> Support </span>
              Makes a Difference
            </h2>

            <div className="impact-grid">
              <FadeInSection>
                <div className="impact-stat fade-in-card">
                  <div className="impact-icon">📅</div>
                  <div className="impact-number primary">2023</div>
                  <div className="impact-label">Established</div>
                </div>
              </FadeInSection>
              <FadeInSection>
                <div className="impact-stat fade-in-card">
                  <div className="impact-icon">👥</div>
                  <div className="impact-number secondary">100+</div>
                  <div className="impact-label">Lives Impacted</div>
                </div>
              </FadeInSection>
              <FadeInSection>
                <div className="impact-stat fade-in-card">
                  <div className="impact-icon">⏰</div>
                  <div className="impact-number accent">24/7</div>
                  <div className="impact-label">Support Available</div>
                </div>
              </FadeInSection>
            </div>

            <FadeInSection>
            <div className="impact-quote-box">
              <blockquote className="impact-quote">
                <span className="quote-icon">❝</span>
                He/she just needs to feel that there is someone who shows
                concern towards them
                <span className="quote-icon">❞</span>
              </blockquote>
              <p className="impact-message">
                Your support can turn loneliness into a story of hope and love
              </p>

              <Link to="/about" className="impact-button">
                Learn More About Us
              </Link>
            </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
