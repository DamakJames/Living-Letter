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
            Inspired by in-depth pastoral Q&amp;A ministries like <em>Desiring God</em>, Pastor Solomon Amao addresses honest questions submitted by believers with rigorous biblical exposition.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {videos.map((vid) => (
            <article
              key={vid.id}
              className="bg-[#FAF8F5] border border-[#E6E0D6] rounded overflow-hidden shadow-sm hover:shadow-md hover:border-[#B86C20] transition-all flex flex-col group"
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

                <div className="pt-4 border-t border-[#EFEAE1] flex items-center justify-between text-xs">
                  <span className="text-[#64748B]">Answered by Pastor Solomon Amao</span>
                  <button
                    onClick={() => setActiveVideo(vid)}
                    className="text-[#B86C20] hover:underline font-bold flex items-center gap-1"
                  >
                    Watch Video Episode →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/qa"
            className="bg-[#122236] hover:bg-[#0B1522] text-white font-bold text-sm px-6 py-3 rounded transition-all"
          >
            Explore Complete Video Q&amp;A Archive →
          </Link>
          <Link
            href="/qa#ask"
            className="bg-transparent hover:bg-gray-100 text-[#122236] font-bold text-sm px-6 py-3 rounded border border-[#122236] transition-all"
          >
            Submit a Question for Upcoming Videos
          </Link>
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#122236] text-white w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl relative animate-fadeIn">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div>
                <span className="text-xs text-[#FBBF24] font-bold uppercase tracking-wider block">
                  Episode {activeVideo.episodeNumber} • {activeVideo.releaseDay} Release
                </span>
                <h3 className="font-serif text-lg font-bold text-white leading-snug">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-gray-400 hover:text-white text-2xl font-bold ml-4"
                aria-label="Close video player"
              >
                &times;
              </button>
            </div>

            {/* Video Player */}
            <div className="video-responsive bg-black">
              <iframe
                src={`${activeVideo.videoEmbedUrl}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 bg-[#0B1522]">
              <div className="text-xs text-gray-400 mb-2">
                <strong>Scriptures:</strong> {activeVideo.scripture}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {activeVideo.summary}
              </p>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>Speaker: Pastor Solomon Amao</span>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="bg-[#B86C20] hover:bg-[#92400E] text-white px-4 py-1.5 rounded font-bold"
                >
                  Close Video
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
