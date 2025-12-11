import { motion } from "framer-motion";
import React from "react";
import "./About.css";

const About: React.FC = () => {
  const brands = [
    "Takealot.com",
    "Mr D Food",
    "Virgin Active",
    "Audi SA",
    "Marltons",
    "Aveeno",
    "Pepsi",
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">About TMC</span>
          <h2>Building Purpose-Driven Brands That Impact The World</h2>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="stat-card">
            <h3>R6M+</h3>
            <p>Earned Media Value</p>
          </div>
          <div className="stat-card">
            <h3>30+</h3>
            <p>Media Mentions</p>
          </div>
          <div className="stat-card">
            <h3>3x</h3>
            <p>Target Exceeded</p>
          </div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-founder"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="founder-card">
              <div className="founder-image-placeholder">
                <span className="founder-initials">NS</span>
              </div>
              <div className="founder-info">
                <h3>Njongo Sidloyi</h3>
                <p className="founder-title">Managing Director</p>
                <p className="founder-subtitle">
                  PR & Marketing Communications Specialist
                </p>

                <div className="founder-highlights">
                  <div className="highlight">
                    <span className="icon-symbol">★</span>
                    <span>Award-Winning Specialist</span>
                  </div>
                  <div className="highlight">
                    <span className="icon-symbol">◆</span>
                    <span>Former Razor PR (M&C Saatchi Abel)</span>
                  </div>
                  <div className="highlight">
                    <span className="icon-symbol">↗</span>
                    <span>Global Brand Launch Expert</span>
                  </div>
                </div>

                <p className="founder-bio">
                  A seasoned marketing and communications specialist with deep
                  passion for public relations. With extensive experience across
                  diverse industries, I bring proven expertise, strategic
                  insight, and hands-on execution to help brands grow
                  authentically and effectively.
                </p>

                <div className="founder-brands">
                  <p className="brands-label">Trusted by leading brands:</p>
                  <div className="brands-grid">
                    {brands.map((brand, index) => (
                      <motion.span
                        key={brand}
                        className="brand-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {brand}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-company"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="company-info">
              <div className="info-badge">
                <span className="badge-year">EST. 2025</span>
              </div>

              <h3>Trendify Media Communications</h3>

              <p className="company-description">
                Founded in 2025, Trendify Media Communications is a Cape
                Town-based marketing and communications agency specializing in
                digital-first brand strategy and communications solutions.
              </p>

              <div className="company-values">
                <div className="value-card">
                  <div className="value-icon">
                    <span>🎯</span>
                  </div>
                  <h4>Personalized</h4>
                  <p>
                    Tailored strategies that align with your unique brand
                    identity
                  </p>
                </div>

                <div className="value-card">
                  <div className="value-icon">
                    <span>⚡</span>
                  </div>
                  <h4>Agile</h4>
                  <p>
                    Quick to adapt and respond to the fast-paced media landscape
                  </p>
                </div>

                <div className="value-card">
                  <div className="value-icon">
                    <span>📊</span>
                  </div>
                  <h4>Results-Oriented</h4>
                  <p>Focused on measurable outcomes and business impact</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Mission - Centered */}
        <motion.div
          className="mission-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="company-mission">
            <h4>Our Mission</h4>
            <p>
              We deliver comprehensive, agile, and results-driven solutions
              designed to strengthen brand visibility, credibility, and
              engagement across all communication channels—powered by deep
              industry expertise and a proven track record.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
