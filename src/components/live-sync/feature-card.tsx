// feature-card.tsx
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: 'blue' | 'purple' | 'green';
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  variant = 'blue',
}: FeatureCardProps) {
  const variantStyles = {
    blue: '!border-blue-500/30 !bg-blue-950/40',
    purple: '!border-purple-500/30 !bg-purple-950/40',
    green: '!border-green-500/30 !bg-green-950/40',
  } as const;

  const iconStyles = {
    blue: '!bg-blue-500/20 !text-blue-400',
    purple: '!bg-purple-500/20 !text-purple-400',
    green: '!bg-green-500/20 !text-green-400',
  } as const;

  return (
    <div
      className={`!flex !items-center !gap-4 !rounded-lg !border !p-4 ${variantStyles[variant]}`}
    >
      <div
        className={`!flex !h-12 !w-12 !items-center !justify-center !rounded-full ${iconStyles[variant]}`}
      >
        <Icon className="!h-6 !w-6" />
      </div>
      <div className="!flex-1">
        <h3 className="!font-semibold !text-white">{title}</h3>
        <p className="!text-sm !text-gray-400">{description}</p>
      </div>
    </div>
  );
}
