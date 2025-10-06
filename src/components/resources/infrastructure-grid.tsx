export function InfrastructureGrid() {
  const items = [
    { label: 'Commercial', value: 4 },
    { label: 'Construction', value: 0 },
    { label: 'Residential', value: 8 },
    { label: 'Parks', value: 3 },
  ];

  return (
    <div className="!bg-slate-900/80 !rounded-lg !p-4">
      <h2 className="!text-white !font-bold !text-lg !mb-4">Infrastructura</h2>
      <div className="!grid !grid-cols-2 !gap-3">
        {items.map(item => (
          <div
            key={item.label}
            className="!bg-slate-800/60 !rounded !p-3 !text-center !border !border-slate-700"
          >
            <div className="!text-gray-400 !text-xs !mb-1">{item.label}</div>
            <div className="!text-white !text-2xl !font-bold">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
