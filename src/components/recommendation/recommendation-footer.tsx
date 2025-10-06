import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export function RecommendationFooter() {
  return (
    <div className="!flex !flex-wrap !items-center !justify-between !gap-4">
      <Link
        href="/projects"
        className="!rounded-lg !bg-gray-800/50 !px-6 !py-2.5 !text-sm !font-medium !text-gray-300 !backdrop-blur-sm !transition-colors !hover:bg-gray-700/50"
      >
        Anterior
      </Link>

      <div className="!flex !gap-3">
        <button className="!flex !items-center !gap-2 !rounded-lg !bg-gray-800/50 !px-6 !py-2.5 !text-sm !font-medium !text-gray-300 !backdrop-blur-sm !transition-colors !hover:bg-gray-700/50">
          <Download className="!h-4 !w-4" />
          Descargar Ficha PDF
        </button>

        <Link
          href="/planning"
          className="!flex !items-center !gap-2 !rounded-lg !bg-gradient-to-r !from-purple-600 !to-pink-600 !px-6 !py-2.5 !text-sm !font-medium !text-white !transition-all !hover:from-purple-500 !hover:to-pink-500"
        >
          Continuar al Dashboard
          <ArrowRight className="!h-4 !w-4" />
        </Link>
      </div>
    </div>
  );
}
