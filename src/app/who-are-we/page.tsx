import React from 'react';
import Grid from '@/components/layout/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faUserAstronaut, faSatellite, faGlobe } from '@fortawesome/free-solid-svg-icons';

/**
 * Página Who Are We: Muestra información sobre el equipo y la organización
 * Presenta al equipo, valores y misión de la empresa
 */
export default function WhoAreWe() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Mission Director',
      image: '/images/team-1.jpg',
      bio: 'Former NASA astronaut with over 2000 hours in space and multiple ISS missions.'
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Chief Scientist',
      image: '/images/team-2.jpg',
      bio: 'Leading astrophysicist specializing in exoplanet research and deep space phenomena.'
    },
    {
      name: 'Eng. Amara Okafor',
      role: 'Lead Engineer',
      image: '/images/team-3.jpg',
      bio: 'Pioneering aerospace engineer with breakthrough innovations in propulsion systems.'
    },
    {
      name: 'Dr. Carlos Rodriguez',
      role: 'Research Director',
      image: '/images/team-4.jpg',
      bio: 'Specializes in astrobiology and the search for extraterrestrial life.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">WHO WE ARE</h1>
            <p className="text-xl mb-8">
              A team of scientists, engineers, and visionaries dedicated to advancing humanit&rsquo; presence in space.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <p className="text-lg mb-6">
              Space Explorer was founded in 2020 by a group of former space agency scientists and private sector innovators who shared a vision: to accelerate humanit&rsquo; journey to becoming a multi-planetary species.
            </p>
            <p className="text-lg mb-6">
              What began as a small research initiative has grown into a global organization with partnerships across government agencies, academic institutions, and private industry. Our team now includes experts from diverse fields including astrophysics, engineering, biology, and computer science.
            </p>
            <p className="text-lg mb-12">
              We believe that space exploration is not just about scientific discovery, but about ensuring the long-term survival and prosperity of our species. By developing sustainable technologies for living and working beyond Earth, we are creating a future where humanity can thrive among the stars.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          
          <Grid cols={4} gap="lg">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </Grid>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <FontAwesomeIcon icon={faRocket} className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
                  <p className="text-lg">
                    We approach every challenge with fresh thinking and a willingness to reimagine wha&rsquo; possible. Our research labs are incubators for breakthrough technologies that will enable sustainable space exploration.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center md:order-last">
                  <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <FontAwesomeIcon icon={faUserAstronaut} className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Human-Centered</h3>
                  <p className="text-lg">
                    While technology drives our capabilities, humans remain at the center of our mission. We design systems and habitats that enhance human performance and wellbeing in the challenging environment of space.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <FontAwesomeIcon icon={faSatellite} className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Sustainable Exploration</h3>
                  <p className="text-lg">
                    We believe that long-term space presence requires sustainable practices. Our research focuses on closed-loop life support systems, in-situ resource utilization, and minimizing the environmental impact of our activities.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center md:order-last">
                  <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <FontAwesomeIcon icon={faGlobe} className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Global Collaboration</h3>
                  <p className="text-lg">
                    Space exploration is a global endeavor that transcends national boundaries. We actively foster international partnerships and open science initiatives to accelerate progress for all of humanity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}