'use client';

import Link from 'next/link';
import { ArrowLeft, Home, Search } from 'lucide-react';
import { Animated404 } from '@/components/not-found/animated-404';
import { FloatingParticles } from '@/components/not-found/floating-particles';

export default function NotFound() {
  return (
    <div className="!min-h-screen !relative !overflow-hidden !bg-gradient-to-br !from-slate-900 !via-purple-900 !to-slate-900">
      {/* Gradient overlay */}
      <div className="!absolute !inset-0 !bg-gradient-to-br !from-cyan-500/10 !via-purple-500/10 !to-pink-500/10" />

      {/* Floating particles background */}
      <FloatingParticles />

      {/* Content */}
      <div className="!relative !z-10 !min-h-screen !flex !flex-col !items-center !justify-center !px-4">
        <div className="!text-center !space-y-8 !max-w-2xl">
          {/* Animated 404 */}
          <Animated404 />

          {/* Error message */}
          <div className="!space-y-4">
            <h2 className="!text-3xl md:!text-4xl !font-bold !text-white">Page Not Found</h2>
            <p className="!text-lg !text-gray-300 !leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's get you back on
              track.
            </p>
          </div>

          {/* Action buttons */}
          <div className="!flex !flex-col sm:!flex-row !gap-4 !justify-center !items-center !pt-4">
            <Link
              href="/"
              className="!group !flex !items-center !gap-2 !px-6 !py-3 !bg-cyan-500 hover:!bg-cyan-600 !text-white !font-medium !rounded-lg !transition-all !duration-200 hover:!scale-105 hover:!shadow-lg hover:!shadow-cyan-500/50"
            >
              <Home className="!w-5 !h-5" />
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="!group !flex !items-center !gap-2 !px-6 !py-3 !bg-white/10 hover:!bg-white/20 !text-white !font-medium !rounded-lg !backdrop-blur-sm !border !border-white/20 !transition-all !duration-200 hover:!scale-105"
            >
              <ArrowLeft className="!w-5 !h-5" />
              Go Back
            </button>
          </div>

          {/* Additional help */}
          <div className="!pt-8">
            <div className="!inline-flex !items-center !gap-2 !px-4 !py-2 !bg-white/5 !backdrop-blur-sm !border !border-white/10 !rounded-full !text-sm !text-gray-300">
              <Search className="!w-4 !h-4" />
              <span>Try searching or check the URL</span>
            </div>
          </div>
        </div>

        {/* Decorative grid */}
        <div className="!absolute !inset-0 !bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] !bg-[size:50px_50px] ![mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>
    </div>
  );
}
