'use client';

import { useState } from 'react';

interface OverridePanelProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onAction?: () => void;
}

export function OverridePanel({ title, subtitle, buttonText, onAction }: OverridePanelProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="!bg-blue-600/90 !backdrop-blur-md !rounded-lg !p-4 !shadow-xl">
      <h3 className="!text-white !font-semibold !text-base !mb-1">{title}</h3>
      <p className="!text-white/70 !text-xs !mb-3">{subtitle}</p>

      <button
        onClick={() => {
          setIsActive(!isActive);
          onAction?.();
        }}
        className={`!w-full !py-2.5 !px-4 !rounded-lg !font-medium !text-sm !transition-all !duration-300 ${
          isActive ? '!bg-cyan-400 !text-blue-900' : '!bg-cyan-500 !text-white hover:!bg-cyan-400'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}
