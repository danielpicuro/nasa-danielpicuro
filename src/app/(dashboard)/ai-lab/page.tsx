'use client';

import { useState } from 'react';
import { StepperHeader } from '@/components/ai-lab/stepper-header';
import { StepIndicator } from '@/components/ai-lab/step-indicator';
import { BudgetStep } from '@/components/ai-lab/budget-step';
import { PriorityStep } from '@/components/ai-lab/priority-step';
import { InfrastructureStep } from '@/components/ai-lab/infrastructure-step';
import { StepNavigation } from '@/components/ai-lab/step-navigation';

export default function AILabPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBudget, setSelectedBudget] = useState<string>('medium');
  const [selectedPriority, setSelectedPriority] = useState<string>('environmental');
  const [selectedInfrastructure, setSelectedInfrastructure] = useState<string>('cloud');

  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle finish
      alert('Configuration completed!');
    }
  };

  const handleBefore = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="!min-h-screen !bg-[url('/images/barranco.jpg')] !bg-cover !bg-center !relative">
      {/* Dark overlay */}
      <div className="!absolute !inset-0 !bg-slate-900/80">
        {/* Images */}
        <div className="!absolute !inset-0 !flex !items-center !justify-center"></div>
      </div>

      {/* Content */}
      <div className="!relative !z-10 !min-h-screen !flex !flex-col !items-center !justify-center !p-8">
        {/* Header with glowing circle */}
        <StepperHeader />

        {/* Main stepper container */}
        <div className="!w-full !max-w-4xl !mt-12">
          {/* Step Indicator */}
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

          {/* Step Content */}
          <div className="!mt-8">
            {currentStep === 1 && (
              <BudgetStep selectedBudget={selectedBudget} onSelectBudget={setSelectedBudget} />
            )}
            {currentStep === 2 && (
              <PriorityStep
                selectedPriority={selectedPriority}
                onSelectPriority={setSelectedPriority}
              />
            )}
            {currentStep === 3 && (
              <InfrastructureStep
                selectedInfrastructure={selectedInfrastructure}
                onSelectInfrastructure={setSelectedInfrastructure}
              />
            )}
          </div>

          {/* Navigation */}
          <StepNavigation
            currentStep={currentStep}
            totalSteps={totalSteps}
            onNext={handleNext}
            onBefore={handleBefore}
          />
        </div>
      </div>
    </div>
  );
}
