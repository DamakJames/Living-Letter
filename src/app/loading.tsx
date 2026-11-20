import React from 'react';

export default function Loading() {
  return (
    <div
      className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FAF8F5] p-6 text-center"
      aria-live="polite"
    >
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-full border-2 border-[#B86C20]/20 border-t-[#B86C20] animate-spin absolute inset-0" />
        <div className="w-20 h-20 rounded-full bg-white p-2 shadow-md flex items-center justify-center">
          <img
            src="/images/logo.png"
            alt="The Living Letters"
            className="w-14 h-14 object-contain animate-pulse"
          />
        </div>
      </div>

      <h3 className="font-serif text-xl font-bold text-[#122236] tracking-tight mb-1">
        The Living Letters
      </h3>

      <p className="text-[10px] font-bold text-[#B86C20] tracking-widest uppercase">
        Loading Gospel Resources...
      </p>
    </div>
  );
}
