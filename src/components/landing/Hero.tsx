'use client';

import { useRouter } from 'next/navigation';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export default function HomePage() {
  const router = useRouter();
  const { language } = useAiCompanion();
  const t = translations[language].home;

  return (
    <main className="!relative !min-h-screen !w-full !overflow-hidden">
      {/* Background Video */}
      <div className="!absolute !inset-0 !z-0">
        <iframe
          src="https://www.youtube.com/embed/aT96arYHArs?autoplay=1&mute=1&loop=1&playlist=aT96arYHArs&controls=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="!absolute !top-1/2 !left-1/2 !w-full !h-full !-translate-x-1/2 !-translate-y-1/2 !min-w-[100vw] !min-h-[100vh] !object-cover"
        ></iframe>
        {/* Dark overlay for better text readability */}
        <div className="!absolute !inset-0 !bg-black/40" />
      </div>

      {/* Content */}
      <div className="!relative !z-10 !flex !min-h-screen !flex-col !justify-center !px-6 !py-12 !md:px-12 !lg:px-24 !items-end">
        <div className="!max-w-4xl !flex !flex-col !items-end">
          {/* Subtitle */}
          <h2 className="!mb-4 !font-sans !text-8xl !font-normal !italic !text-white !md:text-4xl !lg:text-5xl !text-right">
            {t.subtitle}
          </h2>

          {/* Main Heading */}
          <h1 className="!mb-12 !font-sans !text-3xl !font-bold !uppercase !leading-tight !text-white !md:text-6xl !lg:text-7xl !text-right">
            {t.title}
          </h1>

          {/* CTA Button */}
          <div
            onClick={() => router.push('/login')}
            className="!w-30 !rounded-2xl !flex !flex-col !items-center !justify-center !relative !z-20 !bg-blue-600 !px-10 !py-3 !text-xl !font-bold !text-white !shadow-xl hover:!bg-blue-700 hover:!shadow-2xl !transition-all !cursor-pointer"
          >
            {t.getStarted}
          </div>
        </div>
      </div>
    </main>
  );
}
