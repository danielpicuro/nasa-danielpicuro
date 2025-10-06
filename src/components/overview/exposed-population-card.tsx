'use client';

import { Users } from 'lucide-react';

export function ExposedPopulationCard() {
  // Simulated data - replace with real data later
  const population = 284500;
  const description = 'people in risk zone';
  const change = '+12% vs last year';

  return (
    <div className="relative overflow-hidden rounded-xl border border-orange-900/30 bg-gradient-to-br from-orange-950/50 to-orange-900/30 p-6 backdrop-blur-sm">
      {/* Icon */}
      <div className="absolute right-4 top-4">
        <div className="rounded-lg bg-orange-800/50 p-2">
          <Users className="h-5 w-5 text-orange-400" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-orange-300/80">Exposed Population</h3>
        <p className="text-3xl font-bold text-orange-400">{population.toLocaleString()}</p>
        <p className="text-xs text-orange-300/60">{description}</p>
        <p className="text-xs font-medium text-orange-500">{change}</p>
      </div>
    </div>
  );
}
