'use client';

import { RadioOptionWithIcon } from '@/components/ai-lab/radio-option-with-icon';
import { Cloud, Server } from 'lucide-react';

interface InfrastructureStepProps {
  selectedInfrastructure: string;
  onSelectInfrastructure: (value: string) => void;
}

export function InfrastructureStep({
  selectedInfrastructure,
  onSelectInfrastructure,
}: InfrastructureStepProps) {
  return (
    <div className="!space-y-6">
      {/* Step title */}
      <div className="!mb-8">
        <h2 className="!text-3xl !font-bold !text-white !mb-2">3. INFRASTRUCTURE</h2>
        <p className="!text-gray-400">Deployment and support preference</p>
      </div>

      {/* Options */}
      <div className="!space-y-4">
        <RadioOptionWithIcon
          value="cloud"
          selected={selectedInfrastructure === 'cloud'}
          onSelect={onSelectInfrastructure}
          icon={<Cloud className="!w-12 !h-12" />}
          title="Nube (Cloud)"
          description="Scalable, no hardware investment, remote access"
        />

        <RadioOptionWithIcon
          value="on-premise"
          selected={selectedInfrastructure === 'on-premise'}
          onSelect={onSelectInfrastructure}
          icon={<Server className="!w-12 !h-12" />}
          title="On-premise"
          description="Total control, local data, no internet dependency"
        />
      </div>
    </div>
  );
}
