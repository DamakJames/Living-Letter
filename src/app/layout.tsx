import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Living Letters — Digital Discipleship & Media Ministry | Pastor Solomon Amao',
  description:
    'A Christ-centered teaching ministry founded by Pastor Solomon Amao, equipping believers to live as letters written by the Holy Spirit—known and read by all.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#334155]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
