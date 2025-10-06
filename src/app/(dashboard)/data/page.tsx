'use client';

import { useState } from 'react';
import { DataNavbar } from '@/components/data/data-navbar';
import { DirectorySidebar } from '@/components/data/directory-sidebar';
import { DayNightPanel } from '@/components/data/day-night-panel';
import { WeatherControls } from '@/components/data/weather-controls';
import { LegendPanel } from '@/components/data/legend-panel';
import { ViewToggle } from '@/components/data/view-toggle';
import { QuickActions } from '@/components/data/quick-actions';
import { ProjectData } from '@/components/data/project-data';
import { MapLayers } from '@/components/data/map-layers';
import { MapView } from '@/components/data/map-view';
import { MapTools } from '@/components/data/map-tools';

export default function DataPage() {
  const [timeOfDay, setTimeOfDay] = useState<string>('Day');
  const [viewMode, setViewMode] = useState<'3D' | '2D'>('3D');
  const [selectedLayers, setSelectedLayers] = useState<string[]>([
    'bld-img',
    'bld-buildings',
    'networks',
    'relieve',
    'uso-suelo',
    'edificios',
    'sensores',
  ]);

  return (
    <div className="!min-h-screen !bg-slate-900 !relative !overflow-hidden">
      <DataNavbar timeOfDay={timeOfDay} onTimeOfDayChange={setTimeOfDay} />
      <div className="!absolute !top-20 !left-1/2 !-translate-x-1/2 !z-30">
        <WeatherControls />
      </div>
      <div className="!absolute !top-32 !left-80 !z-30">
        <LegendPanel />
      </div>
      <div className="!absolute !top-32 !right-80 !z-30">
        <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
      </div>
      <div className="!flex !h-[calc(100vh-64px)]">
        <div className="!w-64 !bg-slate-950/95 !overflow-y-auto">
          <DirectorySidebar selectedLayers={selectedLayers} onLayersChange={setSelectedLayers} />
          <DayNightPanel />
        </div>
        <div className="!flex-1 !relative">
          <MapView viewMode={viewMode} />
          <MapTools />
        </div>
        <div className="!w-80 !bg-slate-950/95 !overflow-y-auto !p-4 !space-y-4">
          <QuickActions />
          <ProjectData />
          <MapLayers selectedLayers={selectedLayers} onLayersChange={setSelectedLayers} />
        </div>
      </div>
    </div>
  );
}
