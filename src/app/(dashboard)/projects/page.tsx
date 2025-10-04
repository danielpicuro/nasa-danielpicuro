import React from 'react';
import { ProjectGrid } from '@/components/projects/ProjectGrid';

export default function ProjectsPage() {
  // Datos de ejemplo para los proyectos
  const projects = [
    {
      id: '1',
      name: 'Ciudad Inteligente Madrid',
      description: 'Proyecto de transformación digital urbana en Madrid',
      progress: 65,
      image: '/images/world.jpg'
    },
    {
      id: '2',
      name: 'Movilidad Barcelona',
      description: 'Optimización de transporte público mediante gemelos digitales',
      progress: 42,
      image: '/images/world.jpg'
    },
    {
      id: '3',
      name: 'Valencia Sostenible',
      description: 'Planificación urbana sostenible con IA',
      progress: 28,
      image: '/images/world.jpg'
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Tus Proyectos</h1>
      <ProjectGrid projects={projects} />
    </div>
  );
}