export function LegendPanel() {
  return (
    <div className="!bg-slate-900/90 !rounded-lg !p-4 !border !border-slate-700">
      <h3 className="!text-white !text-sm !font-semibold !mb-3">Legend</h3>

      <div className="!space-y-2">
        <div className="!flex !items-center !gap-2">
          <div className="!w-3 !h-3 !bg-cyan-400 !rounded-full"></div>
          <span className="!text-gray-300 !text-xs">Active Collectors</span>
        </div>

        <div className="!flex !items-center !gap-2">
          <div className="!w-3 !h-3 !bg-gray-500 !rounded-full"></div>
          <span className="!text-gray-300 !text-xs">Under Construction</span>
        </div>

        <div className="!flex !items-center !gap-2">
          <div className="!w-3 !h-3 !bg-gray-600 !rounded-full"></div>
          <span className="!text-gray-300 !text-xs">Planned</span>
        </div>
      </div>
    </div>
  );
}
