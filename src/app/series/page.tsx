'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface StudyPart {
  partNumber: number;
  title: string;
  scripture: string;
  objective: string;
  coreTruths: string[];
  reflectionQuestions: string[];
}

const SERIES_PARTS: StudyPart[] = [
  {
    partNumber: 1,
    title: 'Written Not with Ink: The Supernatural Work of the Spirit',
    scripture: '2 Corinthians 3:1–3',
    objective: 'Understand how God replaces outward religious regulations with the indwelling, writing ministry of the Holy Spirit.',
    coreTruths: [
      'True Christian ministry produces transformed lives, not merely letters of recommendation.',
      'The Holy Spirit writes upon the fleshy tablets of the heart, transforming our desires from within.',
      'Believers are public epistles designed to be known and read by an unbelieving world.',
    ],
    reflectionQuestions: [
      'In what areas of your life are you relying on outward religious performance rather than the Holy Spirit?',
      'If your daily life were the only letter someone read about Jesus, what would it say about Him?',
    ],
  },
  {
    partNumber: 2,
    title: 'Tablets of Human Hearts: Internalizing Divine Transformation',
    scripture: '2 Corinthians 3:3 • Jeremiah 31:33 • Ezekiel 36:26–27',
    objective: 'Explore the prophetic fulfillment of the New Covenant where God removes the stone heart and imparts His divine nature.',
    coreTruths: [
      'The law of Moses demanded righteousness from the outside, but could not impart life.',
      'The New Covenant provides both the forgiveness of sins and the inward power to obey God.',
      'Heart transformation always precedes authentic behavioral victory.',
    ],
    reflectionQuestions: [
      'How does knowing your heart has been recreated by God change your approach to overcoming personal struggles?',
      'How can you actively cultivate sensitivity to the Holy Spirit’s inward prompts this week?',
    ],
  },
  {
    partNumber: 3,
    title: 'Our Sufficiency Is from God: Overcoming Inadequacy',
    scripture: '2 Corinthians 3:4–5',
    objective: 'Cast aside spiritual self-sufficiency and discover how Christ’s all-sufficiency empowers everyday Christian living.',
    coreTruths: [
      'We are not sufficient in ourselves to claim anything as coming from us.',
      'Divine sufficiency is released at the exact point where human reliance ends.',
      'Our confidence before God is rooted strictly in Christ, never in personal achievement.',
    ],
    reflectionQuestions: [
      'Where have you felt most unqualified or inadequate in serving God or living honorably?',
      'How does resting in God’s sufficiency free you from anxiety and comparison?',
    ],
  },
  {
    partNumber: 4,
    title: 'Ministers of a New Covenant: The Letter Kills, The Spirit Gives Life',
    scripture: '2 Corinthians 3:6–11',
    objective: 'Distinguish clearly between the ministry of death (the Law) and the surpassing ministry of righteousness and life (the Gospel).',
    coreTruths: [
      'The letter of the law condemns; the Spirit of the living God imparts resurrection life.',
      'The glory of the New Covenant far surpasses the temporary fading glory of the Old Covenant.',
      'Living under grace produces liberty, bold prayer, and supernatural love.',
    ],
    reflectionQuestions: [
      'Have you ever fallen into condemning yourself or others through religious legalism?',
      'How does the surpassing glory of grace provide lasting peace in your conscience?',
    ],
  },
  {
    partNumber: 5,
    title: 'From Glory to Glory: Beholding the Lord and Becoming Like Him',
    scripture: '2 Corinthians 3:12–18',
    objective: 'Learn the spiritual principle of beholding the glory of Christ through the Word and being transformed into His image by the Spirit.',
    coreTruths: [
      'The veil has been removed in Christ; we now come with unveiled faces before the Father.',
      'Where the Spirit of the Lord is, there is liberty—liberty from fear, guilt, and religious pretense.',
      'We are transformed into the same image from one degree of glory to another by the Lord who is the Spirit.',
    ],
    reflectionQuestions: [
      'What are you currently looking at most: your personal flaws, or the beauty and victory of Christ?',
      'What step of faith will you take this week to live as an authentic living letter in your community?',
    ],
  },
];

export default function SeriesPage() {
  const [activePart, setActivePart] = useState<number>(1);
  const currentPartData = SERIES_PARTS.find((p) => p.partNumber === activePart) || SERIES_PARTS[0];

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10">
      {/* Header */}
      <section className="bg-[#122236] text-white py-16 mb-12 border-b border-[#0B1522]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FBBF24] mb-3">
            Structured Discipleship Curriculums
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white mb-4">
            Teaching Series &amp; Studies
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Sequential multi-part biblical studies from The Living Letters designed to move believers systematically from spiritual foundation to maturity.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* Verified Video Playlists From Official YouTube Channel */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] block mb-1">
              Official Broadcast Playlists
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#122236]">
              Featured YouTube &amp; Podcast Playlists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Playlist 1: It Shall End in Praise */}
            <div className="bg-white border border-[#E6E0D6] rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="aspect-video w-full bg-black relative">
                  <iframe
                    src="https://www.youtube.com/embed/videoseries?list=PLUDoUc2H1zpKIWY53EYfL7ergcizceQ9y"
                    title="It Shall End in Praise Series"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#B86C20] font-bold uppercase tracking-wider mb-2">
                    <span>7 Full Episodes</span>
                    <span>•</span>
                    <span>Expository Series</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#122236] mb-3">
                    It Shall End in Praise Series
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    This foundational series walks through Joel 2, Zechariah 4, Romans 8, and Psalm 113, proving that in Christ Jesus, suffering and shame are never the final word.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-[#EFEAE1] flex items-center justify-between">
                <a
                  href="https://open.spotify.com/show/4UdQKlyfbCw6M7s2DJMMvy?si=4f2b3401707c4203"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#1DB954] hover:underline"
                >
                  🎧 Listen on Spotify
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PLUDoUc2H1zpKIWY53EYfL7ergcizceQ9y"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#FF0000] hover:underline"
                >
                  ▶ Open on YouTube
                </a>
              </div>
            </div>

            {/* Playlist 2: Psalm 23 Series */}
            <div className="bg-white border border-[#E6E0D6] rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="aspect-video w-full bg-black relative">
                  <iframe
                    src="https://www.youtube.com/embed/videoseries?list=PLUDoUc2H1zpLR0tk5-9fSRAKGiISWvSVe"
                    title="Psalm 23 Explained Series"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#B86C20] font-bold uppercase tracking-wider mb-2">
                    <span>Multi-Part Series</span>
                    <span>•</span>
                    <span>Psalm 23</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#122236] mb-3">
                    The Sheep’s Story: Yahweh Takes Good Care of Me
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    An unforgettable verse-by-verse examination of Psalm 23 from the perspective of the sheep, highlighting the Shepherd&apos;s providence, guidance through valleys, and prepared table.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-[#EFEAE1] flex items-center justify-between">
                <span className="text-xs text-[#64748B]">Verse-by-Verse Exegesis</span>
                <a
                  href="https://www.youtube.com/playlist?list=PLUDoUc2H1zpLR0tk5-9fSRAKGiISWvSVe"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#FF0000] hover:underline"
                >
                  ▶ Open Playlist on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Flagship Series Header Card */}
        <div className="bg-white border border-[#E6E0D6] rounded-xl p-8 sm:p-10 shadow-sm mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] block mb-2">
              Curriculum Study • 5-Part In-Depth Exegesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122236] mb-4">
              Living as God’s Letter
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
              An in-depth verse-by-verse journey through <strong>2 Corinthians 3:1–18</strong>, examining how God transforms believers from religious conformity into living demonstrations of His grace, truth, and Holy Spirit authority.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#122236]">
              <span className="bg-[#FAF8F5] border border-[#E6E0D6] px-3.5 py-1.5 rounded">
                Ministry: <strong>The Living Letters</strong>
              </span>
              <span className="bg-[#FAF8F5] border border-[#E6E0D6] px-3.5 py-1.5 rounded">
                Text: <strong>2 Corinthians 3:1–18</strong>
              </span>
              <span className="bg-[#FAF8F5] border border-[#E6E0D6] px-3.5 py-1.5 rounded">
                Structure: <strong>5 Study Sessions</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Lesson Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Part Selection Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-serif text-base font-bold text-[#122236] px-1 mb-2">
              Select Study Session
            </h3>

            {SERIES_PARTS.map((part) => {
              const isSelected = activePart === part.partNumber;
              return (
                <button
                  key={part.partNumber}
                  onClick={() => setActivePart(part.partNumber)}
                  className={`w-full text-left p-4 rounded-lg border transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'bg-[#122236] text-white border-[#122236] shadow-sm'
                      : 'bg-white text-[#1E293B] border-[#E6E0D6] hover:border-[#B86C20]'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-[#B86C20] text-white'
                        : 'bg-[#F3EFE9] text-[#122236]'
                    }`}
                  >
                    {part.partNumber}
                  </span>
                  <div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm leading-snug mb-1">
                      Part {part.partNumber}: {part.title.split(':')[0]}
                    </h4>
                    <span
                      className={`text-[11px] block ${
                        isSelected ? 'text-gray-300' : 'text-[#64748B]'
                      }`}
                    >
                      {part.scripture}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Part Study Content */}
          <div className="lg:col-span-8 bg-white border border-[#E6E0D6] rounded-xl p-6 sm:p-10 shadow-sm">
            <div className="border-b border-[#EFEAE1] pb-6 mb-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B86C20] mb-2">
                <span>Session {currentPartData.partNumber} of 5</span>
                <span>•</span>
                <span>{currentPartData.scripture}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#122236] mb-4">
                {currentPartData.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed bg-[#FAF8F5] border-l-4 border-[#B86C20] p-4 rounded-r">
                <strong>Session Objective:</strong> {currentPartData.objective}
              </p>
            </div>

            {/* Core Truths */}
            <div className="mb-8">
              <h4 className="font-serif text-lg font-bold text-[#122236] mb-4">
                Key Theological Convictions
              </h4>
              <ul className="space-y-3">
                {currentPartData.coreTruths.map((truth, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#334155]">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{truth}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reflection Questions */}
            <div className="mb-8 pt-6 border-t border-[#EFEAE1]">
              <h4 className="font-serif text-lg font-bold text-[#122236] mb-4">
                Personal Meditation &amp; Discipleship Questions
              </h4>
              <div className="space-y-3">
                {currentPartData.reflectionQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAF8F5] border border-[#E6E0D6] rounded text-xs sm:text-sm text-[#334155]"
                  >
                    <span className="font-bold text-[#B86C20] mr-2">Q{idx + 1}:</span>
                    {q}
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="pt-6 border-t border-[#EFEAE1] flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                href="/podcast"
                className="text-xs font-bold text-[#B86C20] hover:underline"
              >
                ▶ Listen to audio accompaniment on the Podcast page
              </Link>

              {activePart < 5 ? (
                <button
                  onClick={() => setActivePart(activePart + 1)}
                  className="bg-[#122236] hover:bg-[#B86C20] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded transition-all"
                >
                  Next Session (Part {activePart + 1}) →
                </button>
              ) : (
                <Link
                  href="/qa"
                  className="bg-[#B86C20] hover:bg-[#92400E] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded transition-all"
                >
                  Continue to Heart’s Questions →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
