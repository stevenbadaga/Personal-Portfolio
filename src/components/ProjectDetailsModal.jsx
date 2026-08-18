import React, { useEffect } from "react";

export default function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-modal">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-stone-300 dark:border-neutral-800 bg-[#FAF9F6] dark:bg-[#0C0C0C] p-6 sm:p-8 text-slate-800 dark:text-neutral-200 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-200 dark:border-neutral-800 pb-4 mb-5 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">
                {project.category}
              </span>
              <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500">
                {project.status}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {project.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="h-9 w-9 rounded-full border border-stone-300 dark:border-neutral-700 bg-stone-100 dark:bg-neutral-900 text-slate-600 dark:text-neutral-400 hover:text-white flex items-center justify-center transition shrink-0"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-xs sm:text-sm">
          {/* Full Description */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1.5">
              System Overview
            </h3>
            <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Solution */}
          {project.keySolution && (
            <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-4">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                Operational Problem Solved
              </h4>
              <p className="text-xs text-slate-700 dark:text-neutral-300 leading-relaxed">
                {project.keySolution}
              </p>
            </div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1.5">
                Technical Architecture
              </h3>
              <p className="leading-relaxed text-slate-600 dark:text-neutral-300 bg-stone-100 dark:bg-black/60 p-3.5 rounded-xl border border-stone-200 dark:border-neutral-800 font-mono text-xs">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Verified Capabilities */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              Verified Capabilities & Workflows
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-neutral-300">
              {project.capabilities.map((cap, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span className="leading-relaxed">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Badges */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              Verified Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-stone-200/80 dark:bg-neutral-900 border border-stone-300 dark:border-neutral-800 px-3 py-1 text-xs font-semibold text-slate-800 dark:text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="mt-8 pt-4 border-t border-stone-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 hover:brightness-110 transition shadow-md"
              >
                Visit Live Site ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-stone-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-neutral-200 hover:border-amber-500 hover:text-amber-400 transition"
              >
                View Code on GitHub ↗
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-stone-300 dark:border-neutral-800 bg-stone-100 dark:bg-neutral-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300 hover:text-white hover:border-amber-500 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
