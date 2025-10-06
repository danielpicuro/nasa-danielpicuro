import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';
import { useEffect } from 'react';
import { Box, RefreshCw, Triangle } from 'lucide-react';
import type { Metadata } from 'next';

import { BimCard } from '@/components/live-sync/bim-card';
import { FeatureCard } from '@/components/live-sync/feature-card';
import { FileUpload } from '@/components/live-sync/file-upload';
import { ConnectionStatus } from '@/components/live-sync/connection-status';
import Link from 'next/link';

export default function LiveSyncPage() {
  const { language } = useAiCompanion();
  const t = translations[language].liveSync;

  return (
    <div className="!min-h-screen !bg-gradient-to-br !from-cyan-500 !via-purple-600 !to-gray-800">
      {/* Header */}
      <div className="!border-b !border-white/10 !bg-black/20 !backdrop-blur-sm">
        <div className="!mx-auto !max-w-7xl !px-6 !py-4">
          <div className="!flex !items-center !justify-between">
            <div className="!flex !items-center !gap-4">
              <div className="!h-16 !w-16 !rounded-lg !bg-cyan-500" />
              <div>
                <h1 className="!text-3xl !font-bold !text-white">{t.headerTitle}</h1>
                <p className="!text-gray-300">{t.headerSubtitle}</p>
              </div>
            </div>
            <div className="!flex !items-center !gap-3">
              <button className="!rounded-lg !bg-gray-700 !px-6 !py-3 !font-medium !text-white !transition-colors hover:!bg-gray-600">
                {t.blackButton}
              </button>
              <Link
                href={'/twin'}
                className="!rounded-lg !bg-cyan-500 !px-6 !py-3 !font-medium !text-white !transition-colors hover:!bg-cyan-600"
              >
                {t.nextButton}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Select files indicator */}
      <div className="!bg-cyan-500 !py-2 !text-center">
        <span className="!font-medium !text-white">{t.selectFiles}</span>
      </div>

      {/* Main Content */}
      <div className="!mx-auto !max-w-7xl !px-6 !py-8">
        {/* Tabs */}
        <div className="!mb-8 !flex !gap-2 !rounded-full !bg-black/40 !p-2 !backdrop-blur-sm">
          <button className="!flex-1 !rounded-full !bg-cyan-500 !px-6 !py-3 !font-medium !text-white !transition-colors">
            {t.tabA}
          </button>
          <button className="!flex-1 !rounded-full !px-6 !py-3 !font-medium !text-white !transition-colors hover:!bg-white/10">
            {t.tabB}
          </button>
          <button className="!flex-1 !rounded-full !px-6 !py-3 !font-medium !text-white !transition-colors hover:!bg-white/10">
            {t.tabC}
          </button>
        </div>

        {/* Live Sync Section */}
        <div className="!space-y-6 !rounded-xl !border !border-white/10 !bg-gray-900/40 !p-8 !backdrop-blur-sm">
          <div>
            <div className="!mb-2 !flex !items-center !gap-3">
              <span className="!rounded-full !bg-green-500 !px-3 !py-1 !text-xs !font-semibold !text-white">
                {t.recommended}
              </span>
              <h2 className="!text-2xl !font-bold !text-cyan-400">{t.liveSyncTitle}</h2>
            </div>
            <p className="!text-gray-300">{t.liveSyncDescription}</p>
          </div>

          {/* Edit in BIM */}
          <div>
            <h3 className="!mb-4 !text-xl !font-semibold !text-cyan-400">{t.editInBim}</h3>
            <div className="!grid !grid-cols-5 !gap-4">
              {t.bimSoftware.map(software => (
                <BimCard key={software} name={software} icon={Box} />
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="!grid !grid-cols-3 !gap-4">
            <FeatureCard
              title={t.featureCards[0].title}
              description={t.featureCards[0].description}
              icon={RefreshCw}
              variant="blue"
            />
            <FeatureCard
              title={t.featureCards[1].title}
              description={t.featureCards[1].description}
              icon={Triangle}
              variant="purple"
            />
            <FeatureCard
              title={t.featureCards[2].title}
              description={t.featureCards[2].description}
              icon={RefreshCw}
              variant="green"
            />
          </div>

          {/* Connection Status */}
          <ConnectionStatus connectedTo="Autodesk Revit" />
        </div>

        {/* File Upload */}
        <div className="!mt-8">
          <FileUpload />
        </div>
      </div>
    </div>
  );
}
