import './globals.css' 
import { inter } from '@/app/ui/fonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Steak Me! - Find Your Perfect Cut',
  description: 'Discover the perfect steak cut based on your preferences and priorities',
  icons: {
    icon: '/steak.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
