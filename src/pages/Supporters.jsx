import React from "react";
import "./css/Supporters.css";
import { Heart, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Supporters = () => {
  const supportTypes = [
    {
      title: "Individual Donors",
      description:
        "Compassionate individuals who believe in our mission and contribute regularly to support our programs.",
      icon: <Heart className="icon secondary" />,
      count: "50+",
    },
    {
      title: "Corporate Partners",
      description:
        "Forward-thinking organizations that partner with us through CSR initiatives and employee engagement programs.",
      icon: <Users className="icon primary" />,
      count: "10+",
    },
    {
      title: "Community Volunteers",
      description:
        "Dedicated volunteers who contribute their time, skills, and energy to help us serve our communities better.",
      icon: <CheckCircle className="icon accent" />,
      count: "100+",
    },
  ];

  return (
    <div className="supporters-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="text-center">
          <h1 className="hero-title">Our Supporters</h1>
          <p className="hero-description">
            We are grateful to all the individuals, organizations, and
            communities who support our mission to create positive change across
            Maharashtra.
          </p>
        </div>
      </section>

      {/* Support Types */}
      <section className="support-types">
        <div className="text-center">
          <h2 className="section-title">Who Supports Us</h2>
          <p className="section-description">
            Our work is made possible by a diverse community of supporters who
            share our vision of a more inclusive and compassionate society.
          </p>
        </div>

        <div className="cards-grid">
          {supportTypes.map((type, index) => (
            <div key={index} className="card">
              <div className="card-header">
                <div className="icon-wrapper">{type.icon}</div>
                <h3 className="card-title">{type.title}</h3>
                <div className="card-count">{type.count}</div>
              </div>
              <div className="card-content">
                <p className="card-description">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supporting Companies */}
      <section className="company-support-section">
        <div className="text-center">
          <h2 className="section-title">Our Supporting Companies</h2>
          <p className="section-description">
            We deeply value the support of companies that share our mission and
            stand with us.
          </p>
        </div>
        <div className="company-logos-grid">
          {[
            "Acme Corp",
            "BrightTech",
            "GreenEarth Inc",
            "Nova Systems",
            "Zenith Ltd",
          ].map((company, index) => (
            <div key={index} className="company-card">
              {company}
            </div>
          ))}
        </div>
      </section>

      {/* Thank You Message */}
      <section className="thankyou-section">
        <div className="thankyou-box">
          <h2 className="section-title">Thank You</h2>
          <p className="thankyou-text">
            To every individual, family, organization, and community member who
            has supported us - your generosity makes our work possible.
            Together, we are creating a Maharashtra where no one feels alone or
            forgotten.
          </p>
          <blockquote className="thankyou-quote">
            "Your support can turn loneliness into a story of hope and love"
          </blockquote>
          <div className="button-group">
            <Link to="/donate" className="btn btn-primary">
              Join Our Supporters
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Supporters;
