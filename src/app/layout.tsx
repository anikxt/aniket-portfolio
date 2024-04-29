import type { Metadata } from 'next';

import localFont from 'next/font/local';
import './globals.css';
import { classNames } from '@/utils/classNames';

const Aspekta = localFont({
  src: '../../public/fonts/AspektaVF.woff2',
});

export const metadata: Metadata = {
  title: 'Aniket Kanere',
  description: "Aniket Kanere's Development Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(Aspekta.className, 'bg-stone-100')}>
        {children}
      </body>
    </html>
  );
}
