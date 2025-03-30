/**
 * SnowEffect Component
 * 
 * Creates a magical snowfall effect using pure CSS animations.
 * Uses multiple layers of snowflakes with varying sizes and speeds.
 * 
 * Location: /components/SnowEffect.js
 */

export default function SnowEffect() {
  return (
    <div className="snowfall">
      {/* Small snowflakes */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`small-${i}`}
          className="snowflake snowflake-small"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Medium snowflakes */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`medium-${i}`}
          className="snowflake snowflake-medium"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Large snowflakes */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`large-${i}`}
          className="snowflake snowflake-large"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
} 