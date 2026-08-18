import React from "react";
import { educationList } from "../data/education";

export default function EducationSection() {
  return (
    <section id="education" className="pb-12 sm:pb-16">
      <div className="mb-5 sm:mb-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Academic Journey & Education
        </h2>
        <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
      </div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {educationList.map((item) => (
          <article
            key={item.school}
            className="rounded-[1.5rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-6 shadow-xl backdrop-blur-md border-l-4 border-l-amber-500 flex flex-col justify-between"
          >
            <div>
              <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
                {item.date}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {item.school}
              </h3>
              <p className="text-xs font-semibold text-slate-500 dark:text-neutral-400 mt-0.5">
                {item.location}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400">
                {item.degree}
              </p>

              <ul className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-neutral-300">
                {item.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span className="leading-relaxed">{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
