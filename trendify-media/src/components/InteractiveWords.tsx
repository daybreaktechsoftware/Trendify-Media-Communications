import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./InteractiveWords.css";

const InteractiveWords: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [progress, setProgress] = useState(0);

  const words = [
    { word: "INSPIRE", color: "#D4AF37" },
    { word: "ELEVATE", color: "#C9A55A" },
    { word: "TRANSFORM", color: "#E8C77C" },
    { word: "AMPLIFY", color: "#D4AF37" },
    { word: "INNOVATE", color: "#C9A55A" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 700); // Faster word rotation

    const hideTimer = setTimeout(() => {
      setShowIntro(false);
    }, 3500); // Reduced from 5000ms to 3500ms

    // Progress bar animation - faster progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2.86; // 100% in 3.5 seconds (100/35 intervals)
      });
    }, 100);

    return () => {
      clearInterval(timer);
      clearTimeout(hideTimer);
      clearInterval(progressInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="interactive-words"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Elegant Loading Bar */}
          <motion.div
            className="loading-bar-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="loading-bar-track">
              <motion.div
                className="loading-bar-fill"
                style={{ width: `${progress}%` }}
              />
              <motion.div
                className="loading-bar-glow"
                style={{ left: `${progress}%` }}
              />
            </div>
            <motion.div
              className="loading-percentage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(progress)}%
            </motion.div>
          </motion.div>

          <div className="words-container">
            <motion.h2
              className="words-prefix"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              Words have power.
            </motion.h2>

            <motion.h2
              className="words-action"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              Change the words,
            </motion.h2>

            <div className="words-changing">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentWordIndex}
                  className="word-highlight"
                  style={{ color: words[currentWordIndex].color }}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 1.1 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                >
                  {words[currentWordIndex].word}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.h2
              className="words-suffix"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              the impact.
            </motion.h2>

            <motion.p
              className="words-description"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.5,
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              We help you carefully select the right words to craft your
              narrative and shape powerful conversations that resonate.
            </motion.p>
          </div>

          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <div className="scroll-line"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveWords;
