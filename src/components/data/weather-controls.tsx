'use client';

import { useState } from 'react';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export function WeatherControls() {
  const [activeWeather, setActiveWeather] = useState<string[]>(['sun']);
  const { language } = useAiCompanion();
  const t = translations[language].data.weatherControls;

  const toggleWeather = (weather: string) => {
    setActiveWeather(prev =>
      prev.includes(weather) ? prev.filter(w => w !== weather) : [...prev, weather]
    );
  };

  return (
    <div className="!flex !items-center !gap-2 !bg-slate-900/90 !rounded-full !px-4 !py-2 !border !border-slate-700">
      <button
        onClick={() => toggleWeather('sun')}
        className={`!flex !items-center !gap-2 !px-3 !py-1 !rounded-full !text-sm !transition-colors ${
          activeWeather.includes('sun')
            ? '!bg-yellow-500 !text-white'
            : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
        }`}
      >
        ☀️ {t.sun}
      </button>

      <button
        onClick={() => toggleWeather('moon')}
        className={`!flex !items-center !gap-2 !px-3 !py-1 !rounded-full !text-sm !transition-colors ${
          activeWeather.includes('moon')
            ? '!bg-yellow-500 !text-white'
            : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
        }`}
      >
        🌙 {t.moon}
      </button>

      <button
        onClick={() => toggleWeather('cloudy')}
        className={`!flex !items-center !gap-2 !px-3 !py-1 !rounded-full !text-sm !transition-colors ${
          activeWeather.includes('cloudy')
            ? '!bg-white !text-slate-900'
            : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
        }`}
      >
        ☁️ {t.cloudy}
      </button>

      <button
        onClick={() => toggleWeather('fog')}
        className={`!flex !items-center !gap-2 !px-3 !py-1 !rounded-full !text-sm !transition-colors ${
          activeWeather.includes('fog')
            ? '!bg-white !text-slate-900'
            : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
        }`}
      >
        🌫️ {t.fog}
      </button>
    </div>
  );
}
