'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0B1522] text-[#9CA3AF] border-t-4 border-[#B86C20] pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-[#B86C20] text-white rounded flex items-center justify-center font-serif font-bold text-lg">
                LL
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-extrabold text-xl text-white">Living Letters</span>
                <span className="text-[10px] text-[#FBBF24] uppercase tracking-wider font-semibold">
                  Pastor Solomon Amao
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#94A3B8] mb-6">
              A Christ-centered teaching and media ministry dedicated to equipping believers to live as letters written by the Holy Spirit—known and read by all.
            </p>

            {/* Social Icons (TikTok included, Twitter and Apple Music removed as requested) */}
            <div className="flex items-center gap-2.5">
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-white/10 hover:bg-[#B86C20] text-gray-200 hover:text-white flex items-center justify-center transition-all"
                title="Follow Pastor Solomon on TikTok"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.27 6.27 0 0 0 1.95-4.46V8.1a8.16 8.16 0 0 0 4.82 1.57V6.23a4.85 4.85 0 0 1-1-.02v.48z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-white/10 hover:bg-[#B86C20] text-gray-200 hover:text-white flex items-center justify-center transition-all"
                title="Watch on YouTube"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Spotify */}
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-white/10 hover:bg-[#B86C20] text-gray-200 hover:text-white flex items-center justify-center transition-all"
                title="Listen on Spotify"
                aria-label="Spotify"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.306c-.215.353-.674.464-1.027.249-2.812-1.718-6.353-2.106-10.522-1.154-.403.092-.806-.16-.898-.563-.092-.403.16-.806.563-.898 4.567-1.043 8.475-.601 11.635 1.339.353.215.464.674.249 1.027zm1.468-3.266c-.27.44-.848.577-1.288.307-3.22-1.979-8.128-2.552-11.936-1.396-.496.15-1.024-.134-1.174-.63-.15-.496.134-1.024.63-1.174 4.356-1.322 9.776-.684 13.461 1.605.44.27.577.848.307 1.288zm.126-3.414c-3.863-2.294-10.238-2.506-13.916-1.39-.592.18-1.22-.161-1.4-.753-.18-.592.161-1.22.753-1.4 4.234-1.285 11.278-1.037 15.727 1.604.532.316.707 1.008.391 1.54-.316.532-1.008.707-1.555.399z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-white/10 hover:bg-[#B86C20] text-gray-200 hover:text-white flex items-center justify-center transition-all"
                title="Facebook"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-white/10 hover:bg-[#B86C20] text-gray-200 hover:text-white flex items-center justify-center transition-all"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Pastor Solomon &amp; Ministry
                </Link>
              </li>
              <li>
                <Link href="/teachings" className="hover:text-white transition-colors">
                  Teachings &amp; Articles
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="hover:text-white transition-colors">
                  Podcast Sermons
                </Link>
              </li>
            </ul>
          </div>

          {/* Discipleship Curriculums */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 tracking-wide">
              Discipleship
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/series" className="hover:text-white transition-colors">
                  Structured Series
                </Link>
              </li>
              <li>
                <Link href="/qa" className="hover:text-white transition-colors">
                  Heart’s Questions (Video Series)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Speaking &amp; Ministry Inquiries
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-[#FBBF24] hover:underline font-semibold">
                  Pastor Admin Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Scripture Anchor */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 tracking-wide">
              Scripture Anchor
            </h4>
            <p className="font-serif italic text-sm text-[#94A3B8] leading-relaxed mb-2">
              &quot;You yourselves are our letter of recommendation, written on our hearts, to be known and read by all.&quot;
            </p>
            <span className="text-xs font-bold text-[#FBBF24] uppercase tracking-wider">
              2 Corinthians 3:2
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-[#64748B] gap-4">
          <p>© 2026 Living Letters Ministry • Pastor Solomon Amao. All gospel resources freely shared.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-gray-300">
              Contact Ministry
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-gray-300">
              Statement of Faith
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
