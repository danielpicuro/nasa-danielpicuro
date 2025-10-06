export function QuickActions() {
  return (
    <div>
      {/* Title */}
      <h3 className="!text-white !text-sm !font-semibold !mb-3">Quick actions</h3>

      {/* Main Action Button */}
      <button className="!w-full !bg-cyan-500 hover:!bg-cyan-600 !text-white !py-3 !px-4 !rounded-lg !text-sm !font-medium !transition-colors !mb-4">
        🗂️ 6D Scenarios
      </button>

      {/* Saved Views */}
      <div className="!mb-4">
        <h4 className="!text-white !text-xs !font-semibold !mb-2">Saved views</h4>
      </div>

      {/* View Options */}
      <div className="!space-y-2">
        <div className="!flex !items-center !gap-2 !text-sm">
          <div className="!w-1 !h-4 !bg-red-500"></div>
          <span className="!text-gray-300">General view</span>
        </div>

        <div className="!flex !items-center !gap-2 !text-sm">
          <div className="!w-1 !h-4 !bg-red-500"></div>
          <span className="!text-gray-300">Critical zone</span>
        </div>
      </div>
    </div>
  );
}
