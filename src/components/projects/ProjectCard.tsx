import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  progress: number;
  image: string;
}

export function ProjectCard({ id, name, description, progress, image }: ProjectCardProps) {
  return (
    <Link href={`/${id}/overview`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-40">
          <Image 
            src={image} 
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progreso</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}