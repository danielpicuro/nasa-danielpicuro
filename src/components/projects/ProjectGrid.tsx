import React from 'react';
import { ProjectCard } from './ProjectCard';

interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  image: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          description={project.description}
          progress={project.progress}
          image={project.image}
        />
      ))}
    </div>
  );
}