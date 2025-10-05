import { Ruler, Mountain, Circle, Route, ZoomIn, ZoomOut } from 'lucide-react';

export function MapTools() {
  return (
    <>
      {/* Bottom Tools */}
      <div className="!absolute !bottom-8 !left-1/2 !-translate-x-1/2 !bg-slate-900/90 !rounded-lg !p-3 !border !border-slate-700">
        <div className="!flex !items-center !gap-4">
          {/* Herramientas Section */}
          <div className="!flex !items-center !gap-2 !pr-4 !border-r !border-slate-700">
            <span className="!text-gray-400 !text-xs">🛠️ Herramientas</span>
          </div>

          {/* Tool Buttons */}
          <button className="!flex !flex-col !items-center !gap-1 !px-3 !py-2 !rounded hover:!bg-slate-800 !transition-colors">
            <Ruler className="!w-5 !h-5 !text-gray-400" />
            <span className="!text-gray-400 !text-xs">Medir</span>
          </button>

          <button className="!flex !flex-col !items-center !gap-1 !px-3 !py-2 !rounded hover:!bg-slate-800 !transition-colors">
            <Circle className="!w-5 !h-5 !text-gray-400" />
            <span className="!text-gray-400 !text-xs">Clip</span>
          </button>

          <button className="!flex !flex-col !items-center !gap-1 !px-3 !py-2 !rounded hover:!bg-slate-800 !transition-colors">
            <Mountain className="!w-5 !h-5 !text-gray-400" />
            <span className="!text-gray-400 !text-xs">Selección</span>
          </button>

          <button className="!flex !flex-col !items-center !gap-1 !px-3 !py-2 !rounded hover:!bg-slate-800 !transition-colors">
            <Route className="!w-5 !h-5 !text-gray-400" />
            <span className="!text-gray-400 !text-xs">Routing</span>
          </button>
        </div>
      </div>

      {/* Right Side Tools */}
      <div className="!absolute !right-8 !top-1/2 !-translate-y-1/2 !flex !flex-col !gap-2">
        <button className="!bg-slate-900/90 !p-3 !rounded-lg !border !border-slate-700 hover:!bg-slate-800 !transition-colors">
          <ZoomIn className="!w-5 !h-5 !text-gray-400" />
        </button>

        <button className="!bg-slate-900/90 !p-3 !rounded-lg !border !border-slate-700 hover:!bg-slate-800 !transition-colors">
          <ZoomOut className="!w-5 !h-5 !text-gray-400" />
        </button>

        <button className="!bg-slate-900/90 !p-3 !rounded-lg !border !border-slate-700 hover:!bg-slate-800 !transition-colors">
          <Ruler className="!w-5 !h-5 !text-gray-400" />
        </button>

        <button className="!bg-slate-900/90 !p-3 !rounded-lg !border !border-slate-700 hover:!bg-slate-800 !transition-colors">
          <Mountain className="!w-5 !h-5 !text-gray-400" />
        </button>
      </div>
    </>
  );
}
