'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface PodcastEpisode {
  id: string;
  title: string;
  series: string;
  scripture: string;
  duration: string;
  date: string;
  description: string;
  audioUrl: string;
}

const EPISODES: PodcastEpisode[] = [
  {
    id: 'ep-1',
    title: 'It Shall End in Praise: Walking in Victory Through Every Valley',
    series: 'Walking in the Spirit',
    scripture: '2 Corinthians 2:14 • Psalm 30:11–12',
    duration: '42:15',
    date: 'Current Release',
    description: 'No matter what season of contradiction or silence you are experiencing, Christ always leads us in triumph. In this broadcast, Pastor Solomon Amao unpacks the biblical posture of unwavering praise.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 'ep-2',
    title: 'Living as God’s Letter to a Broken Generation',
    series: 'Living as God’s Letter',
    scripture: '2 Corinthians 3:1–6',
    duration: '38:40',
    date: 'Pastoral Series',
    description: 'The foundational message unveiling the calling of every believer: written not with ink on paper, but by the Holy Spirit upon human hearts, known and read by all people.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 'ep-3',
    title: 'The Law of the Spirit of Life vs. Religious Bondage',
    series: 'The Finished Work',
    scripture: 'Romans 8:1–4',
    duration: '45:10',
    date: 'Theological Exegesis',
    description: 'Why self-effort and legalistic guilt cannot produce genuine holiness. Discover how the supernatural life of the indwelling Holy Spirit produces effortless righteousness.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 'ep-4',
    title: 'Hearing God’s Voice in Times of Life Transition',
    series: 'Walking in the Spirit',
    scripture: 'John 10:27 • Isaiah 30:21',
    duration: '34:25',
    date: 'Spiritual Guidance',
    description: 'How to discern the gentle whisper of the Holy Spirit amidst modern noise, anxiety, and conflicting voices. Practical biblical steps for knowing God’s clear direction.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
];

export default function PodcastPage() {
  const [currentEpisode, setCurrentEpisode] = useState<PodcastEpisode>(EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(145); // simulated seconds
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 1.25 | 1.5>(1);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = Math.floor(secs % 60);
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10">
      {/* Page Header */}
      <section className="bg-[#122236] text-white py-16 mb-12 border-b border-[#0B1522]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FBBF24] mb-3">
            Expository Audio Sermons
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white mb-4">
            Living Letters Podcast
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
            Sound doctrine, verse-by-verse preaching, and pastoral encouragement by Pastor Solomon Amao for grounded daily discipleship.
          </p>

          <div className="flex justify-center items-center gap-3 text-xs">
            <span className="text-gray-400">Available on:</span>
            <span className="bg-white/10 hover:bg-white/20 text-white font-semibold px-3 py-1.5 rounded transition-colors">
              Spotify Podcasts
            </span>
            <span className="bg-white/10 hover:bg-white/20 text-white font-semibold px-3 py-1.5 rounded transition-colors">
              YouTube Music
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* Featured Live Player */}
        <div className="bg-[#122236] text-white rounded-lg p-6 sm:p-8 shadow-xl border border-[#0B1522] mb-14">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FBBF24] block mb-1">
                Now Playing • {currentEpisode.series}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {currentEpisode.title}
              </h2>
              <span className="text-xs text-gray-400 mt-1 block">
                {currentEpisode.scripture} • Minister: <strong>Pastor Solomon Amao</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              {(['1', '1.25', '1.5'] as const).map((spd) => {
                const num = parseFloat(spd) as 1 | 1.25 | 1.5;
                return (
                  <button
                    key={spd}
                    onClick={() => setPlaybackSpeed(num)}
                    className={`text-xs font-bold px-2.5 py-1 rounded transition-colors ${
                      playbackSpeed === num
                        ? 'bg-[#B86C20] text-white'
                        : 'bg-white/10 text-gray-300 hover:text-white'
                    }`}
                  >
                    {spd}x
                  </button>
                );
              })}
            </div>
          </div>

          {/* Player Controls Bar */}
          <div className="space-y-4">
            {/* Progress track */}
            <div className="space-y-1">
              <div
                className="w-full bg-white/20 h-2 rounded-full overflow-hidden cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  setCurrentTime(Math.floor(pos * 2400));
                }}
              >
                <div
                  className="bg-[#B86C20] h-full transition-all"
                  style={{ width: `${Math.min(100, (currentTime / 2400) * 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-gray-400">
                <span>{formatTime(currentTime)}</span>
                <span>{currentEpisode.duration}</span>
              </div>
            </div>

            {/* Play/Pause Button */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={togglePlay}
                className="flex items-center gap-3 bg-[#B86C20] hover:bg-[#92400E] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all shadow-md"
              >
                <span>{isPlaying ? '❚❚ Pause Sermon' : '▶ Play Sermon'}</span>
              </button>

              <span className="text-xs text-gray-400">
                Audio Stream: 128kbps Stereo Master
              </span>
            </div>
          </div>

          {/* Episode Notes */}
          <div className="mt-6 pt-6 border-t border-white/10 text-xs sm:text-sm text-gray-300 leading-relaxed">
            <strong className="text-white block mb-1">Message Overview:</strong>
            {currentEpisode.description}
          </div>
        </div>

        {/* Sermon Catalog */}
        <div className="mb-14">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-serif text-2xl font-bold text-[#122236]">
              Recent Podcast Episodes
            </h3>
            <span className="text-xs text-[#64748B]">
              Total Sermons: <strong>{EPISODES.length}</strong>
            </span>
          </div>

          <div className="space-y-4">
            {EPISODES.map((ep) => {
              const isSelected = currentEpisode.id === ep.id;
              return (
                <div
                  key={ep.id}
                  onClick={() => {
                    setCurrentEpisode(ep);
                    setIsPlaying(true);
                  }}
                  className={`bg-white border rounded p-6 shadow-sm cursor-pointer transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
                    isSelected
                      ? 'border-[#B86C20] ring-1 ring-[#B86C20] bg-[#FAF8F5]'
                      : 'border-[#E6E0D6] hover:border-[#B86C20]'
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs text-[#64748B] mb-1.5">
                      <span className="font-bold text-[#B86C20]">{ep.series}</span>
                      <span>•</span>
                      <span>{ep.scripture}</span>
                      <span>•</span>
                      <span>{ep.date}</span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-[#122236] mb-1 hover:text-[#B86C20] transition-colors">
                      {ep.title}
                    </h4>
                    <p className="text-xs text-[#475569] line-clamp-2">
                      {ep.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-xs font-semibold text-[#64748B]">
                      {ep.duration}
                    </span>
                    <button
                      className={`text-xs font-bold px-4 py-2 rounded transition-colors ${
                        isSelected && isPlaying
                          ? 'bg-[#122236] text-white'
                          : 'bg-[#FAF8F5] text-[#122236] border border-[#E6E0D6] hover:bg-[#122236] hover:text-white'
                      }`}
                    >
                      {isSelected && isPlaying ? 'Playing' : 'Listen Now'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note on Free Audio Syndication */}
        <div className="bg-white border border-[#E6E0D6] p-8 rounded text-center max-w-2xl mx-auto mb-16 shadow-sm">
          <h4 className="font-serif text-lg font-bold text-[#122236] mb-2">
            Freely Received, Freely Shared
          </h4>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
            Every sermon preached by Pastor Solomon Amao is made available free of charge to build up the church worldwide. No paywalls, no subscriptions.
          </p>
          <Link
            href="/contact"
            className="text-xs font-bold text-[#B86C20] hover:underline"
          >
            Have a question on a sermon? Submit it to Heart’s Questions →
          </Link>
        </div>
      </div>
    </div>
  );
}
