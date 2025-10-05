'use client';

import { RadioOption } from '@/components/ai-lab/radio-option';

interface BudgetStepProps {
  selectedBudget: string;
  onSelectBudget: (value: string) => void;
}

export function BudgetStep({ selectedBudget, onSelectBudget }: BudgetStepProps) {
  return (
    <div className="!space-y-6">
      {/* Step title */}
      <div className="!mb-8">
        <h2 className="!text-3xl !font-bold !text-white !mb-2">1. AVILABLE BUDGET</h2>
        <p className="!text-gray-400">
          Select the investment range for licenses and services (3 years)
        </p>
      </div>

      {/* Options */}
      <div className="!space-y-4">
        <RadioOption
          value="low"
          selected={selectedBudget === 'low'}
          onSelect={onSelectBudget}
          title="Low (< $50k USD)"
          description="Open source and basic tools"
        />

        <RadioOption
          value="medium"
          selected={selectedBudget === 'medium'}
          onSelect={onSelectBudget}
          title="Medium ($50k - $200k USD)"
          description="Professional business solutions"
        />

        <RadioOption
          value="high"
          selected={selectedBudget === 'high'}
          onSelect={onSelectBudget}
          title="High (>$200k USD)"
          description="Fully supported enterprise platforms"
        />
      </div>
    </div>
  );
}
