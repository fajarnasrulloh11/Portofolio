'use client';

import React from 'react';
import { EXPERIENCE_DATA } from '@/data/portfolioData';
import {
  SparklesIcon,
  MapPinIcon,
  CheckCircleIcon,
} from '@/components/icons';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <SparklesIcon size={14} />
            <span>Learning Journey & Certifications</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications <span className="text-gradient">& Training</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Building practical software development skills through technical
            training, certifications, and hands-on learning.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l border-slate-800 space-y-12">

          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative group">

              {/* Timeline Node */}
              <div
                className="
                  absolute
                  -left-[31px]
                  sm:-left-[39px]
                  top-1.5
                  w-4
                  h-4
                  rounded-full
                  bg-slate-900
                  border-2
                  border-indigo-500
                  group-hover:border-emerald-400
                  group-hover:scale-125
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-indigo-500/50
                "
              >
                {exp.current && (
                  <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
                )}
              </div>

              {/* Certification Card */}
              <div
                className="
                  glass-card
                  p-6
                  sm:p-8
                  rounded-2xl
                  border
                  border-slate-800
                  space-y-4
                  hover:border-indigo-500/40
                  transition-all
                  duration-300
                "
              >

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>

                    <p className="text-sm font-medium text-slate-300 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono">

                    {/* Period */}
                    <span className="px-3 py-1 rounded-full bg-slate-900 text-cyan-400 border border-slate-800">
                      {exp.period}
                    </span>

                    {/* Location */}
                    <span className="text-slate-500 flex items-center gap-1">
                      <MapPinIcon size={12} />
                      {exp.location}
                    </span>

                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Learning Outcomes */}
                <div className="space-y-2 pt-1">

                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Skills & Learning Outcomes
                  </p>

                  <ul className="space-y-2">

                    {exp.accomplishments.map((acc, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                      >
                        <CheckCircleIcon
                          size={16}
                          className="text-emerald-400 shrink-0 mt-0.5"
                        />

                        <span>{acc}</span>
                      </li>
                    ))}

                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-2">

                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2.5
                        py-0.5
                        rounded-md
                        text-[11px]
                        font-mono
                        bg-slate-900
                        text-slate-400
                        border
                        border-slate-800
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Certificate Link */}
                {'certificateUrl' in exp && exp.certificateUrl && (
                  <div className="pt-3">
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-lg
                        bg-indigo-500/10
                        border
                        border-indigo-500/20
                        text-indigo-300
                        text-xs
                        font-medium
                        hover:bg-indigo-500/20
                        hover:border-indigo-400/40
                        transition-all
                      "
                    >
                      View Certificate
                      <span>↗</span>
                    </a>
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};