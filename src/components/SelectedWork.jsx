import React, { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { featuredProjects, otherWork } from "../data/projects";

export default function SelectedWork({ onSelectProject }) {
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (filterCategory === "All") return featuredProjects;
    if (filterCategory === "Live Production") return featuredProjects.filter((p) => p.isHosted);
    if (filterCategory === "GIS Engineering") return featuredProjects.filter((p) => p.id === "geosmart-manager");
    if (filterCategory === "Business Systems") return featuredProjects.filter((p) => p.id === "restaurant-pos" || p.id === "larita-motel");
    return featuredProjects;
  }, [filterCategory]);

  return (
    <section id="projects" className="pb-12 sm:pb-16">
      {/* Section Header & Filters */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 dark:border-neutral-800 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Featured Systems
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Selected Work
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Selected production platforms and full-stack software systems I have designed and developed across web applications, AI-assisted services, GIS systems, and business operations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0 shrink-0">
          {[
            { label: "All Work (5)", key: "All" },
            { label: "⚡ Live Production", key: "Live Production" },
            { label: "🗺️ GIS Engineering", key: "GIS Engineering" },
            { label: "🏢 Business Systems", key: "Business Systems" }
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilterCategory(tab.key)}
              className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all shrink-0 ${
                filterCategory === tab.key
                  ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black shadow-md"
                  : "border border-stone-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 5 Major Featured Projects Grid */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>

      {/* Optional Other Work Section (Compact, Quality over Quantity) */}
      {otherWork && otherWork.length > 0 && filterCategory === "All" && (
        <div className="mt-10 pt-8 border-t border-stone-200 dark:border-neutral-900">
          <div className="mb-4">
            <h3 className="font-display text-lg font-bold text-slate-800 dark:text-white">
              Other Software Repositories
            </h3>
            <p className="text-xs text-slate-500 dark:text-neutral-400">
              Additional independent software projects and open-source implementations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherWork.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-stone-200 dark:border-neutral-800 bg-white/50 dark:bg-[#0A0A0A] p-4 flex flex-col justify-between transition hover:border-amber-500/40"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase text-amber-500 mb-1">
                    <span>{item.category}</span>
                    <span className="text-neutral-400">{item.badge}</span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200 dark:border-neutral-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="rounded bg-stone-100 dark:bg-black px-1.5 py-0.5 text-[9px] font-medium text-slate-600 dark:text-neutral-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-xs font-bold uppercase text-amber-500 hover:text-amber-400 transition"
                    >
                      View Code ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
