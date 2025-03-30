/**
 * Admin Page
 * 
 * Allows parents to create and manage wishlist pages for their children.
 * 
 * Location: /app/admin/page.js
 */

import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-night-gradient relative">
      {/* Stars effect */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-santa-gold mb-4">
              Create Your Child's Wishlist
            </h1>
            <p className="text-xl text-snow-white/80">
              Set up a magical wishlist page for your child to write to Santa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Create New Wishlist Card */}
            <Link href="/admin/create" className="group">
              <div className="card bg-night-blue/50 backdrop-blur-sm border border-snow-white/10 group-hover:border-santa-gold/50 transition-all duration-300 h-full">
                <div className="card-body">
                  <h2 className="card-title text-2xl text-santa-gold">Create New Wishlist</h2>
                  <p className="text-snow-white/80 mb-6">
                    Create a new magical wishlist page for your child
                  </p>
                  <div className="card-actions justify-end mt-auto">
                    <span className="btn btn-primary bg-santa-red group-hover:bg-santa-red/90">
                      Create Now
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* View Existing Wishlists Card */}
            <Link href="/admin/view" className="group">
              <div className="card bg-night-blue/50 backdrop-blur-sm border border-snow-white/10 group-hover:border-santa-gold/50 transition-all duration-300 h-full">
                <div className="card-body">
                  <h2 className="card-title text-2xl text-santa-gold">View Wishlists</h2>
                  <p className="text-snow-white/80 mb-6">
                    View and manage your existing wishlist pages
                  </p>
                  <div className="card-actions justify-end mt-auto">
                    <span className="btn btn-primary bg-santa-red group-hover:bg-santa-red/90">
                      View All
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
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