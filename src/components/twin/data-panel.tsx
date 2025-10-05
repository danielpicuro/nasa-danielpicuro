interface DataRow {
  label: string;
  value: string;
}

interface DataPanelProps {
  title: string;
  subtitle?: string;
  data: DataRow[];
  variant?: 'blue' | 'cyan';
}

export function DataPanel({ title, subtitle, data, variant = 'blue' }: DataPanelProps) {
  const bgColor = variant === 'blue' ? '!bg-blue-600/90' : '!bg-cyan-500/90';

  return (
    <div className={`${bgColor} !backdrop-blur-md !rounded-lg !p-4 !shadow-xl`}>
      <h3 className="!text-white !font-semibold !text-lg !mb-1">{title}</h3>
      {subtitle && <p className="!text-white/70 !text-sm !mb-3">{subtitle}</p>}

      <div className="!space-y-2">
        {data.map((row, index) => (
          <div key={index} className="!flex !justify-between !items-center !text-white">
            <span className="!text-sm">{row.label}</span>
            <span className="!font-medium">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
