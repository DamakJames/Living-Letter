'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Article, VideoQuestion } from '../../lib/types';
import {
  getArticles,
  saveArticle,
  getVideoQuestions,
  saveVideoQuestion,
} from '../../lib/storage';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [activeTab, setActiveTab] = useState<'articles' | 'videos' | 'manage'>('articles');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Articles Form State
  const [artTitle, setArtTitle] = useState('');
  const [artCategory, setArtCategory] = useState<Article['category']>('Identity in Christ');
  const [artScripture, setArtScripture] = useState('');
  const [artReadTime, setArtReadTime] = useState('8 min read');
  const [artExcerpt, setArtExcerpt] = useState('');
  const [artContent, setArtContent] = useState('');
  const [artImageUrl, setArtImageUrl] = useState('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80');

  // Video Form State
  const [vidTitle, setVidTitle] = useState('');
  const [vidSeeker, setVidSeeker] = useState('');
  const [vidScripture, setVidScripture] = useState('');
  const [vidEmbedUrl, setVidEmbedUrl] = useState('');
  const [vidDuration, setVidDuration] = useState('28:30');
  const [vidReleaseDay, setVidReleaseDay] = useState<'Tuesday' | 'Friday'>('Tuesday');
  const [vidSummary, setVidSummary] = useState('');

  // Data lists
  const [articlesList, setArticlesList] = useState<Article[]>([]);
  const [videosList, setVideosList] = useState<VideoQuestion[]>([]);

  useEffect(() => {
    setArticlesList(getArticles());
    setVideosList(getVideoQuestions());

    // Auto-login if previously saved in session
    if (typeof window !== 'undefined' && sessionStorage.getItem('ll_admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'livingletters2026' || passcode.trim().toLowerCase() === 'pastorsolomon') {
      setIsAuthenticated(true);
      sessionStorage.setItem('ll_admin_auth', 'true');
      showToast('Welcome back, Pastor Solomon Amao!');
    } else {
      alert('Incorrect passcode. Hint: Use "pastorsolomon" or "livingletters2026"');
    }
  };

  // Helper to format YouTube watch URLs into embed URLs
  const formatEmbedUrl = (raw: string) => {
    let clean = raw.trim();
    if (clean.includes('watch?v=')) {
      const vidId = clean.split('watch?v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${vidId}`;
    }
    if (clean.includes('youtu.be/')) {
      const vidId = clean.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${vidId}`;
    }
    return clean;
  };

  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!artTitle || !artContent) return;

    const id = 'art-' + Date.now();
    const slug = artTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    saveArticle({
      id,
      slug,
      title: artTitle,
      author: 'Pastor Solomon Amao',
      scripture: artScripture || '2 Corinthians 3',
      category: artCategory,
      readTime: artReadTime,
      publishedAt: 'New Release',
      excerpt: artExcerpt || artContent.slice(0, 140) + '...',
      content: artContent,
      imageUrl: artImageUrl,
    });

    setArticlesList(getArticles());
    showToast(`✓ Article "${artTitle}" published live to the website!`);

    // Reset Form
    setArtTitle('');
    setArtScripture('');
    setArtExcerpt('');
    setArtContent('');
  };

  const handleCreateVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vidTitle || !vidEmbedUrl) return;

    const formattedUrl = formatEmbedUrl(vidEmbedUrl);
    const id = 'vid-' + Date.now();
    const episodeNumber = videosList.length + 1;

    saveVideoQuestion({
      id,
      episodeNumber,
      title: vidTitle,
      seekerName: vidSeeker || 'Anonymous Seeker',
      scripture: vidScripture || 'Scriptural Counsel',
      videoEmbedUrl: formattedUrl,
      duration: vidDuration,
      releaseDay: vidReleaseDay,
      publishedAt: `${vidReleaseDay} Broadcast`,
      summary: vidSummary || 'Pastoral answer delivered by Pastor Solomon Amao.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&w=800&q=80',
    });

    setVideosList(getVideoQuestions());
    showToast(`✓ Video Q&A Episode "${vidTitle}" published for ${vidReleaseDay} broadcast!`);

    // Reset Form
    setVidTitle('');
    setVidSeeker('');
    setVidScripture('');
    setVidEmbedUrl('');
    setVidSummary('');
  };

  if (!isAuthenticated) {
    return (
      <div className="py-24 bg-[#FAF8F5] min-h-[75vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white border border-[#E6E0D6] rounded-lg p-8 shadow-md">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-[#122236] text-[#FBBF24] rounded border-2 border-[#B86C20] flex items-center justify-center font-serif font-bold text-xl mx-auto mb-3">
              LL
            </div>
            <h1 className="font-serif text-2xl font-bold text-[#122236]">Pastor Solomon Admin Portal</h1>
            <p className="text-xs text-[#64748B] mt-1">
              Enter authorization key to post articles or add video Q&amp;A teachings.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-1.5">
                Ministerial Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode (e.g. pastorsolomon)"
                required
                className="w-full px-3.5 py-2.5 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#122236] hover:bg-[#B86C20] text-white text-sm font-bold py-2.5 rounded transition-all shadow-sm"
            >
              Sign In to Admin Dashboard →
            </button>
            <div className="text-center pt-2">
              <span className="text-[11px] text-[#94A3B8]">
                Default demo pass: <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700">pastorsolomon</code>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white border border-[#E6E0D6] p-6 rounded shadow-sm mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] block mb-1">
              Living Letters Content Studio
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#122236]">
              Pastor Solomon Amao • Publishing Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="text-xs font-bold text-[#122236] bg-[#F3EFE9] hover:bg-[#E6E0D6] px-3.5 py-2 rounded transition-colors"
            >
              View Live Website ↗
            </Link>
            <button
              onClick={() => {
                sessionStorage.removeItem('ll_admin_auth');
                setIsAuthenticated(false);
              }}
              className="text-xs font-bold text-red-700 hover:underline px-2"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Toast */}
        {toastMessage && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded font-semibold text-sm animate-fadeIn">
            {toastMessage}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-[#E6E0D6] mb-8 gap-2">
          <button
            onClick={() => setActiveTab('articles')}
            className={`font-serif text-sm font-bold px-6 py-3 border-b-2 transition-all ${
              activeTab === 'articles'
                ? 'border-[#B86C20] text-[#B86C20]'
                : 'border-transparent text-[#64748B] hover:text-[#122236]'
            }`}
          >
            ✍️ Post Written Article / Blog
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`font-serif text-sm font-bold px-6 py-3 border-b-2 transition-all ${
              activeTab === 'videos'
                ? 'border-[#B86C20] text-[#B86C20]'
                : 'border-transparent text-[#64748B] hover:text-[#122236]'
            }`}
          >
            🎥 Add Video Q&amp;A (Embedded URL)
          </button>
          <button
            onClick={() => setActiveTab('manage')}
            className={`font-serif text-sm font-bold px-6 py-3 border-b-2 transition-all ${
              activeTab === 'manage'
                ? 'border-[#B86C20] text-[#B86C20]'
                : 'border-transparent text-[#64748B] hover:text-[#122236]'
            }`}
          >
            📂 Manage Published ({articlesList.length} Articles, {videosList.length} Videos)
          </button>
        </div>

        {/* TAB 1: POST ARTICLE */}
        {activeTab === 'articles' && (
          <div className="bg-white border border-[#E6E0D6] rounded p-8 shadow-sm">
            <h2 className="font-serif text-xl font-bold text-[#122236] mb-2">Publish a Biblical Exposition</h2>
            <p className="text-xs text-[#64748B] mb-6">
              Write or paste the new article here. It will immediately publish to the home page and teachings section.
            </p>

            <form onSubmit={handleCreateArticle} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    value={artTitle}
                    onChange={(e) => setArtTitle(e.target.value)}
                    placeholder="e.g. The Exceeding Riches of His Grace"
                    required
                    className="w-full px-4 py-2.5 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                    Theological Category
                  </label>
                  <select
                    value={artCategory}
                    onChange={(e) => setArtCategory(e.target.value as Article['category'])}
                    className="w-full px-4 py-2.5 text-sm border border-[#E6E0D6] rounded bg-white focus:outline-none focus:border-[#B86C20]"
                  >
                    <option value="Identity in Christ">Identity in Christ</option>
                    <option value="Holy Spirit">Holy Spirit</option>
                    <option value="Grace & Faith">Grace &amp; Faith</option>
                    <option value="Spiritual Growth">Spiritual Growth</option>
                    <option value="Doctrine">Biblical Doctrine</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                    Anchor Scripture
                  </label>
                  <input
                    type="text"
                    value={artScripture}
                    onChange={(e) => setArtScripture(e.target.value)}
                    placeholder="e.g. 2 Corinthians 3:2–3 • Ephesians 2:8–10"
                    className="w-full px-4 py-2.5 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                    Estimated Reading Time
                  </label>
                  <input
                    type="text"
                    value={artReadTime}
                    onChange={(e) => setArtReadTime(e.target.value)}
                    placeholder="e.g. 8 min read"
                    className="w-full px-4 py-2.5 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                  Short Excerpt / Summary
                </label>
                <textarea
                  value={artExcerpt}
                  onChange={(e) => setArtExcerpt(e.target.value)}
                  placeholder="2–3 sentences summarizing the core spiritual takeaway of this message..."
                  rows={2}
                  className="w-full px-4 py-2 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                  Full Article Body *
                </label>
                <textarea
                  value={artContent}
                  onChange={(e) => setArtContent(e.target.value)}
                  placeholder="Type or paste Pastor Solomon's complete written article here..."
                  rows={8}
                  required
                  className="w-full px-4 py-3 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20] font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                  Header Image URL (Optional)
                </label>
                <input
                  type="url"
                  value={artImageUrl}
                  onChange={(e) => setArtImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-4 py-2.5 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#B86C20] hover:bg-[#92400E] text-white font-bold text-sm px-8 py-3 rounded transition-all shadow"
              >
                Publish Article to Website →
              </button>
            </form>
          </div>
        )}

        {/* TAB 2: ADD VIDEO Q&A */}
        {activeTab === 'videos' && (
          <div className="bg-white border border-[#E6E0D6] rounded p-8 shadow-sm">
            <h2 className="font-serif text-xl font-bold text-[#122236] mb-2">
              Add Video Answer to Heart’s Questions
            </h2>
            <p className="text-xs text-[#64748B] mb-6">
              Paste a YouTube, Vimeo, or direct video embed link. The episode will be published to the 2-weekly broadcast schedule.
            </p>

            <form onSubmit={handleCreateVideo} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                    Question Headline *
                  </label>
                  <input
                    type="text"
                    value={vidTitle}
                    onChange={(e) => setVidTitle(e.target.value)}
                    placeholder="e.g. How Do I Deal with Doubts During Seasons of Silence?"
                    required
                    className="w-full px-4 py-2.5 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                    Release Broadcast Day *
                  </label>
                  <select
                    value={vidReleaseDay}
                    onChange={(e) => setVidReleaseDay(e.target.value as 'Tuesday' | 'Friday')}
                    className="w-full px-4 py-2.5 text-sm border border-[#E6E0D6] rounded bg-white focus:outline-none focus:border-[#B86C20]"
                  >
                    <option value="Tuesday">Tuesday Release (Doctrinal &amp; Faith Foundations)</option>
                    <option value="Friday">Friday Release (Practical &amp; Emotional Living)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                    Asked By (Seeker / Believer)
                  </label>
                  <input
                    type="text"
                    value={vidSeeker}
                    onChange={(e) => setVidSeeker(e.target.value)}
                    placeholder="e.g. Sister Deborah or Anonymous"
                    className="w-full px-4 py-2.5 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                    Scripture Foundation
                  </label>
                  <input
                    type="text"
                    value={vidScripture}
                    onChange={(e) => setVidScripture(e.target.value)}
                    placeholder="e.g. James 1:2–6 • Romans 8:28"
                    className="w-full px-4 py-2.5 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                    Video Duration
                  </label>
                  <input
                    type="text"
                    value={vidDuration}
                    onChange={(e) => setVidDuration(e.target.value)}
                    placeholder="e.g. 29:15"
                    className="w-full px-4 py-2.5 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                  Video Embed URL * (YouTube / Vimeo / MP4)
                </label>
                <input
                  type="text"
                  value={vidEmbedUrl}
                  onChange={(e) => setVidEmbedUrl(e.target.value)}
                  placeholder="e.g. https://www.youtube.com/watch?v=... or https://www.youtube.com/embed/..."
                  required
                  className="w-full px-4 py-2.5 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
                />
                <span className="text-[11px] text-[#94A3B8] mt-1 block">
                  Paste any YouTube URL directly—the system will format it into an embed player automatically.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                  Video Summary &amp; Show Notes
                </label>
                <textarea
                  value={vidSummary}
                  onChange={(e) => setVidSummary(e.target.value)}
                  placeholder="Brief summary of Pastor Solomon's pastoral answer and key takeaways..."
                  rows={4}
                  className="w-full px-4 py-2.5 text-sm border border-[#E6E0D6] rounded focus:outline-none focus:border-[#B86C20]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#122236] hover:bg-[#B86C20] text-white font-bold text-sm px-8 py-3 rounded transition-all shadow"
              >
                Publish Video Q&amp;A Episode →
              </button>
            </form>
          </div>
        )}

        {/* TAB 3: MANAGE */}
        {activeTab === 'manage' && (
          <div className="space-y-8">
            {/* Articles */}
            <div className="bg-white border border-[#E6E0D6] rounded p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#122236] mb-4">
                Published Written Articles ({articlesList.length})
              </h3>
              <div className="divide-y divide-[#EFEAE1]">
                {articlesList.map((art) => (
                  <div key={art.id} className="py-3 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-[#122236]">{art.title}</h4>
                      <span className="text-xs text-[#64748B]">
                        {art.category} • {art.scripture} • {art.readTime}
                      </span>
                    </div>
                    <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded font-semibold">
                      Live
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Videos */}
            <div className="bg-white border border-[#E6E0D6] rounded p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#122236] mb-4">
                Published Video Q&amp;A Episodes ({videosList.length})
              </h3>
              <div className="divide-y divide-[#EFEAE1]">
                {videosList.map((vid) => (
                  <div key={vid.id} className="py-3 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-[#122236]">
                        Ep. {vid.episodeNumber}: {vid.title}
                      </h4>
                      <span className="text-xs text-[#64748B]">
                        {vid.releaseDay} Release • {vid.duration} • Asked by {vid.seekerName}
                      </span>
                    </div>
                    <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded font-semibold">
                      Active Stream
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
