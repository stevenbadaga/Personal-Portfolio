import React, { useState, useMemo } from "react";
import { skillGroups } from "../data/skills";

export default function SkillsSection() {
  const [skillCategoryFilter, setSkillCategoryFilter] = useState("All");
  const [skillSearchQuery, setSkillSearchQuery] = useState("");

  const filteredSkillGroups = useMemo(() => {
    return skillGroups.filter((group) => {
      const matchesCategory =
        skillCategoryFilter === "All" || group.category === skillCategoryFilter;
      const query = skillSearchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        group.title.toLowerCase().includes(query) ||
        group.description.toLowerCase().includes(query) ||
        group.skills.some((s) => s.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [skillCategoryFilter, skillSearchQuery]);

  const categories = ["All", "Frontend", "Backend & APIs", "Databases", "Specialized & GIS", "Engineering Practices"];

  return (
    <section id="skills" className="pb-12 sm:pb-16">
      {/* Section Header with Search Bar */}
      <div className="mb-5 sm:mb-6 flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 dark:border-neutral-800 pb-4">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills & Capabilities
          </h2>
          <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={skillSearchQuery}
            onChange={(e) => setSkillSearchQuery(e.target.value)}
            placeholder="Search skills (e.g. React, Spring Boot, GIS)..."
            className="w-full rounded-full border border-stone-300 dark:border-neutral-800 bg-white dark:bg-black px-4 py-2 text-xs font-medium text-slate-800 dark:text-white focus:border-amber-500 focus:outline-none placeholder-stone-400 shadow-sm"
          />
          {skillSearchQuery && (
            <button
              type="button"
              onClick={() => setSkillSearchQuery("")}
              className="absolute right-3 top-2 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-white"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="mb-6 flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1.5 sm:pb-0 sm:flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSkillCategoryFilter(cat)}
            className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all shrink-0 ${
              skillCategoryFilter === cat
                ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md shadow-amber-500/10 font-black"
                : "border border-stone-200 dark:border-neutral-800 bg-white/60 dark:bg-[#0D0D0D] text-slate-600 dark:text-neutral-400 hover:border-stone-400 dark:hover:border-neutral-700 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Cards Grid */}
      {filteredSkillGroups.length === 0 ? (
        <div className="rounded-2xl border border-stone-200 dark:border-neutral-800 p-8 text-center text-slate-500 text-xs sm:text-sm">
          No skills found matching &quot;{skillSearchQuery}&quot; in category &quot;{skillCategoryFilter}&quot;.
        </div>
      ) : (
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredSkillGroups.map((group) => (
            <article
              key={group.title}
              className="group rounded-[1.5rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 flex flex-col justify-between"
            >
              <div>
                <div className="mb-3 h-1.5 w-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300 group-hover:w-16" />
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  {group.category}
                </span>
                <h3 className="mt-0.5 font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                  {group.title}
                </h3>
                <p className="mt-2 text-xs text-slate-500 dark:text-neutral-400 leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.skills.map((skillItem) => (
                  <span
                    key={skillItem}
                    className="rounded-lg bg-stone-100 dark:bg-black/70 border border-stone-200/60 dark:border-neutral-800 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300 shadow-sm"
                  >
                    {skillItem}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
