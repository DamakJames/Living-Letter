'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { VideoQuestion } from '../lib/types';
import { getVideoQuestions } from '../lib/storage';

export default function HeartsQuestionsSection() {
  const [videos, setVideos] = useState<VideoQuestion[]>([]);
  const [activeVideo, setActiveVideo] = useState<VideoQuestion | null>(null);

  useEffect(() => {
    setVideos(getVideoQuestions().slice(0, 2));

    const handleUpdate = () => {
      setVideos(getVideoQuestions().slice(0, 2));
    };
    window.addEventListener('ll-content-updated', handleUpdate);
    return () => window.removeEventListener('ll-content-updated', handleUpdate);
  }, []);

  return (
    <section className="py-20 bg-white border-b border-[#E6E0D6]" id="video-qa">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FEE2E2] text-[#991B1B] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
            Broadcast Schedule: 2 Long-Form Videos Per Week (Tue &amp; Fri)
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122236] tracking-tight">
            Heart’s Questions (Video Discipleship)
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            In-depth video broadcasts addressing real-life doctrinal questions and spiritual dilemmas submitted by believers with rigorous biblical exposition.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {videos.map((vid) => (
            <article
              key={vid.id}
              className="bg-[#FAF8F5] border border-[#E6E0D6] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#B86C20] transition-all flex flex-col group"
            >
              {/* Thumbnail Container */}
              <div
                onClick={() => setActiveVideo(vid)}
                className="relative h-64 bg-[#0B1522] bg-cover bg-center cursor-pointer flex items-center justify-center group-hover:opacity-95 transition-all"
                style={{
                  backgroundImage: `url(${
                    vid.thumbnailUrl ||
                    'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&w=800&q=80'
                  })`,
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

                {/* Day Tag */}
                <span className="absolute top-3.5 left-3.5 bg-[#122236] text-[#FBBF24] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                  {vid.releaseDay} Release
                </span>

                {/* Duration Badge */}
                <span className="absolute bottom-3.5 right-3.5 bg-black/80 text-white text-xs font-semibold px-2 py-0.5 rounded">
                  {vid.duration}
                </span>

                {/* Play Button */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#B86C20]/90 group-hover:bg-[#B86C20] group-hover:scale-110 text-white flex items-center justify-center transition-all shadow-lg">
                  <svg className="w-7 h-7 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-[#64748B] mb-2 font-medium">
                  <span className="text-[#B86C20] font-bold">Episode {vid.episodeNumber}</span>
                  <span>•</span>
                  <span>{vid.scripture}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#122236] leading-snug mb-3 group-hover:text-[#B86C20] transition-colors">
                  <button onClick={() => setActiveVideo(vid)} className="text-left">
                    {vid.title}
                  </button>
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed mb-6 flex-1">
                  {vid.summary}
                </p>

                <div className="pt-4 border-t border-[#EFEAE1] flex items-center justify-between">
                  <button
                    onClick={() => setActiveVideo(vid)}
                    className="text-xs font-bold text-[#122236] hover:text-[#B86C20] flex items-center gap-1.5"
                  >
                    <span>▶</span> Watch Video Answer
                  </button>
                  <Link
                    href="/qa"
                    className="text-xs font-bold text-[#B86C20] hover:underline"
                  >
                    Submit a Question →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA to Full Video Library */}
        <div className="text-center">
          <Link
            href="/qa"
            className="inline-flex items-center gap-2 bg-[#122236] hover:bg-[#B86C20] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded transition-all shadow-sm"
          >
            <span>▶</span> Browse All Video Answers &amp; Series Archives
          </Link>
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-[#122236] text-white rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#FBBF24] uppercase tracking-wider block">
                  Episode {activeVideo.episodeNumber} • {activeVideo.releaseDay} Release
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white line-clamp-1">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition-colors"
                aria-label="Close video"
              >
                ✕
              </button>
            </div>

            {/* Video Embed Frame */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={activeVideo.videoEmbedUrl}
                title={activeVideo.title}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Modal Footer Notes */}
            <div className="p-4 bg-[#0B1522] text-xs text-gray-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span>Scripture: <strong className="text-white">{activeVideo.scripture}</strong></span>
              <a
                href={activeVideo.videoEmbedUrl.replace('/embed/', '/watch?v=')}
                target="_blank"
                rel="noreferrer"
                className="text-[#FBBF24] hover:underline font-semibold"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
