'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { UserIcon, SparklesIcon, ZapIcon, ShieldCheckIcon, RocketIcon, CpuIcon } from '@/components/icons';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'values' | 'tooling'>('story');

  return (
    <section id="about" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-3xl p-1 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-600 shadow-2xl shadow-indigo-950/50">
              <div className="bg-[#0c0e18] rounded-[22px] p-6 space-y-6">
                
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 p-[1px] shadow-lg">
                    <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center text-indigo-400">
                      <UserIcon size={32} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-indigo-400 font-mono">{PERSONAL_INFO.role}</p>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">📍 {PERSONAL_INFO.location}</p>
                  </div>
                </div>

                {/* Quick Bio Info */}
                <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-indigo-500 pl-3">
                  &ldquo;Building software isn&apos;t just about writing code — it&apos;s about creating resilient, scalable systems that solve real human challenges.&rdquo;
                </p>

                {/* Key Attributes */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Primary Stack</span>
                    <span className="text-indigo-300">Next.js 16 / React 19</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">System Specialty</span>
                    <span className="text-cyan-300">RAG & Distributed AI</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Work Preference</span>
                    <span className="text-emerald-400">Hybrid / Remote Global</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Text Column: Tabbed Interface */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
                <SparklesIcon size={14} />
                <span>Background & Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Architecting with <span className="text-gradient">Precision</span>
              </h2>
            </div>

            {/* Tab Navigation */}
            <div className="flex items-center gap-2 p-1.5 glass-panel rounded-2xl border-slate-800 w-fit">
              <button
                onClick={() => setActiveTab('story')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'story'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                My Journey
              </button>

              <button
                onClick={() => setActiveTab('values')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'values'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Core Values
              </button>

              <button
                onClick={() => setActiveTab('tooling')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'tooling'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Daily Setup
              </button>
            </div>

            {/* Tab Content Box */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              {activeTab === 'story' && (
                <div className="space-y-4 text-slate-300 text-sm leading-relaxed animate-in fade-in duration-200">
                  <p>
                    I started my software journey building web interfaces and backend services for tech startups. Over the past 6+ years, I transitioned into leading full-stack engineering initiatives and designing distributed AI infrastructure.
                  </p>
                  <p>
                    My obsession lies in the intersection of sub-second user interface responsiveness and heavy backend data pipelines. Whether optimizing Next.js Server Components or scaling vector database retrieval, I prioritize clean architecture and developer ergonomics.
                  </p>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                    <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs">
                      <ZapIcon size={16} />
                      <span>Speed & Responsiveness</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Performance is a core feature. Zero unnecessary re-renders, tight bundle budgets, and ultra-low TTFB.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs">
                      <ShieldCheckIcon size={16} />
                      <span>Type Safety & Rigorous Testing</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Strict TypeScript schemas, comprehensive integration tests, and defensive runtime error boundaries.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                      <RocketIcon size={16} />
                      <span>Maintainable Architecture</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Modular design systems, scalable folder structure, and thorough technical documentation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                    <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs">
                      <CpuIcon size={16} />
                      <span>AI First Engineering</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Leveraging modern LLM APIs, vector embeddings, and RAG retrieval to supercharge user workflows.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'tooling' && (
                <div className="space-y-3 text-xs text-slate-300 font-mono animate-in fade-in duration-200">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Primary IDE</span>
                    <span className="text-indigo-300 font-semibold">VS Code / Antigravity Agentic IDE</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Terminal Shell</span>
                    <span className="text-cyan-300 font-semibold">powershell /cmd/git </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Hardware Workstation</span>
                    <span className="text-emerald-400 font-semibold">Dell Latitude 5420</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Design & Mockups</span>
                    <span className="text-purple-300 font-semibold">Figma & Generative Visual Tooling</span>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
