'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CarouselProjectCardProps {
  title: string;
  location: string;
  population: string;
  image: string;
  isCenter?: boolean;
}

export function CarouselProjectCard({
  title,
  location,
  population,
  image,
  isCenter = false,
}: CarouselProjectCardProps) {
  const router = useRouter();

  return (
    <div
      className={`!relative !rounded-2xl !overflow-hidden !border !transition-all ${
        isCenter ? '!border-cyan-400/50 !shadow-2xl !shadow-cyan-500/20' : '!border-slate-700/50'
      }`}
      style={{ width: '340px', height: '480px' }}
    >
      {/* Background Image */}
      <div className="!absolute !inset-0">
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          fill
          className="!object-cover"
          sizes="340px"
        />
        <div className="!absolute !inset-0 !bg-gradient-to-t !from-slate-900 !via-slate-900/60 !to-transparent" />
      </div>

      {/* Content */}
      <div className="!relative !h-full !flex !flex-col !justify-end !p-6">
        <div className="!space-y-3">
          <h3 className="!text-2xl !font-bold !text-white">{title}</h3>
          <p className="!text-gray-300 !text-sm">{location}</p>

          <div className="!flex !items-center !justify-between !pt-2 !border-t !border-slate-700">
            <div>
              <p className="!text-xs !text-gray-400">Population</p>
              <p className="!text-lg !font-semibold !text-white">{population}</p>
            </div>

            <button
              onClick={() => router.push('/ai-lab')}
              className="!bg-blue-600 hover:!bg-blue-700 !text-white !px-8 !py-2.5 !rounded-lg !font-semibold !transition-colors"
            >
              Open
            </button>
          </div>
        </div>
      </div>

      {/* Glow Effect for Center Card */}
      {isCenter && (
        <div className="!absolute !inset-0 !rounded-2xl !ring-2 !ring-cyan-400/30 !pointer-events-none" />
      )}
    </div>
  );
}
