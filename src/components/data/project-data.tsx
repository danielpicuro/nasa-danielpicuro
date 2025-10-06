'use client';

import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export function ProjectData() {
  const { language } = useAiCompanion();
  const t = translations[language].data.projectData;

  return (
    <div className="!border-t !border-slate-800 !pt-4">
      <h3 className="!text-white !text-sm !font-semibold !mb-3">{t.title}</h3>

      <div className="!space-y-2 !text-sm">
        <div className="!flex !justify-between">
          <span className="!text-gray-400">{t.exposedPopulation}</span>
          <span className="!text-white">12,350</span>
        </div>

        <div className="!flex !justify-between">
          <span className="!text-gray-400">{t.maxDepth}</span>
          <span className="!text-white">0.45 m</span>
        </div>

        <div className="!flex !justify-between">
          <span className="!text-gray-400">{t.capex}</span>
          <span className="!text-cyan-400 !font-semibold">$3.2M</span>
        </div>
      </div>
    </div>
  );
}
