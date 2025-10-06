'use client';

import { useState } from 'react';

export function DayNightPanel() {
  const [mode, setMode] = useState<'day' | 'night'>('night');
  const [hour, setHour] = useState(16);
  const [season, setSeason] = useState<'verano' | 'otono' | 'invierno' | 'primavera'>('otono');

  return (
    <div className="!p-4 !border-t !border-slate-800">
      <h3 className="!text-white !text-sm !font-semibold !mb-4">Día/Noche & Estaciones</h3>
      <div className="!flex !gap-2 !mb-4">
        <button
          onClick={() => setMode('day')}
          className={`!flex-1 !py-2 !px-4 !rounded !text-sm !font-medium !transition-colors ${
            mode === 'day'
              ? '!bg-cyan-500 !text-white'
              : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
          }`}
        >
          ☀️ Día
        </button>
        <button
          onClick={() => setMode('night')}
          className={`!flex-1 !py-2 !px-4 !rounded !text-sm !font-medium !transition-colors ${
            mode === 'night'
              ? '!bg-cyan-500 !text-white'
              : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
          }`}
        >
          🌙 Noche
        </button>
      </div>
      <div className="!mb-4">
        <label className="!text-gray-400 !text-xs !mb-2 !block">Hora del día: {hour}:00</label>
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
        <label className="!text-gray-400 !text-xs !mb-2 !block">Estación</label>
        <div className="!grid !grid-cols-2 !gap-2">
          <button
            onClick={() => setSeason('verano')}
            className={`!py-2 !px-3 !rounded !text-xs !font-medium !transition-colors ${
              season === 'verano'
                ? '!bg-cyan-500 !text-white'
                : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
            }`}
          >
            Verano
          </button>
          <button
            onClick={() => setSeason('otono')}
            className={`!py-2 !px-3 !rounded !text-xs !font-medium !transition-colors ${
              season === 'otono'
                ? '!bg-cyan-500 !text-white'
                : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
            }`}
          >
            Otoño
          </button>
          <button
            onClick={() => setSeason('invierno')}
            className={`!py-2 !px-3 !rounded !text-xs !font-medium !transition-colors ${
              season === 'invierno'
                ? '!bg-cyan-500 !text-white'
                : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
            }`}
          >
            Invierno
          </button>
          <button
            onClick={() => setSeason('primavera')}
            className={`!py-2 !px-3 !rounded !text-xs !font-medium !transition-colors ${
              season === 'primavera'
                ? '!bg-cyan-500 !text-white'
                : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
            }`}
          >
            Primavera
          </button>
        </div>
      </div>
    </div>
  );
}
