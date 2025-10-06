'use client';

import Link from 'next/link';
import { Animated404 } from '@/components/not-found/animated-404';
import { FloatingParticles } from '@/components/not-found/floating-particles';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export default function NotFoundPage() {
  const { language } = useAiCompanion();
  const t = translations[language].notFound;

  return (
    <div className="!relative !min-h-screen !bg-gradient-to-br !from-gray-900 !via-gray-800 !to-black !text-white !overflow-hidden">
      <FloatingParticles />
      <div className="!relative !z-10 !flex !flex-col !items-center !justify-center !min-h-screen !px-4 !py-12 !text-center">
        <Animated404 />
        <h1 className="!mt-8 !text-5xl !font-extrabold !tracking-tight !text-white sm:!text-6xl">
          {t.pageNotFound}
        </h1>
        <p className="!mt-4 !text-lg !text-gray-400">{t.description}</p>
        <Link
          href="/"
          className="!mt-8 !inline-flex !items-center !rounded-md !border !border-transparent !bg-blue-600 !px-6 !py-3 !text-base !font-medium !text-white !shadow-sm hover:!bg-blue-700 focus:!outline-none focus:!ring-2 focus:!ring-blue-500 focus:!ring-offset-2"
        >
          {t.goBackHome}
        </Link>
      </div>
    </div>
  );
}
