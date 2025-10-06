'use client';

import { useState } from 'react';

export function DayNightPanel() {
  const [mode, setMode] = useState<'day' | 'night'>('night');
  const [hour, setHour] = useState(16);
  const [season, setSeason] = useState<'summer' | 'autumn' | 'winter' | 'spring'>('autumn');

  return (
    <div className="!p-4 !border-t !border-slate-800">
      <h3 className="!text-white !text-sm !font-semibold !mb-4">Day/Night & Seasons</h3>
      <div className="!flex !gap-2 !mb-4">
        <button
          onClick={() => setMode('day')}
          className={`!flex-1 !py-2 !px-4 !rounded !text-sm !font-medium !transition-colors ${
            mode === 'day'
              ? '!bg-cyan-500 !text-white'
              : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
          }`}
        >
          ☀️ Day
        </button>
        <button
          onClick={() => setMode('night')}
          className={`!flex-1 !py-2 !px-4 !rounded !text-sm !font-medium !transition-colors ${
            mode === 'night'
              ? '!bg-cyan-500 !text-white'
              : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
          }`}
        >
          🌙 Night
        </button>
      </div>
      <div className="!mb-4">
        <label className="!text-gray-400 !text-xs !mb-2 !block">Time of day: {hour}:00</label>
        <input
          type="range"
          min="0"
          max="23"
          value={hour}
          onChange={e => setHour(Number(e.target.value))}
          className="!w-full !h-2 !bg-slate-700 !rounded-lg !appearance-none !cursor-pointer !accent-cyan-500"
        />
      </div>
      <div>
        <label className="!text-gray-400 !text-xs !mb-2 !block">Season</label>
        <div className="!grid !grid-cols-2 !gap-2">
          <button
            onClick={() => setSeason('summer')}
            className={`!py-2 !px-3 !rounded !text-xs !font-medium !transition-colors ${
              season === 'summer'
                ? '!bg-cyan-500 !text-white'
                : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
            }`}
          >
            Summer
          </button>
          <button
            onClick={() => setSeason('autumn')}
            className={`!py-2 !px-3 !rounded !text-xs !font-medium !transition-colors ${
              season === 'autumn'
                ? '!bg-cyan-500 !text-white'
                : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
            }`}
          >
            Autumn
          </button>
          <button
            onClick={() => setSeason('winter')}
            className={`!py-2 !px-3 !rounded !text-xs !font-medium !transition-colors ${
              season === 'winter'
                ? '!bg-cyan-500 !text-white'
                : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
            }`}
          >
            Winter
          </button>
          <button
            onClick={() => setSeason('spring')}
            className={`!py-2 !px-3 !rounded !text-xs !font-medium !transition-colors ${
              season === 'spring'
                ? '!bg-cyan-500 !text-white'
                : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
            }`}
          >
            Spring
          </button>
        </div>
      </div>
    </div>
  );
}
