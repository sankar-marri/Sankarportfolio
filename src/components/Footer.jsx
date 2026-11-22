import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="text-xl font-bold font-heading text-slate-100">
            <span className="text-sky-400">&lt;</span>Sankar<span className="text-sky-400">/&gt;</span>
          </span>
          <span className="hidden sm:inline-block text-slate-600">•</span>
          <span className="text-xs text-slate-400">
            Aarohan AI Fellow 2026 ({personalInfo.fellowId}) • ITDA Pedabayalu
          </span>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
          <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
          <a href="#video-intro" className="hover:text-sky-400 transition-colors">Video Intro</a>
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
          <a href="#team" className="hover:text-sky-400 transition-colors">Team</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
        </div>

        {/* Back to top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500">
            © {new Date().getFullYear()} Sankar. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            title="Back to Top"
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
