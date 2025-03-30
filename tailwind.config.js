/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'santa-red': '#D42426',
        'santa-green': '#0F5D3A',
        'santa-gold': '#FFD700',
        'night-dark': '#0F172A',
        'night-darker': '#020617',
        'night-blue': '#1E293B',
        'snow-white': '#F8FAFC',
        'magic-purple': '#7C3AED',
      },
      backgroundImage: {
        'snow-pattern': "url('/images/snow-pattern.svg')",
        'night-gradient': 'linear-gradient(to bottom, #0F172A, #020617)',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        santa: {
          "primary": "#D42426",
          "secondary": "#7C3AED",
          "accent": "#FFD700",
          "neutral": "#1E293B",
          "base-100": "#0F172A",
          "info": "#3ABFF8",
          "success": "#0F5D3A",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
} 