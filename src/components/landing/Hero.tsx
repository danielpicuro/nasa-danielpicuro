'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background gradient overlays */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/30">
            <svg
              className="w-20 h-20 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a7 7 0 1 0 0 14" />
              <path d="M12 2v14" />
              <path d="M2 12h20" />
            </svg>
          </div>
        </div>

        {/* Title with gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-fade-in-up">
          City Twin LATAM
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 mb-12 animate-fade-in-up animation-delay-200">
          Plataforma de Gemelos Digitales Urbanos
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-12 text-sm md:text-base animate-fade-in-up animation-delay-400">
          <a
            href="#supermap"
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            SuperMap
          </a>
          <span className="text-slate-500">•</span>
          <a
            href="#glodon"
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            Glodon 5D
          </a>
          <span className="text-slate-500">•</span>
          <a
            href="#ia-urban"
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            IA Urban Lab
          </a>
        </div>

        {/* Loading dots */}
        <div className="flex items-center justify-center gap-2 mb-16 animate-fade-in-up animation-delay-600">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse animation-delay-200" />
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse animation-delay-400" />
        </div>

        {/* Footer */}
        <p className="text-sm text-slate-500 animate-fade-in-up animation-delay-800">
          Powered by STWORLD Technology
        </p>
      </div>
    </div>
  );
}
