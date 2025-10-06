export function PlanningMetrics() {
  const metrics = [
    { label: 'Population', value: '23927' },
    { label: 'Vehicles', value: '516' },
    { label: 'Alerts', value: '1', highlight: true },
    { label: 'Notifications', value: '16' },
  ];

  return (
    <div className="!flex !items-center !gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`
            !flex !flex-col !items-center !px-4 !py-2 !rounded-lg
            ${metric.highlight ? '!bg-red-600/80' : '!bg-slate-800/50'}
          `}
        >
          <span className="!text-white/70 !text-xs !font-medium">{metric.label}</span>
          <span className="!text-white !text-lg !font-bold">{metric.value}</span>
        </div>
      ))}
    </div>
  );
}
