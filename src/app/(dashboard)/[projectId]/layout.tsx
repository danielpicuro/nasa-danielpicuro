import type React from 'react';
import Link from 'next/link';
import {
  Globe,
  LayoutDashboard,
  Calendar,
  FolderKanban,
  BarChart3,
  Box,
  Sparkles,
  Database,
  FileText,
  Bell,
  Settings,
} from 'lucide-react';

export default async function ProjectsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ projectId?: string }>;
}) {
  const resolvedParams = await params;
  const projectId = resolvedParams?.projectId || 'default';

  const navItems = [
    { href: `/${projectId}/overview`, label: 'Overview', icon: LayoutDashboard },
    { href: `/${projectId}/planning`, label: 'Planning', icon: Calendar },
    { href: `/${projectId}/resources`, label: 'Resources', icon: FolderKanban },
    { href: `/${projectId}/analysis`, label: 'Analysis', icon: BarChart3 },
    { href: `/${projectId}/3d-twin`, label: '3D Twin', icon: Box },
    { href: `/${projectId}/ai-lab`, label: 'AI Lab', icon: Sparkles },
    { href: `/${projectId}/data`, label: 'Data', icon: Database },
    { href: `/${projectId}/reports`, label: 'Reports', icon: FileText },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-[#0a1628]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a1628]/80">
        <div className="flex items-center justify-between px-4 py-3 lg:px-6">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 min-w-fit">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <Globe className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-cyan-400 leading-tight">Urban Digital</div>
              <div className="text-xs text-cyan-400/80 leading-tight">Twin Platform</div>
            </div>
          </div>

          {/* Navigation Items - Desktop */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center px-4">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Live Indicator */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">Live</span>
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-muted-foreground hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-cyan-500 rounded-full">
                2
              </span>
            </button>

            {/* Settings */}
            <button className="p-2 text-muted-foreground hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden overflow-x-auto border-t border-border/40">
          <div className="flex items-center gap-1 px-4 py-2 min-w-max">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors whitespace-nowrap"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
