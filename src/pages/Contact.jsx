import React, { useState } from 'react';
import './css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      title: "Phone",
      description: "Call us directly for immediate assistance",
      icon: "📞",
      contact: "7021546218",
      action: "tel:7021546218"
    },
    {
      title: "Email",
      description: "Send us an email and we'll respond within 24 hours",
      icon: "✉️",
      contact: "aadnyafoundation@gmail.com",
      action: "mailto:aadnyafoundation@gmail.com"
    },
    {
      title: "WhatsApp",
      description: "Chat with us on WhatsApp for quick support",
      icon: "💬",
      contact: "7021546218",
      action: "https://wa.me/917021546218"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Map your formData keys to the expected field names in the Google Script
    const payload = new URLSearchParams({
      "Full Name": formData.name,
      "Email Address": formData.email,
      "Phone Number": formData.phone,
      "Subject": formData.subject,
      "Message": formData.message,
      "sheet": "contact"  // sheet parameter to route data correctly
    });

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyAnSgvu_JewoQ4FYLR1Cf-nQiGtBibtmNdnK1V66ZT5_LuLgK9r2uDAi7iZL7Pcf7alA/exec?sheet=contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: payload.toString()
        }
      );
      const text = await response.text();
      alert(text || "Message sent successfully!");
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      alert("There was an error submitting your message. Please try again later.");
      console.error("Submission error:", error);
    }
  };


  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Whether you have questions, want to volunteer, or need our services, we're here to help.</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="methods-section">
        <h2>Contact Methods</h2>
        <p>Choose the method that works best for you. We're available and ready to assist.</p>
        <div className="methods-grid">
          {contactMethods.map((method, index) => (
            <div className="method-card" key={index}>
              <div className="method-icon">{method.icon}</div>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
              <p className="method-contact">{method.contact}</p>
              <a className="method-button" href={method.action} target="_blank" rel="noopener noreferrer">
                Contact via {method.title}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="form-section">
        <div className="form-card">
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and we'll get back to you as soon as possible</p>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" value={formData.subject} onChange={(e) => handleInputChange('subject', e.target.value)} />
              </div>
            </div>
            <div className="form-group full-width">
              <label>Message *</label>
              <textarea rows="5" value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} required />
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      {/* Organization Details */}
      <section className="org-section">
        <h2>Organization Details</h2>
        <div className="org-grid">
          <div className="org-card">
            <h3>Legal Information</h3>
            <p><strong>Organization:</strong> Aadnya Foundation Trust</p>
            <p><strong>Established:</strong> 2023</p>
            <p><strong>Registration:</strong> Est-2024</p>
            <p><strong>PAN:</strong> AAKTA7415P</p>
            <p><strong>Public Trust:</strong> E-001367S(THN)</p>
            <p><strong>NITI AYOG NGO ID:</strong> MH/2024/0416858</p>
          </div>
          <div className="org-card">
            <h3>Banking Details</h3>
            <p><strong>Bank:</strong> HDFC Bank Badlapur(West)</p>
            <p><strong>Account No:</strong> 50200097236027</p>
            <p><strong>IFSC Code:</strong> HDFC0008382</p>
            <p><strong>UPI ID:</strong> aadnyafoundationtrust@ybl</p>
            <p><strong>Website:</strong> www.aadnya.org</p>
          </div>
        </div>
        <blockquote className="org-quote">"Your support can turn loneliness into a story of hope and love"</blockquote>
        <p className="org-note">Together, we can make Maharashtra a more compassionate place for everyone.</p>
      </section>
    </div>
  );
};

export default Contact;
