'use client';

import { Sparkles } from 'lucide-react';
import { StackItem } from '@/components/recommendation/stack-item';
import { TcoCard } from '@/components/recommendation/tco-card';
import { ProsCons } from '@/components/recommendation/pros-cons';
import { IntegrationBadges } from '@/components/recommendation/integration-badges';
import { RecommendationFooter } from '@/components/recommendation/recommendation-footer';

export default function RecommendationPage() {
  const stackItems = ['SuperMap iDesktop', 'Glodon (1 licencia)', 'PostgreSQL/PostGIS'];

  const advantages = ['Balance precio/funcionalidad', 'Soporte técnico incluido', 'CIM nativo'];

  const considerations = ['Curva aprendizaje media', 'Documentación en inglés limitada'];

  const integrations = ['IFC directo', 'OGC WMS/WFS', 'CSV/GeoJSON', 'REST API'];

  return (
    <div className="!relative !min-h-screen !overflow-hidden !bg-gradient-to-br !from-slate-900 !via-blue-950 !to-slate-900">
      {/* Background image */}
      <div
        className="!absolute !inset-0 !opacity-30"
        style={{
          backgroundImage: 'url(/placeholder.svg?height=1080&width=1920&query=aerial+city+view)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient overlays */}
      <div className="!absolute !left-1/4 !top-0 !h-96 !w-96 !rounded-full !bg-purple-600/20 !blur-3xl" />
      <div className="!absolute !bottom-0 !right-1/4 !h-96 !w-96 !rounded-full !bg-cyan-600/20 !blur-3xl" />

      {/* Content */}
      <div className="!relative !z-10 !mx-auto !max-w-5xl !px-6 !py-12">
        <div className="!rounded-2xl !border !border-purple-500/30 !bg-slate-900/60 !p-8 !backdrop-blur-xl">
          {/* Header */}
          <div className="!mb-8">
            <div className="!mb-2 !flex !items-center !gap-2">
              <Sparkles className="!h-6 !w-6 !text-purple-400" />
              <h1 className="!text-2xl !font-bold !text-purple-300">Recomendación IA</h1>
            </div>
            <p className="!text-gray-400">Stack tecnológico óptimo para sus necesidades</p>
          </div>

          {/* Stack Recomendado */}
          <div className="!mb-8">
            <h2 className="!mb-4 !text-xl !font-semibold !text-cyan-400">Stack Recomendado</h2>
            <div className="!space-y-3">
              {stackItems.map((item, index) => (
                <StackItem key={index} name={item} />
              ))}
            </div>
          </div>

          {/* TCO */}
          <div className="!mb-8">
            <h2 className="!mb-4 !text-xl !font-semibold !text-cyan-400">
              TCO - Costo Total 3 Años
            </h2>
            <TcoCard
              amount="$75,000 USD"
              description="Incluye licencias, soporte, capacitación y hosting"
            />
          </div>

          {/* Ventajas y Consideraciones */}
          <div className="!mb-8">
            <ProsCons advantages={advantages} considerations={considerations} />
          </div>

          {/* Conectores e Integraciones */}
          <div className="!mb-8">
            <h2 className="!mb-4 !text-xl !font-semibold !text-cyan-400">
              Conectores e Integraciones
            </h2>
            <IntegrationBadges integrations={integrations} />
          </div>

          {/* Footer */}
          <RecommendationFooter />
        </div>
      </div>
    </div>
  );
}
