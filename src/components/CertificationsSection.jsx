import React from "react";
import { certificationsList } from "../data/certifications";

export default function CertificationsSection({ onNavigateToCertificationsPage, onSelectCert }) {
  const officialCerts = certificationsList.filter((c) => c.category === "Official Certification");

  return (
    <section id="certifications" className="pb-12 sm:pb-16">
      <div className="mb-5 sm:mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-stone-200 dark:border-neutral-800 pb-4">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Certifications & Credentials
          </h2>
          <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
        </div>
        <button
          type="button"
          onClick={onNavigateToCertificationsPage}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-500 hover:text-amber-400 dark:hover:text-white transition"
        >
          Explore All Credentials →
        </button>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {officialCerts.map((cert) => (
          <article
            key={cert.id}
            className="rounded-[1.5rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-6 shadow-xl backdrop-blur-md flex flex-col justify-between transition hover:border-amber-500/40"
          >
            <div>
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-bold uppercase text-amber-600 dark:text-amber-400 mb-2">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="mt-2 text-xs text-slate-500 dark:text-neutral-400 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-stone-200 dark:border-neutral-800/80 flex items-center justify-between gap-2">
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                Verified Document
              </span>
              <div className="flex items-center gap-2">
                {cert.fileUrl && (
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xs font-bold uppercase text-amber-500 hover:text-amber-400 transition"
                  >
                    View Document ↗
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => onSelectCert(cert)}
                  className="rounded-lg border border-stone-300 dark:border-neutral-800 bg-stone-100 dark:bg-neutral-900 px-2.5 py-1 text-[10px] font-bold uppercase text-slate-700 dark:text-neutral-300 hover:border-amber-500 transition"
                >
                  Inspect
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={onNavigateToCertificationsPage}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-[#D4AF37] to-yellow-500 px-8 py-3 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-md hover:brightness-105 transition"
        >
          View Dedicated Credentials Page →
        </button>
      </div>
    </section>
  );
}
