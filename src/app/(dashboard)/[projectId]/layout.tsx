import React from 'react';
import Link from 'next/link';

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ projectId: string }>;
}) {
  const projectId = (await params).projectId;

  const navItems = [
    { href: `/${projectId}/overview`, label: 'Visión General' },
    { href: `/${projectId}/planning`, label: 'Planificación' },
    { href: `/${projectId}/ai-lab`, label: 'Laboratorio IA' },
    { href: `/${projectId}/resources`, label: 'Recursos' },
    { href: `/${projectId}/analysis`, label: 'Análisis' },
    { href: `/${projectId}/3d-twin`, label: 'Gemelo 3D' },
    { href: `/${projectId}/data`, label: 'Datos' },
    { href: `/${projectId}/reports`, label: 'Informes' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-4 py-4 overflow-x-auto">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
