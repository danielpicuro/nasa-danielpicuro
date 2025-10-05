'use client';

import { MapPin } from 'lucide-react';

export function CarouselNewProjectCard() {
  return (
    <div
      className="!relative !rounded-2xl !overflow-hidden !border !border-purple-500/50 !shadow-2xl !shadow-purple-500/20"
      style={{ width: '340px', height: '480px' }}
    >
      {/* Purple Gradient Background */}
      <div className="!absolute !inset-0 !bg-gradient-to-br !from-purple-600 !via-purple-700 !to-purple-900" />

      {/* Content */}
      <div className="!relative !h-full !flex !flex-col !justify-between !p-8">
        <div className="!flex !items-start !gap-4">
          <div className="!bg-purple-500/30 !p-4 !rounded-xl !backdrop-blur-sm">
            <MapPin className="!w-8 !h-8 !text-purple-200" />
          </div>

          <div>
            <h3 className="!text-3xl !font-bold !text-white !mb-2">NEW PROJECT</h3>
          </div>
        </div>

        <div className="!space-y-6">
          <p className="!text-purple-100 !text-sm !leading-relaxed">
            Need to set up a new digital twin? Contact our team to configure a new city project with
            SuperMap integration, 5D cost analysis, and AI-powered insights.
          </p>

          <button className="!w-full !bg-purple-500/20 hover:!bg-purple-500/30 !text-white !border-2 !border-purple-300/50 !px-6 !py-3 !rounded-xl !font-semibold !transition-all !backdrop-blur-sm">
            Request New Project
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="!absolute !top-0 !right-0 !w-32 !h-32 !bg-purple-400/10 !rounded-full !blur-3xl" />
      <div className="!absolute !bottom-0 !left-0 !w-40 !h-40 !bg-purple-500/10 !rounded-full !blur-3xl" />
    </div>
  );
}
