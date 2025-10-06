'use client';

import { Brain } from 'lucide-react';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export function IAUrbanLandSection() {
  const { language } = useAiCompanion();
  const t = translations[language].resources.iaUrbanLandSection;

  return (
    <div className="!bg-slate-900/80 !rounded-lg !p-4 !border-2 !border-cyan-500/50">
      <div className="!flex !items-start !gap-3 !mb-4">
        <div className="!w-16 !h-16 !bg-gradient-to-br !from-cyan-400 !to-blue-500 !rounded-full !flex !items-center !justify-center !flex-shrink-0">
          <div className="!w-12 !h-12 !bg-slate-900 !rounded-full !flex !items-center !justify-center">
            <Brain className="!w-6 !h-6 !text-cyan-400" />
          </div>
        </div>
        <div>
          <h2 className="!text-white !font-bold !text-lg">{t.title}</h2>
          <p className="!text-gray-400 !text-xs">{t.subtitle}</p>
        </div>
      </div>
      <div className="!space-y-3">
        <div className="!bg-cyan-600/20 !border !border-cyan-500/50 !rounded-lg !p-3">
          <h3 className="!text-white !font-semibold !text-sm !mb-2">{t.forecast}</h3>
          <button className="!w-full !bg-blue-600 hover:!bg-blue-700 !text-white !py-2 !px-4 !rounded !text-sm !font-medium !transition-colors">
            {t.openInMap}
          </button>
        </div>
        <div className="!bg-cyan-600/20 !border !border-cyan-500/50 !rounded-lg !p-3">
          <h3 className="!text-white !font-semibold !text-sm !mb-2">{t.beforeAfter}</h3>
          <button className="!w-full !bg-blue-600 hover:!bg-blue-700 !text-white !py-2 !px-4 !rounded !text-sm !font-medium !transition-colors">
            {t.viewIn3D}
          </button>
        </div>
        <div className="!bg-cyan-600/20 !border !border-cyan-500/50 !rounded-lg !p-3">
          <h3 className="!text-white !font-semibold !text-sm !mb-2">{t.optimalSite}</h3>
          <button className="!w-full !bg-blue-600 hover:!bg-blue-700 !text-white !py-2 !px-4 !rounded !text-sm !font-medium !transition-colors">
            {t.analyzeLocation}
          </button>
        </div>
      </div>
    </div>
  );
}
