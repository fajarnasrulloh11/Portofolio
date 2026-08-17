'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { MailIcon, MapPinIcon, ClockIcon, SendIcon, CheckCircleIcon, SparklesIcon, CopyIcon, CheckIcon } from '@/components/icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Full-Stack Project',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const topics = [
    'Full-Stack Project',
    'Full-Time / Lead Role'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Local Clock Card */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
                <SparklesIcon size={14} />
                <span>Let&apos;s Connect</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Have an ambitious project, architecture consultation, or engineering role in mind? Drop me a message!
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Card with Copy Action */}
              <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-mono">Direct Email</p>
                    <p className="text-xs sm:text-sm font-bold text-white font-mono">{PERSONAL_INFO.email}</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-all text-xs flex items-center gap-1"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <CheckIcon size={16} className="text-emerald-400" /> : <CopyIcon size={16} />}
                </button>
              </div>

              {/* Location & Time Clock Widget */}
              <div className="glass-card p-5 rounded-2xl border border-slate-800 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <MapPinIcon size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-mono">Base Location</p>
                    <p className="text-xs font-semibold text-white">Jakarta, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <ClockIcon size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-mono">Local Time (PST)</p>
                    <p className="text-xs font-semibold font-mono text-emerald-400">{currentTime || '10:45 AM'}</p>
                  </div>
                </div>
              </div>

              {/* Availability Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-indigo-900/20 to-slate-900 border border-indigo-500/30 flex items-center gap-3">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <p className="text-xs text-slate-300">
                  Currently accepting select advisory projects & Lead Full-Stack Engineering roles.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircleIcon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Delivered!</h3>
                  <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
                    Thank you for reaching out, <span className="text-white font-semibold">{formData.name}</span>. I have received your message regarding <span className="text-indigo-300">{formData.topic}</span> and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', topic: 'Full-Stack Project', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>

                  {/* Topic Selector Badges */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400">Inquiry Topic</label>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setFormData({ ...formData, topic: t })}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                            formData.topic === t
                              ? 'bg-indigo-600 text-white shadow-md'
                              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-xl glass-input text-xs"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your mail@company.com"
                      className="w-full px-4 py-3 rounded-xl glass-input text-xs"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Details about your project, timeline, or engineering needs..."
                      className="w-full px-4 py-3 rounded-xl glass-input text-xs resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-xs font-semibold shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:from-indigo-500 hover:to-indigo-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <SendIcon size={14} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
