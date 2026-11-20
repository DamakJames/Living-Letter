'use client';

import React from 'react';

export default function ThreePillars() {
  const pillars = [
    {
      num: '01',
      title: 'Replicate',
      description: 'The life of Christ through the grace of the Holy Spirit.',
    },
    {
      num: '02',
      title: 'Rule',
      description: 'Through the Gospel of the Son in every area of life.',
    },
    {
      num: '03',
      title: 'Reflect',
      description: 'The glory and character of the Father.',
    },
  ];

  return (
    <section className="py-20 bg-[#F3EFE9] border-b border-[#E6E0D6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] mb-2 block">
            The Core Calling
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122236] tracking-tight">
            Our Three Discipleship Pillars
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-2">
            The spiritual mandate guiding every sermon, study series, and publication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-white border border-[#E6E0D6] rounded p-8 shadow-sm hover:shadow-md hover:border-[#B86C20] transition-all flex flex-col group"
            >
              <div className="flex items-center justify-between mb-4 border-b border-[#EFEAE1] pb-3">
                <span className="font-serif text-sm font-extrabold text-[#B86C20] tracking-wider">
                  PILLAR {pillar.num}
                </span>
                <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest group-hover:text-[#B86C20] transition-colors">
                  Living Letters
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#122236] mb-3 group-hover:text-[#B86C20] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
