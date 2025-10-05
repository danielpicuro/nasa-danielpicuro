'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  location: string;
  population: string;
  type: string;
  status: string;
  image1: string;
  image2: string;
}

export function ProjectCard({
  title,
  location,
  population,
  type,
  status,
  image1,
  image2,
}: ProjectCardProps) {
  const router = useRouter();

  const handleOpen = () => {
    router.push(`/ai-lab`);
  };

  return (
    <div className="!bg-slate-900/50 !border !border-cyan-500/30 !rounded-lg !overflow-hidden !hover:border-cyan-500/60 !transition-all">
      <div className="!p-6">
        {/* Project Header */}
        <div className="!mb-6">
          <h3 className="!text-2xl !font-bold !text-white !mb-1">{title}</h3>
          <p className="!text-gray-400">{location}</p>
        </div>

        {/* Project Details */}
        <div className="!space-y-3 !mb-6 !border-t !border-b !border-gray-700 !py-4">
          <div>
            <p className="!text-gray-500 !text-sm">Population</p>
            <p className="!text-white !text-xl !font-bold">{population}</p>
          </div>
          <div>
            <p className="!text-gray-500 !text-sm">Type</p>
            <p className="!text-white">{type}</p>
          </div>
          <div className="!flex !items-center !gap-2">
            <div className="!w-2 !h-2 !bg-green-500 !rounded-full"></div>
            <p className="!text-green-400 !text-sm">{status}</p>
          </div>
        </div>

        {/* Open Button */}
        <button
          onClick={handleOpen}
          className="!w-full !bg-blue-600 !hover:bg-blue-700 !text-white !font-semibold !py-3 !rounded-lg !transition-all !mb-6"
        >
          Open
        </button>

        {/* Project Images */}
        <div className="!grid !grid-cols-2 !gap-4">
          <div className="!relative !h-48 !rounded-lg !overflow-hidden">
            <Image
              src={image1 || '/images/bolivie.jpg'}
              alt={`${title} - City View`}
              fill
              className="!object-cover"
            />
          </div>
          <div className="!relative h-48 rounded-lg overflow-hidden">
            <Image
              src={image2 || '/images/bolivie.jpg'}
              alt={`${title} - 3D Model`}
              fill
              className="!object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
