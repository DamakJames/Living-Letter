'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Article } from '../lib/types';
import { getArticles } from '../lib/storage';

export default function FeaturedArticles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(getArticles().slice(0, 3));

    const handleUpdate = () => {
      setArticles(getArticles().slice(0, 3));
    };
    window.addEventListener('ll-content-updated', handleUpdate);
    return () => window.removeEventListener('ll-content-updated', handleUpdate);
  }, []);

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E6E0D6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] mb-2 block">
              Biblical Expositions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122236] tracking-tight">
              Featured Articles by Pastor Solomon Amao
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-xl">
              Deep, Scripture-grounded theological writings designed to renew the mind and build lasting convictions.
            </p>
          </div>
          <Link
            href="/teachings"
            className="mt-4 md:mt-0 text-sm font-bold text-[#B86C20] hover:text-[#92400E] hover:underline flex items-center gap-1"
          >
            Explore All Teachings &amp; Articles →
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="bg-white border border-[#E6E0D6] rounded overflow-hidden shadow-sm hover:shadow-md hover:border-[#B86C20] transition-all flex flex-col group"
            >
              {/* Image */}
              <div
                className="h-48 bg-[#122236] bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${
                    art.imageUrl ||
                    'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80'
                  })`,
                }}
              >
                <span className="absolute top-3 left-3 bg-[#0B1522] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {art.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs text-[#64748B] mb-2 font-medium">
                  By {art.author} • {art.readTime}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#122236] leading-snug mb-3 group-hover:text-[#B86C20] transition-colors">
                  <Link href={`/teachings#${art.id}`}>{art.title}</Link>
                </h3>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed mb-6 flex-1">
                  {art.excerpt}
                </p>
                <div className="pt-4 border-t border-[#EFEAE1] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#B86C20]">{art.scripture}</span>
                  <Link
                    href={`/teachings#${art.id}`}
                    className="text-xs font-bold text-[#122236] hover:text-[#B86C20] hover:underline"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
