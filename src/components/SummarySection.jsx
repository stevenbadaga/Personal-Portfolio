import React from "react";
import { engineeringPrinciples } from "../data/education";
import { coreCompetencies } from "../data/skills";

export default function SummarySection() {
  return (
    <section id="summary" className="pb-12 sm:pb-16">
      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        {/* Summary Card */}
        <article className="rounded-[1.6rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-8 lg:p-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional Summary
          </h2>
          <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />

          <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-slate-600 dark:text-neutral-300">
            Software Engineer focused on building practical full-stack systems, from production websites and business platforms to GIS-based applications. I work across frontend interfaces, backend APIs, databases and deployment, with an emphasis on software that solves clear operational problems. Experienced in translating real business and spatial requirements into clean architecture, resilient Spring Boot backend services, secure authentication workflows, and modern responsive user interfaces.
          </p>

          {/* 4 Core Principles Grid */}
          <div className="mt-6 sm:mt-8 grid gap-3 sm:grid-cols-2">
            {engineeringPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-stone-200 dark:border-neutral-800 bg-stone-50/50 dark:bg-black/50 p-4 transition hover:border-amber-500/40"
              >
                <span className="text-2xl">{principle.icon}</span>
                <h3 className="mt-1.5 font-display text-sm font-bold text-slate-900 dark:text-white">
                  {principle.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-neutral-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </article>

        {/* Core Competencies Card */}
        <article className="rounded-[1.6rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Core Competencies
            </h3>
            <div className="mt-2.5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />

            <p className="mt-3 text-xs text-slate-500 dark:text-neutral-400">
              Verified technical capabilities demonstrated across featured production platforms and system builds.
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
              {coreCompetencies.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-100/80 dark:bg-black/70 px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300 shadow-sm transition hover:border-amber-500 hover:text-amber-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              Academic Background
            </p>
            <p className="mt-1 text-xs text-slate-600 dark:text-neutral-300 leading-relaxed">
              Adventist University of Central Africa (AUCA) • Software Engineering Program. Expected Graduation: 2026.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
