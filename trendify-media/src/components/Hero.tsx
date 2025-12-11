import { motion } from "framer-motion";
import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="badge-dot"></span>
            Cape Town's Premier Black-Owned PR Agency
          </motion.div>

          <h1 className="hero-title">
            Brands that
            <span className="gradient-text"> inspire change</span>
          </h1>

          <p className="hero-subtitle">
            We craft culturally resonant communication strategies that elevate
            brands and deliver measurable impact. Purpose-driven. Digitally
            savvy. Results focused.
          </p>

          <div className="hero-cta">
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Conversation
              <span style={{ fontSize: "1.2rem" }}>→</span>
            </motion.a>

            <motion.a
              href="#services"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="visual-card card-1">
            <h4>PR Strategy</h4>
            <p>Data-driven communication planning</p>
          </div>
          <div className="visual-card card-2">
            <h4>Media Relations</h4>
            <p>Building powerful narratives</p>
          </div>
          <div className="visual-card card-3">
            <h4>Digital PR</h4>
            <p>Reputation management</p>
          </div>
        </motion.div>
      </div>

      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Hero;
