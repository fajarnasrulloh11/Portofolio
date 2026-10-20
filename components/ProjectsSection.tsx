'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PROJECTS_DATA } from '@/data/portfolioData';
import { Project, CategoryType } from '@/types/portfolio';
import { ProjectModal } from '@/components/ProjectModal';
import { ArrowUpRightIcon, GithubIcon } from '@/components/icons';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories: { label: string; value: CategoryType }[] = [
    { label: 'All projects', value: 'all' },
    { label: 'Full-stack', value: 'fullstack' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="border-b border-slate-800/80 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-sm text-sky-300">01 / Selected work</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Projects
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
              A selection of web applications and experiments built with the tools listed in each project.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => setSelectedCategory(category.value)}
                aria-pressed={selectedCategory === category.value}
                className={`min-h-10 rounded-md border px-3 py-2 text-xs font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'border-sky-300 bg-sky-300 text-slate-950'
                    : 'border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className={`overflow-hidden rounded-lg border border-slate-800 bg-[#101317] ${
                  index === 0 ? 'md:col-span-2 md:grid md:grid-cols-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden bg-slate-900 ${index === 0 ? 'min-h-56 md:min-h-full' : 'aspect-[16/9]'}`}>
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col p-5 sm:p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 font-mono text-xs uppercase tracking-wide text-slate-500">
                        {project.category} / {project.date}
                      </p>
                      <h3 className="text-xl font-semibold text-white">{project.title.trim()}</h3>
                    </div>
                    {project.featured && (
                      <span className="shrink-0 border-l border-slate-700 pl-3 font-mono text-xs text-sky-300">
                        Selected
                      </span>
                    )}
                  </div>

                  <p className="text-sm leading-6 text-slate-400">{project.shortDescription}</p>

                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-slate-800 pt-4" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag} className="font-mono text-xs text-slate-300">{tag}</li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
                    <button
                      type="button"
                      onClick={() => setActiveProjectModal(project)}
                      className="inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-sky-200"
                    >
                      Project notes <ArrowUpRightIcon size={15} />
                    </button>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-1.5 text-sm text-slate-300 hover:text-white"
                      >
                        <GithubIcon size={15} />
                        Source
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== 'https://example.com' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-1.5 text-sm text-slate-300 hover:text-white"
                      >
                        Live site <ArrowUpRightIcon size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-lg border border-slate-800 p-6 text-sm text-slate-400">
            No projects in this category yet.
          </p>
        )}
      </div>

      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};
