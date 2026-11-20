import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageLoader from '../components/PageLoader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Living Letters — Equip • Encourage • Inspire',
  description:
    'A Christ-centered teaching and media ministry equipping believers to live as letters written by the Holy Spirit—known and read by all.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/images/logo.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#334155]">
        <PageLoader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
