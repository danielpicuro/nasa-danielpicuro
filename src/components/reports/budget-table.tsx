'use client';

import { cn } from '@/lib/utils';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export interface BudgetItem {
  code: string;
  description: string;
  unit: string;
  amount: number;
  unitPrice: number;
  subtotal: number;
}

interface BudgetTableProps {
  title: string;
  subtitle: string;
  items: BudgetItem[];
  className?: string;
}

export function BudgetTable({ title, subtitle, items, className }: BudgetTableProps) {
  const { language } = useAiCompanion();
  const t = translations[language].reports.budgetTable;

  const total = items.reduce((sum, item) => sum + item.subtotal, 0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <div className={cn('!space-y-4', className)}>
      <div className="!rounded-lg !bg-black/60 !px-6 !py-3">
        <h2 className="!text-xl !font-semibold !text-white">{title}</h2>
      </div>

      <div className="!rounded-lg !bg-slate-800/40 !p-6 !backdrop-blur-sm">
        <div className="!mb-4">
          <h3 className="!text-base !font-medium !text-white/90">{subtitle}</h3>
        </div>

        <div className="!overflow-x-auto">
          <table className="!w-full">
            <thead>
              <tr className="!border-b !border-white/10">
                <th className="!pb-3 !text-left !text-sm !font-medium !text-white/70">{t.code}</th>
                <th className="!pb-3 !text-left !text-sm !font-medium !text-white/70">
                  {t.description}
                </th>
                <th className="!pb-3 !text-center !text-sm !font-medium !text-white/70">
                  {t.unit}
                </th>
                <th className="!pb-3 !text-right !text-sm !font-medium !text-white/70">
                  {t.amount}
                </th>
                <th className="!pb-3 !text-right !text-sm !font-medium !text-white/70">
                  {t.unitPrice}
                </th>
                <th className="!pb-3 !text-right !text-sm !font-medium !text-white/70">
                  {t.subtotal}
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr
                  key={item.code}
                  className={cn('!border-b !border-white/5', index % 2 === 0 ? '!bg-white/5' : '')}
                >
                  <td className="!py-3 !text-sm !text-white/60">{item.code}</td>
                  <td className="!py-3 !text-sm !text-white">{item.description}</td>
                  <td className="!py-3 !text-center !text-sm !text-cyan-400">{item.unit}</td>
                  <td className="!py-3 !text-right !text-sm !text-white">
                    {formatNumber(item.amount)}
                  </td>
                  <td className="!py-3 !text-right !text-sm !text-white">
                    {formatCurrency(item.unitPrice)}
                  </td>
                  <td className="!py-3 !text-right !text-sm !text-white">
                    {formatCurrency(item.subtotal)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="!border-t !border-white/20">
                <td colSpan={5} className="!pt-4 !text-right !text-base !font-semibold !text-white">
                  {t.total}
                </td>
                <td className="!pt-4 !text-right !text-base !font-bold !text-white">
                  {formatCurrency(total)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
