import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects (6)' },
    { id: 'ai-health', label: 'AI & Healthcare' },
    { id: 'tourism', label: 'Tourism & Regional' },
    { id: 'web-apps', label: 'Web Platforms' }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-slate-950/60 border-y border-slate-800/80 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Live Deployed Web Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world applications architected, developed, and deployed live on Netlify Cloud infrastructure.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="group rounded-3xl bg-slate-900/90 border border-slate-800/90 hover:border-sky-500/50 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Hover Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    onError={(e) => {
                      e.target.src = 'images/sankar-banner.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                  {/* Header badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-slate-900/80 text-sky-400 border border-slate-700/80 backdrop-blur-md">
                      {p.categoryLabel}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Live on Netlify
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-sky-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs font-medium text-sky-300/80 mt-0.5">
                      {p.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-sky-500/20 hover:shadow-sky-500/40 transition-all"
                >
                  <span>Launch Live App</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
