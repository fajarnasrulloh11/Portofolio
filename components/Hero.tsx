'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { InteractiveTerminal } from '@/components/InteractiveTerminal';
import { GithubIcon, ExternalLinkIcon, MailIcon, SparklesIcon, ArrowUpRightIcon } from '@/components/icons';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Mesh Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6">
            

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
  Building <span className="text-gradient">Modern Full-Stack</span>{' '}
  <span className="text-gradient-cyan">Web Applications</span>
</h1>

            {/* Subheading / Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed font-normal">
              Hi, I&apos;m <span className="text-slate-200 font-semibold">{PERSONAL_INFO.name}</span> — {PERSONAL_INFO.tagline}
            </p>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-sm font-semibold shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 focus:outline-none"
              >
                <span>View My Work</span>
                <ArrowUpRightIcon size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-slate-700 text-sm font-semibold transition-all duration-200"
              >
                <MailIcon size={16} />
                <span>Get In Touch</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <ExternalLinkIcon size={18} />
                </a>
              </div>
            </div>

            {/* Metric Counter Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-gradient">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive CLI Terminal Sandbox */}
          <div className="lg:col-span-5 w-full">
            <InteractiveTerminal />
          </div>

        </div>
      </div>
    </section>
  );
};
