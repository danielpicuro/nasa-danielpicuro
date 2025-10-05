'use client';

import { useState } from 'react';
import {
  Search,
  ChevronDown,
  ChevronRight,
  ImageIcon,
  Building2,
  Network,
  Flame,
} from 'lucide-react';

interface DirectoryData {
  gis: Array<{ id: string; name: string; type: string; checked: boolean }>;
  gcip: Array<{ id: string; name: string; type: string; checked: boolean }>;
  assets: Array<{ id: string; name: string; category: string; status: string }>;
}

export function DirectoryPanel({ data }: { data: DirectoryData }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    gis: true,
    gcip: true,
    wms: false,
    assets: true,
  });
  const [checkedLayers, setCheckedLayers] = useState<Record<string, boolean>>(
    Object.fromEntries([...data.gis, ...data.gcip].map(item => [item.id, item.checked]))
  );

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleLayer = (id: string) => {
    setCheckedLayers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <ImageIcon className="h-4 w-4" />;
      case 'building':
        return <Building2 className="h-4 w-4" />;
      case 'network':
        return <Network className="h-4 w-4" />;
      default:
        return <Flame className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-cyan-500';
      case 'construction':
        return 'bg-orange-500';
      case 'planned':
        return 'bg-muted';
      default:
        return 'bg-muted';
    }
  };

  return (
    <div className="w-80 border-r border-border bg-card/50 backdrop-blur-sm flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold text-cyan-400 flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          Directory
        </h2>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search layers..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-background/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          />
        </div>
      </div>

      {/* Layers */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-2">
        {/* GIS Section */}
        <div>
          <button
            onClick={() => toggleSection('gis')}
            className="flex items-center gap-2 w-full py-2 text-sm font-medium text-foreground hover:text-cyan-400 transition-colors"
          >
            {expandedSections.gis ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
            GIS
          </button>
          {expandedSections.gis && (
            <div className="ml-6 space-y-1">
              {data.gis.map(layer => (
                <label
                  key={layer.id}
                  className="flex items-center gap-2 py-1.5 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={checkedLayers[layer.id]}
                    onChange={() => toggleLayer(layer.id)}
                    className="w-4 h-4 rounded border-border bg-background checked:bg-cyan-500 checked:border-cyan-500"
                  />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {getIcon(layer.type)}
                  </span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {layer.name}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* GCIP Section */}
        <div>
          <button
            onClick={() => toggleSection('gcip')}
            className="flex items-center gap-2 w-full py-2 text-sm font-medium text-foreground hover:text-cyan-400 transition-colors"
          >
            {expandedSections.gcip ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
            GCIP
          </button>
          {expandedSections.gcip && (
            <div className="ml-6 space-y-1">
              {data.gcip.map(layer => (
                <label
                  key={layer.id}
                  className="flex items-center gap-2 py-1.5 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={checkedLayers[layer.id]}
                    onChange={() => toggleLayer(layer.id)}
                    className="w-4 h-4 rounded border-border bg-background checked:bg-cyan-500 checked:border-cyan-500"
                  />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {getIcon(layer.type)}
                  </span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {layer.name}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* WMS Section */}
        <div>
          <button
            onClick={() => toggleSection('wms')}
            className="flex items-center gap-2 w-full py-2 text-sm font-medium text-foreground hover:text-cyan-400 transition-colors"
          >
            {expandedSections.wms ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
            WMS
          </button>
        </div>

        {/* Assets Section */}
        <div className="pt-4 border-t border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Assets</h3>
          <div className="space-y-2">
            {data.assets.map(asset => (
              <div
                key={asset.id}
                className="p-3 bg-background/50 rounded-lg border border-border hover:border-cyan-500/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-2">
                  <div className={`w-2 h-2 rounded-full mt-1.5 ${getStatusColor(asset.status)}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{asset.name}</p>
                    <p className="text-xs text-muted-foreground">{asset.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coordinate System */}
        <div className="pt-4 border-t border-border">
          <h3 className="text-xs font-medium text-muted-foreground mb-1">Coordinate System</h3>
          <p className="text-xs text-muted-foreground">EPSG:5349 (GRS80)</p>
        </div>
      </div>
    </div>
  );
}
