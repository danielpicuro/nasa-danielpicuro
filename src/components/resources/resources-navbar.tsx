'use client';
import { Sun } from 'lucide-react';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

interface ResourcesNavbarProps {
  timeOfDay: string;
  onTimeOfDayChange: (time: string) => void;
}

export function ResourcesNavbar({ timeOfDay, onTimeOfDayChange }: ResourcesNavbarProps) {
  const { language } = useAiCompanion();
  const t = translations[language].resources.resourcesNavbar;

  const times = [t.day, t.noon, t.dusk, t.night];

  return (
    <div className="!bg-slate-900/90 !border-b !border-slate-700">
      <div className="!flex !items-center !justify-between !px-6 !py-3">
        <h1 className="!text-2xl !font-bold !text-white !italic">{t.limaCity}</h1>
        <div className="!flex !items-center !gap-6">
          <span className="!text-gray-300 !text-sm">05-10-2025 02:25:20</span>
          <div className="!flex !items-center !gap-2">
            {times.map((time, index) => (
              <span key={time} className="!flex !items-center">
                <button
                  onClick={() => onTimeOfDayChange(time)}
                  className={`!text-sm !transition-colors ${timeOfDay === time ? '!text-white !font-semibold' : '!text-gray-400 hover:!text-gray-200'}`}
                >
                  {time}
                </button>
                {index < times.length - 1 && <span className="!text-gray-600 !mx-1">|</span>}
              </span>
            ))}
          </div>
          <div className="!flex !items-center !gap-2 !text-white">
            <Sun className="!w-4 !h-4" />
            <span className="!text-sm">27.5 °C</span>
          </div>
        </div>
      </div>
      <div className="!flex !items-center !justify-between !px-6 !pb-2">
        <div className="!flex !items-center !gap-1">
          <button className="!px-4 !py-2 !text-sm !text-gray-300 hover:!text-white !transition-colors">
            {t.cityOverview}
          </button>
          <button className="!px-4 !py-2 !text-sm !text-gray-300 hover:!text-white !transition-colors">
            {t.regionPlanning}
          </button>
          <div className="!relative">
            <button className="!px-4 !py-2 !text-sm !text-white !bg-blue-600 !rounded-full !font-medium">
              {t.alerts}
            </button>
          </div>
          <button className="!px-4 !py-2 !text-sm !text-gray-300 hover:!text-white !transition-colors">
            {t.buildingMgmnt}
          </button>
          <button className="!px-4 !py-2 !text-sm !text-gray-300 hover:!text-white !transition-colors">
            {t.envirMonitoring}
          </button>
        </div>
        <div className="!flex !items-center !gap-6 !text-sm">
          {[
            { label: t.population, value: '23927' },
            { label: t.vehicles, value: '516' },
            { label: t.alerts, value: '1' },
            { label: t.notifications, value: '16' },
          ].map(({ label, value }) => (
            <div key={label} className="!text-center">
              <div className="!text-gray-400 !text-xs">{label}</div>
              <div className="!text-white !font-semibold">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
