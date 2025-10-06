export function ProjectData() {
  return (
    <div className="!border-t !border-slate-800 !pt-4">
      <h3 className="!text-white !text-sm !font-semibold !mb-3">Project data</h3>

      <div className="!space-y-2 !text-sm">
        <div className="!flex !justify-between">
          <span className="!text-gray-400">Exposed population</span>
          <span className="!text-white">12,350</span>
        </div>

        <div className="!flex !justify-between">
          <span className="!text-gray-400">Max depth</span>
          <span className="!text-white">0.45 m</span>
        </div>

        <div className="!flex !justify-between">
          <span className="!text-gray-400">CapEx</span>
          <span className="!text-cyan-400 !font-semibold">$3.2M</span>
        </div>
      </div>
    </div>
  );
}
