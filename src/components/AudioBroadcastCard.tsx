'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface EpisodeItem {
  num: number;
  title: string;
  scripture: string;
  spotifyId: string;
  youtubeId: string;
  duration: string;
}

const EPISODES: EpisodeItem[] = [
  {
    num: 1,
    title: 'Ending the Shame and Restoring the Lost Years',
    scripture: 'Joel 2:18–27',
    spotifyId: '5aHcKrt7joAjtyQ8cfzHnl',
    youtubeId: '1C74ty-yRYc',
    duration: '42:15',
  },
  {
    num: 2,
    title: 'The Smallness that Attracts God',
    scripture: 'Zechariah 4:1–10',
    spotifyId: '1jVZPfKB9uT0pstWaRHtTT',
    youtubeId: 'ZMJsAs7hrvY',
    duration: '38:30',
  },
  {
    num: 3,
    title: 'The Divine Intention that Brings About Divine Intervention',
    scripture: 'Romans 8:28',
    spotifyId: '7nJOk6CT6fDb9JRJKCVWBm',
    youtubeId: 'u3LfmOcsklE',
    duration: '45:10',
  },
  {
    num: 4,
    title: 'Not Yet: But Not Forgotten',
    scripture: 'John 11:1–44',
    spotifyId: '3xXYRf6FxFXzlNAjF6DtLx',
    youtubeId: 'tnJqcoxBwb0',
    duration: '39:55',
  },
  {
    num: 5,
    title: 'The Morning Always Follows the Night',
    scripture: 'Psalm 30:1–12',
    spotifyId: '7e48HD24gfnPQHEb8Tu0g0',
    youtubeId: '9IkE_BqNQ34',
    duration: '41:20',
  },
  {
    num: 6,
    title: 'God’s Goodness is for my Good',
    scripture: 'Romans 8:28–39',
    spotifyId: '6RKwApj17kZR40dXEP6qKe',
    youtubeId: 'YcA1bpLa-iY',
    duration: '44:05',
  },
  {
    num: 7,
    title: 'From Pity to Praise',
    scripture: 'Psalm 113:1–9',
    spotifyId: '4nboCcKes5hI7E9REVoP4i',
    youtubeId: 'sb3BgWvBQKM',
    duration: '46:30',
  },
];

export default function AudioBroadcastCard() {
  const [selectedEp, setSelectedEp] = useState<EpisodeItem>(EPISODES[0]);

  return (
    <section className="py-16 bg-[#122236] text-white border-b border-[#0B1522]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Info */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] mb-2 block">
              Featured Podcast Series
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
              It Shall End in Praise
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-medium mb-4">
              The Living Letters Expository Broadcast • Episode {selectedEp.num} ({selectedEp.scripture})
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              In the life of the believer, trials, contradictions, and seasons of delay are never the final chapter. Christ always leads us in triumph. Listen to the 7-part expository broadcast series streaming on Spotify and YouTube.
            </p>

            {/* Syndication Links */}
            <div className="flex flex-wrap gap-3 items-center pt-1 mb-6">
              <a
                href="https://open.spotify.com/show/4UdQKlyfbCw6M7s2DJMMvy?si=4f2b3401707c4203"
                target="_blank"
                rel="noreferrer"
                className="bg-[#1DB954] hover:bg-[#1aa34a] text-white text-xs font-bold px-4 py-2.5 rounded flex items-center gap-2 transition-all shadow-sm"
              >
                <span>🎧</span> Full Spotify Show
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLUDoUc2H1zpKIWY53EYfL7ergcizceQ9y"
                target="_blank"
                rel="noreferrer"
                className="bg-[#FF0000] hover:bg-[#CC0000] text-white text-xs font-bold px-4 py-2.5 rounded flex items-center gap-2 transition-all shadow-sm"
              >
                <span>▶</span> YouTube Playlist (7 Videos)
              </a>
              <Link
                href="/podcast"
                className="text-xs font-bold text-[#FBBF24] hover:underline"
              >
                View All Episodes →
              </Link>
            </div>

            {/* Quick Episode Switcher Buttons */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                Select Episode (1–7):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {EPISODES.map((ep) => (
                  <button
                    key={ep.num}
                    onClick={() => setSelectedEp(ep)}
                    className={`text-xs font-bold px-3 py-1.5 rounded transition-all ${
                      selectedEp.num === ep.num
                        ? 'bg-[#B86C20] text-white ring-2 ring-[#FBBF24]'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    Ep {ep.num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Spotify Official Player Embed */}
          <div className="lg:col-span-6 bg-[#0B1522] p-5 rounded-xl border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" />
                <span className="font-bold text-white">
                  Episode {selectedEp.num}: {selectedEp.title}
                </span>
              </div>
              <span className="text-[#FBBF24] font-semibold">{selectedEp.duration}</span>
            </div>

            {/* Live Spotify Episode Iframe Player */}
            <div className="w-full rounded-lg overflow-hidden mb-3">
              <iframe
                src={`https://open.spotify.com/embed/episode/${selectedEp.spotifyId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`Spotify Episode ${selectedEp.num}: ${selectedEp.title}`}
                className="rounded-lg shadow-inner"
              />
            </div>

            <div className="flex justify-between items-center text-[11px] text-gray-400">
              <a
                href={`https://open.spotify.com/episode/${selectedEp.spotifyId}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1DB954] underline transition-colors"
              >
                Open directly in Spotify app ↗
              </a>
              <a
                href={`https://www.youtube.com/watch?v=${selectedEp.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FF0000] underline transition-colors"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
