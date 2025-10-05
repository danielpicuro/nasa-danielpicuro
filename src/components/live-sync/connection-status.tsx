// connection-status.tsx
import { Play } from 'lucide-react';

interface ConnectionStatusProps {
  connectedTo: string;
}

export function ConnectionStatus({ connectedTo }: ConnectionStatusProps) {
  return (
    <div className="!flex !items-center !justify-between !rounded-lg !border !border-blue-500/30 !bg-blue-950/20 !p-4">
      <div className="!flex !items-center !gap-3">
        <div className="!h-2 !w-2 !rounded-full !bg-blue-500 !shadow-lg !shadow-blue-500/50" />
        <span className="!text-white">Connected to {connectedTo}</span>
      </div>
      <button className="!flex !items-center !gap-2 !text-cyan-400 !transition-colors hover:!text-cyan-300">
        <Play className="!h-4 !w-4" />
        <span className="!font-medium">See changes in real time</span>
      </button>
    </div>
  );
}
