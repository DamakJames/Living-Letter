'use client';

import React from 'react';
import Link from 'next/link';
import ThreePillars from '../../components/ThreePillars';

export default function AboutPage() {
  const beliefs = [
    {
      num: '01',
      title: 'The Holy Scriptures',
      text: 'We believe the 66 books of the Old and New Testaments are the verbally inspired Word of God, inerrant in their original manuscripts, and the supreme, final authority for Christian faith and life.',
      ref: '2 Timothy 3:16–17 • 2 Peter 1:20–21',
    },
    {
      num: '02',
      title: 'The Triune God',
      text: 'We believe in one eternal, sovereign God, existing eternally in three co-equal persons: the Father, the Son, and the Holy Spirit, each possessing all the divine attributes.',
      ref: 'Deuteronomy 6:4 • Matthew 28:19 • 2 Corinthians 13:14',
    },
    {
      num: '03',
      title: 'The Person & Work of Jesus Christ',
      text: 'We believe that the Lord Jesus Christ is fully God and fully man, conceived of the Holy Spirit, born of the virgin Mary, lived a sinless life, died as an atoning substitutionary sacrifice on the cross, rose bodily from the dead, and ascended to the Father’s right hand.',
      ref: 'John 1:1,14 • 1 Corinthians 15:3–4 • Hebrews 1:3',
    },
    {
      num: '04',
      title: 'Justification by Grace Through Faith',
      text: 'We believe salvation is entirely by the free grace of God through faith in the finished work of Jesus Christ, completely apart from human merit, ritual, or works of the law.',
      ref: 'Ephesians 2:8–9 • Romans 3:24–26 • Titus 3:5',
    },
    {
      num: '05',
      title: 'The Ministry of the Holy Spirit',
      text: 'We believe the Holy Spirit regenerates, indwells, seals, sanctifies, and empowers every believer. He writes God’s laws on human hearts and produces spiritual fruit and spiritual gifts for edification.',
      ref: 'Romans 8:9–11 • Galatians 5:22–23 • 2 Corinthians 3:3',
    },
    {
      num: '06',
      title: 'The Believer as a Living Letter',
      text: 'We believe every disciple is called to be a public, living representation of Christ to a watching world—known and read by all men in personal conduct, family life, and societal influence.',
      ref: '2 Corinthians 3:1–3 • Matthew 5:14–16 • Colossians 3:17',
    },
  ];

  const approaches = [
    {
      step: '1',
      title: 'Expository Preaching & Teaching',
      desc: 'Going verse-by-verse through the Scriptures to uncover the authorial intent, doctrinal depth, and Christological focus of every passage.',
    },
    {
      step: '2',
      title: 'Systematic Study Series',
      desc: 'Developing structured multi-part study curriculums that take believers progressively from milk to solid theological meat.',
    },
    {
      step: '3',
      title: 'Digital Media & Audio Broadcasts',
      desc: 'Releasing weekly high-quality podcasts and audio messages accessible to believers worldwide on Spotify and YouTube.',
    },
    {
      step: '4',
      title: 'Question-Driven Discipleship (Heart’s Questions)',
      desc: 'Addressing real-world dilemmas, doctrinal confusion, and spiritual obstacles through twice-weekly video answers.',
    },
    {
      step: '5',
      title: 'Practical Life Application',
      desc: 'Bridging high theology with daily life—empowering Christians to rule through the Gospel in work, relationships, and leadership.',
    },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#122236] text-white py-16 border-b border-[#0B1522]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FBBF24] mb-3">
            Our Calling &amp; Vision
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white mb-4">
            About Living Letters
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            A Christ-centered teaching and media ministry equipping believers to live as letters written by the Holy Spirit—known and read by all.
          </p>
        </div>
      </section>

      {/* Founder & Origin Section */}
      <section className="py-20 bg-white border-b border-[#E6E0D6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] mb-2 block">
                The Founder &amp; Origin
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122236] mb-6">
                Pastor Solomon Amao
              </h2>

              <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-4">
                Pastor Solomon Amao is a dedicated biblical teacher, scholar, and pastoral mentor with a profound passion for raising believers who are grounded in sound doctrine, led by the Holy Spirit, and actively expressive of Jesus Christ in daily life.
              </p>

              <div className="scripture-blockquote my-6">
                &quot;The entire name and concept of &apos;Living Letters&apos; was born when I spent prolonged time meditating on <strong>2 Corinthians 3:1–18</strong>. The Holy Spirit made it clear: God is not merely looking for people to recite doctrines, but to become living, breathing epistles authored by Christ and read by a watching generation.&quot;
                <span className="block font-sans not-italic font-bold text-xs text-[#B86C20] uppercase tracking-wider mt-2">
                  — Pastor Solomon Amao
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                Balancing deep pastoral work with academic responsibilities across educational institutions, Pastor Solomon brings rigorous exegesis combined with deeply compassionate, accessible pastoral care to every sermon, article, and broadcast.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/teachings"
                  className="bg-[#122236] hover:bg-[#B86C20] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded transition-all shadow-sm"
                >
                  Explore Teachings
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#122236] text-[#122236] hover:bg-[#122236] hover:text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded transition-all"
                >
                  Invite Pastor Solomon to Speak
                </Link>
              </div>
            </div>

            {/* Profile / Ministry Card */}
            <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E6E0D6] rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#122236] text-[#FBBF24] rounded-lg border-2 border-[#B86C20] flex items-center justify-center font-serif font-black text-2xl shadow-sm mb-6">
                LL
              </div>

              <h3 className="font-serif text-xl font-bold text-[#122236] mb-3">
                Ministry At a Glance
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-start gap-3">
                  <span className="text-[#B86C20] font-bold">✓</span>
                  <span><strong>Founder:</strong> Pastor Solomon Amao</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B86C20] font-bold">✓</span>
                  <span><strong>Anchor Scripture:</strong> 2 Corinthians 3:2–3</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B86C20] font-bold">✓</span>
                  <span><strong>Vision Genesis:</strong> 2 Corinthians 3:1–18</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B86C20] font-bold">✓</span>
                  <span><strong>Video Schedule:</strong> 2 long-form episodes per week (Tue &amp; Fri)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B86C20] font-bold">✓</span>
                  <span><strong>Free Gospel Resources:</strong> All sermons, outlines, and video answers are freely distributed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <ThreePillars />

      {/* Statement of Faith (What We Believe) */}
      <section className="py-20 bg-white border-b border-[#E6E0D6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] mb-2 block">
              Doctrinal Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122236] tracking-tight">
              What We Believe
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Our theological foundation rests firmly upon the historic, orthodox Christian faith revealed in the Holy Scriptures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((item) => (
              <div
                key={item.num}
                className="bg-[#FAF8F5] border border-[#E6E0D6] rounded p-6 shadow-sm hover:border-[#B86C20] transition-colors"
              >
                <div className="flex items-center justify-between mb-3 border-b border-[#EFEAE1] pb-2.5">
                  <span className="font-serif font-black text-sm text-[#B86C20]">
                    TRUTH {item.num}
                  </span>
                  <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                    Historic Orthodoxy
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#122236] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  {item.text}
                </p>
                <span className="text-[11px] font-semibold text-[#B86C20] block">
                  {item.ref}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Discipleship Approaches */}
      <section className="py-20 bg-[#F3EFE9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] mb-2 block">
              Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122236] tracking-tight">
              Our Fivefold Discipleship Approach
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              How Living Letters bridges biblical exposition with life transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {approaches.map((app) => (
              <div
                key={app.step}
                className="bg-white border border-[#E6E0D6] rounded p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded bg-[#122236] text-[#FBBF24] flex items-center justify-center font-bold text-xs mb-4">
                    {app.step}
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#122236] mb-2">
                    {app.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {app.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
