'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Article } from '../../lib/types';
import { getArticles } from '../../lib/storage';

const CATEGORIES = [
  'All',
  'Identity in Christ',
  'Holy Spirit',
  'Grace & Faith',
  'Spiritual Growth',
  'Doctrine',
] as const;

export default function TeachingsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  useEffect(() => {
    setArticles(getArticles());
    const handleUpdate = () => {
      setArticles(getArticles());
    };
    window.addEventListener('ll-content-updated', handleUpdate);
    return () => window.removeEventListener('ll-content-updated', handleUpdate);
  }, []);

  const filteredArticles = articles.filter((art) => {
    const matchesCat =
      selectedCategory === 'All' || art.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      art.title.toLowerCase().includes(query) ||
      art.scripture.toLowerCase().includes(query) ||
      art.excerpt.toLowerCase().includes(query) ||
      art.content.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10">
      {/* Page Header */}
      <section className="bg-[#122236] text-white py-16 mb-12 border-b border-[#0B1522]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FBBF24] mb-3">
            Expository Theological Library
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white mb-4">
            Teachings &amp; Articles
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Carefully written biblical expositions by Pastor Solomon Amao covering new creation identity, the ministry of the Holy Spirit, and practical discipleship.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* Controls: Search & Category Filter */}
        <div className="bg-white border border-[#E6E0D6] p-6 rounded shadow-sm mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-3.5 py-1.5 rounded transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#122236] text-white'
                    : 'bg-[#FAF8F5] text-[#64748B] hover:text-[#122236] border border-[#E6E0D6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, verse, keyword..."
              className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-[#E6E0D6] rounded text-[#1E293B] focus:outline-none focus:border-[#B86C20]"
            />
          </div>
        </div>

        {/* Results Counter & Admin Link */}
        <div className="flex justify-between items-center mb-6 text-xs text-[#64748B]">
          <span>
            Showing <strong>{filteredArticles.length}</strong> article
            {filteredArticles.length === 1 ? '' : 's'}
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
          </span>
          <Link
            href="/admin"
            className="text-[#B86C20] hover:underline font-semibold"
          >
            + Pastor Admin: Add New Article
          </Link>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white border border-[#E6E0D6] p-12 text-center rounded">
            <p className="font-serif text-lg text-[#122236] mb-2">No articles found</p>
            <p className="text-xs text-[#64748B] mb-4">
              Try adjusting your search query or selecting another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#B86C20] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                className="bg-white border border-[#E6E0D6] rounded overflow-hidden shadow-sm hover:shadow-md hover:border-[#B86C20] transition-all flex flex-col group cursor-pointer"
                onClick={() => setActiveArticle(art)}
              >
                {art.imageUrl && (
                  <div className="h-44 w-full overflow-hidden bg-gray-100 relative">
                    <img
                      src={art.imageUrl}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-[#122236]/90 backdrop-blur text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {art.category}
                    </span>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-[#64748B] mb-2.5">
                    <span className="font-semibold text-[#B86C20]">{art.scripture}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h2 className="font-serif text-xl font-bold text-[#122236] group-hover:text-[#B86C20] transition-colors mb-3 leading-snug">
                    {art.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5 flex-1">
                    {art.excerpt}
                  </p>

                  <div className="pt-4 border-t border-[#EFEAE1] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#122236]">{art.author}</span>
                    <span className="font-bold text-[#B86C20] group-hover:translate-x-1 transition-transform">
                      Read Full Article →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* 3 Articles Notice (Pastor Solomon upcoming slots) */}
        <div className="bg-[#FAF8F5] border-2 border-dashed border-[#B86C20]/40 rounded-lg p-6 text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] block mb-1">
            Editorial Pipeline
          </span>
          <p className="text-sm text-[#122236] font-medium mb-2">
            Pastor Solomon Amao is preparing 3 brand-new expository manuscripts for publication this month.
          </p>
          <p className="text-xs text-[#64748B]">
            These articles will appear automatically here and on the homepage as soon as they are submitted via the{' '}
            <Link href="/admin" className="text-[#B86C20] font-semibold hover:underline">
              Pastor Admin Portal
            </Link>.
          </p>
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
          <div
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E6E0D6] my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-[#E6E0D6] p-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="bg-[#F3EFE9] text-[#122236] text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-[#64748B]">{activeArticle.readTime}</span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-sm transition-colors"
                aria-label="Close reader"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-10">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] block mb-2">
                  Scripture Anchor: {activeArticle.scripture}
                </span>
                <h1 className="font-serif text-2xl sm:text-4xl font-black text-[#122236] leading-tight mb-4">
                  {activeArticle.title}
                </h1>
                <div className="flex items-center gap-3 text-xs text-[#64748B] border-b border-[#EFEAE1] pb-4">
                  <span>Author: <strong className="text-[#122236]">{activeArticle.author}</strong></span>
                  <span>•</span>
                  <span>{activeArticle.publishedAt}</span>
                </div>
              </div>

              {activeArticle.imageUrl && (
                <div className="mb-8 rounded overflow-hidden">
                  <img
                    src={activeArticle.imageUrl}
                    alt={activeArticle.title}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              )}

              {/* Excerpt Callout */}
              <div className="scripture-blockquote mb-8">
                {activeArticle.excerpt}
              </div>

              {/* Body Text */}
              <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] whitespace-pre-line space-y-4 font-sans">
                {activeArticle.content}
              </div>

              {/* Article Footer */}
              <div className="mt-10 pt-6 border-t border-[#E6E0D6] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#64748B]">
                <p>Published for the building and equipping of the body of Christ.</p>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="bg-[#122236] hover:bg-[#B86C20] text-white font-bold px-5 py-2.5 rounded transition-all"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
