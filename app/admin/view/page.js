/**
 * View Wishlists Page
 * 
 * Displays all wishlists created by the parent.
 * 
 * Location: /app/admin/view/page.js
 */

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ViewWishlists() {
  const [wishlists, setWishlists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load wishlists from localStorage
    const loadWishlists = () => {
      try {
        const savedWishlists = JSON.parse(localStorage.getItem('wishlists') || '[]');
        setWishlists(savedWishlists);
      } catch (error) {
        console.error('Error loading wishlists:', error);
        setWishlists([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadWishlists();
  }, []);

  const handleDelete = (wishlistId) => {
    if (window.confirm('Are you sure you want to delete this wishlist?')) {
      try {
        const updatedWishlists = wishlists.filter(w => w.id !== wishlistId);
        localStorage.setItem('wishlists', JSON.stringify(updatedWishlists));
        setWishlists(updatedWishlists);
        alert('Wishlist deleted successfully!');
      } catch (error) {
        console.error('Error deleting wishlist:', error);
        alert('There was an error deleting the wishlist. Please try again.');
      }
    }
  };

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
            <div className="text-6xl mb-6">🎅</div>
            <h1 className="text-4xl font-bold text-santa-gold mb-4">
              Your Wishlists
            </h1>
            <p className="text-xl text-snow-white/80">
              Manage and view all your children's wishlists
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <span className="loading loading-spinner loading-lg text-santa-gold"></span>
            </div>
          ) : wishlists.length > 0 ? (
            <div className="space-y-6">
              {wishlists.map((wishlist) => (
                <div 
                  key={wishlist.id}
                  className="card bg-night-blue/50 backdrop-blur-sm border border-snow-white/10 hover:border-santa-gold/50 transition-all duration-300"
                >
                  <div className="card-body">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h2 className="card-title text-2xl text-santa-gold">
                          {wishlist.childName}'s Wishlist
                        </h2>
                        <div className="mt-2 space-y-1">
                          <p className="text-snow-white/80">Age: {wishlist.age}</p>
                          <p className="text-snow-white/60">Created: {wishlist.created}</p>
                          <p className="text-snow-white/60">Status: {wishlist.status}</p>
                          {wishlist.message && (
                            <p className="text-snow-white/80 mt-2 italic">
                              "{wishlist.message}"
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Link 
                          href={`/wishlist/${wishlist.id}`}
                          className="btn btn-ghost text-santa-gold hover:bg-santa-gold/10"
                        >
                          Preview
                        </Link>
                        <button 
                          onClick={() => handleDelete(wishlist.id)}
                          className="btn btn-ghost text-santa-red hover:bg-santa-red/10"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-snow-white/80 text-xl mb-6">
                No wishlists created yet
              </p>
              <Link 
                href="/admin/create"
                className="btn btn-primary bg-santa-red hover:bg-santa-red/90"
              >
                Create Your First Wishlist
              </Link>
            </div>
          )}

          <div className="text-center mt-12">
            <Link 
              href="/admin"
              className="btn btn-ghost text-snow-white hover:bg-snow-white/10"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 