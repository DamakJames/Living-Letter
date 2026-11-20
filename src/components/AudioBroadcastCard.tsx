'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AudioBroadcastCard() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 bg-[#122236] text-white border-b border-[#0B1522]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Info */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] mb-2 block">
              Featured Audio Broadcast
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-snug">
              It Shall End in Praise
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-medium mb-4">
              Speaker: <strong>Pastor Solomon Amao</strong> • Scripture: <strong>Romans 8:28 • Psalm 30:5</strong> • Duration: <strong>42 mins</strong>
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Discover how faith transforms life’s crucibles into testimonies of God’s sovereignty. In the life of the believer, trials are never the final chapter—God has already written victory at the end.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/podcast"
                className="text-xs font-bold text-[#FBBF24] hover:underline flex items-center gap-1.5"
              >
                View Sermon Notes &amp; Download MP3 →
              </Link>
            </div>
          </div>

          {/* Player Widget */}
          <div className="lg:col-span-5 bg-[#1C3554] p-6 rounded border border-white/10 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-[#FBBF24] uppercase tracking-wider">
                Expository Broadcast
              </span>
              <span className="text-xs text-gray-300 bg-white/10 px-2 py-0.5 rounded">
                Stereo 320kbps
              </span>
            </div>

            {/* Timeline */}
            <div className="w-full bg-black/40 h-2 rounded-full mb-3 cursor-pointer overflow-hidden">
              <div className="bg-[#B86C20] h-full w-[45%]" />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-6">
              <span>19:04</span>
              <span>42:15</span>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-[#B86C20] hover:bg-[#92400E] text-white font-bold text-xs px-5 py-2.5 rounded flex items-center gap-2 transition-all shadow"
              >
                {isPlaying ? (
                  <>
                    <span>❚❚</span> Pause Broadcast
                  </>
                ) : (
                  <>
                    <span>▶</span> Play Sermon
                  </>
                )}
              </button>

              <div className="flex items-center gap-3 text-xs text-gray-300">
                <span className="px-2 py-1 bg-white/10 rounded cursor-pointer hover:bg-white/20">
                  1.0x
                </span>
                <Link href="/podcast" className="hover:text-white" title="All Sermons">
                  All Sermons →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
