import { CheckCircle2, AlertTriangle } from 'lucide-react';

interface ProsConsProps {
  advantages: string[];
  considerations: string[];
}

export function ProsCons({ advantages, considerations }: ProsConsProps) {
  return (
    <div className="!grid !gap-6 !md:grid-cols-2">
      {/* Ventajas */}
      <div>
        <div className="!mb-3 !flex !items-center !gap-2">
          <CheckCircle2 className="!h-5 !w-5 !text-green-400" />
          <h3 className="!text-lg !font-semibold !text-green-400">Ventajas</h3>
        </div>
        <ul className="!space-y-2">
          {advantages.map((advantage, index) => (
            <li key={index} className="!flex !items-start !gap-2 !text-sm !text-gray-300">
              <span className="!mt-1.5 !h-1.5 !w-1.5 !flex-shrink-0 !rounded-full !bg-green-400" />
              <span>{advantage}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Consideraciones */}
      <div>
        <div className="!mb-3 !flex !items-center !gap-2">
          <AlertTriangle className="!h-5 !w-5 !text-orange-400" />
          <h3 className="!text-lg !font-semibold !text-orange-400">Consideraciones</h3>
        </div>
        <ul className="!space-y-2">
          {considerations.map((consideration, index) => (
            <li key={index} className="!flex !items-start !gap-2 !text-sm !text-gray-300">
              <span className="!mt-1.5 !h-1.5 !w-1.5 !flex-shrink-0 !rounded-full !bg-orange-400" />
              <span>{consideration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
