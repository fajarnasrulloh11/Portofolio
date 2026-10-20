'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { InteractiveTerminal } from '@/components/InteractiveTerminal';
import { ArrowUpRightIcon, GithubIcon, MailIcon } from '@/components/icons';

export const Hero: React.FC = () => (
  <section id="hero" className="border-b border-slate-800/80 pt-32 pb-16 sm:pt-40 sm:pb-20">
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
      <div className="space-y-7 lg:col-span-7">
        <p className="font-mono text-sm text-sky-300">
          Portfolio / {PERSONAL_INFO.location}
        </p>

        <div className="space-y-4">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {PERSONAL_INFO.name}
            <span className="mt-2 block text-2xl font-normal leading-snug text-slate-300 sm:text-3xl">
              Information Technology student building web applications.
            </span>
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I work across frontend and backend development, turning project ideas into practical web applications with tools such as Next.js, React, Django, and PostgreSQL.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="#projects"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-sky-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-200"
          >
            Explore projects
            <ArrowUpRightIcon size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
          >
            <MailIcon size={16} />
            Contact
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fajar Nasrulloh on GitHub"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-slate-700 text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            <GithubIcon size={18} />
          </a>
        </div>
      </div>

      <div className="lg:col-span-5">
        <InteractiveTerminal />
      </div>
    </div>
  </section>
);
