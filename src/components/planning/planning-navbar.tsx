'use client';

import { Sun } from 'lucide-react';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export function PlanningNavbar() {
  const { language } = useAiCompanion();
  const t = translations[language].planning.planningNavbar;

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const currentTime = new Date().toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return (
    <div className="!bg-slate-900/80 !backdrop-blur-sm !border-b !border-white/10">
      <div className="!px-6 !py-3 !flex !items-center !justify-between">
        {/* Left: City Name */}
        <div>
          <h1 className="!text-white !text-xl !font-bold !tracking-wide">{t.limaCity}</h1>
        </div>

        {/* Right: Date, Time, Time of Day, Weather */}
        <div className="!flex !items-center !gap-6">
          {/* Date and Time */}
          <div className="!text-white !text-sm !font-medium">
            {currentDate} {currentTime}
          </div>

          {/* Time of Day Selector */}
          <div className="!flex !items-center !gap-2 !text-white !text-sm">
            <button className="!px-3 !py-1 hover:!bg-white/10 !rounded !transition-colors">
              {t.day}
            </button>
            <span className="!text-white/40">|</span>
            <button className="!px-3 !py-1 hover:!bg-white/10 !rounded !transition-colors">
              {t.noon}
            </button>
            <span className="!text-white/40">|</span>
            <button className="!px-3 !py-1 hover:!bg-white/10 !rounded !transition-colors">
              {t.dusk}
            </button>
            <span className="!text-white/40">|</span>
            <button className="!px-3 !py-1 hover:!bg-white/10 !rounded !transition-colors">
              {t.night}
            </button>
          </div>

          {/* Weather */}
          <div className="!flex !items-center !gap-2 !text-white !text-sm">
            <Sun className="!w-4 !h-4" />
            <span className="!font-medium">27.5 °C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
