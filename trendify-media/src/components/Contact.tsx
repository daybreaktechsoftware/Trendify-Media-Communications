import { motion } from "framer-motion";
import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2>Let's Start A Powerful Conversation</h2>
          <p className="contact-intro">
            Ready to elevate your brand? We're here to help craft your story and
            amplify your voice.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="info-card">
              <h3>Connect With Us</h3>
              <p>
                Whether you're looking to launch a new campaign, manage a
                crisis, or build your brand's reputation, we're ready to partner
                with you.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <span style={{ fontSize: "1.5rem" }}>✉️</span>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:njongo.sidloyi@gmail.com">
                      njongo.sidloyi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <span style={{ fontSize: "1.5rem" }}>📞</span>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+27848397869">+27 84 839 7869</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <span style={{ fontSize: "1.5rem" }}>📍</span>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>
                      Cape Town, Western Cape
                      <br />
                      South Africa
                    </p>
                  </div>
                </div>
              </div>

              <div className="company-details">
                <h4>Company Details</h4>
                <p>Trendify Media Communications (Pty) Ltd</p>
                <p className="reg-number">Reg: 2025/535739/07</p>
                <p className="address">
                  No. 20, Zone 16, Langa
                  <br />
                  Western Cape, 7750
                </p>
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <motion.a
                    href="#"
                    className="social-icon"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span style={{ fontSize: "1.3rem" }}>in</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-icon"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span style={{ fontSize: "1.3rem" }}>𝕏</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-icon"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span style={{ fontSize: "1.3rem" }}>ig</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your project and how we can help..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <span style={{ fontSize: "1.2rem" }}>→</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Trendify</h3>
            <p>Media Communications</p>
          </div>
          <div className="footer-text">
            <p>
              &copy; 2025 Trendify Media Communications (Pty) Ltd. All rights
              reserved.
            </p>
            <p>
              Cape Town's pioneering black-owned PR, media, and brand
              communications agency.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
