import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { TechStack } from '@/components/landing/TechStack';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <TechStack />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu ciudad?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Comienza hoy mismo a utilizar nuestro sistema de gemelos digitales urbanos
          </p>
          <Link 
            href="/login" 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Comenzar ahora
          </Link>
        </div>
      </section>
    </main>
  );
}
