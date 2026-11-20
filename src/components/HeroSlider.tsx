'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Slide {
  id: number;
  tag: string;
  title: string;
  description: string;
  primaryBtn: { text: string; href: string };
  secondaryBtn: { text: string; href: string };
  imageUrl: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    tag: '2 Corinthians 3:2–3',
    title: 'Live as God’s Message to the World',
    description:
      'A Christ-centered teaching ministry equipping believers to live as letters written by the Holy Spirit—known and read by all.',
    primaryBtn: { text: '▶ Listen to Latest Message', href: '/podcast' },
    secondaryBtn: { text: 'Explore Teachings', href: '/teachings' },
    imageUrl: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    tag: '2 Corinthians 3:1–18',
    title: 'The Glory of the New Covenant',
    description:
      'Rooted in the Holy Scriptures and led by the Spirit of the living God. Equipping believers to walk in authentic spiritual authority and grace.',
    primaryBtn: { text: 'Follow Teaching Series', href: '/series' },
    secondaryBtn: { text: 'Meet Pastor Solomon Amao', href: '/about' },
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    tag: 'Heart’s Questions Series',
    title: 'Biblical Answers to Real-Life Questions',
    description:
      'Watch our two weekly long-form video teachings releasing every Tuesday and Friday, bringing clear pastoral counsel directly to your questions.',
    primaryBtn: { text: 'Watch Weekly Video Episodes', href: '/qa' },
    secondaryBtn: { text: 'Submit a Question', href: '/qa#ask' },
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section
      className="relative bg-[#0B1522] text-white overflow-hidden min-h-[540px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured Highlights Slider"
    >
      {/* Background Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          {/* Rich Warm Photographic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1522]/95 via-[#0B1522]/85 to-[#0B1522]/70" />
        </div>
      ))}

      {/* Slide Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FBBF24] border-b-2 border-[#FBBF24] pb-1 mb-5">
            {SLIDES[current].tag}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white leading-tight mb-5 tracking-tight">
            {SLIDES[current].title}
          </h1>
          <p className="text-base sm:text-xl text-gray-200 leading-relaxed mb-8">
            {SLIDES[current].description}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href={SLIDES[current].primaryBtn.href}
              className="bg-[#B86C20] hover:bg-[#92400E] text-white font-bold text-sm px-6 py-3.5 rounded transition-all shadow-md flex items-center gap-2"
            >
              {SLIDES[current].primaryBtn.text}
            </Link>
            <Link
              href={SLIDES[current].secondaryBtn.href}
              className="bg-transparent hover:bg-white/10 text-white font-bold text-sm px-6 py-3.5 rounded border border-white/40 hover:border-white transition-all"
            >
              {SLIDES[current].secondaryBtn.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Previous / Next Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#122236]/80 hover:bg-[#B86C20] text-white flex items-center justify-center border border-white/20 transition-all text-xl"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#122236]/80 hover:bg-[#B86C20] text-white flex items-center justify-center border border-white/20 transition-all text-xl"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 rounded-full transition-all ${
              idx === current ? 'w-8 bg-[#FBBF24]' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
