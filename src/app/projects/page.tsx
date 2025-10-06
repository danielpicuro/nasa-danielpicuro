'use client';

import { ProjectCarousel } from '@/components/projects/project-carousel';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export default function ProjectsPage() {
  const { language } = useAiCompanion();
  const t = translations[language].projects;

  return (
    <div className="!min-h-screen !bg-gradient-to-br !from-slate-950 !via-slate-900 !to-purple-950 !relative !overflow-hidden">
      <div className="!absolute !inset-0 !bg-gradient-to-b !from-cyan-500/5 !via-transparent !to-purple-500/10" />
      <div className="!relative !z-10 !flex !flex-col !items-center !justify-center !min-h-screen !py-16">
        {/* Header */}
        <div className="!text-center !mb-16">
          <h1 className="!text-6xl !font-bold !text-white !mb-3 !tracking-tight">
            {t.headerTitle}
          </h1>
          <p className="!text-cyan-400 !text-xl">{t.headerSubtitle}</p>
        </div>

        <ProjectCarousel />
      </div>
    </div>
  );
}
