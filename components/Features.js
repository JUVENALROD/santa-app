/**
 * Features Component
 * 
 * Displays the main features of the Santa Wishlist app in a grid layout.
 * Each feature is presented with an icon and description in a festive design.
 * 
 * Location: /components/Features.js
 */

export default function Features() {
  const features = [
    {
      title: "Create Magic",
      description: "Design a personalized wishlist page for your child with a magical Christmas theme.",
      icon: "🎄",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Share with Santa",
      description: "Let your child write their wishes to Santa in a magical snowy environment.",
      icon: "🎅",
      color: "from-red-500 to-santa-red"
    },
    {
      title: "Track Wishes",
      description: "View and manage your child's wishlist responses through your admin dashboard.",
      icon: "📝",
      color: "from-santa-gold to-yellow-500"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/snow-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-santa-gold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Create a magical experience for your child this Christmas with our easy-to-use platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(to bottom right, ${feature.color})` }}
              ></div>
              <div className="card bg-slate-800/50 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="card-body items-center text-center">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="card-title text-2xl text-white mb-4">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 