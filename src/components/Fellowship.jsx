import React from 'react';

export default function Fellowship() {
  const modules = [
    {
      title: 'Applied Generative AI & LLM Systems',
      desc: 'Developing domain-specific AI workflows, prompt engineering frameworks, and diagnostic healthcare triage prototypes for rural adoption.',
      status: 'Advanced Mastery',
      tag: 'AI Engineering'
    },
    {
      title: 'Modern Full-Stack Architecture',
      desc: 'Mastering component-driven development with React, asynchronous JavaScript APIs, responsive styling, and automated Netlify CI/CD pipelines.',
      status: 'Production Grade',
      tag: 'Web Engineering'
    },
    {
      title: 'Community Field Deployment & QA',
      desc: 'Designing user-friendly interfaces adapted for low-bandwidth rural devices, local language accessibility, and field performance validation.',
      status: 'Active Impact',
      tag: 'Field Operations'
    }
  ];

  const partners = [
    { name: 'Aarohan AI Fellowship', role: 'Flagship Fellowship Program', logo: 'images/logo-aarohan.jpg' },
    { name: 'Wadhwani Foundation', role: 'Knowledge & Skill Partner', logo: 'images/logo-wadhwani.jpg' },
    { name: 'CareerEzi', role: 'Career & Professional Readiness', logo: 'images/logo-careerezi.jpg' },
    { name: 'Fynity', role: 'Innovation Partner', logo: 'images/logo-fynity.jpg' }
  ];

  return (
    <section className="py-24 bg-slate-950/60 border-y border-slate-800/80 relative" id="fellowship">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Aarohan AI Fellowship 2026
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Nurturing Elite AI & Tech Leadership
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Selected for the prestigious fellowship at Youth Training Centre (YTC) Pedabayalu under ITDA Paderu to build next-generation regional technologists.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {modules.map((m, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-all hover:-translate-y-1 shadow-lg space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-500/15 text-sky-400">
                  {m.tag}
                </span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {m.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading">{m.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Ecosystem Partners Grid */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/50 border border-slate-800 text-center space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
            Fellowship Ecosystem & Institutional Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col items-center justify-center space-y-2 group"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-800 flex items-center justify-center p-1">
                  <img src={p.logo} alt={p.name} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <h4 className="text-sm font-semibold text-slate-200 group-hover:text-sky-400 transition-colors">{p.name}</h4>
                <p className="text-xs text-slate-500">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
