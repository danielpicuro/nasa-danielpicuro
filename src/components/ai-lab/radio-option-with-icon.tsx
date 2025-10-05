'use client';

import type { ReactNode } from 'react';

interface RadioOptionWithIconProps {
  value: string;
  selected: boolean;
  onSelect: (value: string) => void;
  icon: ReactNode;
  title: string;
  description: string;
}

export function RadioOptionWithIcon({
  value,
  selected,
  onSelect,
  icon,
  title,
  description,
}: RadioOptionWithIconProps) {
  return (
    <button
      onClick={() => onSelect(value)}
      className={`!w-full !text-left !p-6 !rounded-lg !border-2 !transition-all ${
        selected
          ? '!bg-slate-700/60 !border-slate-500'
          : '!bg-slate-900/40 !border-slate-700 hover:!border-slate-600'
      }`}
    >
      <div className="!flex !items-start !gap-6">
        {/* Radio button */}
        <div className="!mt-1 !flex-shrink-0">
          <div
            className={`!w-6 !h-6 !rounded-full !border-2 !flex !items-center !justify-center ${
              selected ? '!border-white' : '!border-gray-500'
            }`}
          >
            {selected && <div className="!w-3 !h-3 !rounded-full !bg-white"></div>}
          </div>
        </div>

        {/* Icon */}
        <div className="!text-white !flex-shrink-0">{icon}</div>

        {/* Content */}
        <div className="!flex-1">
          <h3 className="!text-white !font-semibold !text-xl !mb-1">{title}</h3>
          <p className="!text-gray-400">{description}</p>
        </div>
      </div>
    </button>
  );
}
