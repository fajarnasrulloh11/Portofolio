
'use client';

import React, { useState } from 'react';
import { SKILLS_DATA } from '@/data/portfolioData';

import {
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

  const categories = ['All', ...new Set(SKILLS_DATA.map((skill) => skill.category))];

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
      className="border-b border-slate-800/80 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="max-w-2xl mb-9 space-y-3">

          <p className="font-mono text-sm text-sky-300">02 / Tools in use</p>

          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Technologies
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-6">
            Technologies used across the projects shown here, organized by where they fit in the stack.
          </p>

          <div className="flex flex-wrap gap-2 pt-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                aria-pressed={activeCategory === category}
                className={`inline-flex min-h-10 items-center gap-2 rounded-md border px-3 py-2 text-xs font-medium transition-colors ${
                  activeCategory === category
                    ? 'border-sky-300 bg-sky-300 text-slate-950'
                    : 'border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
                }`}
              >
                {getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-4 border-t border-slate-800 py-4"
            >
              <div className="flex items-center gap-4">

                {/* Technology Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center text-sky-300">
                  {getSkillIcon(skill.icon)}
                </div>

                {/* Skill Info */}
                <div className="min-w-0 flex-1">

                  <div className="flex items-start justify-between gap-2">

                    <h3 className="text-sm font-bold text-white leading-relaxed">
                      {skill.name}
                    </h3>

                  </div>

                  <p className="text-xs text-slate-500 font-mono mt-1">
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
