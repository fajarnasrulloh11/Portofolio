'use client';

import React from 'react';
import { EXPERIENCE_DATA } from '@/data/portfolioData';
import { MapPinIcon, CheckCircleIcon } from '@/components/icons';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="border-b border-slate-800/80 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-9 space-y-3">
          <p className="font-mono text-sm text-sky-300">03 / Learning</p>

          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Certifications &amp; training
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Building practical software development skills through technical
            training, certifications, and hands-on learning.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl pl-6 sm:pl-8 border-l border-slate-800 space-y-8">

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
                  bg-[#0b0d10]
                  border-2
                  border-slate-500
                "
              >
              </div>

              {/* Certification Card */}
              <div
                className="
                  bg-[#101317]
                  p-6
                  sm:p-8
                  rounded-lg
                  border
                  border-slate-800
                  space-y-4
                  transition-colors
                "
              >

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h3>

                    <p className="text-sm font-medium text-slate-300 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono">

                    {/* Period */}
                    <span className="text-sky-300">
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
                            className="text-sky-300 shrink-0 mt-0.5"
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
                        bg-transparent
                        text-slate-400
                        border-b
                        border-slate-700
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
                        bg-transparent
                        border
                        border-slate-700
                        text-sky-300
                        text-xs
                        font-medium
                        hover:border-sky-300
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