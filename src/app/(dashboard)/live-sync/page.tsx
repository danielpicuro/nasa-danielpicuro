import { Box, RefreshCw, Triangle } from 'lucide-react';
import { BimCard } from '@/components/live-sync/bim-card';
import { FeatureCard } from '@/components/live-sync/feature-card';
import { FileUpload } from '@/components/live-sync/file-upload';
import { ConnectionStatus } from '@/components/live-sync/connection-status';

export default function LiveSyncPage() {
  const bimSoftware = ['Autodesk Revit', 'ArchiCAD', 'Tekla Structures', 'Civil 3D', 'BlenderBIM'];

  return (
    <div className="!min-h-screen !bg-gradient-to-br !from-cyan-500 !via-purple-600 !to-gray-800">
      {/* Header */}
      <div className="!border-b !border-white/10 !bg-black/20 !backdrop-blur-sm">
        <div className="!mx-auto !max-w-7xl !px-6 !py-4">
          <div className="!flex !items-center !justify-between">
            <div className="!flex !items-center !gap-4">
              <div className="!h-16 !w-16 !rounded-lg !bg-cyan-500" />
              <div>
                <h1 className="!text-3xl !font-bold !text-white">Intake at GIM</h1>
                <p className="!text-gray-300">
                  Live BIM/GIS synchronization or lightweight web editing
                </p>
              </div>
            </div>
            <div className="!flex !items-center !gap-3">
              <button className="!rounded-lg !bg-gray-700 !px-6 !py-3 !font-medium !text-white !transition-colors hover:!bg-gray-600">
                Black
              </button>
              <button className="!rounded-lg !bg-cyan-500 !px-6 !py-3 !font-medium !text-white !transition-colors hover:!bg-cyan-600">
                Next: Geolocation & Preparation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Select files indicator */}
      <div className="!bg-cyan-500 !py-2 !text-center">
        <span className="!font-medium !text-white">Select files</span>
      </div>

      {/* Main Content */}
      <div className="!mx-auto !max-w-7xl !px-6 !py-8">
        {/* Tabs */}
        <div className="!mb-8 !flex !gap-2 !rounded-full !bg-black/40 !p-2 !backdrop-blur-sm">
          <button className="!flex-1 !rounded-full !bg-cyan-500 !px-6 !py-3 !font-medium !text-white !transition-colors">
            A) Live Sync
          </button>
          <button className="!flex-1 !rounded-full !px-6 !py-3 !font-medium !text-white !transition-colors hover:!bg-white/10">
            B) Lightweight Web Editor
          </button>
          <button className="!flex-1 !rounded-full !px-6 !py-3 !font-medium !text-white !transition-colors hover:!bg-white/10">
            Indexed Catalog
          </button>
        </div>

        {/* Live Sync Section */}
        <div className="!space-y-6 !rounded-xl !border !border-white/10 !bg-gray-900/40 !p-8 !backdrop-blur-sm">
          <div>
            <div className="!mb-2 !flex !items-center !gap-3">
              <span className="!rounded-full !bg-green-500 !px-3 !py-1 !text-xs !font-semibold !text-white">
                Recommended
              </span>
              <h2 className="!text-2xl !font-bold !text-cyan-400">Live Sync</h2>
            </div>
            <p className="!text-gray-300">
              Connect your favorite BIM tool with a native add-in. Each save triggers QTO/BOQ (5D),
              4D, 6D, and 7D views and refreshes the viewer.
            </p>
          </div>

          {/* Edit in BIM */}
          <div>
            <h3 className="!mb-4 !text-xl !font-semibold !text-cyan-400">Edit in BIM</h3>
            <div className="!grid !grid-cols-5 !gap-4">
              {bimSoftware.map(software => (
                <BimCard key={software} name={software} icon={Box} />
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="!grid !grid-cols-3 !gap-4">
            <FeatureCard
              title="Push/Pull IFC 4.x"
              description="Edit in your preferred software with connector installed"
              icon={RefreshCw}
              variant="blue"
            />
            <FeatureCard
              title="Deltas + BCF"
              description="Only incremental changes are synchronized"
              icon={Triangle}
              variant="purple"
            />
            <FeatureCard
              title="Auto-refresh"
              description="QTO, 4D, 5D, 6D, 7D update live"
              icon={RefreshCw}
              variant="green"
            />
          </div>

          {/* Connection Status */}
          <ConnectionStatus connectedTo="Autodesk Revit" />
        </div>

        {/* File Upload */}
        <div className="!mt-8">
          <FileUpload />
        </div>
      </div>
    </div>
  );
}
