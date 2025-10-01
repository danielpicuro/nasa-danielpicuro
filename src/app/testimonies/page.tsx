import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

/**
 * Página de Testimonios: Muestra testimonios de usuarios en un carrusel
 * Incluye animaciones suaves y diseño atractivo
 */
export default function Testimonies() {
  const testimonials = [
    {
      name: 'Dr. Emily Chen',
      role: 'Astrophysicist, MIT',
      image: '/images/testimonial-1.jpg',
      quote: 'The data collected through Space Explore&rsquo; satellite network has revolutionized our understanding of exoplanetary atmospheres. Their commitment to open science has accelerated research across the field.',
      stars: 5
    },
    {
      name: 'Commander James Wilson',
      role: 'Former Astronaut',
      image: '/images/testimonial-2.jpg',
      quote: 'Having spent over 200 days in space, I can attest to the quality and innovation of Space Explore&rsquo; life support systems. The&rsquo;e setting new standards for human spaceflight safety.',
      stars: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Space Tourism Participant',
      image: '/images/testimonial-3.jpg',
      quote: 'My suborbital flight with Space Explorer was the experience of a lifetime. The training was thorough, the staff professional, and the view of Earth from space was absolutely transformative.',
      stars: 4
    },
    {
      name: 'Dr. Hiroshi Tanaka',
      role: 'Robotics Engineer',
      image: '/images/testimonial-4.jpg',
      quote: 'W&rsquo;e integrated Space Explore&rsquo; autonomous navigation systems into our lunar rovers with exceptional results. Their technology has significantly extended our exploration capabilities.',
      stars: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Science Educator',
      image: '/images/testimonial-5.jpg',
      quote: 'The educational resources provided by Space Explorer have transformed how I teach astronomy. My students are more engaged and inspired about space science than ever before.',
      stars: 5
    },
    {
      name: 'Alex Mercer',
      role: 'Satellite Communications Specialist',
      image: '/images/testimonial-6.jpg',
      quote: 'The reliability and bandwidth of Space Explore&rsquo; communication network is unmatched in the industry. Our remote operations depend on their infrastructure daily.',
      stars: 4
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">TESTIMONIALS</h1>
            <p className="text-xl mb-8">
              Hear from scientists, astronauts, and space enthusiasts who have experienced our technology and missions.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gray-300"></div>
                </div>
                
                <div className="text-center mb-4">
                  <div className="flex justify-center mb-2">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="h-5 w-5 text-yellow-500" />
                    ))}
                    {[...Array(5 - testimonial.stars)].map((_, i) => (
                      <FontAwesomeIcon key={i + testimonial.stars} icon={faStar} className="h-5 w-5 text-gray-300" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-blue-600">{testimonial.role}</p>
                </div>
                
                <div className="relative">
                  <FontAwesomeIcon icon={faQuoteLeft} className="absolute -top-2 -left-2 h-8 w-8 text-gray-200" />
                  <p className="text-gray-600 italic pl-6">
                    `{testimonial.quote}`
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of our growing network of space enthusiasts, scientists, and explorers.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-md flex-grow text-gray-900"
              />
              <button 
                type="submit" 
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}