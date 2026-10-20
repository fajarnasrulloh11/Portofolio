'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { UserIcon } from '@/components/icons';

type AboutTab = 'overview' | 'frontend' | 'backend';

const tabContent: Record<AboutTab, { title: string; description: string }> = {
  overview: {
    title: 'Learning by building',
    description:
      'I am an Information Technology student developing web applications through hands-on projects. I enjoy working across the interface and the systems behind it, and I keep learning by taking ideas from a first screen to a working application.',
  },
  frontend: {
    title: 'Frontend development',
    description:
      'My projects use React and Next.js to build responsive interfaces. I use TypeScript and Tailwind CSS to structure and style those interfaces.',
  },
  backend: {
    title: 'Backend development',
    description:
      'I have built projects with Django REST Framework, Node.js, and PostgreSQL, connecting application interfaces to APIs and persistent data.',
  },
};

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AboutTab>('overview');

  return (
    <section id="about" className="border-b border-slate-800/80 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-4">
          <p className="mb-3 font-mono text-sm text-sky-300">About / Profile</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A little about me
          </h2>
        </div>

        <div className="lg:col-span-8">
          <div className="mb-7 flex items-center gap-4 border-b border-slate-800 pb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-slate-700 text-sky-300">
              <UserIcon size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-white">{PERSONAL_INFO.name}</h3>
              <p className="mt-1 text-sm text-slate-400">
                {PERSONAL_INFO.role} · {PERSONAL_INFO.location}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="About Fajar">
            {(Object.keys(tabContent) as AboutTab[]).map((tab) => (
              <button
                key={tab}
                id={`about-tab-${tab}`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls="about-tab-panel"
                onClick={() => setActiveTab(tab)}
                className={`min-h-10 rounded-md border px-3 py-2 text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-sky-300 text-sky-300'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div
            id="about-tab-panel"
            role="tabpanel"
            aria-labelledby={`about-tab-${activeTab}`}
            className="mt-5 border-l-2 border-slate-700 py-1 pl-5"
          >
            <h3 className="text-lg font-medium text-white">{tabContent[activeTab].title}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
              {tabContent[activeTab].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
