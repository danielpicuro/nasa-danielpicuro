'use client';

import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

interface ViewToggleProps {
  viewMode: '3D' | '2D';
  onViewModeChange: (mode: '3D' | '2D') => void;
}

export function ViewToggle({ viewMode, onViewModeChange }: ViewToggleProps) {
  const { language } = useAiCompanion();
  const t = translations[language].data.viewToggle;

  return (
    <div className="!flex !gap-2 !bg-slate-900/90 !rounded-lg !p-2 !border !border-slate-700">
      <button
        onClick={() => onViewModeChange('3D')}
        className={`!px-4 !py-2 !rounded !text-sm !font-medium !transition-colors ${
          viewMode === '3D'
            ? '!bg-cyan-500 !text-white'
            : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
        }`}
      >
        {t.threeD}
      </button>

      <button
        onClick={() => onViewModeChange('2D')}
        className={`!px-4 !py-2 !rounded !text-sm !font-medium !transition-colors ${
          viewMode === '2D'
            ? '!bg-cyan-500 !text-white'
            : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
        }`}
      >
        {t.twoD}
      </button>
    </div>
  );
}
