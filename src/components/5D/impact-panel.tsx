import { MetricBar } from '@/components/5D/metric-bar';

interface Metric {
  label: string;
  value: number;
  subtitle: string;
  variant?: 'default' | 'inverse';
}

interface ImpactPanelProps {
  title: string;
  metrics: Metric[];
}

export function ImpactPanel({ title, metrics }: ImpactPanelProps) {
  return (
    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>

      <div className="grid grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <MetricBar
            key={index}
            label={metric.label}
            value={metric.value}
            subtitle={metric.subtitle}
            variant={metric.variant}
          />
        ))}
      </div>
    </div>
  );
}
