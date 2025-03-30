/**
 * Root Layout
 * 
 * The root layout component that wraps all pages.
 * Sets up global styles, metadata, and font configuration.
 * 
 * Location: /app/layout.js
 */

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Santa Wishlist - Create Magic This Christmas',
  description: 'Create a magical wishlist experience for your child this Christmas. Let them write to Santa and make their Christmas dreams come true!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="santa" className="bg-night-darker">
      <body className={`${inter.className} min-h-screen bg-night-gradient text-snow-white`}>
        {children}
      </body>
    </html>
  );
} 