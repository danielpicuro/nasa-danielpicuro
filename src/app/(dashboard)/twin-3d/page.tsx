'use client';

import { useState } from 'react';
import { Users, Building2, Trees } from 'lucide-react';
import { ProgressStepper } from '@/components/twin-3d/progress-stepper';
import { KpiCard } from '@/components/twin-3d/kpi-card';
import { ProblemCard } from '@/components/twin-3d/problem-card';
import { ComparisonCard } from '@/components/twin-3d/comparison-card';
import { ComparisonSlider } from '@/components/twin-3d/comparison-slider';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export default function Story3DPage() {
  const [activeTab, setActiveTab] = useState<'3d-story' | 'before-after'>('3d-story');
  const { language } = useAiCompanion();
  const t = translations[language].twin3d;

  const steps = t.steps.map((step, index) => ({ ...step, number: index + 1, active: index === 0 }));

  const kpis = t.kpis.items.map(kpi => ({
    ...kpi,
    icon:
      kpi.label === 'Población' || kpi.label === 'Population'
        ? Users
        : kpi.label === 'Edificios' || kpi.label === 'Buildings'
          ? Building2
          : Trees,
    value:
      kpi.label === 'Población' || kpi.label === 'Population'
        ? '2.4M'
        : kpi.label === 'Edificios' || kpi.label === 'Buildings'
          ? '84,320'
          : '34.5%',
    change:
      kpi.label === 'Población' || kpi.label === 'Population'
        ? '+2.3%'
        : kpi.label === 'Edificios' || kpi.label === 'Buildings'
          ? '+1.8%'
          : '+5.2%',
  }));

  const problemMetrics = t.problemCard.metrics.map(metric => ({
    ...metric,
    value:
      metric.label === 'Affected population' || metric.label === 'Población afectada'
        ? '127,400 People'
        : metric.label === 'Historical damage' || metric.label === 'Daño histórico'
          ? '$34.2M USD/Year'
          : '45% of District',
  }));

  const comparisonData = {
    before: {
      floodRisk: 'High(75%)',
      floodRiskLevel: 'High' as const,
      affectedPopulation: '284,500',
      annualDamage: '$34.2M USD',
    },
    after: {
      floodRisk: 'Low (21%)',
      floodRiskLevel: 'Low' as const,
      affectedPopulation: '79,700',
      annualDamage: '$9.6M USD',
    },
  };

  return (
    <div className="!min-h-screen !bg-gradient-to-br !from-gray-900 !via-blue-900 !to-gray-900 !relative !overflow-hidden">
      {/* Background cityscape effect */}
      <div className="!absolute !inset-0 !opacity-30">
        <div className="!absolute !inset-0 !bg-[url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920')] !bg-cover !bg-center" />
        <div className="!absolute !inset-0 !bg-gradient-to-t !from-gray-900 !via-gray-900/50 !to-transparent" />
      </div>

      {/* Content */}
      <div className="!relative !z-10 !p-8">
        {/* Tab Navigation */}
        <div className="!flex !justify-center !gap-4 !mb-8">
          <button
            onClick={() => setActiveTab('3d-story')}
            className={`!px-6 !py-3 !rounded-lg !font-semibold !transition-all !duration-300 ${
              activeTab === '3d-story'
                ? '!bg-cyan-500 !text-white !shadow-lg !shadow-cyan-500/50'
                : '!bg-gray-700 !text-gray-300 hover:!bg-gray-600'
            }`}
          >
            {t.tab1}
          </button>
          <button
            onClick={() => setActiveTab('before-after')}
            className={`!px-6 !py-3 !rounded-lg !font-semibold !transition-all !duration-300 ${
              activeTab === 'before-after'
                ? '!bg-cyan-500 !text-white !shadow-lg !shadow-cyan-500/50'
                : '!bg-gray-700 !text-gray-300 hover:!bg-gray-600'
            }`}
          >
            {t.tab2}
          </button>
        </div>

        {activeTab === '3d-story' ? (
          <>
            {/* Progress Stepper */}
            <ProgressStepper steps={steps} />

            {/* Main Content Grid */}
            <div className="!grid !grid-cols-12 !gap-6 !max-w-7xl !mx-auto">
              {/* Left Content - Problem Card */}
              <div className="!col-span-8">
                <ProblemCard
                  step={1}
                  totalSteps={3}
                  title={t.problemCard.title}
                  description={t.problemCard.description}
                  metrics={problemMetrics}
                />
              </div>

              {/* Right Sidebar - KPIs */}
              <div className="!col-span-4">
                <div className="!bg-blue-900/60 !backdrop-blur-md !border !border-blue-700 !rounded-xl !p-4">
                  <h3 className="!text-lg !font-bold !text-white !mb-4">{t.kpis.title}</h3>
                  <div className="!space-y-4">
                    {kpis.map((kpi, index) => (
                      <KpiCard key={index} {...kpi} delay={index * 0.1} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Before/After Comparison View */}
            <ComparisonSlider />

            <div className="!max-w-5xl !mx-auto">
              <ComparisonCard before={comparisonData.before} after={comparisonData.after} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
