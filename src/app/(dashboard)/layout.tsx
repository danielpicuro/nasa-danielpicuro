import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <nav>
      <main className="!min-h-screen !bg-[url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920')] !bg-cover !bg-center !relative">
        <div className="!absolute !inset-0 !bg-black/60" />
        <div className="!relative !z-10">{children}</div>
      </main>
    </nav>
  );
}
