import React from "react";
import "./StarryBackground.css";

const StarryBackground: React.FC = () => {
  // Optimized - 15 stars and 6 sparkles for visible effect without performance impact
  const stars = Array.from({ length: 15 });
  const sparkles = Array.from({ length: 6 });

  return (
    <div className="starry-background">
      {/* Minimal stars with CSS-only animations */}
      {stars.map((_, i) => (
        <div
          key={`star-${i}`}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: 0.4 + Math.random() * 0.5,
          }}
        />
      ))}

      {/* Sparkles with slower animations */}
      {sparkles.map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="sparkle"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
