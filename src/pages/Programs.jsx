import React from 'react';
import { Heart, BookUser, Users, User, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import "./css/Programs.css"; // Importing the CSS for the under maintenance section

const Programs = () => {
  const programs = [
    {
      title: "Disability Awareness",
      description: "Creating awareness about disabilities and providing comprehensive support to individuals with special needs. We focus on inclusion, accessibility, and breaking down barriers that prevent full participation in society.",
      icon: <Heart className="icon" />,
      highlights: ["Awareness campaigns", "Accessibility support", "Inclusive programs", "Family counseling"]
    },
    {
      title: "Skill Development",
      description: "Empowering individuals through vocational training and skill-building programs. We provide practical skills that enable people to become self-reliant and contribute meaningfully to their communities.",
      icon: <Users className="icon" />,
      highlights: ["Vocational training", "Digital literacy", "Entrepreneurship support", "Job placement assistance"]
    },
    {
      title: "Education Support",
      description: "Ensuring quality education reaches every child, regardless of their circumstances. We provide educational materials, support systems, and create learning environments that nurture growth.",
      icon: <BookUser className="icon" />,
      highlights: ["Educational materials", "Tutoring support", "Scholarship programs", "Learning resources"]
    },
    {
      title: "Food Security",
      description: "Addressing hunger and malnutrition by providing regular meals and nutritional support to those in need. We believe that proper nutrition is fundamental to human dignity and development.",
      icon: <Gift className="icon" />,
      highlights: ["Regular meal programs", "Nutrition education", "Food distribution", "Community kitchens"]
    },
    {
      title: "Orphan Care",
      description: "Providing comprehensive care and support to orphaned children, ensuring they receive love, education, and opportunities to build bright futures. We create supportive environments that feel like family.",
      icon: <Heart className="icon" />,
      highlights: ["Residential care", "Education support", "Emotional counseling", "Life skills training"]
    },
    {
      title: "Emotional Support",
      description: "Recognizing that emotional well-being is as important as physical health, we provide counseling, companionship, and mental health support to help individuals cope with life's challenges.",
      icon: <User className="icon" />,
      highlights: ["Counseling services", "Support groups", "Mental health awareness", "Crisis intervention"]
    }
  ];

  return (
    <div className="programs-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Our Programs</h1>
          <p className="hero-subtitle">
            Comprehensive initiatives designed to address the diverse needs of our communities 
            across Maharashtra, creating lasting positive impact.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-grid-section">
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-icon">{program.icon}</div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              <div className="program-highlights">
                <h4>Key Features:</h4>
                <ul>
                  {program.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <span className="bullet"></span> {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Join Us in Making a Difference</h2>
          <p className="cta-text">
            Every contribution, whether through donations, volunteering, or spreading awareness, 
            helps us expand our programs and reach more people in need.
          </p>
          <div className="cta-buttons">
            <Link to="/donate" className="btn primary-btn">Support Our Programs</Link>
            <Link to="/register" className="btn outline-btn">Become a Volunteer</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
