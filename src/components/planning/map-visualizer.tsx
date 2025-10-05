'use client';

import { useState } from 'react';
import {
  Ruler,
  Mountain,
  Circle,
  Search,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Navigation,
  Target,
} from 'lucide-react';
import Image from 'next/image';

export function MapVisualizer() {
  const [activeTool, setActiveTool] = useState<'measure' | 'elevation' | 'buffer' | null>(null);
  const [showLegend, setShowLegend] = useState(true);

  return (
    <div className="flex-1 relative bg-background">
      {/* Map Background - Using the city image */}
      <div className="absolute inset-0">
        <Image
          src="/images/street-view.png"
          alt="3D City View"
          width={1920}
          height={1280}
          className="object-cover"
          priority
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Legend */}
      {showLegend && (
        <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4 min-w-[250px]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-cyan-400">Legend</h3>
            <button
              onClick={() => setShowLegend(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
              <span className="text-sm text-foreground">Active Collectors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-sm text-foreground">Under Construction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-muted" />
              <span className="text-sm text-foreground">Planned</span>
            </div>
          </div>
        </div>
      )}

      {/* Center Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white/90 mb-2">Powered by</h1>
          <h2 className="text-7xl font-bold text-cyan-400">51WORLD</h2>
          <p className="text-lg text-cyan-400/80 mt-4">Rapid Digital Twin Utilization</p>
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-2">
        <button
          onClick={() => setActiveTool(activeTool === 'measure' ? null : 'measure')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTool === 'measure'
              ? 'bg-cyan-500 text-white'
              : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
          }`}
        >
          <Ruler className="h-4 w-4" />
          <span className="text-sm font-medium">Measure</span>
        </button>
        <button
          onClick={() => setActiveTool(activeTool === 'elevation' ? null : 'elevation')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTool === 'elevation'
              ? 'bg-cyan-500 text-white'
              : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
          }`}
        >
          <Mountain className="h-4 w-4" />
          <span className="text-sm font-medium">Elevation</span>
        </button>
        <button
          onClick={() => setActiveTool(activeTool === 'buffer' ? null : 'buffer')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTool === 'buffer'
              ? 'bg-cyan-500 text-white'
              : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
          }`}
        >
          <Circle className="h-4 w-4" />
          <span className="text-sm font-medium">Buffer</span>
        </button>
      </div>

      {/* Right Toolbar */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        <button className="p-3 bg-card/90 backdrop-blur-sm border border-border rounded-lg text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/50 transition-colors">
          <Search className="h-5 w-5" />
        </button>
        <button className="p-3 bg-card/90 backdrop-blur-sm border border-border rounded-lg text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/50 transition-colors">
          <ZoomIn className="h-5 w-5" />
        </button>
        <button className="p-3 bg-card/90 backdrop-blur-sm border border-border rounded-lg text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/50 transition-colors">
          <ZoomOut className="h-5 w-5" />
        </button>
        <button className="p-3 bg-card/90 backdrop-blur-sm border border-border rounded-lg text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/50 transition-colors">
          <Maximize2 className="h-5 w-5" />
        </button>
        <button className="p-3 bg-card/90 backdrop-blur-sm border border-border rounded-lg text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/50 transition-colors">
          <Navigation className="h-5 w-5" />
        </button>
        <button className="p-3 bg-card/90 backdrop-blur-sm border border-border rounded-lg text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/50 transition-colors">
          <Target className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
