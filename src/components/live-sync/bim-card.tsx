// bim-card.tsx
import type { LucideIcon } from 'lucide-react';

interface BimCardProps {
  name: string;
  icon?: LucideIcon;
}

export function BimCard({ name, icon: Icon }: BimCardProps) {
  return (
    <button className="!group !relative !overflow-hidden !rounded-lg !border !border-cyan-500/20 !bg-gradient-to-br !from-blue-950/80 !to-cyan-950/60 !p-8 !transition-all hover:!border-cyan-400/40 hover:!shadow-lg hover:!shadow-cyan-500/20">
      <div className="!flex !flex-col !items-center !justify-center !gap-3">
        {Icon && <Icon className="!h-8 !w-8 !text-cyan-400" />}
        <span className="!text-center !font-medium !text-white">{name}</span>
      </div>
      <div className="!absolute !inset-0 !bg-gradient-to-t !from-cyan-500/10 !to-transparent !opacity-0 !transition-opacity group-hover:!opacity-100" />
    </button>
  );
}
