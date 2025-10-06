'use client';

import { useState } from 'react';
import { ResourcesNavbar } from '@/components/resources/resources-navbar';
import { InfrastructureGrid } from '@/components/resources/infrastructure-grid';
import { GreenspaceChart } from '@/components/resources/greenspace-chart';
import { SuburbPopulationChart } from '@/components/resources/suburb-population-chart';
import { IAUrbanLandSection } from '@/components/resources/ia-urban-land-section';
import { ZonePanel } from '@/components/resources/zone-panel';

export default function ResourcesPage() {
  const [timeOfDay, setTimeOfDay] = useState<string>('Day');

  return (
    <div className="!min-h-screen !relative">
      {/* Semi-transparent overlay */}
      <div className="!absolute !inset-0 !bg-slate-900/50"></div>

      {/* Content */}
      <div className="!relative !z-10 !min-h-screen">
        {/* Top Navbar */}
        <ResourcesNavbar timeOfDay={timeOfDay} onTimeOfDayChange={setTimeOfDay} />

        {/* Main Content Grid */}
        <div className="!grid !grid-cols-12 gap-4 p-4 h-[calc(100vh-140px)]">
          {/* Left Panel */}
          <div className="!col-span-3 !space-y-4 !overflow-y-auto">
            <InfrastructureGrid />
            <GreenspaceChart />
            <SuburbPopulationChart />
            <IAUrbanLandSection />
          </div>

          {/* Center Content - 3D View (background image) */}
          <div className="!col-span-6">
            <img
              src="/images/barranco.jpg"
              alt="Lima City 3D View"
              className="!w-full !h-full !object-cover !rounded-lg !absolute !-z-40 !top-0 !right-0"
            />
          </div>

          {/* Right Panel - Zone Information */}
          <div className="!col-span-3 !space-y-4 !overflow-y-auto">
            <ZonePanel title="Commercial" color="bg-yellow-400" sites={4} area={5} coverange={43} />
            <ZonePanel title="Residential" color="bg-blue-400" sites={8} area={7} coverange={50} />
            <ZonePanel title="Recreational" color="bg-green-400" sites={3} area={1} coverange={7} />
          </div>
        </div>
      </div>
    </div>
  );
}
