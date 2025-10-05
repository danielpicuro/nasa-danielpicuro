'use client';

import { DollarSign, CheckCircle } from 'lucide-react';

export function CapexCard() {
  // Simulated data - replace with real data later
  const amount = 87.5;
  const description = 'USD - total investment';
  const status = 'Within budget';

  return (
    <div className="relative overflow-hidden rounded-xl border border-green-900/30 bg-gradient-to-br from-green-950/50 to-green-900/30 p-6 backdrop-blur-sm">
      {/* Icon */}
      <div className="absolute right-4 top-4">
        <div className="rounded-lg bg-green-800/50 p-2">
          <DollarSign className="h-5 w-5 text-green-400" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-green-300/80">CapEx Estimated</h3>
        <p className="text-3xl font-bold text-green-400">${amount}M</p>
        <p className="text-xs text-green-300/60">{description}</p>
        <div className="flex items-center gap-1">
          <CheckCircle className="h-3 w-3 text-green-500" />
          <p className="text-xs font-medium text-green-500">{status}</p>
        </div>
      </div>
    </div>
  );
}
