'use client';

import { AIAssistantMap } from '@/components/data/ai-assistant-map';
import { ForecastPanel } from '@/components/data/forecast-panel';

interface MapViewProps {
  viewMode: '3D' | '2D';
}

export function MapView({ viewMode }: MapViewProps) {
  return (
    <div className="!relative !w-full !h-full !bg-[url('/images/arqui.jpg')] !bg-cover !bg-center">
      {/* Semi-transparent overlay */}
      <div className="!absolute !inset-0 !bg-slate-900/20"></div>

      {/* IA Urban Lab Marker */}
      <div className="!absolute !top-1/2 !left-1/3 !-translate-x-1/2 !-translate-y-1/2">
        <div className="!relative">
          <div className="!absolute !-top-8 !left-1/2 !-translate-x-1/2 !bg-slate-900/90 !px-3 !py-1 !rounded !text-cyan-400 !text-xs !whitespace-nowrap !border !border-cyan-500">
            📍 IA Urban Lab
          </div>
          <div className="!w-3 !h-3 !bg-cyan-400 !rounded-full !animate-pulse"></div>
        </div>
      </div>

      {/* AI Assistant */}
      <div className="!absolute !bottom-32 !left-8">
        <AIAssistantMap />
      </div>

      {/* Forecast Panel */}
      <div className="!absolute !bottom-32 !left-1/2 !-translate-x-1/2">
        <ForecastPanel />
      </div>

      {/* Suburb Label */}
      <div className="!absolute !bottom-8 !left-8 !text-white !text-sm !bg-slate-900/70 !px-3 !py-1 !rounded">
        Suburb 2
      </div>
    </div>
  );
}
