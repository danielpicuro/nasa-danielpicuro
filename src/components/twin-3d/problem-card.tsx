'use client';

import { motion } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, Camera, Share2 } from 'lucide-react';

interface ProblemCardProps {
  step: number;
  totalSteps: number;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export function ProblemCard({ step, totalSteps, title, description, metrics }: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="!bg-blue-900/80 !backdrop-blur-md !border !border-blue-700 !rounded-xl !p-6 !shadow-2xl"
    >
      <div className="!mb-4">
        <span className="!inline-block !bg-cyan-500 !text-white !text-xs !font-bold !px-3 !py-1 !rounded-full !mb-3">
          Step {step} of {totalSteps}
        </span>
        <h2 className="!text-2xl !font-bold !text-cyan-400 !mb-2">{title}</h2>
        <p className="!text-gray-300 !text-sm">{description}</p>
      </div>

      <div className="!grid !grid-cols-3 !gap-4 !mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="!text-center">
            <p className="!text-gray-400 !text-xs !mb-1">{metric.label}</p>
            <p className="!text-white !font-bold !text-lg">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="!flex !items-center !justify-between">
        <div className="!flex !gap-2">
          <button className="!px-4 !py-2 !bg-gray-700 hover:!bg-gray-600 !text-white !rounded-lg !text-sm !font-medium !transition-colors">
            <ChevronLeft className="!w-4 !h-4 !inline !mr-1" />
            Previous
          </button>
          <button className="!px-4 !py-2 !bg-cyan-500 hover:!bg-cyan-600 !text-white !rounded-lg !text-sm !font-medium !transition-colors">
            <Play className="!w-4 !h-4 !inline !mr-1" />
            Play
          </button>
          <button className="!px-4 !py-2 !bg-gray-700 hover:!bg-gray-600 !text-white !rounded-lg !text-sm !font-medium !transition-colors">
            Next
            <ChevronRight className="!w-4 !h-4 !inline !ml-1" />
          </button>
        </div>
        <div className="!flex !gap-2">
          <button className="!px-4 !py-2 !bg-gray-700 hover:!bg-gray-600 !text-white !rounded-lg !text-sm !font-medium !transition-colors">
            <Camera className="!w-4 !h-4 !inline !mr-1" />
            Capture
          </button>
          <button className="!px-4 !py-2 !bg-gray-700 hover:!bg-gray-600 !text-white !rounded-lg !text-sm !font-medium !transition-colors">
            <Share2 className="!w-4 !h-4 !inline !mr-1" />
            Share
          </button>
        </div>
      </div>
    </motion.div>
  );
}
