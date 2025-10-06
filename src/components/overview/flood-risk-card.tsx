'use client';

import { Droplet } from 'lucide-react';

export function FloodRiskCard() {
  // Simulated data - replace with real data later
  const riskLevel = 'High';
  const description = 'T=50 years - 45% area';
  const riskPercentage = 75;

  return (
    <div className="!relative !overflow-hidden !rounded-xl !border !border-cyan-900/30 !bg-gradient-to-br !from-cyan-950/50 !to-cyan-900/30 !p-6 !backdrop-blur-sm">
      {/* Icon */}
      <div className="!absolute !right-4 !top-4">
        <div className="!rounded-lg !bg-cyan-800/50 !p-2">
          <Droplet className="!h-5 !w-5 !text-cyan-400" />
        </div>
      </div>

      {/* Content */}
      <div className="!space-y-3">
        <h3 className="!text-sm !font-medium !text-cyan-300/80">Flood Risk</h3>
        <p className="!text-3xl !font-bold !text-cyan-400">{riskLevel}</p>
        <p className="!text-xs !text-cyan-300/60">{description}</p>

        {/* Risk Level Bar */}
        <div className="!space-y-1">
          <div className="!flex !items-center !justify-between !text-xs">
            <span className="!text-cyan-300/60">Risk level</span>
            <span className="!font-medium !text-cyan-400">{riskPercentage}%</span>
          </div>
          <div className="!h-1.5 !w-full !overflow-hidden !rounded-full !bg-cyan-950/50">
            <div className="!h-full !bg-cyan-400" style={{ width: `${riskPercentage}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
