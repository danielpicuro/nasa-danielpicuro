import { CheckCircle2 } from 'lucide-react';

interface StackItemProps {
  name: string;
}

export function StackItem({ name }: StackItemProps) {
  return (
    <div className="!flex !items-center !gap-3 !rounded-lg !border !border-purple-500/30 !bg-purple-950/30 !px-4 !py-3 !backdrop-blur-sm !transition-all !hover:border-purple-400/50 !hover:bg-purple-900/40">
      <CheckCircle2 className="!h-5 !w-5 !flex-shrink-0 !text-cyan-400" />
      <span className="!text-base !text-gray-200">{name}</span>
    </div>
  );
}
