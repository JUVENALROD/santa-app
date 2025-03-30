/**
 * Create Wishlist Page
 * 
 * Form for creating a new wishlist for a child.
 * 
 * Location: /app/admin/create/page.js
 */

'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CreateWishlist() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    childName: '',
    age: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Generate a unique ID for the wishlist
      const wishlistId = `wishlist_${Date.now()}`;
      
      // Create wishlist object
      const wishlist = {
        id: wishlistId,
        childName: formData.childName,
        age: parseInt(formData.age),
        message: formData.message,
        created: new Date().toISOString().split('T')[0],
        status: 'Active',
        items: [] // Array to store wish items
      };

      // Get existing wishlists from localStorage or initialize empty array
      const existingWishlists = JSON.parse(localStorage.getItem('wishlists') || '[]');
      
      // Add new wishlist
      existingWishlists.push(wishlist);
      
      // Save back to localStorage
      localStorage.setItem('wishlists', JSON.stringify(existingWishlists));

      // Show success message
      alert('Wishlist created successfully! 🎄');
      
      // Redirect to view page
      router.push('/admin/view');
    } catch (error) {
      console.error('Error creating wishlist:', error);
      alert('There was an error creating the wishlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-night-gradient relative">
      {/* Stars effect */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🎄</div>
            <h1 className="text-4xl font-bold text-santa-gold mb-4">
              Create a Magical Wishlist
            </h1>
            <p className="text-xl text-snow-white/80">
              Fill in the details to create your child's special wishlist page
            </p>
          </div>

          <div className="card bg-night-blue/50 backdrop-blur-sm border border-snow-white/10">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-snow-white">Child's Name</span>
                  </label>
                  <input 
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="Enter your child's name"
                    className="input input-bordered bg-night-blue/30 border-snow-white/20 text-snow-white placeholder:text-snow-white/40 focus:border-santa-gold"
                    required
                    minLength={2}
                    maxLength={50}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-snow-white">Age</span>
                  </label>
                  <input 
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter your child's age"
                    className="input input-bordered bg-night-blue/30 border-snow-white/20 text-snow-white placeholder:text-snow-white/40 focus:border-santa-gold"
                    required
                    min="1"
                    max="12"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-snow-white">Special Message (Optional)</span>
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Add a special message for your child's wishlist page"
                    className="textarea textarea-bordered bg-night-blue/30 border-snow-white/20 text-snow-white placeholder:text-snow-white/40 focus:border-santa-gold h-32"
                    maxLength={500}
                  />
                </div>

                <div className="flex justify-end space-x-4 mt-8">
                  <Link 
                    href="/admin"
                    className="btn btn-ghost text-snow-white hover:bg-snow-white/10"
                  >
                    Cancel
                  </Link>
                  <button 
                    type="submit"
                    className="btn btn-primary bg-santa-red hover:bg-santa-red/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="loading loading-spinner loading-sm mr-2"></span>
                    ) : null}
                    {isSubmitting ? 'Creating...' : 'Create Wishlist'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 