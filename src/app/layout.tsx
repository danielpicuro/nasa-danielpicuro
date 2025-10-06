import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

// Font Awesome setup
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // To skip adding CSS automatically

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Digital Twin',
    default: 'Digital Twin',
  },
  description: 'A project from AmaruPAt',
  metadataBase: new URL('https://with-trae-nasa.vercel.app/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
