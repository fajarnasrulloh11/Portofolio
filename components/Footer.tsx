'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUpRightIcon } from '@/components/icons';

export const Footer: React.FC = () => (
  <footer className="border-t border-slate-800 py-8">
    <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
      <div>
        <p className="font-medium text-slate-200">{PERSONAL_INFO.name}</p>
        <p className="mt-1 text-xs text-slate-500">
          © {new Date().getFullYear()} · Built with Next.js and React
        </p>
      </div>

      <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#skills" className="hover:text-white">Skills</a>
        <a href="#experience" className="hover:text-white">Certifications</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </nav>

      <a href="#hero" className="inline-flex min-h-10 items-center gap-1 text-xs text-slate-400 hover:text-white">
        Back to top <ArrowUpRightIcon size={14} className="-rotate-45" />
      </a>
    </div>
  </footer>
);
