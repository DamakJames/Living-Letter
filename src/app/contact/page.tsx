'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'General Inquiry',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        inquiryType: 'General Inquiry',
        subject: '',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 6000);
    }
  };

  const faqs = [
    {
      q: 'How can I invite a minister to speak at our church or conference?',
      a: 'Please select "Speaking Invitation" in the contact form below and include your church/ministry name, event dates, location, and the expected theme. Our ministry team reviews all invitations prayerfully.',
    },
    {
      q: 'How do I submit a question for the Heart’s Questions video broadcasts?',
      a: 'You can submit doctrinal or personal questions directly through our Heart’s Questions page or select "Heart’s Questions Inquiry" below. Our teaching team reviews and records video responses every Tuesday and Friday.',
    },
    {
      q: 'Are all sermons and study outlines free to download and share?',
      a: 'Yes! The Living Letters operates on the principle of Matthew 10:8: "Freely you have received; freely give." All teachings, outlines, and audio broadcasts are 100% free for gospel edification.',
    },
    {
      q: 'When will the daily devotionals be launched?',
      a: 'The daily devotionals are scheduled to launch next year as our ministry team finalizes the 28-day foundational curriculum. Our weekly expository articles and twice-weekly video teachings are currently active.',
    },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10">
      {/* Header */}
      <section className="bg-[#122236] text-white py-16 mb-12 border-b border-[#0B1522]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FBBF24] mb-3">
            Connect With Us
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white mb-4">
            Contact &amp; Inquiries
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We welcome your questions, speaking invitations, partnership notes, and prayer requests.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#E6E0D6] rounded-lg p-8 sm:p-10 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] block mb-2">
              Send a Message
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#122236] mb-6">
              Ministry Communication Form
            </h2>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-sm leading-relaxed">
                <p className="font-bold text-base mb-1">✓ Thank you for reaching out!</p>
                <p>
                  Grace and peace to you. Your message has been received by our ministry team. We will respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#122236] uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Samuel Adekunle"
                      className="w-full px-4 py-2.5 text-xs bg-[#FAF8F5] border border-[#E6E0D6] rounded text-[#1E293B] focus:outline-none focus:border-[#B86C20]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#122236] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. samuel@example.com"
                      className="w-full px-4 py-2.5 text-xs bg-[#FAF8F5] border border-[#E6E0D6] rounded text-[#1E293B] focus:outline-none focus:border-[#B86C20]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#122236] uppercase tracking-wider mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-[#FAF8F5] border border-[#E6E0D6] rounded text-[#1E293B] focus:outline-none focus:border-[#B86C20]"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Speaking Invitation">Speaking Invitation</option>
                    <option value="Heart’s Questions Inquiry">Question for Heart’s Questions Video Series</option>
                    <option value="Pastoral Prayer Request">Personal Prayer Request</option>
                    <option value="Resource Feedback">Feedback on Sermons &amp; Articles</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#122236] uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief summary of your inquiry"
                    className="w-full px-4 py-2.5 text-xs bg-[#FAF8F5] border border-[#E6E0D6] rounded text-[#1E293B] focus:outline-none focus:border-[#B86C20]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#122236] uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message, event details, or prayer request here..."
                    className="w-full px-4 py-2.5 text-xs bg-[#FAF8F5] border border-[#E6E0D6] rounded text-[#1E293B] focus:outline-none focus:border-[#B86C20]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#122236] hover:bg-[#B86C20] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded transition-all shadow-sm"
                >
                  Send Message to Ministry →
                </button>
              </form>
            )}
          </div>

          {/* Ministry Info & Office Details (No admin link) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF8F5] border border-[#E6E0D6] rounded-lg p-8 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#122236] mb-4">
                The Living Letters Ministry
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                A Christ-centered teaching and media ministry dedicated to equipping believers to live as letters written by the Holy Spirit—known and read by all.
              </p>

              <div className="space-y-4 text-xs text-[#334155] border-t border-[#EFEAE1] pt-6">
                <div>
                  <strong className="text-[#122236] block">Scriptural Foundation:</strong>
                  <span>2 Corinthians 3:1–18 (Origin) • 2 Corinthians 3:2–3 (Anchor)</span>
                </div>
                <div>
                  <strong className="text-[#122236] block">Video Broadcast Releases:</strong>
                  <span>Every Tuesday &amp; Friday (Heart’s Questions)</span>
                </div>
                <div>
                  <strong className="text-[#122236] block">Communication Response Time:</strong>
                  <span>Within 48 to 72 business hours</span>
                </div>
                <div>
                  <strong className="text-[#122236] block">Motto:</strong>
                  <span className="text-[#B86C20] font-bold">EQUIP • ENCOURAGE • INSPIRE</span>
                </div>
              </div>
            </div>

            {/* Quick Link Card */}
            <div className="bg-[#122236] text-white rounded-lg p-6 shadow-sm">
              <h4 className="font-serif text-lg font-bold mb-2">Have a Doctrinal Question?</h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Watch our in-depth video answers on Heart’s Questions or submit yours for consideration.
              </p>
              <Link
                href="/qa"
                className="inline-block bg-[#B86C20] hover:bg-[#92400E] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded transition-colors"
              >
                Watch Heart’s Questions →
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white border border-[#E6E0D6] rounded-lg p-8 sm:p-12 shadow-sm mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B86C20] block mb-1">
              Common Questions
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#122236]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#EFEAE1] pb-6">
                <h4 className="font-serif text-base font-bold text-[#122236] mb-2">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
