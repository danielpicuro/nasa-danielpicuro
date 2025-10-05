import { SearchBar } from '@/components/overview/search-bar';
import { NewProjectCard } from '@/components/overview/new-project-card';
import { ProjectCard } from '@/components/overview/project-card';

export default function ProjectsPage() {
  return (
    <div className="!min-h-screen !bg-gradient-to-br !from-teal-900 !via-slate-900 !to-purple-900 p-8">
      <div className="!mx-auto !max-w-7xl">
        {/* Header */}
        <div className="!mb-8">
          <h1 className="!text-5xl !font-bold !text-white !mb-2">SELECT PROJECT</h1>
          <p className="!text-gray-300 !text-lg">Choose a city and project to begin</p>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* New Project Card */}
        <NewProjectCard />

        {/* Projects Grid */}
        <div className="!grid !grid-cols-1 !lg:grid-cols-2 !gap-6 !mt-8">
          <ProjectCard
            title="COASTAL RESILIENCE"
            location="Lima, Peru"
            population="9.7M"
            type="Climate Adaptation"
            status="Digital twin ready"
            image1="/images/plants.jpg"
            image2="/images/street-up.jpg"
          />

          {/* Placeholder for more projects */}
          <div className="!bg-slate-800/30 !rounded-lg !border !border-cyan-500/30 !min-h-[400px] !flex !items-center !justify-center">
            <p className="!text-gray-500">More projects coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
