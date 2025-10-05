'use client';

import { MapPin } from 'lucide-react';

export function NewProjectCard() {
  const handleRequestProject = () => {
    alert('Aguanta, pronto estrá listo');
  };

  return (
    <div className="!bg-gradient-to-r !from-purple-900/40 !to-purple-800/40 !border-2 !border-purple-500/50 !rounded-lg !p-6 !mb-8">
      <div className="!flex !items-start !gap-6">
        {/* Icon */}
        <div className="!bg-purple-600 !rounded-lg !p-4 !flex-shrink-0">
          <MapPin className="!h-10 !w-10 !text-white" />
        </div>

        {/* Content */}
        <div className="!flex-1">
          <h2 className="!text-2xl !font-bold !text-purple-300 !mb-2">NEW PROJECT</h2>
          <p className="!text-gray-300 !mb-4">
            Need to set up a new digital twin? Contact our team to configure a new city project with
            SuperMap integration, 5D cost analysis, and AI-powered insights.
          </p>
          <button
            onClick={handleRequestProject}
            className="!bg-transparent !border-2 !border-purple-400 !text-purple-300 !px-6 !py-2 !rounded-lg !font-semibold !hover:bg-purple-500/20 !transition-all"
          >
            Request New Project
          </button>
        </div>
      </div>
    </div>
  );
}
