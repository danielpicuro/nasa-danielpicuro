'use client';

import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { useEffect } from 'react';
import Link from 'next/link';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ScenarioCard } from '@/components/5D/scenario-card';
import { ReturnPeriodSlider } from '@/components/5D/return-period-slider';
import { ImpactPanel } from '@/components/5D/impact-panel';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

const scenarios = [
  {
    id: 'base',
    gradient: 'cyan' as const,
    metrics: [],
  },
  {
    id: 'green-roofs',
    gradient: 'purple' as const,
    metrics: [
      { label: 'CO₂', value: '-15%' },
      { label: 'EUI', value: '-20%' },
      { label: 'Water retention', value: '+40%' },
    ],
  },
  {
    id: 'permeable',
    gradient: 'teal' as const,
    metrics: [
      { label: 'Flood', value: '-55%' },
      { label: 'Heat island', value: '-10%' },
      { label: 'Infiltrated Water', value: '+70%' },
    ],
  },
  {
    id: 'combined',
    gradient: 'dark' as const,
    metrics: [
      { label: 'CO₂', value: '-32%' },
      { label: 'EUI', value: '-38%' },
      { label: 'Floods', value: '-70%' },
    ],
  },
];

const greenRoofsMetrics = [
  { value: 25, variant: 'inverse' as const },
  { value: 30, variant: 'default' as const },
  { value: 82, variant: 'default' as const },
  { value: 65, variant: 'inverse' as const },
];

const skinsMetrics = [
  { value: 75, variant: 'inverse' as const },
  { value: 82, variant: 'default' as const },
  { value: 70, variant: 'inverse' as const },
  { value: 82, variant: 'default' as const },
];

export default function FiveDPage() {
  const [activeScenario, setActiveScenario] = useState('green-roofs');
  const { language } = useAiCompanion();
  const t = translations[language].fiveD;

  return (
    <div className="!min-h-screen !bg-gradient-to-br !from-slate-950 !via-slate-900 !to-slate-950">
      {/* Header */}
      <header className="!border-b !border-slate-800 !bg-slate-900/50 !backdrop-blur-sm">
        <div className="!container !mx-auto !px-6 !py-4">
          <div className="!flex !items-center !justify-between">
            <div className="!flex !items-center !gap-4">
              <button className="!flex !items-center !gap-2 !text-slate-300 hover:!text-white !transition-colors">
                <ArrowLeft className="!w-5 !h-5" />
                <span className="!font-medium">{t.blackButton}</span>
              </button>
              <div className="!h-8 !w-px !bg-slate-700" />
              <div>
                <h1 className="!text-2xl !font-bold !text-white">{t.headerTitle}</h1>
                <p className="!text-sm !text-slate-400">{t.headerSubtitle}</p>
              </div>
            </div>
            <div className="!flex !gap-3">
              <Link href={'twin-3d'}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="!px-6 !py-2 !bg-slate-700 hover:!bg-slate-600 !text-white !rounded-lg !font-medium !transition-colors"
                >
                  {t.seeTwinButton}
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="!px-6 !py-2 !bg-slate-800 hover:!bg-slate-700 !text-white !rounded-lg !font-medium !transition-colors"
              >
                {t.sendTo5DButton}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="!container !mx-auto !px-6 !py-8">
        <div className="!grid !grid-cols-12 !gap-6">
          {/* Left Sidebar - Scenarios */}
          <div className="!col-span-3 !space-y-4">
            <h2 className="!text-xl !font-bold !text-white !mb-4">{t.scenariosTitle}</h2>
            {scenarios.map((scenario, index) => (
              <ScenarioCard
                key={scenario.id}
                title={t.scenarios[index].title}
                description={t.scenarios[index].description}
                metrics={scenario.metrics}
                gradient={scenario.gradient}
                isActive={activeScenario === scenario.id}
                onClick={() => setActiveScenario(scenario.id)}
              />
            ))}
          </div>

          {/* Right Content Area */}
          <div className="!col-span-9 !space-y-6">
            {/* Return Period Slider */}
            <ReturnPeriodSlider />

            {/* Impact Metrics - Green Roofs */}
            <ImpactPanel
              title={t.greenRoofsMetrics.title}
              metrics={greenRoofsMetrics.map((metric, index) => ({
                ...metric,
                ...t.greenRoofsMetrics.metrics[index],
              }))}
            />

            {/* 6D Skins Applied */}
            <ImpactPanel
              title={t.skinsMetrics.title}
              metrics={skinsMetrics.map((metric, index) => ({
                ...metric,
                ...t.skinsMetrics.metrics[index],
              }))}
            />
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
