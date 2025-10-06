'use client';

import { ArrowLeft } from 'lucide-react';
import { InfoCard } from '@/components/7D/info-card';
import { useRouter } from 'next/navigation';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';
import Link from 'next/link';

export default function SevenDPage() {
  const router = useRouter();
  const { language } = useAiCompanion();
  const t = translations[language].sevenD;

  return (
    <div className="!min-h-screen !bg-gradient-to-br !from-slate-950 !via-slate-900 !to-slate-950 !relative !overflow-hidden">
      {/* Gradient orbs */}
      <div className="!absolute !top-0 !left-1/4 !w-96 !h-96 !bg-purple-500/20 !rounded-full !blur-3xl" />
      <div className="!absolute !top-1/3 !right-1/4 !w-96 !h-96 !bg-cyan-500/20 !rounded-full !blur-3xl" />
      <div className="!absolute !bottom-0 !left-1/2 !w-96 !h-96 !bg-blue-500/10 !rounded-full !blur-3xl" />

      {/* Header */}
      <header className="!relative !bg-slate-800/50 !backdrop-blur-sm !border-b !border-slate-700/50">
        <div className="!max-w-7xl !mx-auto !px-6 !py-4 !flex !items-center !justify-between">
          <div className="!flex !items-center !gap-4">
            <button
              onClick={() => router.back()}
              className="!flex !items-center !gap-2 !text-gray-300 hover:!text-white !transition-colors"
            >
              <ArrowLeft className="!w-5 !h-5" />
              <span className="!font-medium">{t.blackButton}</span>
            </button>
            <div className="!h-8 !w-px !bg-slate-700" />
            <div>
              <h1 className="!text-xl !font-bold !text-white">{t.headerTitle}</h1>
              <p className="!text-sm !text-gray-400">{t.headerSubtitle}</p>
            </div>
          </div>
          <div className="!flex !items-center !gap-3">
            <Link
              href={'/twin-3d'}
              className="!px-4 !py-2 !bg-slate-700/50 hover:!bg-slate-700 !border !border-slate-600 !rounded-lg !text-sm !font-medium !text-gray-300 hover:!text-white !transition-all"
            >
              {t.seeTwinButton}
            </Link>
            <Link
              href={'/5D'}
              className="!px-4 !py-2 !bg-black hover:!bg-slate-900 !border !border-slate-800 !rounded-lg !text-sm !font-medium !text-white !transition-all"
            >
              {t.sendTo5DButton}
            </Link>
          </div>
        </div>
      </header>

      {/* Gradient bar */}
      <div className="!h-2 !bg-gradient-to-r !from-purple-500/50 !via-cyan-500/50 !to-blue-500/50" />

      {/* Main content */}
      <main className="!relative !px-6 !py-16">
        <InfoCard
          title={t.infoCard.title}
          subtitle={t.infoCard.subtitle}
          sectionTitle={t.infoCard.sectionTitle}
          features={t.infoCard.features}
          onBack={() => router.back()}
          backButtonText={t.infoCard.backButton}
        />
      </main>
    </div>
  );
}
