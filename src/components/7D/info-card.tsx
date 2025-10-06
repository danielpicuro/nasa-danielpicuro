'use client';

import { Settings, ArrowLeft } from 'lucide-react';
import { FeatureList } from '@/components/7D/feature-list';

interface InfoCardProps {
  title: string;
  subtitle: string;
  sectionTitle: string;
  features: Array<{ text: string }>;
  onBack?: () => void;
  backButtonText: string;
}

export function InfoCard({
  title,
  subtitle,
  sectionTitle,
  features,
  onBack,
  backButtonText,
}: InfoCardProps) {
  return (
    <div className="!w-full !max-w-2xl !mx-auto">
      <div className="!relative !bg-slate-900/40 !backdrop-blur-xl !border !border-slate-700/50 !rounded-2xl !p-8 !shadow-2xl">
        {/* Glow effect */}
        <div className="!absolute !inset-0 !bg-gradient-to-br !from-cyan-500/5 !to-purple-500/5 !rounded-2xl" />

        <div className="!relative !space-y-8">
          {/* Icon */}
          <div className="!flex !justify-center">
            <div className="!w-16 !h-16 !rounded-2xl !bg-cyan-500/10 !border !border-cyan-500/20 !flex !items-center !justify-center">
              <Settings className="!w-8 !h-8 !text-cyan-400" />
            </div>
          </div>

          {/* Title and subtitle */}
          <div className="!text-center !space-y-3">
            <h2 className="!text-2xl !font-bold !text-white">{title}</h2>
            <p className="!text-gray-400 !text-sm">{subtitle}</p>
          </div>

          {/* Features section */}
          <div className="!space-y-4">
            <h3 className="!text-base !font-semibold !text-gray-300 !text-center">
              {sectionTitle}
            </h3>
            <FeatureList features={features} />
          </div>

          {/* Back button */}
          <button
            onClick={onBack}
            className="!w-full !py-3 !px-4 !bg-slate-800/50 hover:!bg-slate-800/70 !border !border-slate-700/50 !rounded-lg !text-gray-300 hover:!text-white !transition-all !duration-200 !flex !items-center !justify-center !gap-2 group"
          >
            <ArrowLeft className="!w-4 !h-4 group-hover:!-translate-x-1 !transition-transform" />
            <span className="!text-sm !font-medium">{backButtonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
