import React from "react";
import { languagesList } from "../data/languages";

export default function LanguagesSection() {
  return (
    <section id="languages" className="pb-12 sm:pb-16">
      <div className="mb-5 sm:mb-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Language Proficiency
        </h2>
        <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
      </div>

      <div className="grid gap-3.5 sm:gap-4 grid-cols-2 lg:grid-cols-4">
        {languagesList.map((language) => (
          <article
            key={language.name}
            className="rounded-[1.5rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-4 sm:p-5 shadow-xl backdrop-blur-md"
          >
            <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {language.name}
              </h3>
              <span className="text-[10px] sm:text-xs font-bold text-amber-600 dark:text-amber-400">
                {language.level}
              </span>
            </div>
            <div className="h-1.5 sm:h-2 overflow-hidden rounded-full bg-stone-200 dark:bg-neutral-900">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
                style={{ width: language.width }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
