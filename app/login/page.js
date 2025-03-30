/**
 * Login Page
 * 
 * Allows parents to sign in to their account.
 * 
 * Location: /app/login/page.js
 */

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-night-gradient relative">
      {/* Stars effect */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <span className="text-6xl">🎅</span>
            </div>
            <h1 className="text-4xl font-bold text-santa-gold mb-4">
              Welcome Back
            </h1>
            <p className="text-xl text-snow-white/80">
              Sign in to manage your child's wishlist
            </p>
          </div>

          {/* Login Form */}
          <div className="card bg-night-blue/50 backdrop-blur-sm border border-snow-white/10">
            <div className="card-body">
              <form className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-snow-white">Email</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="input input-bordered bg-night-blue/30 border-snow-white/20 text-snow-white placeholder:text-snow-white/40 focus:border-santa-gold"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-snow-white">Password</span>
                  </label>
                  <input 
                    type="password" 
                    placeholder="Enter your password" 
                    className="input input-bordered bg-night-blue/30 border-snow-white/20 text-snow-white placeholder:text-snow-white/40 focus:border-santa-gold"
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary bg-santa-red hover:bg-santa-red/90">
                    Sign In
                  </button>
                </div>
              </form>

              <div className="divider text-snow-white/40">OR</div>

              <div className="text-center">
                <p className="text-snow-white/80 mb-4">
                  Don't have an account yet?
                </p>
                <button className="btn btn-ghost text-santa-gold hover:bg-santa-gold/10">
                  Create Account
                </button>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-8">
            <Link 
              href="/" 
              className="btn btn-ghost text-snow-white hover:bg-snow-white/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 