/**
 * Admin Layout
 * 
 * Layout component for the admin section that handles authentication and layout.
 * 
 * Location: /app/admin/layout.js
 */

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 