import React from "react";

export default function ProjectCard({ project, onSelectProject }) {
  const isTier1 = project.tier === 1;
  const isTier2 = project.tier === 2;

  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.8rem] border bg-white/80 dark:bg-[#0D0D0D] p-5 sm:p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 ${
        isTier1
          ? "border-stone-200 dark:border-neutral-800 hover:border-amber-500/60 lg:col-span-6"
          : isTier2
          ? "border-stone-200 dark:border-neutral-800 hover:border-teal-500/60 lg:col-span-6"
          : "border-stone-200 dark:border-neutral-800 hover:border-amber-500/50 lg:col-span-6"
      }`}
    >
      {/* Ambient Backlight */}
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl transition-all ${
          isTier1
            ? "bg-amber-500/10 group-hover:bg-amber-500/20"
            : isTier2
            ? "bg-teal-500/10 group-hover:bg-teal-500/20"
            : "bg-amber-500/10 group-hover:bg-amber-500/15"
        }`}
      />

      <div>
        {/* Tier 1 Simulated Browser Window Bar */}
        {isTier1 && (
          <div className="mb-4 rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-100/90 dark:bg-black/90 px-3.5 py-2 flex items-center justify-between font-mono text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-500/80 inline-block" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/80 inline-block" />
              <span className="h-2 w-2 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-neutral-300 truncate max-w-[210px] sm:max-w-[280px]">
              <span className="text-emerald-500 font-bold">https://</span>
              <span className="truncate text-amber-500 dark:text-amber-300 font-semibold">{project.displayUrl}</span>
            </div>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        )}

        {/* Tier 2 GIS Engineering Header Bar */}
        {isTier2 && (
          <div className="mb-4 rounded-xl border border-teal-500/20 bg-teal-500/5 dark:bg-teal-950/20 px-3.5 py-2 flex items-center justify-between font-mono text-[11px]">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold">
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM14 5.586v12.828l3.707-3.707A1 1 0 0018 14V4a1 1 0 00-.293-.707L14 5.586z" clipRule="evenodd" />
              </svg>
              <span>GIS SPATIAL SYSTEM</span>
            </div>
            <span className="text-[10px] font-semibold text-teal-600/80 dark:text-teal-400/80">Kigali Master Plan Zoning</span>
          </div>
        )}

        {/* Tier 3 Business System Bar */}
        {!isTier1 && !isTier2 && (
          <div className="mb-4 rounded-xl border border-stone-200 dark:border-neutral-800/80 bg-stone-50 dark:bg-black/60 px-3.5 py-2 flex items-center justify-between font-mono text-[11px]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              {project.badge}
            </span>
            <span className="text-[10px] font-semibold text-slate-400 dark:text-neutral-500">Enterprise Full-Stack</span>
          </div>
        )}

        {/* Header Row: Title & Badges */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
              {project.name}
            </h3>
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-neutral-400 mt-1">
              {project.category}
            </p>
          </div>

          <div className="flex flex-col items-end gap-1 shrink-0">
            {project.isHosted ? (
              <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                LIVE PRODUCTION
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-100 dark:bg-neutral-900 border border-stone-300 dark:border-neutral-800 text-slate-700 dark:text-neutral-300">
                {project.secondaryBadge || project.badge}
              </span>
            )}
          </div>
        </div>

        {/* Independent Build Note if applicable */}
        {project.roleNote && (
          <div className="mt-3 rounded-xl border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-[11px] font-semibold text-amber-700 dark:text-amber-300">
            ✦ {project.roleNote}
          </div>
        )}

        {/* Short Description */}
        <p className="text-xs sm:text-[13px] text-slate-600 dark:text-neutral-300 leading-relaxed mt-3.5">
          {project.shortDescription}
        </p>

        {/* Key Verified Capabilities */}
        <div className="mt-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500 mb-2">
            Verified Capabilities:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-neutral-300">
            {project.capabilities.map((cap, cIdx) => (
              <li key={cIdx} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                <span className="leading-snug">{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Area: Technologies and CTAs */}
      <div className="mt-6 pt-4 border-t border-stone-200 dark:border-neutral-800/80">
        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-stone-100 dark:bg-black border border-stone-200 dark:border-neutral-800 px-2.5 py-1 text-[10px] font-semibold text-slate-700 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-[#D4AF37] to-yellow-500 px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 hover:brightness-110 shadow-md transition text-center min-h-[40px]"
            >
              <span>Visit Live Site ↗</span>
            </a>
          ) : null}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={`inline-flex items-center justify-center gap-1.5 rounded-xl border border-stone-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-neutral-200 hover:border-amber-500 hover:text-amber-400 transition text-center min-h-[40px] ${
                project.liveUrl ? "flex-1" : "flex-1"
              }`}
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>View Code ↗</span>
            </a>
          ) : null}

          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center justify-center gap-1 rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-100 dark:bg-black px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300 hover:border-amber-500 hover:text-white transition min-h-[40px]"
            title="Inspect Architecture & Engineering Details"
          >
            <span>Insights 🔍</span>
          </button>
        </div>
      </div>
    </article>
  );
}
