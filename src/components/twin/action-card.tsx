'use client';

import type { LucideIcon } from 'lucide-react';

interface ActionCardProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  variant: 'blue' | 'green';
  onClick?: () => void;
}

export function ActionCard({ title, subtitle, icon: Icon, variant, onClick }: ActionCardProps) {
  const colors = {
    blue: '!bg-blue-700/90 hover:!bg-blue-600/90',
    green: '!bg-green-600/90 hover:!bg-green-500/90',
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${colors[variant]} !backdrop-blur-md !rounded-lg !p-6 
        !shadow-xl !transition-all !duration-300 hover:!scale-105
        !w-full !text-white
      `}
    >
      <div className="!flex !flex-col !items-center !gap-3">
        <Icon className="!w-12 !h-12" strokeWidth={1.5} />
        <div className="!text-center">
          <h4 className="!font-semibold !text-lg">{title}</h4>
          {subtitle && <p className="!text-white/80 !text-sm !mt-1">{subtitle}</p>}
        </div>
      </div>
    </button>
  );
}
