import React from 'react';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { RiskChart } from '@/components/dashboard/RiskChart';
import { ProgressTimeline } from '@/components/dashboard/ProgressTimeline';

export default function OverviewPage({ params }: { params: { projectId: string } }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Visión General del Proyecto</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard title="Progreso Total" value="65%" trend="up" />
        <MetricCard title="Recursos Asignados" value="24" trend="neutral" />
        <MetricCard title="Días Restantes" value="45" trend="down" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">Análisis de Riesgos</h2>
          <RiskChart />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">Línea de Tiempo</h2>
          <ProgressTimeline />
        </div>
      </div>
    </div>
  );
}