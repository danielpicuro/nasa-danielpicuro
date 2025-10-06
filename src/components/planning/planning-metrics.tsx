'use client';

import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export function PlanningMetrics() {
  const { language } = useAiCompanion();
  const t = translations[language].planning.planningMetrics;

  const metrics = [
    { label: t.population, value: '23927' },
    { label: t.vehicles, value: '516' },
    { label: t.alerts, value: '1', highlight: true },
    { label: t.notifications, value: '16' },
  ];

  return (
    <div className="!flex !items-center !gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`
            !flex !flex-col !items-center !px-4 !py-2 !rounded-lg
            ${metric.highlight ? '!bg-red-600/80' : '!bg-slate-800/50'}
          `}
        >
          <span className="!text-white/70 !text-xs !font-medium">{metric.label}</span>
          <span className="!text-white !text-lg !font-bold">{metric.value}</span>
        </div>
      ))}
    </div>
  );
}
