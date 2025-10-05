import React from 'react';
import Link from 'next/link';
import Hero from '@/components/landing/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
