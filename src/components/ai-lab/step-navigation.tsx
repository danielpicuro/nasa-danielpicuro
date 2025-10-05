'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBefore: () => void;
}

export function StepNavigation({ currentStep, totalSteps, onNext, onBefore }: StepNavigationProps) {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="!flex !justify-between !items-center !mt-8">
      {/* Before button */}
      <div>
        {!isFirstStep && (
          <button
            onClick={onBefore}
            className="!flex !items-center !gap-2 !px-6 !py-3 !bg-slate-600 hover:!bg-slate-500 !text-white !font-semibold !rounded-lg !transition-all"
          >
            <ArrowLeft className="!w-5 !h-5" />
            Before
          </button>
        )}
      </div>

      {/* Next/Finish button */}
      <button
        onClick={onNext}
        className="!flex !items-center !gap-2 !px-8 !py-3 !bg-blue-600 hover:!bg-blue-700 !text-white !font-semibold !rounded-lg !transition-all !ml-auto"
      >
        {isLastStep ? 'Finish' : 'Next'}
        {!isLastStep && <ArrowRight className="!w-5 !h-5" />}
      </button>
    </div>
  );
}
