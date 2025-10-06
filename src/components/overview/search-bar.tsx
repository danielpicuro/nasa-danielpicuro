'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="!relative !mb-8">
      <div className="!absolute !inset-y-0 !left-4 !flex !items-center !pointer-events-none">
        <Search className="!h-6 !w-6 !text-gray-400" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search by city, project or country..."
        className="!w-full !bg-slate-900/50 !border !border-cyan-500/30 !rounded-lg !py-4 !pl-14 !pr-4 !text-white !placeholder-gray-400 !focus:outline-none !focus:border-cyan-500 !focus:ring-2 !focus:ring-cyan-500/20 !transition-all"
      />
    </div>
  );
}
