import { PlanningNavbar } from '@/components/planning/planning-navbar';
import { PlanningTabs } from '@/components/planning/planning-tabs';
import { PlanningMetrics } from '@/components/planning/planning-metrics';

export default function PlanningPage() {
  return (
    <div className="!min-h-screen !bg-[url('/images/bolivie.jpg')] !bg-cover !bg-center !relative">
      {/* Dark overlay for better text visibility */}
      <div className="!absolute !inset-0 !bg-black/40"></div>

      {/* Content */}
      <div className="!relative !z-10">
        {/* Top Navbar */}
        <PlanningNavbar />

        {/* Secondary Navigation with Tabs and Metrics */}
        <div className="!px-6 !py-4">
          <div className="!flex !items-center !justify-between !gap-4 !flex-wrap">
            <PlanningTabs />
            <PlanningMetrics />
          </div>
        </div>

        {/* Suburb Label */}
        <div className="!absolute !bottom-8 !left-8">
          <div className="!bg-black/50 !backdrop-blur-sm !px-4 !py-2 !rounded-md !border !border-white/20">
            <p className="!text-white !text-sm !font-medium">Suburb 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
