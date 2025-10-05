'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ScenarioCard } from '@/components/5D/scenario-card';
import { ReturnPeriodSlider } from '@/components/5D/return-period-slider';
import { ImpactPanel } from '@/components/5D/impact-panel';

const scenarios = [
  {
    id: 'base',
    title: 'Annual Base Scenario',
    description: 'Current situation without interventions',
    gradient: 'cyan' as const,
    metrics: [],
  },
  {
    id: 'green-roofs',
    title: 'Green roofs',
    description: 'Implementation of cool roofs and vegetation',
    gradient: 'purple' as const,
    metrics: [
      { label: 'CO₂', value: '-15%' },
      { label: 'EUI', value: '-20%' },
      { label: 'Water retention', value: '+40%' },
    ],
  },
  {
    id: 'permeable',
    title: 'Permeable pavement',
    description: 'Replacing asphalt with permeable pavement',
    gradient: 'teal' as const,
    metrics: [
      { label: 'Flood', value: '-55%' },
      { label: 'Heat island', value: '-10%' },
      { label: 'Infiltrated Water', value: '+70%' },
    ],
  },
  {
    id: 'combined',
    title: 'Combined solution',
    description: 'Green roofs + pavement + trees',
    gradient: 'dark' as const,
    metrics: [
      { label: 'CO₂', value: '-32%' },
      { label: 'EUI', value: '-38%' },
      { label: 'Floods', value: '-70%' },
    ],
  },
];

const greenRoofsMetrics = [
  { label: 'Flood risk', value: 25, subtitle: '25% affected area', variant: 'inverse' as const },
  { label: 'heat island', value: 30, subtitle: '-3% intensity', variant: 'default' as const },
  {
    label: 'Air quality',
    value: 82,
    subtitle: '82% quality (NOx/CO₂)',
    variant: 'default' as const,
  },
  {
    label: 'Investment required',
    value: 65,
    subtitle: 'USD (CapEx only)',
    variant: 'inverse' as const,
  },
];

const skinsMetrics = [
  { label: '75% affected area', value: 75, subtitle: '28% intensity', variant: 'inverse' as const },
  {
    label: 'Air quality',
    value: 82,
    subtitle: '82% quality (NOx/CO₂)',
    variant: 'default' as const,
  },
  {
    label: 'Investment required',
    value: 70,
    subtitle: 'USD (CapEx only)',
    variant: 'inverse' as const,
  },
  { label: 'Air quality', value: 82, subtitle: 'USD (CapEx only)', variant: 'default' as const },
];

export default function FiveDPage() {
  const [activeScenario, setActiveScenario] = useState('green-roofs');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Black</span>
              </button>
              <div className="h-8 w-px bg-slate-700" />
              <div>
                <h1 className="text-2xl font-bold text-white">5D Costs - Glodon</h1>
                <p className="text-sm text-slate-400">
                  Simulate climate and environmental impact with NASA data and sensors
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
              >
                See twin in 3D
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
              >
                Send to 5D
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Scenarios */}
          <div className="col-span-3 space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Available scenarios</h2>
            {scenarios.map(scenario => (
              <ScenarioCard
                key={scenario.id}
                title={scenario.title}
                description={scenario.description}
                metrics={scenario.metrics}
                gradient={scenario.gradient}
                isActive={activeScenario === scenario.id}
                onClick={() => setActiveScenario(scenario.id)}
              />
            ))}
          </div>

          {/* Right Content Area */}
          <div className="col-span-9 space-y-6">
            {/* Return Period Slider */}
            <ReturnPeriodSlider />

            {/* Impact Metrics - Green Roofs */}
            <ImpactPanel title="Impact Metrics - Green Roofs" metrics={greenRoofsMetrics} />

            {/* 6D Skins Applied */}
            <ImpactPanel title="6D Skins applied" metrics={skinsMetrics} />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }

        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </div>
  );
}
