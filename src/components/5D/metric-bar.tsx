'use client';

import { motion } from 'framer-motion';

interface MetricBarProps {
  label: string;
  value: number;
  maxValue?: number;
  subtitle?: string;
  variant?: 'default' | 'inverse';
}

export function MetricBar({
  label,
  value,
  maxValue = 100,
  subtitle,
  variant = 'default',
}: MetricBarProps) {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-300">{label}</span>
        <span className="text-sm text-slate-300">{subtitle}</span>
      </div>
      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full rounded-full ${
            variant === 'inverse'
              ? 'bg-gradient-to-r from-red-500 to-orange-500'
              : 'bg-gradient-to-r from-cyan-500 to-blue-500'
          }`}
        />
      </div>
    </div>
  );
}
