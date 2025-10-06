'use client';

import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export function GreenspaceChart() {
  const { language } = useAiCompanion();
  const t = translations[language].resources.greenspaceChart;

  return (
    <div className="!bg-slate-900/80 !rounded-lg !p-4">
      <h2 className="!text-white !font-bold !text-lg !mb-4">{t.title}</h2>
      <div className="!flex !items-center !justify-center">
        {/* Pie Chart */}
        <div className="!relative !w-32 !h-32">
          <svg viewBox="0 0 100 100" className="!transform !-rotate-90">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="20"
              strokeDasharray="176 252"
              strokeDashoffset="0"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="20"
              strokeDasharray="76 252"
              strokeDashoffset="-176"
            />
          </svg>
        </div>
        <div className="!ml-4 !space-y-2">
          <div className="!flex !items-center !gap-2">
            <div className="!w-3 !h-3 !bg-cyan-400 !rounded-sm"></div>
            <span className="!text-white !text-sm">{t.greenspace}</span>
          </div>
          <div className="!flex !items-center !gap-2">
            <div className="!w-3 !h-3 !bg-blue-500 !rounded-sm"></div>
            <span className="!text-white !text-sm">{t.developed}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
