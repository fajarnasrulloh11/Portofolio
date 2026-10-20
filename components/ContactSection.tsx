'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { CheckIcon, CopyIcon, ExternalLinkIcon, GithubIcon, MailIcon, MapPinIcon, SendIcon } from '@/components/icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Project inquiry',
    message: '',
  });
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`${formData.topic} — ${formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopyState('copied');
    } catch {
      setCopyState('error');
      return;
    }
    window.setTimeout(() => setCopyState('idle'), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <p className="mb-3 font-mono text-sm text-sky-300">04 / Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
            For project questions or to connect, send me an email or find me on GitHub and LinkedIn.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <MailIcon size={18} className="mt-0.5 text-sky-300" />
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="mt-1 text-sm text-slate-200 hover:text-sky-300">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="ml-auto inline-flex min-h-10 min-w-10 items-center justify-center rounded-md border border-slate-700 text-slate-400 hover:text-white"
              >
                {copyState === 'copied' ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
              </button>
            </div>
            {copyState === 'error' && (
              <p role="status" className="text-xs text-amber-300">
                Clipboard access is unavailable. You can copy the email address above.
              </p>
            )}
            {copyState === 'copied' && (
              <p role="status" className="text-xs text-slate-400">Email address copied.</p>
            )}

            <p className="flex items-center gap-3 text-sm text-slate-300">
              <MapPinIcon size={18} className="text-sky-300" />
              {PERSONAL_INFO.location}
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 text-sm text-slate-300 hover:text-sky-300"
              >
                <GithubIcon size={17} /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 text-sm text-slate-300 hover:text-sky-300"
              >
                <ExternalLinkIcon size={17} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-5 border-t border-slate-800 pt-5">
            <h3 className="text-lg font-medium text-white">Write an email</h3>
            <p className="text-sm leading-6 text-slate-400">
              Submitting opens your default email application with the message details filled in.
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm text-slate-300">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  className="glass-input min-h-11 w-full rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm text-slate-300">Your email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  className="glass-input min-h-11 w-full rounded-md px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-topic" className="text-sm text-slate-300">Subject</label>
              <select
                id="contact-topic"
                name="topic"
                value={formData.topic}
                onChange={(event) => setFormData({ ...formData, topic: event.target.value })}
                className="glass-input min-h-11 w-full rounded-md px-3 py-2 text-sm"
              >
                <option>Project inquiry</option>
                <option>Internship</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-sm text-slate-300">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                maxLength={5000}
                rows={5}
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                className="glass-input w-full rounded-md px-3 py-2 text-sm"
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-sky-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-200"
            >
              <SendIcon size={15} />
              Open email app
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
