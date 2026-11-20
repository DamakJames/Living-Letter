'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Teachings', href: '/teachings' },
    { label: 'Podcast', href: '/podcast' },
    { label: 'Series', href: '/series' },
    { label: 'Heart’s Questions', href: '/qa' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Utility Bar (Editorial Discipleship Motto) */}
      <div className="bg-[#0B1522] text-[#9CA3AF] text-xs py-1.5 border-b border-white/10 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span>Christ-Centered Discipleship &amp; Media Ministry</span>
            <span>•</span>
            <span className="text-[#FBBF24] font-semibold">2 Corinthians 3:2–3</span>
            <span>•</span>
            <span className="text-gray-300">EQUIP • ENCOURAGE • INSPIRE</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <span>Known and read by all</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E6E0D6] shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Brand Logo with Official Circular Badge */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="The Living Letters"
              className="w-12 h-12 object-contain rounded-full bg-white p-0.5 border border-[#B86C20] shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-xl text-[#122236] tracking-tight leading-none group-hover:text-[#B86C20] transition-colors">
                The Living Letters
              </span>
              <span className="text-[10px] text-[#B86C20] uppercase tracking-wider font-semibold mt-1">
                Equip • Encourage • Inspire
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors pb-1 relative ${
                    isActive
                      ? 'text-[#B86C20]'
                      : 'text-[#1E293B] hover:text-[#B86C20]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B86C20]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@the-livingletters"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#FF0000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded transition-all shadow-sm"
            >
              <span>▶</span> YouTube Channel
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded border border-[#E6E0D6] text-[#122236] hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E6E0D6] px-6 py-4 shadow-lg animate-fadeIn">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-[#122236] hover:text-[#B86C20] py-1 border-b border-gray-100"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://open.spotify.com/show/4UdQKlyfbCw6M7s2DJMMvy?si=4f2b3401707c4203"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1DB954] text-white text-center text-xs font-bold uppercase py-2.5 rounded"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
