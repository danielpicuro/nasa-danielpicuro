import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';

export function DashboardNav() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      <div className="p-4">
        <Logo />
      </div>
      
      <nav className="flex-1 px-2 py-4 space-y-1">
        <Link href="/projects" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
          Proyectos
        </Link>
        <Link href="/profile" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
          Perfil
        </Link>
        <Link href="/settings" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
          Configuración
        </Link>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
          <div className="ml-3">
            <p className="text-sm font-medium">Usuario</p>
            <p className="text-xs text-gray-400">usuario@ejemplo.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}