import React from "react";
import { certificationsList } from "../data/certifications";

export default function DedicatedCertificationsPage({ onBackToHome, onSelectCert }) {
  return (
    <div className="pb-16 animate-modal">
      {/* Top Header & Back Navigation */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-neutral-800 pb-6">
        <div>
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 dark:border-neutral-800 bg-stone-100 dark:bg-neutral-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300 hover:border-amber-500 hover:text-amber-400 transition"
          >
            ← Back to Selected Work & Portfolio Home
          </button>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Official Certifications & Credentials
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Verified academic distinctions, language proficiencies, and software engineering credentials earned by Steven Irankunda Badaga.
          </p>
        </div>

        <a
          href="/assets/CV.pdf"
          download="Steven_Irankunda_Badaga_CV.pdf"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-[#D4AF37] to-yellow-500 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-md hover:brightness-105 transition min-h-[44px] shrink-0"
        >
          <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          Download CV (PDF)
        </a>
      </div>

      {/* Certifications Showcase Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {certificationsList.map((cert) => (
          <article
            key={cert.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[1.8rem] border border-stone-200 dark:border-neutral-800 bg-white/80 dark:bg-[#0D0D0D] p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50"
          >
            <div>
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">
                  {cert.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                  ✓ {cert.badge}
                </span>
              </div>

              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-400 transition-colors">
                {cert.title}
              </h2>
              <p className="text-xs font-semibold text-slate-500 dark:text-neutral-400 mt-1">
                Issued by: <strong className="text-slate-800 dark:text-white">{cert.issuer}</strong> ({cert.date})
              </p>

              <p className="mt-4 text-xs text-slate-600 dark:text-neutral-300 leading-relaxed">
                {cert.description}
              </p>

              {/* Image Preview for Harambe certificate */}
              {cert.type === "image" && cert.fileUrl && (
                <div
                  className="mt-5 relative overflow-hidden rounded-2xl border border-neutral-800 group/img cursor-pointer"
                  onClick={() => onSelectCert(cert)}
                >
                  <img
                    src={cert.fileUrl}
                    alt={cert.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="rounded-full bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 uppercase tracking-wider">
                      🔍 Inspect Document
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[10px] font-medium text-slate-400 dark:text-neutral-500">
                {cert.details}
              </p>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {cert.fileUrl && (
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 hover:brightness-110 transition text-center"
                  >
                    View Document ↗
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => onSelectCert(cert)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 rounded-xl border border-stone-300 dark:border-neutral-800 bg-stone-100 dark:bg-neutral-900 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300 hover:border-amber-500 hover:text-white transition"
                >
                  Inspect Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
