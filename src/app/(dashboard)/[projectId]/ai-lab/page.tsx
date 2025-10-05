// Este es un Server Component
import { GoogleGenAI } from '@google/genai';

export default async function AILabPage({ params }: { params: { projectId: string } }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Laboratorio de IA</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-4">Asistente de Planificación Urbana</h2>

        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex flex-col space-y-4">
            <div className="bg-blue-100 p-3 rounded-lg self-start max-w-[80%]">
              <p className="text-sm">
                ¿Cómo puedo optimizar la distribución de zonas verdes en mi proyecto urbano?
              </p>
            </div>

            <div className="bg-white p-3 rounded-lg border self-end max-w-[80%]">
              <p className="text-sm">
                Para optimizar la distribución de zonas verdes, recomiendo: 1. Analizar los patrones
                de uso actuales 2. Identificar áreas con déficit de espacios verdes 3. Considerar la
                conectividad entre zonas verdes para crear corredores ecológicos 4. Integrar
                infraestructura verde en edificios existentes 5. Utilizar especies nativas para
                mejorar la biodiversidad
              </p>
            </div>
          </div>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Escribe tu pregunta..."
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
