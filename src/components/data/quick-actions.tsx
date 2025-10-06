export function QuickActions() {
  return (
    <div>
      {/* Title */}
      <h3 className="!text-white !text-sm !font-semibold !mb-3">Acciones rápidas</h3>

      {/* Main Action Button */}
      <button className="!w-full !bg-cyan-500 hover:!bg-cyan-600 !text-white !py-3 !px-4 !rounded-lg !text-sm !font-medium !transition-colors !mb-4">
        🗂️ Escenarios 6D
      </button>

      {/* Saved Views */}
      <div className="!mb-4">
        <h4 className="!text-white !text-xs !font-semibold !mb-2">Vistas guardadas</h4>
      </div>

      {/* View Options */}
      <div className="!space-y-2">
        <div className="!flex !items-center !gap-2 !text-sm">
          <div className="!w-1 !h-4 !bg-red-500"></div>
          <span className="!text-gray-300">Vista general</span>
        </div>

        <div className="!flex !items-center !gap-2 !text-sm">
          <div className="!w-1 !h-4 !bg-red-500"></div>
          <span className="!text-gray-300">Zona crítica</span>
        </div>
      </div>
    </div>
  );
}
