/**
 * Snow Effect Component
 * 
 * Creates a dynamic snow animation effect with multiple layers of snowflakes.
 * 
 * Location: /app/components/SnowEffect.js
 */

'use client';
import { useEffect, useState } from 'react';

export default function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Create initial snowflakes
    const generateSnowflakes = () => {
      const flakes = [];
      const numFlakes = 100; // Adjust number of snowflakes

      for (let i = 0; i < numFlakes; i++) {
        flakes.push({
          id: i,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 5}s`, // Between 5-8s
          animationDelay: `${Math.random() * 5}s`,
          type: Math.random() < 0.3 ? 'small' : Math.random() < 0.6 ? 'medium' : 'large'
        });
      }

      setSnowflakes(flakes);
    };

    generateSnowflakes();

    // Regenerate snowflakes periodically
    const interval = setInterval(() => {
      generateSnowflakes();
    }, 8000); // Regenerate every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="snowfall">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className={`${
            flake.type === 'small' 
              ? 'snowflake-small' 
              : flake.type === 'medium' 
                ? 'snowflake-medium' 
                : 'snowflake'
          }`}
          style={{
            left: flake.left,
            animation: `${Math.random() > 0.5 ? 'snowfall' : 'snowfall-alt'} ${flake.animationDuration} linear infinite`,
            animationDelay: flake.animationDelay,
            opacity: Math.random() * 0.4 + 0.3
          }}
        />
      ))}
    </div>
  );
} 