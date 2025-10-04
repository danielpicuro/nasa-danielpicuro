import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  trend?: 'up' | 'down' | 'neutral';
}

export function MetricCard({ title, value, trend = 'neutral' }: MetricCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="flex items-baseline mt-1">
        <p className="text-2xl font-semibold">{value}</p>
        {trend === 'up' && (
          <span className="ml-2 text-green-600 text-sm">↑ 12%</span>
        )}
        {trend === 'down' && (
          <span className="ml-2 text-red-600 text-sm">↓ 8%</span>
        )}
      </div>
    </div>
  );
}