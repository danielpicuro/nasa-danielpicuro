'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Cloud, Square, MapIcon, Box } from 'lucide-react';

interface HeaderControlsProps {
  initialTime: string;
  isRealTime: boolean;
}

export function HeaderControls({ initialTime, isRealTime }: HeaderControlsProps) {
  const [currentTime, setCurrentTime] = useState(initialTime);
  const [activeWeather, setActiveWeather] = useState<'sun' | 'moon' | 'cloudy' | 'fog'>('sun');
  const [activeView, setActiveView] = useState<'3d' | '2d'>('3d');

  useEffect(() => {
    if (isRealTime) {
      const interval = setInterval(() => {
        const now = new Date();
        setCurrentTime(`${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`);
      }, 60000);
      return () => clearInterval(interval);
    }
  }, [isRealTime]);

  return (
    <div className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-6">
      {/* Weather Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setActiveWeather('sun')}
          className={`p-2 rounded-lg transition-colors ${
            activeWeather === 'sun'
              ? 'bg-yellow-500/20 text-yellow-500'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Sun className="h-5 w-5" />
        </button>
        <button
          onClick={() => setActiveWeather('moon')}
          className={`p-2 rounded-lg transition-colors ${
            activeWeather === 'moon'
              ? 'bg-blue-500/20 text-blue-400'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Moon className="h-5 w-5" />
        </button>
        <button
          onClick={() => setActiveWeather('cloudy')}
          className={`p-2 rounded-lg transition-colors ${
            activeWeather === 'cloudy'
              ? 'bg-gray-500/20 text-gray-400'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Cloud className="h-5 w-5" />
        </button>
        <button
          onClick={() => setActiveWeather('fog')}
          className={`p-2 rounded-lg transition-colors ${
            activeWeather === 'fog'
              ? 'bg-gray-500/20 text-gray-300'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Square className="h-5 w-5" />
        </button>
      </div>

      {/* Time Display */}
      <div className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-lg border border-border">
        <span className="text-2xl font-bold text-foreground">{currentTime}</span>
        <span className="text-sm text-muted-foreground">Real</span>
        <Moon className="h-4 w-4 text-muted-foreground" />
      </div>

      {/* View Toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setActiveView('3d')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeView === '3d'
              ? 'bg-cyan-500 text-white'
              : 'bg-background/50 text-muted-foreground hover:text-foreground border border-border'
          }`}
        >
          <Box className="h-4 w-4 inline mr-2" />
          3D View
        </button>
        <button
          onClick={() => setActiveView('2d')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeView === '2d'
              ? 'bg-cyan-500 text-white'
              : 'bg-background/50 text-muted-foreground hover:text-foreground border border-border'
          }`}
        >
          <MapIcon className="h-4 w-4 inline mr-2" />
          2D Map
        </button>
      </div>
    </div>
  );
}
