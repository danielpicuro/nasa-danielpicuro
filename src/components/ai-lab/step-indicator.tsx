interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="!bg-slate-900/60 !border !border-slate-700 !rounded-lg !p-6">
      <div className="!flex !items-center !justify-between !max-w-md">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step, index) => (
          <div key={step} className="!flex !items-center">
            {/* Step circle */}
            <div
              className={`!w-12 !h-12 !rounded-full !flex !items-center !justify-center !font-bold !text-lg !transition-all ${
                step <= currentStep
                  ? '!bg-blue-600 !text-white !border-2 !border-blue-400'
                  : '!bg-slate-700 !text-gray-400 !border-2 !border-slate-600'
              }`}
            >
              {step}
            </div>

            {/* Connector line */}
            {index < totalSteps - 1 && (
              <div
                className={`!w-16 !h-1 !mx-2 !transition-all ${step < currentStep ? '!bg-blue-600' : '!bg-slate-600'}`}
              ></div>
            )}
          </div>
        ))}

        {/* Text indicator */}
        <div className="!ml-6 !text-gray-300">
          complete steps {currentStep} to {totalSteps}
        </div>
      </div>
    </div>
  );
}
