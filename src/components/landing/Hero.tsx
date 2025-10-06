'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="!relative !min-h-screen !w-full !overflow-hidden">
      {/* Background Image */}
      <div className="!absolute !inset-0 !z-0">
        <img
          src="/images/earth.jpg"
          alt="Aerial view of city"
          className="!h-full !w-full !object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="!absolute !inset-0 !bg-black/40" />
      </div>

      {/* Content */}
      <div className="!relative !z-10 !flex !min-h-screen !flex-col !justify-center !px-6 !py-12 !md:px-12 !lg:px-24">
        <div className="!max-w-4xl !flex !flex-col !align-middle">
          {/* Subtitle */}
          <h2 className="!mb-4 !font-sans !text-8xl !font-normal !italic !text-white !md:text-4xl !lg:text-5xl">
            AI that redefines urbanism
          </h2>

          {/* Main Heading */}
          <h1 className="!mb-12 !font-sans !text-3xl !font-bold !uppercase !leading-tight !text-white !md:text-6xl !lg:text-7xl">
            DATA THAT THINKS, CITIES THAT EVOLVE
          </h1>

          {/* CTA Button */}
          <div
            onClick={() => router.push('/login')}
            className="!w-30 !rounded-2xl !flex !flex-col !items-center !justify-center !relative !z-20 !bg-blue-600 !px-10 !py-3 !text-xl !font-bold !text-white !shadow-xl hover:!bg-blue-700 hover:!shadow-2xl !transition-all !cursor-pointer"
          >
            Get Started
          </div>
        </div>
      </div>
    </main>
  );
}
