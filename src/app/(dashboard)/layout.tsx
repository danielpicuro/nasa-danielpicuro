import React from 'react';
import { DashboardNav } from '@/components/dashboard/DashboardNav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <DashboardNav />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}