'use client';

import { RadioOption } from '@/components/ai-lab/radio-option';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

interface BudgetStepProps {
  selectedBudget: string;
  onSelectBudget: (value: string) => void;
}

export function BudgetStep({ selectedBudget, onSelectBudget }: BudgetStepProps) {
  const { language } = useAiCompanion();
  const t = translations[language].aiLab.budgetStep;

  return (
    <div className="!space-y-6">
      {/* Step title */}
      <div className="!mb-8">
        <h2 className="!text-3xl !font-bold !text-white !mb-2">{t.title}</h2>
        <p className="!text-gray-400">{t.subtitle}</p>
      </div>

      {/* Options */}
      <div className="!space-y-4">
        <RadioOption
          value="low"
          selected={selectedBudget === 'low'}
          onSelect={onSelectBudget}
          title={t.low}
          description={t.lowDescription}
        />

        <RadioOption
          value="medium"
          selected={selectedBudget === 'medium'}
          onSelect={onSelectBudget}
          title={t.medium}
          description={t.mediumDescription}
        />

        <RadioOption
          value="high"
          selected={selectedBudget === 'high'}
          onSelect={onSelectBudget}
          title={t.high}
          description={t.highDescription}
        />
      </div>
    </div>
  );
}
