'use client';

interface MapLayersProps {
  selectedLayers: string[];
  onLayersChange: (layers: string[]) => void;
}

export function MapLayers({ selectedLayers, onLayersChange }: MapLayersProps) {
  const toggleLayer = (layerId: string) => {
    onLayersChange(
      selectedLayers.includes(layerId)
        ? selectedLayers.filter(id => id !== layerId)
        : [...selectedLayers, layerId]
    );
  };

  const layers = [
    { id: 'relieve', label: 'Relieve (DEM/DTM)', icon: '🏔️' },
    { id: 'uso-suelo', label: 'Uso de suelo', icon: '🗺️' },
    { id: 'redes', label: 'Redes (agua/energía)', icon: '⚡' },
    { id: 'edificios', label: 'Edificios', icon: '🏢' },
    { id: 'subsuelo', label: 'Subsuelo', icon: '⚙️' },
    { id: 'nubes', label: 'Nubes de puntos', icon: '📍' },
    { id: 'sensores', label: 'Sensores móviles', icon: '📡' },
  ];

  return (
    <div className="!border-t !border-slate-800 !pt-4">
      <h3 className="!text-white !text-sm !font-semibold !mb-3">Capas del mapa</h3>

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
