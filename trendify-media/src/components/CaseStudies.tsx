import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "./CaseStudies.css";

const CaseStudies: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const caseStudies = [
    {
      id: 1,
      title: "PepsiCo South Africa",
      subtitle: "CGI Billboard Launch",
      challenge:
        "Achieve R6 million in earned media despite widespread negative sentiment due to online backlash regarding franchise issues.",
      impact: [
        "Successfully secured R6 million in earned media",
        "Strong influencer and media engagement across Cape Town & Johannesburg",
        "Demonstrated strategic execution under high-pressure conditions",
      ],
      role: "Led influencer strategy, curated content creators, and navigated online sentiment challenges to deliver high-impact results.",
      icon: "📈",
      color: "#C9A55A",
      stats: [
        { label: "Earned Media", value: "R6M" },
        { label: "Cities Covered", value: "2" },
        { label: "Sentiment", value: "Positive" },
      ],
    },
    {
      id: 2,
      title: "Aveeno Skincare SA",
      subtitle: "Brand Launch",
      challenge:
        "Secure high-value media attendance and broad national coverage for a new brand entering the South African market.",
      impact: [
        "Hosted 18 top-tier media attendees (News24 Lifestyle, IOL, Heart FM, etc.)",
        "Achieved 30+ media mentions",
        "Exceeded PR targets threefold",
      ],
      role: "Oversaw earned media strategy, coordinated media relations, and managed brand-aligned storytelling across all platforms.",
      icon: "👥",
      color: "#D4AF37",
      stats: [
        { label: "Media Attendees", value: "18" },
        { label: "Media Mentions", value: "30+" },
        { label: "Target Exceeded", value: "3x" },
      ],
    },
  ];

  return (
    <section className="case-studies" id="case-studies">
      <div className="case-studies-container">
        <motion.div
          className="case-studies-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Case Studies</span>
          <h2>Proven Results That Speak Volumes</h2>
          <p className="case-studies-intro">
            Real campaigns. Real impact. Real results.
          </p>
        </motion.div>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => {
            const isExpanded = expandedCard === study.id;

            return (
              <motion.div
                key={study.id}
                className={`case-study-card ${isExpanded ? "expanded" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                layout
              >
                <div
                  className="case-study-header"
                  onClick={() => toggleCard(study.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className="case-study-icon"
                    style={{
                      background: `linear-gradient(135deg, ${study.color}, ${study.color}dd)`,
                    }}
                  >
                    <span style={{ fontSize: "2.5rem" }}>{study.icon}</span>
                  </div>
                  <div className="case-study-title">
                    <h3>{study.title}</h3>
                    <p className="case-study-subtitle">{study.subtitle}</p>
                  </div>
                  <motion.div
                    className="expand-indicator"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span style={{ fontSize: "1.5rem", color: study.color }}>
                      ▼
                    </span>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      className="case-study-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="case-study-content-inner">
                        <div className="case-study-section">
                          <h4>The Challenge</h4>
                          <p>{study.challenge}</p>
                        </div>

                        <div className="case-study-section">
                          <h4>
                            <span
                              style={{
                                color: study.color,
                                fontSize: "1.5rem",
                                marginRight: "10px",
                              }}
                            >
                              ★
                            </span>
                            The Impact
                          </h4>
                          <ul className="impact-list">
                            {study.impact.map((item, idx) => (
                              <li key={idx}>
                                <span
                                  className="impact-bullet"
                                  style={{ background: study.color }}
                                ></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="case-study-section">
                          <h4>Our Role</h4>
                          <p className="role-text">{study.role}</p>
                        </div>

                        <div className="case-study-stats">
                          {study.stats.map((stat, idx) => (
                            <div key={idx} className="stat-item">
                              <div
                                className="stat-value"
                                style={{ color: study.color }}
                              >
                                {stat.value}
                              </div>
                              <div className="stat-label">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="case-studies-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Ready to create your success story?</h3>
          <p>Let's collaborate on your next breakthrough campaign</p>
          <motion.a
            href="#contact"
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
