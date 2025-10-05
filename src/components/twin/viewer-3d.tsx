'use client';

import { Maximize2, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

export function Viewer3D() {
  return (
    <div className="!relative !w-full !h-full !bg-gradient-to-br !from-gray-700 !via-gray-600 !to-gray-500 !rounded-lg !overflow-hidden">
      {/* Placeholder for 3D viewer */}
      <div className="!absolute !inset-0 !flex !items-center !justify-center">
        <div className="!text-center !text-white/50">
          <div className="!w-32 !h-32 !mx-auto !mb-4 !border-4 !border-white/30 !rounded-lg !transform !rotate-45 !flex !items-center !justify-center">
            <div className="!w-20 !h-20 !border-4 !border-white/30 !rounded-lg !transform !-rotate-45"></div>
          </div>
          <p className="!text-lg !font-medium">3D Viewer</p>
          <p className="!text-sm">BIM Model Visualization</p>
        </div>
      </div>

      {/* Viewer controls */}
      <div className="!absolute !bottom-4 !right-4 !flex !gap-2">
        <button className="!p-2 !bg-black/50 !backdrop-blur-sm !rounded-lg !text-white hover:!bg-black/70 !transition-colors">
          <ZoomIn className="!w-5 !h-5" />
        </button>
        <button className="!p-2 !bg-black/50 !backdrop-blur-sm !rounded-lg !text-white hover:!bg-black/70 !transition-colors">
          <ZoomOut className="!w-5 !h-5" />
        </button>
        <button className="!p-2 !bg-black/50 !backdrop-blur-sm !rounded-lg !text-white hover:!bg-black/70 !transition-colors">
          <RotateCw className="!w-5 !h-5" />
        </button>
        <button className="!p-2 !bg-black/50 !backdrop-blur-sm !rounded-lg !text-white hover:!bg-black/70 !transition-colors">
          <Maximize2 className="!w-5 !h-5" />
        </button>
      </div>

      {/* Grid overlay for 3D effect */}
      <div className="!absolute !inset-0 !opacity-10 !pointer-events-none">
        <div
          className="!w-full !h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>
    </div>
  );
}
