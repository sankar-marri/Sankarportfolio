import React from 'react';
import { channelsData } from '../data/portfolioData';

export default function Channels() {
  return (
    <section className="py-24 relative" id="channels">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Digital Impact & Advocacy
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Creator Channels & Regional Advocacy
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Empowering regional youth through AI education in Telugu and championing the tribal heritage of Alluri District.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {channelsData.map((c, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-sky-500/50 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: `${c.color}25`, border: `1px solid ${c.color}60` }}
                  >
                    {c.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {c.stats}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {c.name}
                </h3>

                <h4 className="text-base font-semibold text-sky-300">
                  {c.headline}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-white font-bold text-sm shadow-lg transition-all transform hover:scale-105"
                  style={{ backgroundColor: c.color }}
                >
                  <span>Visit {c.platform} ↗</span>
                </a>

                {c.videoSample && (
                  <a
                    href={c.videoSample}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition-colors"
                  >
                    <span>Watch Featured Content ↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
