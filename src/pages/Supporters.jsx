import React from "react";
import "./css/Supporters.css";
import { Link } from "react-router-dom";

const Supporters = () => {
 

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

      {/* Company & Individual Donor Section */}
      <section className="company-donor-section">
        <div className="text-center">
          <h2 className="section-title">Our Valued Supporters</h2>
          <p className="section-description">
            We are proud to be supported by these key partners and donors.
          </p>
        </div>
        <div className="supporter-cards">
          <div className="supporter-card company">
            <p>US Pune Labs</p>
            <h3>Company</h3>
          </div>
          <div className="supporter-card donor">
            <p>Lalit Sethi (Raver, Jalgaon)</p>
            <h3>Individual Donor</h3>
          </div>
        </div>
      </section>

      {/* Volunteer Chips Section */}
      <section className="volunteer-list-section">
        <div className="text-center">
          <h2 className="section-title">Our Dedicated Community Volunteers</h2>
          <p className="section-description">
            Meet the incredible individuals who generously give their time and
            energy to our cause.
          </p>
        </div>

        <div className="volunteer-grid">
          {[
            "Mann Santosh Wani",
            "Tanishka Dnyaneshwar Ubhe",
            "Divyam Viral Shah",
            "Amogh Shivaji Thube",
            "Aman Arora",
            "Dev Satish Somani",
            "Atharva Pandurang Pawar",
            "Shaunak Rajesh Dahibhate",
            "Atharva Pawar",
            "Raghav Hemant Kulkarni",
            "Sonawane Om Ratnakar",
            "Rohan Vaibhav Bhagat",
            "Rayan Nozer Tarapore",
            "Saurav Kumbar",
          ].map((volunteer, index) => (
            <div key={index} className="volunteer-card">
              {volunteer}
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
            <Link to="/register" className="btn btn-primary">
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
