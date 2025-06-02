import React, { useState } from "react";
import "./css/Donate/Donate.css";
import "./css/Donate/Donate2.css";

const Donate = () => {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(amount); // update custom input field to reflect selected amount
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const finalAmount = selectedAmount || customAmount || 0;

  return (
    <div className="donate_container">
      <div className="donate_header">
        <h1>Support Our Cause</h1>
        <p>
          Your generosity enables us to continue our work in supporting orphans,
          people with disabilities, and those in need across Maharashtra.
        </p>

        <div className="quote">
          <h2>"Charity doesn't decrease wealth"</h2>
          <p>Every donation makes a direct impact on someone's life</p>
        </div>
      </div>

      <div className="donate_content">
        <div className="donation_form">
          <h2>
            Make a <span>Donation</span>{" "}
          </h2>
          <p>Support our programs with a secure online donation</p>

          <div className="amount_selection">
            {[500, 1000, 2500, 5000, 10000].map((amount) => (
              <button
                key={amount}
                className={`amount_btn ${
                  selectedAmount === amount ? "selected" : ""
                }`}
                onClick={() => handleAmountClick(amount)}
              >
                ₹{amount}
              </button>
            ))}
          </div>

          <div className="custom_amount_input">
            <label>Or enter custom amount</label>
            <input
              type="number"
              placeholder="Enter amount in ₹"
              value={customAmount}
              onChange={handleCustomChange}
            />
          </div>

          <form className="donation_details">
            <input type="text" placeholder="Full Name *" required />
            <input type="email" placeholder="Email Address *" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Message (Optional)" rows={3}></textarea>
            <button type="submit">Donate ₹{customAmount || 0}</button>
          </form>
        </div>

        <div className="upi_and_bank_transfer">
          {/* Future content for UPI/Bank transfer can go here */}
        </div>
      </div>
    </div>
  );
};

export default Donate;
