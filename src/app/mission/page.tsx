import React from 'react';
import ParallaxSection from '@/components/ui/ParallaxSection';
import Button from '@/components/ui/Button';
import Link from 'next/link';

/**
 * Página de Misión: Muestra la misión y visión de la organización
 * Inspirada en el estilo de la NASA con imágenes de impacto
 */
export default function Mission() {
  return (
    <>
      <ParallaxSection 
        backgroundImage="/images/mission-hero.jpg" 
        height="70vh"
        overlayOpacity={0.6}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">OUR MISSION</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expanding humanit&rsquo; presence in space and advancing exploration of the cosmos
          </p>
        </div>
      </ParallaxSection>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Purpose</h2>
            <p className="text-lg mb-6">
              At Space Explorer, we are driven by the belief that space exploration represents the pinnacle of human achievement and curiosity. Our mission is to push the boundaries of wha&rsquo; possible, extending humanit&rsquo; reach beyond Earth and fostering a deeper understanding of our universe.
            </p>
            <p className="text-lg mb-6">
              We are committed to developing sustainable space technologies that not only advance scientific knowledge but also improve life on Earth through technological innovation and resource discovery.
            </p>
            <p className="text-lg mb-12">
              Through international collaboration and public engagement, we aim to inspire the next generation of scientists, engineers, and explorers who will continue humanit&rsquo; journey to the stars.
            </p>

            <div className="bg-gray-100 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4 text-center">Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
                  <div>
                    <h4 className="font-bold text-lg">Innovation</h4>
                    <p>Pioneering new technologies and approaches to overcome the challenges of space exploration.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
                  <div>
                    <h4 className="font-bold text-lg">Collaboration</h4>
                    <p>Working across borders and disciplines to achieve our shared goals in space.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
                  <div>
                    <h4 className="font-bold text-lg">Sustainability</h4>
                    <p>Ensuring our activities in space are responsible and beneficial for future generations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">4</span>
                  <div>
                    <h4 className="font-bold text-lg">Education</h4>
                    <p>Sharing knowledge and inspiring curiosity about space and science.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ParallaxSection 
        backgroundImage="/images/astronaut.jpg" 
        height="60vh"
        overlayOpacity={0.5}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Space exploration is a collective endeavor that requires the talents and support of people from all backgrounds.
          </p>
          <Link href="/get-started">
            <Button size="lg" variant="primary">Get Involved</Button>
          </Link>
        </div>
      </ParallaxSection>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Roadmap</h2>
            
            <div className="relative border-l-4 border-blue-600 pl-8 pb-8">
              <div className="mb-12">
                <div className="absolute -left-3 mt-1.5">
                  <div className="bg-blue-600 rounded-full w-6 h-6"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Phase 1: Near-Earth Operations</h3>
                <p className="text-gray-700 mb-4">Establishing reliable access to low Earth orbit and developing sustainable space stations.</p>
                <p className="text-sm text-gray-500">2023-2025</p>
              </div>
              
              <div className="mb-12">
                <div className="absolute -left-3 mt-1.5">
                  <div className="bg-blue-600 rounded-full w-6 h-6"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Phase 2: Lunar Exploration</h3>
                <p className="text-gray-700 mb-4">Building a permanent presence on the Moon and utilizing lunar resources.</p>
                <p className="text-sm text-gray-500">2025-2030</p>
              </div>
              
              <div className="mb-12">
                <div className="absolute -left-3 mt-1.5">
                  <div className="bg-blue-600 rounded-full w-6 h-6"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Phase 3: Mars and Beyond</h3>
                <p className="text-gray-700 mb-4">Human missions to Mars and establishing the first Martian outpost.</p>
                <p className="text-sm text-gray-500">2030-2040</p>
              </div>
              
              <div>
                <div className="absolute -left-3 mt-1.5">
                  <div className="bg-blue-600 rounded-full w-6 h-6"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Phase 4: Deep Space Exploration</h3>
                <p className="text-gray-700 mb-4">Venturing to the outer planets and developing interstellar capabilities.</p>
                <p className="text-sm text-gray-500">2040 and beyond</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}