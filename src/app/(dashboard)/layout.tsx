import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <nav>
      <main>{children}</main>
    </nav>
  );
}
