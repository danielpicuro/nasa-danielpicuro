'use client';

import { motion } from 'framer-motion';
import { Camera, Download } from 'lucide-react';

interface ComparisonData {
  floodRisk: string;
  floodRiskLevel: 'High' | 'Low';
  affectedPopulation: string;
  annualDamage: string;
}

interface ComparisonCardProps {
  before: ComparisonData;
  after: ComparisonData;
}

export function ComparisonCard({ before, after }: ComparisonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="!bg-blue-900/80 !backdrop-blur-md !border !border-blue-700 !rounded-xl !p-6 !shadow-2xl"
    >
      <div className="!grid !grid-cols-2 !gap-6 !mb-6">
        {/* Before Intervention */}
        <div className="!border-r !border-gray-700 !pr-6">
          <div className="!flex !items-center !gap-2 !mb-4">
            <div className="!w-4 !h-4 !bg-orange-500 !rounded"></div>
            <h3 className="!text-xl !font-bold !text-orange-500">Before intervention</h3>
          </div>
          <div className="!space-y-3">
            <div className="!flex !justify-between !items-center">
              <span className="!text-gray-300">Flood risk</span>
              <span className="!text-red-500 !font-bold">{before.floodRisk}</span>
            </div>
            <div className="!flex !justify-between !items-center">
              <span className="!text-gray-300">Affected population</span>
              <span className="!text-white !font-bold">{before.affectedPopulation}</span>
            </div>
            <div className="!flex !justify-between !items-center">
              <span className="!text-gray-300">Annual damage</span>
              <span className="!text-white !font-bold">{before.annualDamage}</span>
            </div>
          </div>
        </div>

        {/* After Intervention */}
        <div className="!pl-6">
          <div className="!flex !items-center !gap-2 !mb-4">
            <div className="!w-4 !h-4 !bg-green-500 !rounded"></div>
            <h3 className="!text-xl !font-bold !text-green-500">After Intervention</h3>
          </div>
          <div className="!space-y-3">
            <div className="!flex !justify-between !items-center">
              <span className="!text-gray-300">Flood risk</span>
              <span className="!text-yellow-500 !font-bold">{after.floodRisk}</span>
            </div>
            <div className="!flex !justify-between !items-center">
              <span className="!text-gray-300">Affected population</span>
              <span className="!text-white !font-bold">{after.affectedPopulation}</span>
            </div>
            <div className="!flex !justify-between !items-center">
              <span className="!text-gray-300">Annual damage</span>
              <span className="!text-white !font-bold">{after.annualDamage}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="!flex !items-center !justify-between !pt-4 !border-t !border-gray-700">
        <p className="!text-purple-400 !font-medium">AI-powered visual comparison</p>
        <div className="!flex !gap-3">
          <button className="!px-4 !py-2 !bg-gray-700 hover:!bg-gray-600 !text-white !rounded-lg !text-sm !font-medium !transition-colors !flex !items-center !gap-2">
            <Camera className="!w-4 !h-4" />
            Capture
          </button>
          <button className="!px-4 !py-2 !bg-purple-600 hover:!bg-purple-700 !text-white !rounded-lg !text-sm !font-medium !transition-colors !flex !items-center !gap-2">
            <Download className="!w-4 !h-4" />
            Export Comparison
          </button>
        </div>
      </div>
    </motion.div>
  );
}
