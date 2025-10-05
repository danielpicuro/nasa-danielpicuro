import { ExposedPopulationCard } from '@/components/overview/exposed-population-card';
import { FloodRiskCard } from '@/components/overview/flood-risk-card';
import { CapexCard } from '@/components/overview/capex-card';
import { ProjectProgressCard } from '@/components/overview/project-progress-card';
import { RiskChart } from '@/components/overview/risk-chart';
import { ConstructionStatusCard } from '@/components/overview/construction-status-card';
import { Sparkles, TrendingUp, Shuffle, Map, Droplets, Calculator, Bot } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Overview',
};

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-cyan-400">Overview Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Master Drainage Plan - Buenos Aires
            </p>
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

        {/* IA Urban Lab Section */}
        <div className="rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-950/40 to-purple-900/20 p-6">
          <div className="mb-6 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-purple-500/20 p-2">
                <Sparkles className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-purple-300">IA Urban Lab</h2>
                <p className="text-sm text-muted-foreground">
                  AI-powered predictive analysis and smart recommendations
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-purple-600/30 px-4 py-2 text-sm font-medium text-purple-300 transition-colors hover:bg-purple-600/40">
              <Sparkles className="h-4 w-4" />
              New
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* 10-Year Forecast */}
            <div className="rounded-lg border border-cyan-500/20 bg-slate-900/50 p-4">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-cyan-500/20 p-2">
                  <TrendingUp className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-400">10-Year Forecast</h3>
                  <p className="text-xs text-muted-foreground">
                    Predict street and drainage capacity
                  </p>
                </div>
              </div>
              <button className="w-full rounded-lg bg-cyan-600/30 py-2.5 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-600/40">
                Open in Map
              </button>
            </div>

            {/* Before / After */}
            <div className="rounded-lg border border-green-500/20 bg-slate-900/50 p-4">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-green-500/20 p-2">
                  <Shuffle className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-400">Before / After</h3>
                  <p className="text-xs text-muted-foreground">Visual impact comparison of works</p>
                </div>
              </div>
              <button className="w-full rounded-lg bg-green-600/30 py-2.5 text-sm font-medium text-green-300 transition-colors hover:bg-green-600/40">
                View in 3D Twin
              </button>
            </div>

            {/* Optimal Site (MCDA) */}
            <div className="rounded-lg border border-orange-500/20 bg-slate-900/50 p-4">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-orange-500/20 p-2">
                  <Map className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-orange-400">Optimal Site (MCDA)</h3>
                  <p className="text-xs text-muted-foreground">Ideal location for new parks</p>
                </div>
              </div>
              <button className="w-full rounded-lg bg-orange-600/30 py-2.5 text-sm font-medium text-orange-300 transition-colors hover:bg-orange-600/40">
                Analyze Location
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-cyan-400">Quick Actions</h2>
            <p className="text-sm text-muted-foreground">Access main functionalities</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* 3D Map */}
            <div className="group cursor-pointer rounded-lg border border-slate-700/50 bg-slate-900/50 p-6 transition-all hover:border-cyan-500/50 hover:bg-slate-800/50">
              <div className="mb-4 flex justify-center">
                <div className="rounded-lg bg-cyan-500/20 p-3">
                  <Map className="h-6 w-6 text-cyan-400" />
                </div>
              </div>
              <p className="text-center text-sm font-medium text-slate-300">3D Map</p>
            </div>

            {/* Scenarios */}
            <div className="group cursor-pointer rounded-lg border border-slate-700/50 bg-slate-900/50 p-6 transition-all hover:border-cyan-500/50 hover:bg-slate-800/50">
              <div className="mb-4 flex justify-center">
                <div className="rounded-lg bg-cyan-500/20 p-3">
                  <Droplets className="h-6 w-6 text-cyan-400" />
                </div>
              </div>
              <p className="text-center text-sm font-medium text-slate-300">Scenarios</p>
            </div>

            {/* 5D Costs */}
            <div className="group cursor-pointer rounded-lg border border-slate-700/50 bg-slate-900/50 p-6 transition-all hover:border-green-500/50 hover:bg-slate-800/50">
              <div className="mb-4 flex justify-center">
                <div className="rounded-lg bg-green-500/20 p-3">
                  <Calculator className="h-6 w-6 text-green-400" />
                </div>
              </div>
              <p className="text-center text-sm font-medium text-slate-300">5D Costs</p>
            </div>

            {/* AI Assistant */}
            <div className="group cursor-pointer rounded-lg border border-slate-700/50 bg-slate-900/50 p-6 transition-all hover:border-purple-500/50 hover:bg-slate-800/50">
              <div className="mb-4 flex justify-center">
                <div className="rounded-lg bg-purple-500/20 p-3">
                  <Bot className="h-6 w-6 text-purple-400" />
                </div>
              </div>
              <p className="text-center text-sm font-medium text-slate-300">AI Assistant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
