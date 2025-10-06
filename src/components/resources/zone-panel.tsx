interface ZonePanelProps {
  title: string;
  color: string;
  sites: number;
  area: number;
  coverange: number;
}

export function ZonePanel({ title, color, sites, area, coverange }: ZonePanelProps) {
  return (
    <div className="!bg-slate-900/80 !rounded-lg !p-4 !border-l-4 !border-slate-700">
      <div className="!flex !items-center !gap-3 !mb-4">
        <div className={`!w-6 !h-6 ${color} !rounded`}></div>
        <h2 className="!text-white !font-bold !text-lg">{title}</h2>
      </div>
      <div className="!space-y-2 !text-sm !mb-4">
        <div className="!flex !justify-between">
          <span className="!text-gray-400">Sites:</span>
          <span className="!text-white !font-semibold">{sites}</span>
        </div>
        <div className="!flex !justify-between">
          <span className="!text-gray-400">Area:</span>
          <span className="!text-white !font-semibold">{area} Hectare</span>
        </div>
        <div className="!flex !justify-between">
          <span className="!text-gray-400">Coverange:</span>
          <span className="!text-white !font-semibold">{coverange}%</span>
        </div>
      </div>
      <button className="!w-full !bg-blue-600 hover:!bg-blue-700 !text-white !py-2 !px-4 !rounded !text-sm !font-medium !transition-colors">
        Show
      </button>
    </div>
  );
}
