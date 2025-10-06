'use client';

import { useState } from 'react';
import { CarouselProjectCard } from './carousel-project-card';
import { CarouselNewProjectCard } from './carousel-new-project-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 'planning',
    title: 'URBAN PLANNING',
    location: 'Lima, Peru',
    population: '10.5M',
    image: '/images/map.jpg',
  },
  {
    id: 'coastal',
    title: 'COASTAL RESILIENCE',
    location: 'Lima, Peru',
    population: '9.7M',
    image: '/images/map.jpg',
  },
  {
    id: 'center',
    title: 'LIMA CITY',
    location: 'Lima, Peru',
    population: '9.7M',
    image: '/images/map.jpg',
    isCenter: true,
  },
  {
    id: 'new',
    isNewProject: true,
  },
  {
    id: 'hospital',
    title: 'HOSPITAL VITARTE',
    location: 'Lima, Peru',
    population: '2M',
    image: '/images/map.jpg',
  },
  {
    id: 'infrastructure',
    title: 'INFRASTRUCTURE',
    location: 'Lima, Peru',
    population: '8.2M',
    image: '/images/map.jpg',
  },
];

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="!relative !w-full !max-w-[1400px] !px-4">
      {/* Carousel Container */}
      <div className="!relative !flex !items-center !justify-center !gap-4 !h-[600px]">
        {projects.map((project, index) => {
          const offset = index - currentIndex;
          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          return (
            <div
              key={project.id}
              className="!absolute !transition-all !duration-500 !ease-out"
              style={{
                transform: `translateX(${offset * 320}px) scale(${
                  isCenter ? 1.2 : 0.85
                }) translateZ(${isCenter ? 0 : -100}px)`,
                zIndex: isCenter ? 30 : 20 - Math.abs(offset),
                opacity: Math.abs(offset) > 1 ? 0.4 : 1,
              }}
            >
              {project.isNewProject ? (
                <CarouselNewProjectCard />
              ) : (
                <CarouselProjectCard
                  title={project.title!}
                  location={project.location!}
                  population={project.population!}
                  image={project.image!}
                  isCenter={isCenter}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="!absolute !left-4 !top-1/2 !-translate-y-1/2 !z-40 !bg-slate-800/50 hover:!bg-slate-700/50 !text-white !p-3 !rounded-full !backdrop-blur-sm !border !border-cyan-500/30 !transition-all"
        aria-label="Previous project"
      >
        <ChevronLeft className="!w-6 !h-6" />
      </button>

      <button
        onClick={handleNext}
        className="!absolute !right-4 !top-1/2 !-translate-y-1/2 !z-40 !bg-slate-800/50 hover:!bg-slate-700/50 !text-white !p-3 !rounded-full !backdrop-blur-sm !border !border-cyan-500/30 !transition-all"
        aria-label="Next project"
      >
        <ChevronRight className="!w-6 !h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="!flex !justify-center !gap-2 !mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`!w-2 !h-2 !rounded-full !transition-all ${
              index === currentIndex ? '!bg-cyan-400 !w-8' : '!bg-slate-600 hover:!bg-slate-500'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
