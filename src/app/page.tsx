import React from 'react';
import ParallaxSection from '@/components/ui/ParallaxSection';
import Button from '@/components/ui/Button';
import Grid from '@/components/layout/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faSatellite, faUserAstronaut, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

/**
 * Página de inicio: Landing page principal con efecto parallax
 * Muestra información impactante sobre la misión espacial
 */
export default function Home() {
  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxSection backgroundImage="/images/world.jpg" height="100vh" overlayOpacity={0.6}>
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">EXPLORE THE UNIVERSE</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join us on a journey beyond Earth to discover the wonders of space exploration
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started">
              <Button size="lg" variant="primary">
                Get Started
              </Button>
            </Link>
            <Link href="/mission">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Discover Space Exploration</h2>

          <Grid cols={4} gap="lg">
            {[
              {
                icon: faRocket,
                title: 'Advanced Technology',
                description:
                  'Cutting-edge spacecraft and propulsion systems designed for deep space exploration.',
              },
              {
                icon: faSatellite,
                title: 'Satellite Network',
                description:
                  'Global network of satellites providing communication and research capabilities.',
              },
              {
                icon: faUserAstronaut,
                title: 'Expert Team',
                description:
                  'World-class scientists, engineers, and astronauts leading our missions.',
              },
              {
                icon: faGlobe,
                title: 'Global Impact',
                description:
                  'Discoveries that benefit humanity and advance our understanding of the universe.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <FontAwesomeIcon icon={feature.icon} className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </Grid>
        </div>
      </section>

      {/* Mission Statement */}
      <ParallaxSection
        backgroundImage="/images/earth-from-space.jpg"
        height="60vh"
        overlayOpacity={0.7}
        speed={0.3}
      >
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Our Vision for the Future</h2>
          <p className="text-xl mb-8">
            We believe in a future where humanity extends beyond Earth, exploring and understanding
            the cosmos. Our mission is to make space accessible, sustainable, and beneficial for all
            of humanity.
          </p>
          <Link href="/who-are-we">
            <Button size="lg" variant="secondary">
              Learn About Our Team
            </Button>
          </Link>
        </div>
      </ParallaxSection>

      {/* Latest Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Latest Projects</h2>

          <Grid cols={3} gap="md">
            {[
              {
                title: 'Detalle global',
                image: '/images/NASA_ORNL_DAYMET_V4_sample.png',
                description: 'Nuestro programa trabaja con datos en tiempo real.',
                link: '/product/mars-exploration',
              },
              {
                title: 'MAPS',
                image: '/images/geojango-maps-Z8UgB80_46w-unsplash.jpg',
                description: 'Estableciendo nuevos mapas',
                link: '/product/lunar-base',
              },
              {
                title: 'Asteroid Mining',
                image: '/images/geojango-maps-Z8UgB80_46w-unsplash.jpg',
                description:
                  'Developing technologies to extract valuable resources from near-Earth asteroids.',
                link: '/product/asteroid-mining',
              },
            ].map((project, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ objectFit: 'contain' }}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link href={project.link}>
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </div>
            ))}
          </Grid>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the Mission?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of our global community of space enthusiasts and contribute to the future of
            space exploration.
          </p>
          <Link href="/get-started">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
