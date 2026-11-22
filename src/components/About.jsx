import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: '💻',
      title: 'Full-Stack Web Engineering',
      desc: 'Developing resilient, high-speed, and accessible web systems using React, JavaScript, and Tailwind CSS with automated Netlify deployment pipelines.'
    },
    {
      icon: '🧠',
      title: 'Applied AI & Diagnostics',
      desc: 'Investigating real-world machine learning solutions, healthcare triage pipelines, and AI workflows tailored to underserved rural and semi-urban communities.'
    },
    {
      icon: '🌱',
      title: 'Regional Empowerment & Tech Voice',
      desc: 'Spearheading AIXplore Telugu to bring AI literacy in native Telugu and championing indigenous eco-tourism through the Mana Paderu Trails initiative.'
    }
  ];

  return (
    <section className="py-24 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
            About Sankar
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Driven by Purpose, Powered by Code
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A developer's journey from the tribal valleys of Pedabayalu to high-impact applied AI software engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 opacity-30 group-hover:opacity-70 blur-xl transition-all duration-700" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
                <img
                  src={personalInfo.avatarPhoto}
                  alt="Sankar Professional Portrait"
                  className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6 bg-slate-900/95 border-t border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white font-heading">{personalInfo.name}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-400">
                      Fellow ID: {personalInfo.fellowId}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    📍 {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-100">
              Transforming Challenges into High-Performance Digital Solutions
            </h3>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              {personalInfo.detailedBio}
            </p>

            {/* Core Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 transition-all hover:-translate-y-1 shadow-md space-y-2"
                >
                  <span className="text-3xl block">{p.icon}</span>
                  <h4 className="text-base font-bold text-white">{p.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick Specs */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-slate-500 block">Current Focus</span>
                <span className="text-slate-200 font-semibold mt-0.5 block">React & Applied AI</span>
              </div>
              <div>
                <span className="text-slate-500 block">Languages</span>
                <span className="text-slate-200 font-semibold mt-0.5 block">Telugu & English</span>
              </div>
              <div>
                <span className="text-slate-500 block">Fellowship</span>
                <span className="text-sky-400 font-semibold mt-0.5 block">Aarohan AI '26</span>
              </div>
              <div>
                <span className="text-slate-500 block">Deployments</span>
                <span className="text-emerald-400 font-semibold mt-0.5 block">6 Netlify Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
