'use client';

import { RadioOption } from '@/components/ai-lab/radio-option';

interface PriorityStepProps {
  selectedPriority: string;
  onSelectPriority: (value: string) => void;
}

export function PriorityStep({ selectedPriority, onSelectPriority }: PriorityStepProps) {
  return (
    <div className="!space-y-6">
      {/* Step title */}
      <div className="!mb-8">
        <h2 className="!text-3xl !font-bold !text-white !mb-2">2. PROJECT PRIORITY</h2>
        <p className="!text-gray-400">What is the main objective of your digital twin?</p>
      </div>

      {/* Options */}
      <div className="!space-y-4">
        <RadioOption
          value="environmental"
          selected={selectedPriority === 'environmental'}
          onSelect={onSelectPriority}
          title="Environmental Analysis / CIM-GIS"
          description="Floods, heat, air quality, terror, planning"
        />

        <RadioOption
          value="costing"
          selected={selectedPriority === 'costing'}
          onSelect={onSelectPriority}
          title="5D Costing/QTO Project Management,"
          description="budgets, construction control, schedule"
        />

        <RadioOption
          value="communication"
          selected={selectedPriority === 'communication'}
          onSelect={onSelectPriority}
          title="Communication/Visualization"
          description="Renders, videos, executive 3D twin stakeholder engagement"
        />
      </div>
    </div>
  );
}
