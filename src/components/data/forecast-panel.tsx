'use client';

import { useState } from 'react';

export function ForecastPanel() {
  const [activeTab, setActiveTab] = useState<'forecast' | 'optimal'>('forecast');

  return (
    <div className="!bg-slate-900/95 !rounded-lg !p-4 !w-96 !border !border-slate-700">
      {/* Tabs */}
      <div className="!flex !gap-2 !mb-4">
        <button
          onClick={() => setActiveTab('forecast')}
          className={`!flex !items-center !gap-2 !px-3 !py-2 !rounded !text-sm !transition-colors ${
            activeTab === 'forecast'
              ? '!bg-cyan-500 !text-white'
              : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
          }`}
        >
          📊 Forecast
        </button>

        <button
          onClick={() => setActiveTab('optimal')}
          className={`!flex !items-center !gap-2 !px-3 !py-2 !rounded !text-sm !transition-colors ${
            activeTab === 'optimal'
              ? '!bg-cyan-500 !text-white'
              : '!bg-slate-800 !text-gray-400 hover:!bg-slate-700'
          }`}
        >
          🎯 Optimal Site
        </button>
      </div>

      {/* Content */}
      <div>
        <h3 className="!text-white !font-semibold !mb-2">Future Projection</h3>
        <p className="!text-gray-400 !text-xs !mb-4">Analyze future infrastructure capacity</p>

        {/* Progress Bar */}
        <div className="!mb-4">
          <div className="!flex !justify-between !text-xs !text-gray-400 !mb-1">
            <span>Progress</span>
            <span>15 years</span>
          </div>
          <div className="!w-full !bg-slate-700 !rounded-full !h-2">
            <div className="!bg-cyan-500 !h-2 !rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

        {/* Predictions */}
        <div className="!bg-slate-800 !rounded !p-3 !mb-4">
          <h4 className="!text-white !text-sm !font-semibold !mb-2">Predictions for 2035</h4>
          <div className="!space-y-1 !text-xs">
            <div className="!flex !justify-between">
              <span className="!text-gray-400">At-risk streets</span>
              <span className="!text-orange-400">24 segments</span>
            </div>
            <div className="!flex !justify-between">
              <span className="!text-gray-400">Saturated grids</span>
              <span className="!text-orange-400">16 sections</span>
            </div>
            <div className="!flex !justify-between">
              <span className="!text-gray-400">Investment required</span>
              <span className="!text-cyan-400">$42.5M - $65M</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="!w-full !bg-cyan-500 hover:!bg-cyan-600 !text-white !py-2 !px-4 !rounded !text-sm !font-medium !transition-colors">
          Run Forecast Analysis
        </button>
      </div>
    </div>
  );
}
