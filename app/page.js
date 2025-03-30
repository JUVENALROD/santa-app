/**
 * Homepage
 * 
 * The main landing page of the Santa Wishlist app.
 * Combines the Hero, Features, and Testimonials components to create an engaging experience.
 * 
 * Location: /app/page.js
 */

import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import SnowEffect from '../components/SnowEffect';

export default function Home() {
  return (
    <main className="min-h-screen bg-night-gradient relative overflow-hidden">
      {/* Snow Effect */}
      <SnowEffect />
      
      {/* Stars effect */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
      </div>

      {/* Christmas lights */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="christmas-lights"></div>
      </div>

      <Hero />
      <Features />
      <Testimonials />
    </main>
  );
} 