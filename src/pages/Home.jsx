import React, { useState, useEffect } from "react";
import "./css/banner.css";
import carosal1 from "../img/carosal1.jpeg";
import carosal2 from "../img/carosal2.jpeg";
import logo from "../img/logo.png";

const emojis = ["💖", "❤️", "₹", "💰", "🌟", "🙏", "🤝", "🌍", "🎗️", "✨"];

const FloatingEmojis = () => {
  return (
    <div className="floating-emojis">
      {Array.from({ length: 20 }).map((_, i) => {
        const emoji = emojis[i % emojis.length];
        const style = {
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          fontSize: `${16 + Math.random() * 20}px`,
          opacity: 0.6 + Math.random() * 0.4,
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
      <div className="banner">
        <FloatingEmojis />

        <div className="carousel">
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel_item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={item} alt={`carousel-${index}`} />
            </div>
          ))}
        </div>

        <div className="banner_content">
          <img src={logo} alt="Logo" className="banner_logo" />

          <h1 className="banner_heading">
            <span>CHARITY </span> DOESN'T <span>DECREASE </span> WEALTH
          </h1>

          <p>
            "Charity is not about giving what you have left over, it's about
            sharing what you have with those who need it most."
          </p>

          <div className="buttons">
            <button className="btn btn-primary attention">
              💖 Donate Now 💰
            </button>
            <button className="btn btn-secondary">Register as Volunteer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
