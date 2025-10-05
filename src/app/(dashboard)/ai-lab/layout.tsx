import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Lab',
};

export default function AILabLayout({ children }: { children: React.ReactNode }) {
  return children;
}
