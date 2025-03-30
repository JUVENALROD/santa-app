/**
 * Hero Component
 * 
 * A festive hero section for the homepage that introduces the Santa Wishlist app.
 * Features a welcoming message and call-to-action buttons with enhanced magical elements.
 * 
 * Location: /components/Hero.js
 */

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-night-gradient relative overflow-hidden">
      {/* Magical stars effect */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
      </div>

      {/* Snowfall effect container */}
      <div className="absolute inset-0 z-10">
        <div className="snowfall-container"></div>
      </div>
      
      {/* Christmas lights effect */}
      <div className="absolute inset-0 z-20 opacity-20">
        <div className="christmas-lights"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content text-center z-30 max-w-4xl px-4">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center items-center space-x-4">
              <span className="text-6xl md:text-7xl animate-bounce">🎄</span>
              <span className="text-6xl md:text-7xl animate-pulse">🎅</span>
              <span className="text-6xl md:text-7xl animate-bounce">🎁</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-santa-gold drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              Create Magic This Christmas
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-snow-white/90 max-w-2xl mx-auto leading-relaxed">
            Create a magical wishlist experience for your child. Let them write to Santa and make their Christmas dreams come true!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link 
              href="/admin" 
              className="btn btn-lg btn-primary bg-santa-red hover:bg-santa-red/90 text-snow-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Create Wishlist
            </Link>
            <Link 
              href="/login" 
              className="btn btn-lg btn-ghost border-2 border-snow-white/20 text-snow-white hover:bg-snow-white/10 hover:scale-105 transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-night-darker to-transparent z-40"></div>
    </div>
  );
} 