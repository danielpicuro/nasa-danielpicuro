import { MapPin, Users, Droplet, TrendingUp, Search } from "lucide-react"

// Definimos los parámetros para resolver el error de tipos
export function generateStaticParams() {
  return [{ projectId: "default" }];
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Master Drainage Plan",
      location: "Buenos Aires, Argentina",
      status: "Active",
      population: "3.1M",
      type: "Water Infrastructure",
      digitalTwinReady: true,
    },
    {
      id: 2,
      title: "Urban Green Corridor",
      location: "Santiago, Chile",
      status: "Planning",
      population: "5.6M",
      type: "Public Spaces",
      digitalTwinReady: true,
    },
    {
      id: 3,
      title: "Integrated BRT System",
      location: "Bogotá, Colombia",
      status: "Active",
      population: "7.4M",
      type: "Transportation",
      digitalTwinReady: true,
    },
    {
      id: 4,
      title: "Coastal Resilience",
      location: "Lima, Peru",
      status: "Planning",
      population: "9.7M",
      type: "Climate Adaptation",
      digitalTwinReady: true,
    },
  ]

  return (
    <div className="min-h-screen bg-[oklch(0.12_0.01_250)] p-6 md:p-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-cyan-400">Select Project</h1>
          <p className="text-lg text-gray-400">Choose a city and project to begin</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search by city, project or country..."
            className="w-full rounded-lg border border-gray-700/50 bg-[oklch(0.15_0.01_250)] px-12 py-4 text-gray-300 placeholder-gray-500 outline-none transition-colors focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl border border-gray-800/50 bg-[oklch(0.14_0.01_250)] p-6 transition-all hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Header with Title and Status */}
              <div className="mb-4 flex items-start justify-between">
                <h2 className="text-2xl font-semibold text-cyan-400">{project.title}</h2>
                <span
                  className={`rounded-md px-3 py-1 text-xs font-medium ${
                    project.status === "Active"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-orange-500/20 text-orange-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Location */}
              <div className="mb-8 flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{project.location}</span>
              </div>

              {/* Divider */}
              <div className="mb-6 border-t border-gray-800/50" />

              {/* Stats Grid */}
              <div className="mb-6 grid grid-cols-2 gap-6">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-gray-500">
                    <Users className="h-4 w-4" />
                    <span className="text-xs">Population</span>
                  </div>
                  <p className="text-xl font-semibold text-white">{project.population}</p>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2 text-gray-500">
                    <Droplet className="h-4 w-4" />
                    <span className="text-xs">Type</span>
                  </div>
                  <p className="text-sm text-white">{project.type}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                  <span className="text-sm text-gray-400">Digital Twin Ready</span>
                </div>
                <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-medium text-white transition-all hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-cyan-500/30">
                  <TrendingUp className="h-4 w-4" />
                  Open
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
