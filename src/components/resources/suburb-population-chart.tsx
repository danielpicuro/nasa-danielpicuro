'use client';

import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export function SuburbPopulationChart() {
  const { language } = useAiCompanion();
  const t = translations[language].resources.suburbPopulationChart;

  return (
    <div className="!bg-slate-900/80 !rounded-lg !p-4">
      <h2 className="!text-white !font-bold !text-lg !mb-4">{t.title}</h2>
      <div className="!flex !items-center !justify-center">
        <div className="!relative !w-32 !h-32">
          <svg viewBox="0 0 100 100" className="!transform !-rotate-90">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="20"
              strokeDasharray="100 252"
              strokeDashoffset="0"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="20"
              strokeDasharray="88 252"
              strokeDashoffset="-100"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="20"
              strokeDasharray="63 252"
              strokeDashoffset="-188"
            />
          </svg>
          <div className="!absolute !inset-0 !flex !items-center !justify-center">
            <div className="!text-center">
              <div className="!text-cyan-400 !text-xs !font-semibold">{t.suburb1}</div>
            </div>
          </div>
          <div className="!absolute !bottom-2 !left-2 !text-cyan-300 !text-xs !font-semibold">
            {t.suburb2}
          </div>
          <div className="!absolute !top-2 !left-2 !text-cyan-200 !text-xs !font-semibold">
            {t.suburb3}
          </div>
        </div>
      </div>
    </div>
  );
}
