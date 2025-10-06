'use client';

import { RadioOption } from '@/components/ai-lab/radio-option';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

interface PriorityStepProps {
  selectedPriority: string;
  onSelectPriority: (value: string) => void;
}

export function PriorityStep({ selectedPriority, onSelectPriority }: PriorityStepProps) {
  const { language } = useAiCompanion();
  const t = translations[language].aiLab.priorityStep;

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
          value="environmental"
          selected={selectedPriority === 'environmental'}
          onSelect={onSelectPriority}
          title={t.environmental}
          description={t.environmentalDescription}
        />

        <RadioOption
          value="costing"
          selected={selectedPriority === 'costing'}
          onSelect={onSelectPriority}
          title={t.costing}
          description={t.costingDescription}
        />

        <RadioOption
          value="communication"
          selected={selectedPriority === 'communication'}
          onSelect={onSelectPriority}
          title={t.communication}
          description={t.communicationDescription}
        />
      </div>
    </div>
  );
}
