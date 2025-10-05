"use client"

import { BarChart3 } from "lucide-react"

export function ProjectProgressCard() {
  // Simulated data - replace with real data later
  const percentage = 34
  const completed = 8
  const total = 23

  return (
    <div className="relative overflow-hidden rounded-xl border border-purple-900/30 bg-gradient-to-br from-purple-950/50 to-purple-900/30 p-6 backdrop-blur-sm">
      {/* Icon */}
      <div className="absolute right-4 top-4">
        <div className="rounded-lg bg-purple-800/50 p-2">
          <BarChart3 className="h-5 w-5 text-purple-400" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-purple-300/80">Project Progress</h3>
        <p className="text-3xl font-bold text-purple-400">{percentage}%</p>
        <p className="text-xs text-purple-300/60">
          {completed} of {total} works completed
        </p>

        {/* Progress Bar */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-purple-950/50">
          <div className="h-full bg-purple-400" style={{ width: `${percentage}%` }} />
        </div>
      </div>
    </div>
  )
}
