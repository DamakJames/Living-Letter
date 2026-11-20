'use client';

import React, { useState, useEffect } from 'react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Smooth transition: after a brief moment, fade out, then unmount
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 650);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 1050);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF8F5] transition-opacity duration-400 ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-label="Loading The Living Letters"
    >
      <div className="flex flex-col items-center text-center p-6 max-w-sm">
        {/* Pulsing Emblem with Double Ring */}
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full border-2 border-[#B86C20]/20 border-t-[#B86C20] animate-spin absolute inset-0" />
          <div className="w-24 h-24 rounded-full bg-white p-2 shadow-lg flex items-center justify-center">
            <img
              src="/images/logo.png"
              alt="The Living Letters"
              className="w-16 h-16 object-contain animate-pulse"
            />
          </div>
        </div>

        {/* Brand Title */}
        <h2 className="font-serif text-2xl font-black text-[#122236] tracking-tight mb-1">
          The Living Letters
        </h2>

        {/* Tagline */}
        <p className="text-[11px] font-bold text-[#B86C20] tracking-widest uppercase mb-4">
          Equip • Encourage • Inspire
        </p>

        {/* Subtle Loading Progress Bar */}
        <div className="w-40 h-1 bg-[#E6E0D6] rounded-full overflow-hidden">
          <div className="h-full bg-[#B86C20] animate-indeterminate rounded-full" />
        </div>
      </div>
    </div>
  );
}
