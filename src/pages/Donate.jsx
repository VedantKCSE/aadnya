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

  // Form fields state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    transactionId: "",
    message: ""
  });

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(amount); // sync custom input with selected preset
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null); // clear preset if custom entered
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const getDonationValue = () => {
    const amount = selectedAmount || Number(customAmount);
    return amount > 0 ? amount : 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donation = getDonationValue();
    if (donation <= 0) {
      alert("Please enter or select a valid donation amount.");
      return;
    }
    if (!formData.fullName || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);

    // Prepare payload with proper keys expected by your Apps Script
    const payload = new URLSearchParams({
      "Full Name": formData.fullName,
      "Email Address": formData.email,
      "Phone Number": formData.phone,
      "Amount": donation.toString(),
      "Transaction ID": formData.transactionId,
      "Message (Optional)": formData.message,
      sheet: "donate", // to route correctly in Google script
    });

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyAnSgvu_JewoQ4FYLR1Cf-nQiGtBibtmNdnK1V66ZT5_LuLgK9r2uDAi7iZL7Pcf7alA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: payload.toString(),
        }
      );
      const text = await response.text();
      alert(text || "Thank you for your donation!");
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        transactionId: "",
        message: "",
      });
      setSelectedAmount(null);
      setCustomAmount("");
    } catch (error) {
      alert(
        "There was an error submitting your donation. Please try again later."
      );
      console.error("Submission error:", error);
    } finally {
      setSubmitted(false);
    }
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
          <p className="quote_paragraph">
            Every donation makes a direct impact on someone's life
          </p>
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
                type="button"
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
              min={1}
            />
          </div>

          <form className="donation_details" onSubmit={handleSubmit}>
            <input
              name="fullName"
              type="text"
              placeholder="Full Name *"
              required
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              name="transactionId"
              type="text"
              placeholder="Transaction ID"
              value={formData.transactionId}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Message (Optional)"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit" disabled={submitted}>
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
            <a href="mailto:aadnyafoundation@gmail.com">
              aadnyafoundation@gmail.com
            </a>
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
