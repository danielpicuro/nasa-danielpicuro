'use client';

import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

interface MapLayersProps {
  selectedLayers: string[];
  onLayersChange: (layers: string[]) => void;
}

export function MapLayers({ selectedLayers, onLayersChange }: MapLayersProps) {
  const { language } = useAiCompanion();
  const t = translations[language].data.mapLayers;

  const toggleLayer = (layerId: string) => {
    onLayersChange(
      selectedLayers.includes(layerId)
        ? selectedLayers.filter(id => id !== layerId)
        : [...selectedLayers, layerId]
    );
  };

  const layers = [
    { id: 'relieve', label: t.relief, icon: '🏔️' },
    { id: 'uso-suelo', label: t.landUse, icon: '🗺️' },
    { id: 'redes', label: t.networks, icon: '⚡' },
    { id: 'edificios', label: t.buildings, icon: '🏢' },
    { id: 'subsuelo', label: t.underground, icon: '⚙️' },
    { id: 'nubes', label: t.pointClouds, icon: '📍' },
    { id: 'sensores', label: t.mobileSensors, icon: '📡' },
  ];

  return (
    <div className="!border-t !border-slate-800 !pt-4">
      <h3 className="!text-white !text-sm !font-semibold !mb-3">{t.title}</h3>

      <div className="!space-y-3">
        {layers.map(layer => (
          <div key={layer.id} className="!flex !items-center !justify-between">
            <div className="!flex !items-center !gap-2">
              <span className="!text-lg">{layer.icon}</span>
              <span className="!text-gray-300 !text-sm">{layer.label}</span>
            </div>

            <button
              onClick={() => toggleLayer(layer.id)}
              className={`!relative !inline-flex !h-6 !w-11 !items-center !rounded-full !transition-colors ${
                selectedLayers.includes(layer.id) ? '!bg-cyan-500' : '!bg-slate-700'
              }`}
            >
              <span
                className={`!inline-block !h-4 !w-4 !transform !rounded-full !bg-white !transition-transform ${
                  selectedLayers.includes(layer.id) ? '!translate-x-6' : '!translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
