'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { VideoQuestion } from '../../lib/types';
import { getVideoQuestions } from '../../lib/storage';

export default function QAPage() {
  const [videos, setVideos] = useState<VideoQuestion[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDay, setSelectedDay] = useState<'All' | 'Tuesday' | 'Friday'>('All');
  const [activeVideo, setActiveVideo] = useState<VideoQuestion | null>(null);

  // Question Submission State
  const [qName, setQName] = useState('');
  const [qEmail, setQEmail] = useState('');
  const [qText, setQText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setVideos(getVideoQuestions());
    const handleUpdate = () => {
      setVideos(getVideoQuestions());
    };
    window.addEventListener('ll-content-updated', handleUpdate);
    return () => window.removeEventListener('ll-content-updated', handleUpdate);
  }, []);

  const filteredVideos = videos.filter((v) => {
    const matchesDay = selectedDay === 'All' || v.releaseDay === selectedDay;
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      v.title.toLowerCase().includes(query) ||
      v.scripture.toLowerCase().includes(query) ||
      v.summary.toLowerCase().includes(query);
    return matchesDay && matchesQuery;
  });

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qText) return;
    setSubmitted(true);
    setQName('');
    setQEmail('');
    setQText('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-12 bg-[#FAF8F5]">
      {/* Page Header */}
      <section className="bg-[#122236] text-white py-16 mb-12 border-b border-[#0B1522]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FEE2E2] text-[#991B1B] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
            Broadcast Schedule: 2 Long-Form Videos Per Week (Tue &amp; Fri)
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white mb-4">
            Heart’s Questions (Video Discipleship)
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            In-depth expository answers to real-life doctrinal and spiritual questions submitted by believers, grounded in the New Covenant of Grace.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* Search & Filter Bar */}
        <div className="bg-white border border-[#E6E0D6] p-6 rounded shadow-sm mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Day Filters */}
          <div className="flex gap-2">
            {(['All', 'Tuesday', 'Friday'] as const).map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`text-xs font-bold px-4 py-2 rounded transition-all ${
                  selectedDay === day
                    ? 'bg-[#122236] text-white'
                    : 'bg-[#FAF8F5] text-[#64748B] hover:text-[#122236] border border-[#E6E0D6]'
                }`}
              >
                {day === 'All' ? 'All Episodes' : `${day} Releases`}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions, scripture, doubts..."
              className="w-full px-4 py-2 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
            />
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredVideos.map((vid) => (
            <article
              key={vid.id}
              className="bg-white border border-[#E6E0D6] rounded overflow-hidden shadow-sm hover:shadow-md hover:border-[#B86C20] transition-all flex flex-col group"
            >
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
                <span className="absolute top-3.5 left-3.5 bg-[#122236] text-[#FBBF24] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                  {vid.releaseDay} Release
                </span>
                <span className="absolute bottom-3.5 right-3.5 bg-black/80 text-white text-xs font-semibold px-2 py-0.5 rounded">
                  {vid.duration}
                </span>
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#B86C20]/90 group-hover:bg-[#B86C20] group-hover:scale-110 text-white flex items-center justify-center transition-all shadow-lg">
                  <svg className="w-7 h-7 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </div>
              </div>

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
                  <span className="text-[#64748B]">Asked by {vid.seekerName}</span>
                  <button
                    onClick={() => setActiveVideo(vid)}
                    className="text-[#B86C20] hover:underline font-bold flex items-center gap-1"
                  >
                    Watch Full Teaching →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Question Submission Form */}
        <section className="bg-white border border-[#E6E0D6] rounded p-8 max-w-3xl mx-auto shadow-sm mb-12" id="ask">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] mb-1 block">
              Ask Pastor Solomon Amao
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#122236]">
              Submit a Question for Upcoming Videos
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Every week, Pastor Solomon selects questions to address in our Tuesday &amp; Friday long-form video teachings.
            </p>
          </div>

          {submitted ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded font-semibold text-sm text-center">
              ✓ Thank you! Your question was submitted for Pastor Solomon&apos;s review.
            </div>
          ) : (
            <form onSubmit={handleSubmitQuestion} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-1">
                    Your Name or Alias
                  </label>
                  <input
                    type="text"
                    value={qName}
                    onChange={(e) => setQName(e.target.value)}
                    placeholder="e.g. Brother Samuel or Anonymous"
                    className="w-full px-3.5 py-2 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={qEmail}
                    onChange={(e) => setQEmail(e.target.value)}
                    placeholder="To notify you when the video airs"
                    required
                    className="w-full px-3.5 py-2 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-1">
                  Your Spiritual Question in Detail *
                </label>
                <textarea
                  value={qText}
                  onChange={(e) => setQText(e.target.value)}
                  placeholder="Explain your question clearly with any scriptures or circumstances..."
                  rows={4}
                  required
                  className="w-full px-3.5 py-2.5 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#122236] hover:bg-[#B86C20] text-white font-bold text-sm py-3 rounded transition-all shadow"
              >
                Submit Question to Pastor Solomon Amao →
              </button>
            </form>
          )}
        </section>
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
                <strong>Scriptures:</strong> {activeVideo.scripture} • Asked by: {activeVideo.seekerName}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {activeVideo.summary}
              </p>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>Teacher: Pastor Solomon Amao</span>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="bg-[#B86C20] hover:bg-[#92400E] text-white px-4 py-1.5 rounded font-bold"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
