import React, { useState } from "react";
import "./css/Donate/Donate.css";
import "./css/Donate/Donate2.css";
import "./css/Donate/Donate3.css";
import "./css/Donate/Donate4.css";
import charity from "../img/charity.png";
import qr from "../img/qr.png";

const Donate = () => {
  const presetAmounts = [500, 1000, 2500, 5000, 10000];
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(amount); // Clear custom amount if preset selected
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null); // Clear preset if custom entered
  };

  const getDonationValue = () => {
    const amount = selectedAmount || Number(customAmount);
    return amount > 0 ? amount : 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const donation = getDonationValue();
    if (donation <= 0) {
      alert("Please enter or select a valid donation amount.");
      return;
    }
    setSubmitted(true);
    // Submit to backend / Razorpay / Stripe logic goes here
  };

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
          <img src={charity} alt="charity" />
          <h2>
            Make a <span>Donation</span>
          </h2>
          <p>Support our programs with a secure online donation</p>

          <div className="amount_selection">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                className={`amount_btn ${
                  selectedAmount === amount ? "selected" : ""
                }`}
                onClick={() => handleAmountClick(amount)}
                aria-pressed={selectedAmount === amount}
              >
                ₹{amount.toLocaleString()}
              </button>
            ))}
          </div>

          <div className="custom_amount_input">
            <label htmlFor="customAmount">Or enter custom amount</label>
            <input
              id="customAmount"
              type="number"
              placeholder="Enter amount in ₹"
              value={customAmount}
              onChange={handleCustomChange}
            />
          </div>

          <form className="donation_details" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name *" required />
            <input type="email" placeholder="Email Address *" required />
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Transaction ID" />
            <textarea placeholder="Message (Optional)" rows={3}></textarea>
            <button type="submit">
              {submitted
                ? "Processing..."
                : `Donate ₹${getDonationValue().toLocaleString()}`}
            </button>
            <p className="secure_note">🔒 100% secure & encrypted payment</p>
          </form>
        </div>

        <div className="upi_and_bank_transfer">
          <div className="upi">
            <h2>UPI Payment</h2>
            <p>Scan the QR code for instant donation</p>
            <div className="qr">
              <img src={qr} alt="UPI QR Code" className="upi_qr_code" />
              <p>Scan with any UPI app</p>
            </div>
            <p>
              UPI ID: <span>aadnyafoundationtrust@ybl</span>
            </p>
          </div>

          <div className="bank_transfer">
            <h2>Bank Transfer</h2>
            <p>Transfer directly to our bank account</p>

            <table className="bank_details">
              <tbody>
                <tr>
                  <td>Account Name:</td>
                  <td>Aadnya Foundation Trust</td>
                </tr>
                <tr>
                  <td>Bank:</td>
                  <td>HDFC Bank Badlapur (West)</td>
                </tr>
                <tr>
                  <td>Account No:</td>
                  <td>50200097236027</td>
                </tr>
                <tr>
                  <td>IFSC Code:</td>
                  <td>HDFC0008382</td>
                </tr>
              </tbody>
            </table>
            <p>
              Please send us a confirmation message after transfer with your
              details for receipt.
            </p>
          </div>
        </div>
      </div>
      <div className="contact_us">
        <h2>Contact Us for Donations</h2>
        <p>For item donations or to arrange pickup, please contact us:</p>
        <div className="contact_details">
          <p>
            <strong>Phone: </strong> 7021546218
          </p>
          <p>
            <strong>Email: </strong>
            <a href="mailto:aadnyafoundation@gmail.com">aadnyafoundation@gmail.com</a>
          </p>
          <p>
            <strong>Website: </strong>
            <a
              href="https://www.aadnya.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              aadnya.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
