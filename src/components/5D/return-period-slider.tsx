'use client';

import type React from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ReturnPeriodSliderProps {
  onValueChange?: (value: number) => void;
}

export function ReturnPeriodSlider({ onValueChange }: ReturnPeriodSliderProps) {
  const [value, setValue] = useState(10);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number.parseInt(e.target.value);
    setValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-2">Return period (NASA GPM)</h3>
      <p className="text-sm text-slate-400 mb-6">
        Simulate climate and environmental impact with NASA data and sensors
      </p>

      <div className="space-y-6">
        <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
          <span>T=10</span>
          <span>T=100</span>
        </div>

        <input
          type="range"
          min="10"
          max="100"
          step="10"
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-thumb"
        />

        <div className="flex gap-3">
          {[10, 10, 10].map((t, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                index === 0
                  ? 'bg-slate-700 text-white'
                  : index === 1
                    ? 'bg-white text-slate-900'
                    : 'bg-slate-700 text-white'
              }`}
            >
              T= {t}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
