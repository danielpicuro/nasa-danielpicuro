'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function ComparisonSlider() {
  const [position, setPosition] = useState(50);

  return (
    <div className="!relative !w-full !h-16 !bg-gray-700/50 !backdrop-blur-sm !rounded-lg !overflow-hidden !mb-8">
      <div className="!absolute !inset-0 !flex !items-center">
        <div className="!flex-1 !flex !items-center !justify-start !pl-4">
          <span className="!text-sm !text-gray-300">Before/After Comparison</span>
        </div>
      </div>

      <motion.div
        className="!absolute !top-0 !left-0 !h-full !bg-cyan-500/30"
        style={{ width: `${position}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      <div className="!absolute !inset-0 !flex !items-center !px-4">
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={e => setPosition(Number(e.target.value))}
          className="!w-full !h-2 !bg-transparent !appearance-none !cursor-pointer slider-thumb"
          style={{
            background: `linear-gradient(to right, transparent ${position}%, transparent ${position}%)`,
          }}
        />
      </div>

      <div className="!absolute !inset-0 !flex !items-center !justify-between !px-4 !pointer-events-none">
        <span className="!text-xs !font-medium !text-cyan-400">Before ({position}%)</span>
        <span className="!text-xs !font-medium !text-green-400">After ({100 - position}%)</span>
      </div>
    </div>
  );
}
