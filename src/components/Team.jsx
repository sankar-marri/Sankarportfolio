import React from 'react';
import { teamData } from '../data/portfolioData';

export default function Team() {
  return (
    <section className="py-24 bg-slate-950/60 border-y border-slate-800/80 relative" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Collaborative Ecosystem
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            My Collaborative Team
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Empowered by visionary mentorship from executive leadership and driving impact alongside talented cohort peers.
          </p>
        </div>

        {/* Executive Leadership Tier */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xl">👑</span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-100">
              Executive & Project Leadership
            </h3>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamData.leadership.map((lead, idx) => (
              <div
                key={idx}
                className="relative p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl space-y-4"
              >
                {/* Crown Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5"
                    style={{ backgroundColor: `${lead.crownColor}20`, color: lead.crownColor, border: `1px solid ${lead.crownColor}50` }}
                  >
                    <span>👑</span>
                    <span>{lead.badge}</span>
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Leadership Tier</span>
                </div>

                {/* Avatar & Title */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-800 border-2 border-slate-700 flex items-center justify-center shrink-0">
                    {lead.avatarImg ? (
                      <img src={lead.avatarImg} alt={lead.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xl font-bold text-slate-200">{lead.avatarText}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white font-heading">{lead.name}</h4>
                    <p className="text-xs font-semibold" style={{ color: lead.crownColor }}>
                      {lead.title}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {lead.motto}
                </p>

                {lead.phone && (
                  <div className="pt-2 border-t border-slate-800/80">
                    <a
                      href={`tel:${lead.phone}`}
                      className="text-xs text-sky-400 hover:text-sky-300 font-mono flex items-center gap-1.5"
                    >
                      <span>📞</span>
                      <span>{lead.phone}</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cohort Fellows Tier */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xl">🚀</span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-100">
              Aarohan Cohort Fellows & Engineers
            </h3>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.cohort.map((member, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-slate-900/80 border transition-all duration-300 hover:-translate-y-1 shadow-lg flex items-center gap-4 ${
                  member.highlight
                    ? 'border-sky-500/60 bg-sky-500/5'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shrink-0">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => { e.target.src = 'images/sankar-github.jpg'; }}
                  />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-white truncate font-heading">{member.name}</h4>
                    {member.highlight && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-sky-500 text-white">
                        You
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-sky-400 truncate">{member.role}</p>
                  <p className="text-[11px] text-slate-400 truncate">{member.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
