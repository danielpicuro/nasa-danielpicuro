'use client';

import { RadioOptionWithIcon } from '@/components/ai-lab/radio-option-with-icon';
import { Cloud, Server } from 'lucide-react';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

interface InfrastructureStepProps {
  selectedInfrastructure: string;
  onSelectInfrastructure: (value: string) => void;
}

export function InfrastructureStep({
  selectedInfrastructure,
  onSelectInfrastructure,
}: InfrastructureStepProps) {
  const { language } = useAiCompanion();
  const t = translations[language].aiLab.infrastructureStep;

  return (
    <div className="!space-y-6">
      {/* Step title */}
      <div className="!mb-8">
        <h2 className="!text-3xl !font-bold !text-white !mb-2">{t.title}</h2>
        <p className="!text-gray-400">{t.subtitle}</p>
      </div>

      {/* Options */}
      <div className="!space-y-4">
        <RadioOptionWithIcon
          value="cloud"
          selected={selectedInfrastructure === 'cloud'}
          onSelect={onSelectInfrastructure}
          icon={<Cloud className="!w-12 !h-12" />}
          title={t.cloud}
          description={t.cloudDescription}
        />

        <RadioOptionWithIcon
          value="on-premise"
          selected={selectedInfrastructure === 'on-premise'}
          onSelect={onSelectInfrastructure}
          icon={<Server className="!w-12 !h-12" />}
          title={t.onPremise}
          description={t.onPremiseDescription}
        />
      </div>
    </div>
  );
}
