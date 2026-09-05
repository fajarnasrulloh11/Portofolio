
'use client';

import React, { useState } from 'react';
import { SKILLS_DATA } from '@/data/portfolioData';

import {
  SparklesIcon,
  ZapIcon,

  // Frontend
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  HtmlIcon,

  // Backend
  NodeJsIcon,
  ExpressIcon,
  PythonIcon,
  GoIcon,
  PostgreSqlIcon,
  GraphQLIcon,

  // Fallback
  CodeIcon,
} from '@/components/icons';

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend'];

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter(
          (skill) => skill.category === activeCategory
        );

  /**
   * Mapping nama icon dari SKILLS_DATA
   * ke component icon yang ada di components/icons.tsx
   */
  const skillIcons = {
    ReactIcon,
    NextJsIcon,
    TypeScriptIcon,
    JavaScriptIcon,
    TailwindIcon,
    HtmlIcon,

    NodeJsIcon,
    ExpressIcon,
    PythonIcon,
    GoIcon,
    PostgreSqlIcon,
    GraphQLIcon,

    ZapIcon,
    CodeIcon,
  };

  /**
   * Mengambil icon berdasarkan value "icon"
   * yang terdapat pada SKILLS_DATA.
   */
  const getSkillIcon = (iconName: string) => {
    const Icon =
      skillIcons[
        iconName as keyof typeof skillIcons
      ] ?? CodeIcon;

    return <Icon size={28} />;
  };

  /**
   * Icon kecil untuk filter kategori.
   */
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <ReactIcon size={16} />;

      case 'Backend':
        return <NodeJsIcon size={16} />;

      default:
        return <ZapIcon size={16} />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 relative bg-slate-950/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <SparklesIcon size={14} />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tech Stack &{' '}
            <span className="text-gradient-cyan">
              Skills Matrix
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Core technologies, frameworks, and tools used
            across modern frontend and backend development.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'glass-panel text-slate-400 hover:text-slate-200'
                }`}
              >
                {getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">

                {/* Technology Icon */}
                <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-indigo-500/40 transition-colors">
                  {getSkillIcon(skill.icon)}
                </div>

                {/* Skill Info */}
                <div className="min-w-0 flex-1">

                  <div className="flex items-start justify-between gap-2">

                    <h3 className="text-sm font-bold text-white leading-relaxed">
                      {skill.name}
                    </h3>

                    {skill.popular && (
                      <span className="shrink-0 text-[9px] px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono">
                        Popular
                      </span>
                    )}

                  </div>

                  <p className="text-[11px] text-slate-500 font-mono mt-1">
                    {skill.category}
                  </p>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

