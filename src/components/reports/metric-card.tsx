import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  variant?: 'purple' | 'teal' | 'cyan' | 'dark';
  isNegative?: boolean;
}

export function MetricCard({
  title,
  value,
  subtitle,
  variant = 'purple',
  isNegative = false,
}: MetricCardProps) {
  const variantStyles = {
    purple: '!from-purple-900/40 !to-purple-700/30',
    teal: '!from-purple-700/30 !to-teal-700/40',
    cyan: '!from-teal-700/40 !to-cyan-700/40',
    dark: '!from-cyan-700/40 !to-slate-800/40',
  };

  return (
    <div
      className={cn(
        '!rounded-lg !bg-gradient-to-br !p-6 !backdrop-blur-sm',
        variantStyles[variant]
      )}
    >
      <h3 className="!text-lg !font-medium !text-white/90">{title}</h3>
      <p className={cn('!mt-2 !text-4xl !font-bold', isNegative ? '!text-red-400' : '!text-white')}>
        {value}
      </p>
      <p className="!mt-1 !text-sm !text-white/60">{subtitle}</p>
    </div>
  );
}
