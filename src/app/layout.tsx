import '@/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/utils/classMerge';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ink Forged Agency',
  description: '',
  icons: [{ url: 'assets/icons/favicon.ico' }],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className='h-full'>
      <body className={cn(inter.className, 'h-full bg-emerald-900/40')}>{children}</body>
    </html>
  );
};

export default RootLayout;
