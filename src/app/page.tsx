'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';
import ThreePillars from '../components/ThreePillars';
import HeartsQuestionsSection from '../components/HeartsQuestionsSection';
import FeaturedArticles from '../components/FeaturedArticles';
import AudioBroadcastCard from '../components/AudioBroadcastCard';

export default function HomePage() {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 5000);
      setSubscribedEmail('');
    }
  };

  return (
    <div>
      {/* 1. Moveable Photo Hero Slider (User Requested) */}
      <HeroSlider />

      {/* 2. Who We Are (Desiring God / WordPress Editorial Two-Column) */}
      <section className="py-20 bg-white border-b border-[#E6E0D6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] mb-2 block">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122236] tracking-tight mb-5 leading-tight">
                A Ministry Rooted in Scripture &amp; Spirit
              </h2>
              <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-4">
                The Living Letters is a Christ-centered teaching ministry founded by{' '}
                <strong>Pastor Solomon Amao</strong>, focused on raising believers who understand Scripture, grow in spiritual maturity, and live out the life of Christ daily.
              </p>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                The entire name and concept of <em>&quot;Living Letters&quot;</em> came when he read and meditated upon{' '}
                <strong>2 Corinthians 3:1–18</strong>, realizing that God calls His people to be living, breathing epistles delivered by Christ to the world.
              </p>

              {/* 2 Corinthians 3:2–3 Quote Box */}
              <div className="scripture-blockquote">
                &quot;You show that you are a letter from Christ delivered by us, written not with ink but with the Spirit of the living God, not on tablets of stone but on tablets of human hearts.&quot;
                <span className="block font-sans not-italic font-bold text-xs text-[#B86C20] uppercase tracking-wider mt-2">
                  2 Corinthians 3:2–3
                </span>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-bold text-sm text-[#122236] hover:text-[#B86C20] border-b-2 border-[#122236] hover:border-[#B86C20] pb-0.5 transition-all"
              >
                Learn More About Pastor Solomon &amp; Our Vision →
              </Link>
            </div>

            {/* Side Card: Convictions */}
            <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E6E0D6] rounded p-8 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#122236] mb-5 border-b border-[#E6E0D6] pb-3">
                Foundational Convictions
              </h3>
              <div className="space-y-4">
                <div className="border-b border-[#EFEAE1] pb-3.5">
                  <h4 className="font-bold text-sm text-[#122236] mb-1">Scriptural Inerrancy &amp; Depth</h4>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Uncompromising fidelity to the written Word of God as our supreme rule of faith.
                  </p>
                </div>
                <div className="border-b border-[#EFEAE1] pb-3.5">
                  <h4 className="font-bold text-sm text-[#122236] mb-1">Holy Spirit Transformation</h4>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Rejecting dead religious legalism for the supernatural empowerment and fruit of the Spirit.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#122236] mb-1">Gospel Authority in Culture</h4>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Ruling through the Gospel of the Son in everyday workplace, marriage, and public life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Discipleship Pillars (No Symbols, No Crown) */}
      <ThreePillars />

      {/* 4. Heart's Questions (2 Long-Form Video Episodes Per Week) */}
      <HeartsQuestionsSection />

      {/* 5. Featured Audio Broadcast */}
      <AudioBroadcastCard />

      {/* 6. Featured Written Articles (Slots for Pastor Solomon's 3 Articles) */}
      <FeaturedArticles />

      {/* DEVOTIONALS (HOMEPAGE STATUS: INACTIVE UNTIL NEXT YEAR AS REQUESTED)
          "So he considered the work he has to do now since he works with two schools.
           He said he wants to start the devotionals against next year.
           So on the home page there a 2 places that te devotionals show. We don't have to delete.
           Maybe just make the line of code inactive so that it can be reversed when he is ready" */}
      {/* 
      <section className="devotionals-inactive-homepage-preview" style={{ display: 'none' }}>
        <h3>Daily Devotionals with Pastor Solomon Amao</h3>
        <p>Launching 2027: A daily 28-day foundational journey in God's Word.</p>
      </section> 
      */}

      {/* 7. Newsletter Banner (Stay Rooted in Truth) */}
      <section className="py-20 bg-[#F3EFE9] border-t border-[#E6E0D6]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] mb-2 block">
            Digital Discipleship Digest
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122236] tracking-tight mb-3">
            Stay Rooted in Truth
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-8 max-w-xl mx-auto">
            Get weekly biblical teachings, Tuesday &amp; Friday video sermon releases, and study outlines delivered straight to your inbox. 100% free forever.
          </p>

          {isSubscribed ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded font-semibold text-sm">
              ✓ Grace and peace! You are now subscribed to the Living Letters weekly digest.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={subscribedEmail}
                onChange={(e) => setSubscribedEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="px-4 py-3 text-sm bg-white border border-[#E6E0D6] rounded text-[#1E293B] focus:outline-none focus:border-[#B86C20] flex-1"
              />
              <button
                type="submit"
                className="bg-[#B86C20] hover:bg-[#92400E] text-white font-bold text-sm px-6 py-3 rounded transition-all shadow-sm"
              >
                Subscribe Free →
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
