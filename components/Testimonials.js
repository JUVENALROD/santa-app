/**
 * Testimonials Component
 * 
 * Displays user testimonials in a festive carousel layout.
 * Adds social proof to the homepage.
 * 
 * Location: /components/Testimonials.js
 */

export default function Testimonials() {
  const testimonials = [
    {
      quote: "My daughter was absolutely thrilled to write to Santa! The magical snowy background made it feel so special.",
      author: "Sarah Johnson",
      role: "Parent",
      avatar: "👩‍👧"
    },
    {
      quote: "The most magical way to create a wishlist! My son couldn't stop talking about it.",
      author: "Michael Chen",
      role: "Parent",
      avatar: "👨‍👦"
    },
    {
      quote: "It's like magic! The snow effect and Christmas theme made it so special for my kids.",
      author: "Emma Wilson",
      role: "Parent",
      avatar: "👩‍👧‍👦"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/snow-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-santa-gold mb-4">
            What Parents Say
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join thousands of parents creating magical Christmas memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card bg-slate-800/50 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-white/90 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.author}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 