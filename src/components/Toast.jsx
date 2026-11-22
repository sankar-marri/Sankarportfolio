import React from 'react';

export default function Toast({ message, visible }) {
  if (!visible || !message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900/95 border border-sky-400/40 text-slate-100 px-5 py-3 rounded-full shadow-2xl backdrop-blur-md animate-fade-in-up">
      <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
      <span className="text-sm font-medium tracking-wide">{message}</span>
    </div>
  );
}
