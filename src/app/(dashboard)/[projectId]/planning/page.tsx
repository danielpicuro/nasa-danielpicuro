import { DirectoryPanel } from '@/components/planning/directory-panel';
import { MapVisualizer } from '@/components/planning/map-visualizer';
import { HeaderControls } from '@/components/planning/header-controls';
import { AIChat } from '@/components/ai-chat';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Planning',
};

// Server Component - fetches initial data and renders layout
export default async function PlanningPage() {
  // Simulate fetching initial data (this would come from a database/API)
  const directoryData = {
    gis: [
      { id: 'bld-img', name: 'Bld Img Image', type: 'image', checked: true },
      { id: 'bld-buildings', name: 'Bld Buildings', type: 'building', checked: true },
      { id: 'land-use', name: 'Land Use in Bld Img', type: 'area', checked: false },
      { id: 'green-areas', name: 'Green Areas in Bld Img', type: 'area', checked: false },
    ],
    gcip: [
      { id: 'bld-img-gcip', name: 'Bld Img Image', type: 'image', checked: false },
      { id: 'networks', name: 'Networks', type: 'network', checked: true },
    ],
    assets: [
      {
        id: 'collector-a12',
        name: 'Colector Principal A-12',
        category: 'Pipeline',
        status: 'active',
      },
      {
        id: 'estacion-eb03',
        name: 'Estación de Bombeo EB-03',
        category: 'Facility',
        status: 'construction',
      },
      {
        id: 'cuenca-norte',
        name: 'Cuenca de Retención Norte',
        category: 'Storage',
        status: 'planned',
      },
    ],
  };

  const weatherData = {
    currentTime: '18:19',
    isRealTime: true,
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {/* Header Controls */}
      <HeaderControls initialTime={weatherData.currentTime} isRealTime={weatherData.isRealTime} />

      {/* Main Content Area */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Left Sidebar - Directory Panel */}
        <DirectoryPanel data={directoryData} />

        {/* Main Map Visualizer */}
        <MapVisualizer />
      </div>

      {/* AI Chat Component */}
      <AIChat />
    </div>
  );
}
