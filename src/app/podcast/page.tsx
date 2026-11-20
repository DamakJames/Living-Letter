'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface SpotifyEpisode {
  episodeNumber: number;
  title: string;
  series: string;
  scripture: string;
  duration: string;
  spotifyId: string;
  youtubeId: string;
  description: string;
}

const SPOTIFY_EPISODES: SpotifyEpisode[] = [
  {
    episodeNumber: 1,
    title: 'Ending the Shame and Restoring the Lost Years',
    series: 'It Shall End in Praise',
    scripture: 'Joel 2:18–27 • Romans 8:28',
    duration: '42:15',
    spotifyId: '5aHcKrt7joAjtyQ8cfzHnl',
    youtubeId: '1C74ty-yRYc',
    description: 'Pastor Solomon Amao begins this foundational broadcast unveiling God’s covenant promise to heal past trauma, restore wasted years, and turn spiritual reproach into a living praise.',
  },
  {
    episodeNumber: 2,
    title: 'The Smallness that Attracts God',
    series: 'It Shall End in Praise',
    scripture: 'Zechariah 4:1–10',
    duration: '38:30',
    spotifyId: '1jVZPfKB9uT0pstWaRHtTT',
    youtubeId: 'ZMJsAs7hrvY',
    description: 'Do not despise the day of small beginnings. Understanding how God bypasses human strength, self-sufficiency, and pride to manifest His glory through humble vessels.',
  },
  {
    episodeNumber: 3,
    title: 'The Divine Intention that Brings About Divine Intervention',
    series: 'It Shall End in Praise',
    scripture: 'Romans 8:28 • Genesis 50:20',
    duration: '45:10',
    spotifyId: '7nJOk6CT6fDb9JRJKCVWBm',
    youtubeId: 'u3LfmOcsklE',
    description: 'Examining how God orchestrates every setback, delay, and contradiction behind the scenes to execute His sovereign, unshakeable redemptive purpose.',
  },
  {
    episodeNumber: 4,
    title: 'Not Yet: But Not Forgotten',
    series: 'It Shall End in Praise',
    scripture: 'John 11:1–44',
    duration: '39:55',
    spotifyId: '3xXYRf6FxFXzlNAjF6DtLx',
    youtubeId: 'tnJqcoxBwb0',
    description: 'When answers seem delayed and hope feels deferred like Lazarus in the tomb. Discover why Jesus’ delay was not denial, but a setup for a greater resurrection manifestation.',
  },
  {
    episodeNumber: 5,
    title: 'The Morning Always Follows the Night',
    series: 'It Shall End in Praise',
    scripture: 'Psalm 30:1–12',
    duration: '41:20',
    spotifyId: '7e48HD24gfnPQHEb8Tu0g0',
    youtubeId: '9IkE_BqNQ34',
    description: 'Weeping may endure for a night, but joy comes in the morning. Pastor Solomon provides comforting pastoral guidance on maintaining praise through dark seasons.',
  },
  {
    episodeNumber: 6,
    title: 'God’s Goodness is for my Good',
    series: 'It Shall End in Praise',
    scripture: 'Romans 8:28–39',
    duration: '44:05',
    spotifyId: '6RKwApj17kZR40dXEP6qKe',
    youtubeId: 'YcA1bpLa-iY',
    description: 'If God is for us, who can be against us? A thorough theological exposition on the unstoppable goodness of God working all things together for those who love Him.',
  },
  {
    episodeNumber: 7,
    title: 'From Pity to Praise',
    series: 'It Shall End in Praise',
    scripture: 'Psalm 113:1–9',
    duration: '46:30',
    spotifyId: '4nboCcKes5hI7E9REVoP4i',
    youtubeId: 'sb3BgWvBQKM',
    description: 'The triumphant culmination of the series: God lifts the needy out of the dust and seats them with princes. Walking in permanent, settled victory.',
  },
];

export default function PodcastPage() {
  const [activeEp, setActiveEp] = useState<SpotifyEpisode>(SPOTIFY_EPISODES[0]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10">
      {/* Page Header */}
      <section className="bg-[#122236] text-white py-16 mb-12 border-b border-[#0B1522]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FBBF24] mb-3">
            Expository Audio Broadcasts
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white mb-4">
            The Living Letters Podcast
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
            Listen to biblical audio teachings and expository sermons from The Living Letters. Strengthen your faith and walk in spiritual authority.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 text-xs">
            <a
              href="https://open.spotify.com/show/4UdQKlyfbCw6M7s2DJMMvy?si=4f2b3401707c4203"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1DB954] hover:bg-[#1aa34a] text-white font-bold px-4 py-2 rounded flex items-center gap-2 transition-all shadow-sm"
            >
              <span>🎧</span> Follow Show on Spotify
            </a>
            <a
              href="https://open.spotify.com/user/31cz5r5xbznpwaqcktkykpiwaatq?si=sSKNZO2cR-2ohGc-wDY7Fg&nd=1&dlsi=32f9096324e2443c"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded transition-colors"
            >
              Spotify Profile
            </a>
            <a
              href="https://www.youtube.com/@the-livingletters"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-semibold px-4 py-2 rounded transition-colors"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* Featured Spotify Player Card */}
        <div className="bg-[#122236] text-white rounded-xl p-6 sm:p-10 shadow-xl border border-[#0B1522] mb-14">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FBBF24] block mb-1">
                Now Selected • Episode {activeEp.episodeNumber} of 7
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {activeEp.title}
              </h2>
              <span className="text-xs text-gray-400 mt-1 block">
                {activeEp.scripture} • Speaker: <strong>Pastor Solomon Amao</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://open.spotify.com/episode/${activeEp.spotifyId}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1DB954] hover:bg-[#1aa34a] text-white text-xs font-bold px-3.5 py-2 rounded flex items-center gap-1.5 transition-colors"
              >
                <span>↗</span> Open in Spotify
              </a>
              <a
                href={`https://www.youtube.com/watch?v=${activeEp.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#FF0000] hover:bg-[#CC0000] text-white text-xs font-bold px-3.5 py-2 rounded flex items-center gap-1.5 transition-colors"
              >
                <span>▶</span> Watch on YouTube
              </a>
            </div>
          </div>

          {/* Official Spotify Iframe Player */}
          <div className="w-full rounded-xl overflow-hidden mb-6 shadow-2xl">
            <iframe
              src={`https://open.spotify.com/embed/episode/${activeEp.spotifyId}?utm_source=generator&theme=0`}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`Spotify Episode ${activeEp.episodeNumber}`}
              className="rounded-xl"
            />
          </div>

          {/* Episode Notes */}
          <div className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-[#1C3554]/50 p-5 rounded-lg border border-white/5">
            <strong className="text-white block mb-1">Expository Overview:</strong>
            {activeEp.description}
          </div>
        </div>

        {/* All 7 Episodes Catalog */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] block mb-1">
                Full 7-Part Series Catalog
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#122236]">
                It Shall End in Praise (All 7 Episodes)
              </h3>
            </div>
            <a
              href="https://open.spotify.com/show/4UdQKlyfbCw6M7s2DJMMvy?si=4f2b3401707c4203"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[#1DB954] hover:underline"
            >
              Open Complete Show on Spotify →
            </a>
          </div>

          <div className="space-y-4">
            {SPOTIFY_EPISODES.map((ep) => {
              const isSelected = activeEp.episodeNumber === ep.episodeNumber;
              return (
                <div
                  key={ep.episodeNumber}
                  onClick={() => setActiveEp(ep)}
                  className={`bg-white border rounded-lg p-6 shadow-sm cursor-pointer transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
                    isSelected
                      ? 'border-[#B86C20] ring-2 ring-[#B86C20] bg-[#FAF8F5]'
                      : 'border-[#E6E0D6] hover:border-[#B86C20]'
                  }`}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1 ${
                        isSelected
                          ? 'bg-[#B86C20] text-white'
                          : 'bg-[#F3EFE9] text-[#122236]'
                      }`}
                    >
                      {ep.episodeNumber}
                    </span>

                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#64748B] mb-1">
                        <span className="font-bold text-[#B86C20]">{ep.series}</span>
                        <span>•</span>
                        <span>{ep.scripture}</span>
                        <span>•</span>
                        <span>{ep.duration}</span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-[#122236] mb-1.5 hover:text-[#B86C20] transition-colors">
                        Episode {ep.episodeNumber}: {ep.title}
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                        {ep.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0">
                    <button
                      className={`text-xs font-bold px-4 py-2 rounded transition-colors ${
                        isSelected
                          ? 'bg-[#122236] text-white'
                          : 'bg-[#F3EFE9] text-[#122236] hover:bg-[#122236] hover:text-white'
                      }`}
                    >
                      {isSelected ? '▶ Playing in Embed' : 'Select & Play'}
                    </button>
                    <a
                      href={`https://open.spotify.com/episode/${ep.spotifyId}`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 text-[#1DB954] hover:bg-emerald-50 rounded"
                      title="Open in Spotify"
                      aria-label="Spotify Link"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.306c-.215.353-.674.464-1.027.249-2.812-1.718-6.353-2.106-10.522-1.154-.403.092-.806-.16-.898-.563-.092-.403.16-.806.563-.898 4.567-1.043 8.475-.601 11.635 1.339.353.215.464.674.249 1.027zm1.468-3.266c-.27.44-.848.577-1.288.307-3.22-1.979-8.128-2.552-11.936-1.396-.496.15-1.024-.134-1.174-.63-.15-.496.134-1.024.63-1.174 4.356-1.322 9.776-.684 13.461 1.605.44.27.577.848.307 1.288zm.126-3.414c-3.863-2.294-10.238-2.506-13.916-1.39-.592.18-1.22-.161-1.4-.753-.18-.592.161-1.22.753-1.4 4.234-1.285 11.278-1.037 15.727 1.604.532.316.707 1.008.391 1.54-.316.532-1.008.707-1.555.399z" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* YouTube Video Series Cross-Reference */}
        <div className="bg-white border border-[#E6E0D6] p-8 rounded-xl shadow-sm mb-16 text-center max-w-2xl mx-auto">
          <h4 className="font-serif text-xl font-bold text-[#122236] mb-2">
            Watch the Full Video Series on YouTube
          </h4>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
            In addition to Spotify audio, every episode of &quot;It Shall End in Praise&quot; and &quot;Psalm 23 Explained&quot; is available as a full video broadcast on our YouTube channel.
          </p>
          <div className="flex justify-center gap-3">
            <a
              href="https://www.youtube.com/playlist?list=PLUDoUc2H1zpKIWY53EYfL7ergcizceQ9y"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FF0000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded transition-colors shadow-sm"
            >
              ▶ Watch 7-Part Video Playlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
