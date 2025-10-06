'use client';

import { useState } from 'react';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export function PlanningTabs() {
  const [activeTab, setActiveTab] = useState('alerts');
  const { language } = useAiCompanion();
  const t = translations[language].planning.planningTabs;

  const tabs = [
    { id: 'overview', label: t.cityOverview },
    { id: 'region', label: t.regionPlanning },
    { id: 'alerts', label: t.alerts, badge: true },
    { id: 'building', label: t.buildingMgmnt },
    { id: 'envir', label: t.envirMonitoring },
    { id: 'commercial', label: t.commercial },
  ];

  return (
    <div className="!flex !items-center !gap-2">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            !relative !px-4 !py-2 !text-sm !font-medium !transition-all !rounded-t-lg
            ${
              activeTab === tab.id
                ? '!bg-blue-600 !text-white'
                : '!bg-slate-800/50 !text-white/70 hover:!bg-slate-700/50 hover:!text-white'
            }
            ${tab.id === '!region' ? '!border-2 !border-blue-400' : ''}
          `}
        >
          {tab.label}
          {tab.badge && activeTab === tab.id && (
            <div className="!absolute !-top-1 !-right-1 !w-5 !h-5 !bg-blue-500 !rounded-full !flex !items-center !justify-center">
              <span className="!text-white !text-xs !font-bold">!</span>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
