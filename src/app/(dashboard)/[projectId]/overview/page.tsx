import { ExposedPopulationCard } from "@/components/dashboard/exposed-population-card"
import { FloodRiskCard } from "@/components/dashboard/flood-risk-card"
import { CapexCard } from "@/components/dashboard/capex-card"
import { ProjectProgressCard } from "@/components/dashboard/project-progress-card"
import { RiskChart } from "@/components/dashboard/risk-chart"
import { ConstructionStatusCard } from "@/components/dashboard/construction-status-card"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Overview',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-cyan-400">Overview Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">Master Drainage Plan - Buenos Aires</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-950/20 px-4 py-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <span className="text-sm font-medium text-green-400">System Active</span>
          </div>
        </div>

        {/* Top 4 Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ExposedPopulationCard />
          <FloodRiskCard />
          <CapexCard />
          <ProjectProgressCard />
        </div>

        {/* Middle Section: Chart + Construction Status */}
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RiskChart />
          </div>
          <div className="lg:col-span-1">
            <ConstructionStatusCard />
          </div>
        </div>
      </div>
    </div>
  )
}
