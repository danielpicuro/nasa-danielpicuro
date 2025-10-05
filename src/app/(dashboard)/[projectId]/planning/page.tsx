import { Metadata } from 'next';
// Este es un Server Component 
import { GoogleGenAI } from "@google/genai";

export const metadata: Metadata = {
  title: 'Planning',
};

export default async function PlanningPage({ params }: { params: { projectId: string } }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Planificación Urbana</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-4">Herramientas de Planificación</h2>
        <p className="text-gray-600">
          Utiliza nuestras herramientas avanzadas de planificación urbana potenciadas por IA para optimizar el desarrollo de tu ciudad.
        </p>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-md">
            <h3 className="font-medium">Simulación de Tráfico</h3>
            <p className="text-sm text-gray-500">Analiza y optimiza los flujos de tráfico en tu ciudad</p>
          </div>
          
          <div className="border p-4 rounded-md">
            <h3 className="font-medium">Planificación de Zonas Verdes</h3>
            <p className="text-sm text-gray-500">Maximiza el impacto ambiental positivo</p>
          </div>
          
          <div className="border p-4 rounded-md">
            <h3 className="font-medium">Gestión de Recursos Hídricos</h3>
            <p className="text-sm text-gray-500">Optimiza el uso del agua en entornos urbanos</p>
          </div>
          
          <div className="border p-4 rounded-md">
            <h3 className="font-medium">Desarrollo Sostenible</h3>
            <p className="text-sm text-gray-500">Planifica el crecimiento urbano sostenible</p>
          </div>
        </div>
      </div>
    </div>
  );
}