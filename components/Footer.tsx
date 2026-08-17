'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { SparklesIcon, GithubIcon, ExternalLinkIcon, ArrowUpRightIcon } from '@/components/icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#06070b] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <SparklesIcon size={16} />
          </div>
          <div>
            <p className="text-sm font-bold text-white font-mono">{PERSONAL_INFO.name}</p>
            <p className="text-[11px] text-slate-500 font-mono">
              © {new Date().getFullYear()} All rights reserved. Built with Next.js 16 & React 19.
            </p>
          </div>
        </div>

        {/* Links & Socials */}
        <div className="flex items-center gap-6 text-xs text-slate-400 font-mono">
          <a href="#about" className="hover:text-slate-200 transition-colors">About</a>
          <a href="#projects" className="hover:text-slate-200 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-slate-200 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-slate-200 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-slate-200 transition-colors">Contact</a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel text-slate-400 hover:text-white text-xs font-mono transition-all"
        >
          <span>Back to Top</span>
          <ArrowUpRightIcon size={14} className="-rotate-45" />
        </button>

      </div>
    </footer>
  );
};
