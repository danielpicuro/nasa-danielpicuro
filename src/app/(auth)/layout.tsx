import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full p-8 space-y-8">{children}</div>
    </div>
  );
}
