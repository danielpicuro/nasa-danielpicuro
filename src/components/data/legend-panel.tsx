'use client';

import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export function LegendPanel() {
  const { language } = useAiCompanion();
  const t = translations[language].data.legendPanel;

  return (
    <div className="!bg-slate-900/90 !rounded-lg !p-4 !border !border-slate-700">
      <h3 className="!text-white !text-sm !font-semibold !mb-3">{t.title}</h3>

      <div className="!space-y-2">
        <div className="!flex !items-center !gap-2">
          <div className="!w-3 !h-3 !bg-cyan-400 !rounded-full"></div>
          <span className="!text-gray-300 !text-xs">{t.activeCollectors}</span>
        </div>

        <div className="!flex !items-center !gap-2">
          <div className="!w-3 !h-3 !bg-gray-500 !rounded-full"></div>
          <span className="!text-gray-300 !text-xs">{t.underConstruction}</span>
        </div>

        <div className="!flex !items-center !gap-2">
          <div className="!w-3 !h-3 !bg-gray-600 !rounded-full"></div>
          <span className="!text-gray-300 !text-xs">{t.planned}</span>
        </div>
      </div>
    </div>
  );
}
