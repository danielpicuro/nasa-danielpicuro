"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '@/components/ui/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faBook, faMap, faUserAstronaut, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

// Importación dinámica del componente de mapa para evitar problemas con SSR
const MapComponent = dynamic(
  () => import('@/features/map/MapComponent'),
  { ssr: false }
);

/**
 * Página Get Started: Documentación con sidebar y mapa interactivo
 * Incluye secciones informativas y un mapa de Google Maps
 */
export default function GetStarted() {
  // Datos de ejemplo para los marcadores del mapa
  const mapMarkers = [
    { position: { lat: 28.5618571, lng: -80.577366 }, title: 'Cape Canaveral' },
    { position: { lat: 34.6327, lng: -120.6130 }, title: 'Vandenberg Space Force Base' },
    { position: { lat: 32.9428, lng: -106.9193 }, title: 'Spaceport America' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">GET STARTED</h1>
            <p className="text-xl mb-8">
              Everything you need to know about our space exploration platform and how to get involved.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar and Map */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <Sidebar activeSection="introduction" />
          </div>

          {/* Main Content Area */}
          <div className="w-full md:w-3/4">
            {/* Introduction Section */}
            <div id="introduction" className="mb-16">
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faBook} className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold">Introduction</h2>
              </div>
              <p className="text-lg mb-6">
                Welcome to Space Explorer, where we are pushing the boundaries of human knowledge and exploration. 
                Our mission is to make space accessible, understandable, and beneficial for all of humanity.
              </p>
              <p className="text-lg mb-6">
                This guide will help you understand our various programs, research initiatives, and how you 
                can participate in the next generation of space exploration.
              </p>
            </div>

            {/* Getting Started Section */}
            <div id="getting-started" className="mb-16">
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faRocket} className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold">Getting Started</h2>
              </div>
              <p className="text-lg mb-6">
                Whether you are a scientist, engineer, student, or space enthusiast, there are multiple ways 
                to engage with our platform:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>Explore our open data repositories</li>
                <li>Participate in citizen science projects</li>
                <li>Apply for research grants and partnerships</li>
                <li>Join educational programs and workshops</li>
                <li>Attend space launches and public events</li>
              </ul>
            </div>

            {/* Locations Section with Map */}
            <div id="locations" className="mb-16">
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faMap} className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold">Locations</h2>
              </div>
              <p className="text-lg mb-6">
                Our operations span multiple locations across the globe. Explore our facilities and launch sites on the interactive map below.
              </p>
              
              {/* Map Component */}
              <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                <MapComponent 
                  markers={mapMarkers}
                  height="500px"
                  width="100%"
                  zoom={4}
                  center={{ lat: 39.8283, lng: -98.5795 }} // Center of USA
                />
              </div>
              
              <p className="text-sm text-gray-600 italic">
                Click on markers to learn more about each location. You can zoom and pan to explore the map.
              </p>
            </div>

            {/* Team Section */}
            <div id="team" className="mb-16">
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faUserAstronaut} className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold">Meet the Team</h2>
              </div>
              <p className="text-lg mb-6">
                Our team consists of world-class scientists, engineers, and visionaries dedicated to advancing 
                space exploration and research.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Research Division</h3>
                  <p>Leading scientific discovery and innovation in space sciences.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Engineering Team</h3>
                  <p>Designing and building the next generation of space technology.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Mission Control</h3>
                  <p>Coordinating operations and ensuring mission success.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Education & Outreach</h3>
                  <p>Sharing knowledge and inspiring the next generation of explorers.</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="mb-16">
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faQuestionCircle} className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">How can I participate in your programs?</h3>
                  <p>
                    We offer various opportunities for involvement, from citizen science projects to 
                    professional collaborations. Visit our &rsquo;Join Us&rsquo; section for more information.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Do you offer educational resources for schools?</h3>
                  <p>
                    Yes, we provide curriculum materials, virtual tours, and workshop opportunities for 
                    educators and students at all levels.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How can I access your research data?</h3>
                  <p>
                    Most of our research data is available through our open data portal. Some specialized 
                    datasets may require registration or research affiliation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">When is your next launch or public event?</h3>
                  <p>
                    Check our Events calendar for upcoming launches, webinars, and public engagement 
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}