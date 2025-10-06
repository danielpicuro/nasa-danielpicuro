'use client';

interface ViewToggleProps {
  viewMode: '3D' | '2D';
  onViewModeChange: (mode: '3D' | '2D') => void;
}

export function ViewToggle({ viewMode, onViewModeChange }: ViewToggleProps) {
  return (
    <div className="!flex !gap-2 !bg-slate-900/90 !rounded-lg !p-2 !border !border-slate-700">
      <button
        onClick={() => onViewModeChange('3D')}
        className={`!px-4 !py-2 !rounded !text-sm !font-medium !transition-colors ${
          viewMode === '3D'
            ? '!bg-cyan-500 !text-white'
            : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
        }`}
      >
        3D View
      </button>

      <button
        onClick={() => onViewModeChange('2D')}
        className={`!px-4 !py-2 !rounded !text-sm !font-medium !transition-colors ${
          viewMode === '2D'
            ? '!bg-cyan-500 !text-white'
            : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
        }`}
      >
        2D Map
      </button>
    </div>
  );
}
