import React from "react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="pb-12 sm:pb-16">
      <div className="rounded-[1.6rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              Experience
            </p>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Program Management & Venture Development
            </h2>
          </div>
          <span className="w-fit rounded-full border border-amber-500/25 bg-amber-500/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            2026 — Present
          </span>
        </div>

        <div className="mt-6 border-l-2 border-amber-500/30 pl-5 sm:pl-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              Program Manager
            </h3>
            <span className="hidden sm:inline text-slate-400">•</span>
            <p className="font-semibold text-amber-700 dark:text-amber-400">
              Safari Strives
            </p>
          </div>
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-neutral-500">
            Rubavu, Rwanda
          </p>

          <p className="mt-5 max-w-4xl text-sm sm:text-[15px] leading-relaxed text-slate-600 dark:text-neutral-300">
            Manage venture-development programs supporting operating businesses
            and help build the systems that turn program plans into measurable
            execution.
          </p>

          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Manage the Venture Track, including weekly commitments, milestones, longer-term goals, and founder progress.",
              "Coordinate entrepreneurs, mentors, internal teams, and program activities to keep execution moving.",
              "Design practical workflows for accountability, reporting, founder engagement, and program delivery.",
              "Contribute to Safari Strives' broader work building enterprise infrastructure for entrepreneurs in secondary cities.",
              "Build and improve digital tools and internal systems that support program management and venture execution.",
              "Work directly with entrepreneurs to translate business priorities into concrete actions and measurable progress."
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-50/60 dark:bg-black/40 p-3.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 dark:text-neutral-400"
              >
                <span className="mr-2 text-amber-500">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
