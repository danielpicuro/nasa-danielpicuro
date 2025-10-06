'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subtitle: string;
  change: string;
  delay?: number;
}

export function KpiCard({ icon: Icon, label, value, subtitle, change, delay = 0 }: KpiCardProps) {
  const isPositive = change.startsWith('+');
  const changeValue = Number.parseFloat(change.replace(/[+%]/g, ''));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="!bg-gray-800/60 !backdrop-blur-sm !border !border-gray-700 !rounded-lg !p-4 hover:!border-cyan-500/50 !transition-all !duration-300"
    >
      <div className="!flex !items-start !justify-between !mb-3">
        <div className="!w-10 !h-10 !rounded-lg !bg-cyan-500/20 !flex !items-center !justify-center">
          <Icon className="!w-5 !h-5 !text-cyan-400" />
        </div>
        <div className="!flex !items-center !gap-1 !text-sm">
          {isPositive ? (
            <TrendingUp className="!w-4 !h-4 !text-green-400" />
          ) : (
            <TrendingDown className="!w-4 !h-4 !text-red-400" />
          )}
          <span className={isPositive ? '!text-green-400' : '!text-red-400'}>{change}</span>
        </div>
      </div>
      <div>
        <p className="!text-gray-400 !text-sm !mb-1">{label}</p>
        <p className="!text-2xl !font-bold !text-white !mb-1">{value}</p>
        <p className="!text-gray-500 !text-xs">{subtitle}</p>
      </div>
    </motion.div>
  );
}
