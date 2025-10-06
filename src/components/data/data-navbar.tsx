'use client';

import { useState, useEffect } from 'react';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

interface DataNavbarProps {
  timeOfDay: string;
  onTimeOfDayChange: (time: string) => void;
}

export function DataNavbar({ timeOfDay, onTimeOfDayChange }: DataNavbarProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { language } = useAiCompanion();
  const t = translations[language].data.dataNavbar;

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  };

  const times = [t.day, t.noon, t.dusk, t.night];

  return (
    <div className="!bg-slate-900 !border-b !border-slate-700">
      <div className="!flex !items-center !justify-between !px-6 !py-3">
        <div className="!text-white !text-2xl !font-bold !italic">{t.limaCity}</div>
        <div className="!flex !items-center !gap-6">
          <div className="!text-white !text-sm">{formatDate(currentTime)}</div>
          <div className="!flex !items-center !gap-2">
            {times.map(time => (
              <button
                key={time}
                onClick={() => onTimeOfDayChange(time)}
                className={`!px-3 !py-1 !text-sm !transition-colors ${
                  timeOfDay === time
                    ? '!text-white !font-semibold'
                    : '!text-gray-400 hover:!text-gray-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
          <div className="!flex !items-center !gap-2 !text-white !text-sm">
            <span>☀️</span>
            <span>27.5 °C</span>
          </div>
        </div>
      </div>
      <div className="!bg-slate-800/50 !px-6 !py-2">
        <div className="!flex !items-center !gap-6">
          <button className="!text-gray-300 hover:!text-white !text-sm !transition-colors">
            {t.cityOverview}
          </button>
          <button className="!text-gray-300 hover:!text-white !text-sm !transition-colors">
            {t.regionPlanning}
          </button>
          <button className="!text-gray-300 hover:!text-white !text-sm !transition-colors">
            {t.buildingMgmnt}
          </button>
          <button className="!text-gray-300 hover:!text-white !text-sm !transition-colors">
            {t.envirMonitoring}
          </button>
        </div>
      </div>
    </div>
  );
}
