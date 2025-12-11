import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "./Services.css";

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: "🎯",
      title: "PR Strategy Development",
      description:
        "Comprehensive communication planning aligned with your business objectives",
      features: [
        "Communications Audit & Analysis",
        "Brand Positioning & Messaging",
        "Target Audience Identification",
        "Competitive Analysis",
        "Goal Setting & KPI Definition",
        "Annual PR Planning",
      ],
      color: "#C9A55A",
    },
    {
      id: 2,
      icon: "👥",
      title: "Media Relations",
      description:
        "Build and maintain powerful relationships with key media stakeholders",
      features: [
        "Press Release Writing & Distribution",
        "Media List Development & Management",
        "Proactive Media Pitching",
        "Media Interview Preparation",
        "Press Conference Planning",
        "Journalist Relationship Building",
      ],
      color: "#D4AF37",
    },
    {
      id: 3,
      icon: "✍️",
      title: "Content Creation",
      description: "Compelling narratives that resonate with your audience",
      features: [
        "Press Kit Development",
        "Thought Leadership Content",
        "Case Studies",
        "Blog & Article Writing",
        "Website Content & Copywriting",
        "Speechwriting & Presentations",
      ],
      color: "#E8C77C",
    },
    {
      id: 4,
      icon: "🌐",
      title: "Digital PR",
      description: "Amplify your brand presence across digital channels",
      features: [
        "Online Reputation Management",
        "Social Media Strategy",
        "Influencer Campaign Management",
        "SEO PR",
        "Online Community Engagement",
        "Podcast Guesting & Placement",
      ],
      color: "#C9A55A",
    },
    {
      id: 5,
      icon: "🛡️",
      title: "Crisis & Reputation Management",
      description:
        "Protect and restore your brand reputation when it matters most",
      features: [
        "Crisis Communications Planning",
        "Crisis Response & Management",
        "Reputation Repair",
        "Issues Management",
        "Stakeholder Communications",
        "Media Training",
      ],
      color: "#D4AF37",
    },
    {
      id: 6,
      icon: "📊",
      title: "Reporting & Insights",
      description:
        "Data-driven insights to measure and optimize your PR impact",
      features: [
        "Media Coverage Tracking",
        "Sentiment Analysis",
        "PR Value Measurement",
        "Impact Reporting",
        "Competitor PR Analysis",
        "Performance Reviews",
      ],
      color: "#E8C77C",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Our Services</span>
          <h2>Comprehensive Communication Solutions</h2>
          <p className="services-intro">
            From strategy to execution, we deliver integrated PR and
            communications services that drive real business results.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setActiveService(service.id)}
              onHoverEnd={() => setActiveService(null)}
            >
              <div
                className="service-icon"
                style={{
                  background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                }}
              >
                <span style={{ fontSize: "2.5rem" }}>{service.icon}</span>
              </div>

              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div
                    className="service-features"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul>
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <span
                            className="feature-bullet"
                            style={{ background: service.color }}
                          ></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                className="service-btn"
                style={{ borderColor: service.color, color: service.color }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            <h3>Ready to elevate your brand?</h3>
            <p>Let's craft a communication strategy that delivers results</p>
          </div>
          <motion.a
            href="#contact"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <span style={{ fontSize: "1.3rem" }}>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
