'use client';

import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';
import Link from 'next/link';

export function QuickActions() {
  const { language } = useAiCompanion();
  const t = translations[language].data.quickActions;

  return (
    <div>
      {/* Title */}
      <h3 className="!text-white !text-sm !font-semibold !mb-3">{t.title}</h3>

      {/* Main Action Button */}
      <Link
        href={'/7D'}
        className="!w-full !bg-cyan-500 hover:!bg-cyan-600 !text-white !py-3 !px-4 !rounded-lg !text-sm !font-medium !transition-colors !mb-4"
      >
        🗂️ {t.scenarios}
      </Link>

      {/* Saved Views */}
      <div className="!mb-4">
        <h4 className="!text-white !text-xs !font-semibold !mb-2">{t.savedViews}</h4>
      </div>

      {/* View Options */}
      <div className="!space-y-2">
        <div className="!flex !items-center !gap-2 !text-sm">
          <div className="!w-1 !h-4 !bg-red-500"></div>
          <span className="!text-gray-300">{t.generalView}</span>
        </div>

        <div className="!flex !items-center !gap-2 !text-sm">
          <div className="!w-1 !h-4 !bg-red-500"></div>
          <span className="!text-gray-300">{t.criticalZone}</span>
        </div>
      </div>
    </div>
  );
}
