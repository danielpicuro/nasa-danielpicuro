'use client';

import { CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export function ConstructionStatusCard() {
  // Simulated data - replace with real data later
  const phases = [
    { name: 'Design', progress: 100, color: 'cyan' },
    { name: 'Construction', progress: 34, color: 'cyan' },
    { name: 'Supervision', progress: 45, color: 'cyan' },
  ];

  const milestones = {
    completed: 3,
    inProgress: 2,
    alerts: 1,
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-cyan-400">Construction Status</h3>
        <p className="text-sm text-muted-foreground">Project timeline</p>
      </div>

      {/* Progress Bars */}
      <div className="mb-6 space-y-4">
        {phases.map(phase => (
          <div key={phase.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">{phase.name}</span>
              <span
                className={`text-sm font-bold ${
                  phase.progress === 100
                    ? 'text-green-400'
                    : phase.progress >= 40
                      ? 'text-orange-400'
                      : 'text-cyan-400'
                }`}
              >
                {phase.progress}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full ${
                  phase.progress === 100
                    ? 'bg-green-400'
                    : phase.progress >= 40
                      ? 'bg-orange-400'
                      : 'bg-cyan-400'
                }`}
                style={{ width: `${phase.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Status Indicators */}
      <div className="space-y-3 border-t border-border pt-4">
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span className="text-muted-foreground">{milestones.completed} milestones completed</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-cyan-500" />
          <span className="text-muted-foreground">{milestones.inProgress} works in progress</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <AlertTriangle className="h-4 w-4 text-orange-500" />
          <span className="text-muted-foreground">{milestones.alerts} budget alert</span>
        </div>
      </div>
    </div>
  );
}
