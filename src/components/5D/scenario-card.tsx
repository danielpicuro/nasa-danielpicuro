'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MetricItem {
  label: string;
  value: string;
}

interface ScenarioCardProps {
  title: string;
  description: string;
  metrics?: MetricItem[];
  gradient: 'cyan' | 'purple' | 'teal' | 'dark';
  isActive?: boolean;
  onClick?: () => void;
}

const gradientClasses = {
  cyan: '!from-cyan-600 !via-cyan-500 !to-cyan-400',
  purple: '!from-purple-700 !via-purple-600 !to-purple-500',
  teal: '!from-teal-700 !via-teal-600 !to-teal-500',
  dark: '!from-slate-800 !via-slate-700 !to-slate-600',
};

export function ScenarioCard({
  title,
  description,
  metrics,
  gradient,
  isActive = false,
  onClick,
}: ScenarioCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        '!w-full !text-left !p-6 !rounded-lg !bg-gradient-to-br !transition-all',
        gradientClasses[gradient],
        isActive && '!ring-2 !ring-cyan-400 !ring-offset-2 !ring-offset-slate-900'
      )}
    >
      <h3 className="!text-xl !font-bold !text-white !mb-2">{title}</h3>
      <p className="!text-sm !text-white/80 !mb-4">{description}</p>

      {metrics && metrics.length > 0 && (
        <div className="!space-y-2 !mt-4 !pt-4 !border-t !border-white/20">
          {metrics.map((metric, index) => (
            <div key={index} className="!flex !justify-between !items-center">
              <span className="!text-sm !text-white/90">{metric.label}</span>
              <span className="!text-sm !font-bold !text-white">{metric.value}</span>
            </div>
          ))}
        </div>
      )}
    </motion.button>
  );
}
