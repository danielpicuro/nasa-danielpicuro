'use client';

import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export function InfrastructureGrid() {
  const { language } = useAiCompanion();
  const t = translations[language].resources.infrastructureGrid;

  const items = [
    { label: t.commercial, value: 4 },
    { label: t.construction, value: 0 },
    { label: t.residential, value: 8 },
    { label: t.parks, value: 3 },
  ];

  return (
    <div className="!bg-slate-900/80 !rounded-lg !p-4">
      <h2 className="!text-white !font-bold !text-lg !mb-4">{t.title}</h2>
      <div className="!grid !grid-cols-2 !gap-3">
        {items.map(item => (
          <div
            key={item.label}
            className="!bg-slate-800/60 !rounded !p-3 !text-center !border !border-slate-700"
          >
            <div className="!text-gray-400 !text-xs !mb-1">{item.label}</div>
            <div className="!text-white !text-2xl !font-bold">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
