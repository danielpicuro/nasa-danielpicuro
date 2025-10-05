import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
