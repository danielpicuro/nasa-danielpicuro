'use client';

import { ArrowLeft, Download, Sparkles, RefreshCw } from 'lucide-react';
import { MetricCard } from '@/components/reports/metric-card';
import { BudgetTable, type BudgetItem } from '@/components/reports/budget-table';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export default function ReportsPage() {
  const { language } = useAiCompanion();
  const t = translations[language].reports;

  const budgetItems: BudgetItem[] = [
    {
      code: '01.01',
      description: t.budgetTable.items[0].description,
      unit: 'm³',
      amount: 4210,
      unitPrice: 18.5,
      subtotal: 77885,
    },
    {
      code: '01.02',
      description: t.budgetTable.items[1].description,
      unit: 'm³',
      amount: 3158,
      unitPrice: 22.3,
      subtotal: 70423,
    },
    {
      code: '02.01',
      description: t.budgetTable.items[2].description,
      unit: 'm³',
      amount: 952,
      unitPrice: 185.0,
      subtotal: 176120,
    },
    {
      code: '02.02',
      description: t.budgetTable.items[3].description,
      unit: 'kg',
      amount: 47800,
      unitPrice: 1.45,
      subtotal: 69310,
    },
    {
      code: '03.01',
      description: t.budgetTable.items[4].description,
      unit: 'm',
      amount: 842,
      unitPrice: 420.0,
      subtotal: 353640,
    },
    {
      code: '03.02',
      description: t.budgetTable.items[5].description,
      unit: 'ud',
      amount: 14,
      unitPrice: 3850.0,
      subtotal: 53900,
    },
  ];

  return (
    <div className="!min-h-screen !bg-gradient-to-br !from-slate-900 !via-purple-900 !to-cyan-900">
      {/* Header */}
      <header className="!border-b !border-white/10 !bg-slate-800/50 !backdrop-blur-md">
        <div className="!mx-auto !max-w-7xl !px-6 !py-4">
          <div className="!flex !items-center !justify-between">
            <div className="!flex !items-center !gap-4">
              <button className="!flex !items-center !gap-2 !text-white !transition-colors hover:!text-white/80">
                <ArrowLeft className="!h-5 !w-5" />
                <span className="!font-medium">{t.blackButton}</span>
              </button>
              <div className="!h-8 !w-px !bg-white/20" />
              <div>
                <h1 className="!text-2xl !font-bold !text-white">{t.headerTitle}</h1>
                <p className="!text-sm !text-white/60">{t.headerSubtitle}</p>
              </div>
            </div>

            <div className="!flex !items-center !gap-3">
              <button className="!flex !items-center !gap-2 !rounded-lg !bg-black !px-6 !py-2.5 !font-medium !text-white !transition-colors hover:!bg-black/80">
                <Sparkles className="!h-4 !w-4" />
                {t.takeFromAI}
              </button>
              <button className="!flex !items-center !gap-2 !rounded-lg !bg-black !px-6 !py-2.5 !font-medium !text-white !transition-colors hover:!bg-black/80">
                <RefreshCw className="!h-4 !w-4" />
                {t.synchronizeBIM}
              </button>
              <button className="!flex !items-center !gap-2 !rounded-lg !bg-black !px-6 !py-2.5 !font-medium !text-white !transition-colors hover:!bg-black/80">
                <Download className="!h-4 !w-4" />
                {t.export}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="!mx-auto !max-w-7xl !px-6 !py-8">
        {/* Metrics Grid */}
        <div className="!mb-8 !grid !grid-cols-1 !gap-4 md:!grid-cols-2 lg:!grid-cols-4">
          <MetricCard
            title={t.metricCards[0].title}
            value="$0.8M"
            subtitle={t.metricCards[0].subtitle}
            variant="purple"
          />
          <MetricCard
            title={t.metricCards[1].title}
            value="$12.4M"
            subtitle={t.metricCards[1].subtitle}
            variant="teal"
          />
          <MetricCard
            title={t.metricCards[2].title}
            value="34%"
            subtitle={t.metricCards[2].subtitle}
            variant="cyan"
          />
          <MetricCard
            title={t.metricCards[3].title}
            value="-8.2%"
            subtitle={t.metricCards[3].subtitle}
            variant="dark"
            isNegative
          />
        </div>

        {/* Budget Table */}
        <BudgetTable
          title={t.budgetTable.title}
          subtitle={t.budgetTable.subtitle}
          items={budgetItems.map((item, index) => ({
            ...item,
            description: t.budgetTable.items[index].description,
          }))}
        />
      </main>
    </div>
  );
}
