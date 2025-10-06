interface Feature {
  text: string;
}

interface FeatureListProps {
  features: Feature[];
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <div className="!space-y-3">
      {features.map((feature, index) => (
        <div key={index} className="!flex !items-start !gap-3 group">
          <div className="!mt-1 !flex-shrink-0">
            <div className="!w-1.5 !h-1.5 !rounded-full !bg-cyan-400 group-hover:!bg-cyan-300 !transition-colors" />
          </div>
          <p className="!text-gray-300 !text-sm !leading-relaxed group-hover:!text-white !transition-colors">
            {feature.text}
          </p>
        </div>
      ))}
    </div>
  );
}
