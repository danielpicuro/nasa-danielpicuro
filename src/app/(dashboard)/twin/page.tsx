'use client';

import { useState } from 'react';
import { Cable as Cube, Upload } from 'lucide-react';
import { ToolButton } from '@/components/twin/tool-button';
import { DataPanel } from '@/components/twin/data-panel';
import { ActionCard } from '@/components/twin/action-card';
import { Viewer3D } from '@/components/twin/viewer-3d';
import { OverridePanel } from '@/components/twin/override-panel';

export default function TwinPage() {
  const [activeTab, setActiveTab] = useState<'live-sync' | 'web-editor' | 'catalog'>('web-editor');
  const [activeTool, setActiveTool] = useState<string>('move');

  const sustainabilityData = [
    { label: 'CO₂', value: '120 kg/m²' },
    { label: 'EUI', value: '85 kWh/m²/año' },
    { label: 'Whater', value: '45 L/m²/día' },
  ];

  return (
    <div className="!min-h-screen !bg-gradient-to-br !from-black !via-gray-900 !to-black !text-white">
      {/* Header */}
      <header className="!border-b !border-white/10 !bg-black/50 !backdrop-blur-sm">
        <div className="!container !mx-auto !px-6 !py-4">
          <div className="!flex !items-center !justify-between !mb-6">
            <div className="!flex !items-center !gap-4">
              <div className="!w-14 !h-14 !bg-gradient-to-br !from-cyan-500 !to-blue-600 !rounded-lg"></div>
              <div>
                <h1 className="!text-2xl !font-bold !text-cyan-400">Intake at CIM</h1>
                <p className="!text-sm !text-gray-400">
                  Live BIM/GIS synchronization or lightweight web editing
                </p>
              </div>
            </div>
            <div className="!flex !gap-3">
              <button className="!px-6 !py-2.5 !bg-gray-700 hover:!bg-gray-600 !rounded-lg !font-medium !transition-colors">
                Black
              </button>
              <button className="!px-6 !py-2.5 !bg-cyan-500 hover:!bg-cyan-400 !rounded-lg !font-medium !transition-colors">
                Next: Geolocation & Preparation
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="!flex !gap-2 !bg-black/50 !rounded-full !p-1 !w-fit">
            <button
              onClick={() => setActiveTab('live-sync')}
              className={`!px-6 !py-2 !rounded-full !font-medium !transition-all !duration-300 ${
                activeTab === 'live-sync'
                  ? '!bg-cyan-500 !text-white'
                  : '!text-gray-400 hover:!text-white'
              }`}
            >
              A) Live Sync
            </button>
            <button
              onClick={() => setActiveTab('web-editor')}
              className={`!px-6 !py-2 !rounded-full !font-medium !transition-all !duration-300 ${
                activeTab === 'web-editor'
                  ? '!bg-cyan-500 !text-white'
                  : '!text-gray-400 hover:!text-white'
              }`}
            >
              B) Lightweight Web Editor
            </button>
            <button
              onClick={() => setActiveTab('catalog')}
              className={`!px-6 !py-2 !rounded-full !font-medium !transition-all !duration-300 ${
                activeTab === 'catalog'
                  ? '!bg-cyan-500 !text-white'
                  : '!text-gray-400 hover:!text-white'
              }`}
            >
              Indexed Catalog
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="!container !mx-auto !px-6 !py-6">
        <div className="!grid !grid-cols-12 !gap-6 !h-[calc(100vh-200px)]">
          {/* Left Sidebar - Tools */}
          <div className="!col-span-3 !space-y-4 !overflow-y-auto">
            <div className="!mb-6">
              <h2 className="!text-xl !font-bold !mb-1">Lightweight Web Editor</h2>
              <p className="!text-sm !text-gray-400">
                Range 4D transformation and analysis tools without leaving the browser
              </p>
            </div>

            {/* Tool Groups */}
            <div className="!space-y-3">
              <div className="!flex !gap-2">
                <ToolButton
                  label="Move"
                  active={activeTool === 'move'}
                  onClick={() => setActiveTool('move')}
                />
                <ToolButton
                  label="Climb"
                  active={activeTool === 'climb'}
                  onClick={() => setActiveTool('climb')}
                />
                <ToolButton
                  label="Clipping"
                  active={activeTool === 'clipping'}
                  onClick={() => setActiveTool('clipping')}
                />
              </div>

              <div className="!flex !gap-2">
                <ToolButton
                  label="Rotate"
                  active={activeTool === 'rotate'}
                  onClick={() => setActiveTool('rotate')}
                />
                <ToolButton
                  label="Selection by polygons"
                  active={activeTool === 'selection'}
                  onClick={() => setActiveTool('selection')}
                  variant="compact"
                />
              </div>

              <ToolButton
                label="Massing Simple"
                active={activeTool === 'massing'}
                onClick={() => setActiveTool('massing')}
              />
            </div>

            {/* Sustainability Data Panel */}
            <DataPanel
              title="Skins 6D - Real Impact"
              subtitle="Materials with real sustainability data"
              data={sustainabilityData}
              variant="blue"
            />

            {/* Material Override Panel */}
            <OverridePanel
              title="Material Override - Appearance"
              subtitle="Cosmetic change without impact on data"
              buttonText="Does not affect 5D, 6D or 7D analysis"
            />
          </div>

          {/* Center - 3D Viewer */}
          <div className="!col-span-6">
            <Viewer3D />
          </div>

          {/* Right Sidebar - Actions */}
          <div className="!col-span-3 !space-y-4">
            <div className="!mb-4">
              <h3 className="!text-lg !font-semibold !text-cyan-400 !mb-4">Geolocation</h3>
            </div>

            <ActionCard
              title="Visor 3D Web Editor"
              subtitle="Carga un modelo para ver, revisar o editar"
              icon={Cube}
              variant="blue"
            />

            <ActionCard title="Select files" icon={Upload} variant="green" />
          </div>
        </div>
      </div>
    </div>
  );
}
