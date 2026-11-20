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
      {/* Top Utility Bar (Desiring God / WordPress Editorial Style) */}
      <div className="bg-[#0B1522] text-[#9CA3AF] text-xs py-1.5 border-b border-white/10 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span>Christ-Centered Discipleship &amp; Media Ministry</span>
            <span>•</span>
            <span className="text-[#FBBF24] font-semibold">2 Corinthians 3:2–3</span>
          </div>
          <div className="flex items-center gap-5">
            <span>Lead Minister: <strong className="text-white">Pastor Solomon Amao</strong></span>
            <span>•</span>
            <Link href="/admin" className="text-[#FBBF24] hover:underline font-semibold flex items-center gap-1">
              🔒 Pastor Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E6E0D6] shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#122236] text-[#FBBF24] rounded border-2 border-[#B86C20] flex items-center justify-center font-serif font-bold text-lg shadow-sm">
              LL
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-xl text-[#122236] tracking-tight leading-none group-hover:text-[#B86C20] transition-colors">
                Living Letters
              </span>
              <span className="text-[10px] text-[#64748B] uppercase tracking-wider font-semibold mt-1">
                Pastor Solomon Amao
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
            <Link
              href="/qa"
              className="hidden sm:inline-flex items-center gap-2 bg-[#122236] hover:bg-[#B86C20] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded transition-all shadow-sm"
            >
              <span>▶</span> Watch Weekly Q&amp;A
            </Link>

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

        {/* Mobile Slide Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B1522] border-t border-white/10 text-white px-6 py-6 space-y-4 animate-fadeIn">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-200 hover:text-[#FBBF24] py-1 border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#FBBF24] py-2 flex items-center gap-2"
              >
                🔒 Pastor Admin Access
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
