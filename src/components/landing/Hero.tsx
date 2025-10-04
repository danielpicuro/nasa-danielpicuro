import React from 'react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/images/world.jpg" 
          alt="Ciudad digital" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Gemelos Digitales Urbanos</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Transforma tu ciudad con tecnología avanzada de modelado digital y análisis impulsado por IA
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/login" 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Comenzar ahora
          </Link>
          <Link 
            href="#features" 
            className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-900 transition-colors"
          >
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  );
}