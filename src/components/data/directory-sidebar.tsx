'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, Search } from 'lucide-react';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

interface DirectorySidebarProps {
  selectedLayers: string[];
  onLayersChange: (layers: string[]) => void;
}

export function DirectorySidebar({ selectedLayers, onLayersChange }: DirectorySidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['gis']);
  const [searchQuery, setSearchQuery] = useState('');
  const { language } = useAiCompanion();
  const t = translations[language].data.directorySidebar;

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    );
  };

  const toggleLayer = (layerId: string) => {
    onLayersChange(
      selectedLayers.includes(layerId)
        ? selectedLayers.filter(id => id !== layerId)
        : [...selectedLayers, layerId]
    );
  };

  return (
    <div className="!p-4">
      {/* Header */}
      <div className="!flex !items-center !gap-2 !mb-4">
        <div className="!text-cyan-400 !text-lg">📁</div>
        <h2 className="!text-white !font-semibold">{t.title}</h2>
      </div>

      {/* Search */}
      <div className="!relative !mb-4">
        <Search className="!absolute !left-3 !top-1/2 !-translate-y-1/2 !w-4 !h-4 !text-gray-500" />
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="!w-full !bg-slate-900 !text-white !text-sm !pl-10 !pr-3 !py-2 !rounded !border !border-slate-700 focus:!border-cyan-500 focus:!outline-none"
        />
      </div>

      {/* GIS Section */}
      <div className="!mb-2">
        <button
          onClick={() => toggleSection('gis')}
          className="!flex !items-center !gap-2 !text-white !text-sm !mb-2"
        >
          {expandedSections.includes('gis') ? (
            <ChevronDown className="!w-4 !h-4" />
          ) : (
            <ChevronRight className="!w-4 !h-4" />
          )}
          <span>{t.gis}</span>
        </button>

        {expandedSections.includes('gis') && (
          <div className="!ml-6 !space-y-2">
            <label className="!flex !items-center !gap-2 !text-sm !text-gray-300 !cursor-pointer">
              <input
                type="checkbox"
                checked={selectedLayers.includes('bld-img')}
                onChange={() => toggleLayer('bld-img')}
                className="!w-4 !h-4 !rounded !border-gray-600 !text-cyan-500 focus:!ring-cyan-500"
              />
              <span>{t.bldImgImage}</span>
            </label>

            <label className="!flex !items-center !gap-2 !text-sm !text-gray-300 !cursor-pointer">
              <input
                type="checkbox"
                checked={selectedLayers.includes('bld-buildings')}
                onChange={() => toggleLayer('bld-buildings')}
                className="!w-4 !h-4 !rounded !border-gray-600 !text-cyan-500 focus:!ring-cyan-500"
              />
              <span>{t.bldBuildings}</span>
            </label>

            <label className="!flex !items-center !gap-2 !text-sm !text-gray-300 !cursor-pointer">
              <input
                type="checkbox"
                checked={selectedLayers.includes('land-use')}
                onChange={() => toggleLayer('land-use')}
                className="!w-4 !h-4 !rounded !border-gray-600 !text-cyan-500 focus:!ring-cyan-500"
              />
              <span>{t.landUse}</span>
            </label>

            <label className="!flex !items-center !gap-2 !text-sm !text-gray-300 !cursor-pointer">
              <input
                type="checkbox"
                checked={selectedLayers.includes('green-areas')}
                onChange={() => toggleLayer('green-areas')}
                className="!w-4 !h-4 !rounded !border-gray-600 !text-cyan-500 focus:!ring-cyan-500"
              />
              <span>{t.greenAreas}</span>
            </label>
          </div>
        )}
      </div>

      {/* GCIP Section */}
      <div className="!mb-2">
        <button
          onClick={() => toggleSection('gcip')}
          className="!flex !items-center !gap-2 !text-white !text-sm !mb-2"
        >
          {expandedSections.includes('gcip') ? (
            <ChevronDown className="!w-4 !h-4" />
          ) : (
            <ChevronRight className="!w-4 !h-4" />
          )}
          <span>{t.gcip}</span>
        </button>

        {expandedSections.includes('gcip') && (
          <div className="!ml-6 !space-y-2">
            <label className="!flex !items-center !gap-2 !text-sm !text-gray-300 !cursor-pointer">
              <input
                type="checkbox"
                checked={selectedLayers.includes('gcip-img')}
                onChange={() => toggleLayer('gcip-img')}
                className="!w-4 !h-4 !rounded !border-gray-600 !text-cyan-500 focus:!ring-cyan-500"
              />
              <span>{t.bldImgImage}</span>
            </label>

            <label className="!flex !items-center !gap-2 !text-sm !text-gray-300 !cursor-pointer">
              <input
                type="checkbox"
                checked={selectedLayers.includes('networks')}
                onChange={() => toggleLayer('networks')}
                className="!w-4 !h-4 !rounded !border-gray-600 !text-cyan-500 focus:!ring-cyan-500"
              />
              <span>{t.networks}</span>
            </label>
          </div>
        )}
      </div>

      {/* VMG Section */}
      <div className="!mb-2">
        <button
          onClick={() => toggleSection('vmg')}
          className="!flex !items-center !gap-2 !text-white !text-sm"
        >
          {expandedSections.includes('vmg') ? (
            <ChevronDown className="!w-4 !h-4" />
          ) : (
            <ChevronRight className="!w-4 !h-4" />
          )}
          <span>{t.vmg}</span>
        </button>
      </div>

      {/* Assets Section */}
      <div className="!mt-6">
        <h3 className="!text-gray-400 !text-xs !uppercase !mb-2">{t.assets}</h3>
        <div className="!space-y-2">
          <div className="!text-sm !text-gray-300 !pl-2">{t.mainCollector}</div>
          <div className="!text-sm !text-gray-300 !pl-2">{t.pumpingStation}</div>
          <div className="!text-sm !text-gray-300 !pl-2">{t.northRetentionBasin}</div>
        </div>
      </div>

      {/* Coordinate System */}
      <div className="!mt-6 !p-3 !bg-slate-900 !rounded !text-xs">
        <div className="!text-gray-400">{t.coordinateSystem}</div>
        <div className="!text-white">{t.coordinateSystemValue}</div>
      </div>
    </div>
  );
}
