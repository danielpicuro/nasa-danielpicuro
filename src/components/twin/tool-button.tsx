'use client';

import type { LucideIcon } from 'lucide-react';

interface ToolButtonProps {
  icon?: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'compact';
}

export function ToolButton({
  icon: Icon,
  label,
  active = false,
  onClick,
  variant = 'default',
}: ToolButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`!px-4 !py-3 !rounded-lg !font-medium !transition-all !duration-300 ${
        variant === 'compact' ? '!text-sm' : '!text-base'
      } ${
        active
          ? '!bg-cyan-500 !text-white !shadow-lg !shadow-cyan-500/50'
          : '!bg-white/10 !text-white hover:!bg-white/20 !backdrop-blur-sm'
      }`}
    >
      <div className="!flex !items-center !gap-2">
        {Icon && <Icon className="!w-4 !h-4" />}
        <span>{label}</span>
      </div>
    </button>
  );
}
