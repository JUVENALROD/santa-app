'use client';

/**
 * SnowEffect Component
 * 
 * Creates a magical snowfall effect using CSS animations and React.
 * Generates multiple layers of snowflakes with varying sizes and speeds.
 * 
 * Location: /components/SnowEffect.js
 */

import { useEffect, useState } from 'react';

export default function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Generate snowflakes
    const generateSnowflakes = () => {
      const flakes = [];
      for (let i = 0; i < 100; i++) {
        flakes.push({
          id: i,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          animationDelay: `${Math.random() * 2}s`,
          size: Math.random() < 0.5 ? 'small' : Math.random() < 0.8 ? 'medium' : 'large'
        });
      }
      return flakes;
    };

    setSnowflakes(generateSnowflakes());

    // Regenerate snowflakes every 8 seconds
    const interval = setInterval(() => {
      setSnowflakes(generateSnowflakes());
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="snowfall">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className={`snowflake snowflake-${flake.size}`}
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay
          }}
        />
      ))}
    </div>
  );
} 