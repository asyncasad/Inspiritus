import MainWrapper from '@/components/main-wrapper';
import SiteHeader from '@/components/site-header';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const space_grotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Inspiritus',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>
        <MainWrapper>
          <SiteHeader />
          {children}
        </MainWrapper>
      </body>
    </html>
  );
}
