import React, { useState } from 'react';
import './css/Register.css';
import {
  Users,
  Handshake,
  Megaphone,
  Briefcase,
  CalendarCheck,
  Globe,
} from "lucide-react";


const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    city: '',
    occupation: '',
    volunteerType: '',
    skills: '',
    availability: '',
    motivation: '',
    agreeToTerms: false
  });

  const volunteerTypes = [
    { value: 'field', label: 'Field Volunteer', description: 'Direct interaction with beneficiaries' },
    { value: 'fundraising', label: 'Fundraising', description: 'Help raise funds and resources' },
    { value: 'awareness', label: 'Awareness Campaigns', description: 'Spread awareness about our cause' },
    { value: 'professional', label: 'Professional Services', description: 'Offer professional skills (legal, medical, etc.)' },
    { value: 'event', label: 'Event Management', description: 'Help organize events and programs' },
    { value: 'online', label: 'Online Support', description: 'Social media, content creation, admin support' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions to proceed.");
      return;
    }

    // Convert camelCase keys to expected field names in Apps Script
    const payload = new URLSearchParams({
      "Full Name": formData.fullName,
      "Email Address": formData.email,
      "Phone Number": formData.phone,
      "Age": formData.age,
      "City": formData.city,
      "Occupation": formData.occupation,
      "Preferred Volunteer Type": formData.volunteerType,
      "Skills & Expertise": formData.skills,
      "Availability": formData.availability,
      "Why do you want to volunteer?": formData.motivation,
      "sheet": "register" // required to route to correct handler
    });

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyAnSgvu_JewoQ4FYLR1Cf-nQiGtBibtmNdnK1V66ZT5_LuLgK9r2uDAi7iZL7Pcf7alA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: payload.toString()
        }
      );
      const text = await response.text();
      alert(text || "Registration Successful! Thank you for volunteering with us.");
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        city: '',
        occupation: '',
        volunteerType: '',
        skills: '',
        availability: '',
        motivation: '',
        agreeToTerms: false
      });
    } catch (error) {
      alert("There was an error submitting your registration. Please try again later.");
      console.error("Submission error:", error);
    }
  };


  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="register-wrapper">
      <section className="hero">
        <h1>Join Our Team</h1>
        <p>
          Become a volunteer and be part of the change you want to see in
          Maharashtra. Together, we can make a meaningful difference in
          countless lives.
        </p>
      </section>

      <section className="volunteer-types">
        <h2>Ways to Volunteer</h2>
        <p>
          Choose how you'd like to contribute based on your skills, interests,
          and availability.
        </p>
        <div className="cards">
          {volunteerTypes.map((type, index) => (
            <div key={index} className="card">
              <div className="icon-placeholder">
                {
                  {
                    field: <Users size={32} color="#8e2273" />,
                    fundraising: <Handshake size={32} color="#8e2273" />,
                    awareness: <Megaphone size={32} color="#8e2273" />,
                    professional: <Briefcase size={32} color="#8e2273" />,
                    event: <CalendarCheck size={32} color="#8e2273" />,
                    online: <Globe size={32} color="#8e2273" />,
                  }[type.value]
                }
              </div>
              <h3>{type.label}</h3>
              <p>{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="form-section">
        <div className="form-card">
          <h2>Volunteer Registration Form</h2>
          <p className="description">
            Fill out this form to join our volunteer community
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div>
                <label htmlFor="fullName">Full Name *</label>
                <input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="city">City *</label>
                <input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="occupation">Occupation</label>
                <input
                  id="occupation"
                  value={formData.occupation}
                  onChange={(e) =>
                    handleInputChange("occupation", e.target.value)
                  }
                />
              </div>
            </div>

            <div>
              <label htmlFor="volunteerType">Preferred Volunteer Type *</label>
              <select
                id="volunteerType"
                value={formData.volunteerType}
                onChange={(e) =>
                  handleInputChange("volunteerType", e.target.value)
                }
                required
              >
                <option value="">Select volunteer type</option>
                {volunteerTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="skills">Skills & Expertise</label>
              <textarea
                id="skills"
                value={formData.skills}
                onChange={(e) => handleInputChange("skills", e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="availability">Availability</label>
              <textarea
                id="availability"
                value={formData.availability}
                onChange={(e) =>
                  handleInputChange("availability", e.target.value)
                }
              />
            </div>

            <div>
              <label htmlFor="motivation">
                Why do you want to volunteer with us?
              </label>
              <textarea
                id="motivation"
                value={formData.motivation}
                onChange={(e) =>
                  handleInputChange("motivation", e.target.value)
                }
              />
            </div>

            <div className="checkbox-container">
              <input
                id="terms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) =>
                  handleInputChange("agreeToTerms", e.target.checked)
                }
              />
              <label htmlFor="terms">
                I agree to the terms and conditions and understand that
                volunteering is a commitment to serve our community with
                dedication and integrity.
              </label>
            </div>

            <button type="submit" className="submit-button">
              🤝 Register as Volunteer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
