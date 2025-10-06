'use client';

import { motion } from 'framer-motion';

interface Step {
  number: number;
  label: string;
  active: boolean;
}

interface ProgressStepperProps {
  steps: Step[];
}

export function ProgressStepper({ steps }: ProgressStepperProps) {
  return (
    <div className="!flex !items-center !justify-center !gap-4 !mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="!flex !items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="!flex !flex-col !items-center"
          >
            <div
              className={`!w-12 !h-12 !rounded-full !flex !items-center !justify-center !font-bold !text-lg !transition-all !duration-300 ${
                step.active
                  ? '!bg-cyan-500 !text-white !shadow-lg !shadow-cyan-500/50'
                  : '!bg-white !text-gray-800'
              }`}
            >
              {step.number}
            </div>
            <span className="!text-xs !text-gray-300 !mt-2 !text-center !max-w-[100px]">
              {step.label}
            </span>
          </motion.div>
          {index < steps.length - 1 && (
            <div className="!w-24 !h-1 !bg-gray-600 !mx-2 !relative !overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: step.active ? '100%' : '0%' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="!absolute !inset-0 !bg-cyan-500"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
