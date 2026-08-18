import React from "react";
import ProfileCard from "./ProfileCard";
import DeveloperTerminal from "./DeveloperTerminal";
import { quickStats } from "../data/education";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid gap-6 pb-12 sm:pb-16 md:grid-cols-[1.35fr_minmax(290px,0.95fr)] md:items-stretch lg:gap-8 xl:grid-cols-[1.5fr_minmax(320px,0.88fr)]"
    >
      {/* Primary Hero Intro Card */}
      <article className="relative animate-rise overflow-hidden rounded-[1.6rem] sm:rounded-[2.2rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-9 lg:p-10 xl:p-12 transition-all duration-300 flex flex-col justify-between">
        {/* Subtle Ambient Glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-amber-500/10 blur-[80px]" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-teal-500/10 blur-[80px]" />

        <div>
          {/* Status Badges */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Software Engineering Roles
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              AUCA Software Engineering • 2026
            </span>
          </div>

          {/* Primary Name Heading (H1) */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl xl:text-[3.6rem] font-extrabold leading-tight text-slate-900 dark:text-white tracking-tight">
            Steven Irankunda Badaga
          </h1>

          {/* Subtitle (H2) */}
          <h2 className="mt-2 font-display text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-teal-600 dark:from-amber-400 dark:via-yellow-200 dark:to-teal-400 bg-clip-text text-transparent tracking-tight">
            Software Engineer & Full-Stack Developer
          </h2>

          {/* Natural Concise Description */}
          <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base lg:text-lg text-slate-600 dark:text-neutral-300 leading-relaxed">
            I build full-stack web applications, backend services, business platforms, and GIS-based software designed around real operational problems.
          </p>

          {/* Clear Hero CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-[#D4AF37] to-yellow-500 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-105 text-center min-h-[44px]"
            >
              View Selected Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-stone-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-200 transition-all duration-300 hover:bg-stone-100 dark:hover:bg-neutral-800 text-center min-h-[44px]"
            >
              Contact Me
            </a>
            <a
              href="/assets/CV.pdf"
              download="Steven_Irankunda_Badaga_CV.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-amber-600/50 dark:border-[#D4AF37]/45 bg-transparent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-[#D4AF37] transition-all duration-300 hover:bg-amber-500/10 text-center min-h-[44px]"
            >
              <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              Download CV (PDF)
            </a>
          </div>
        </div>

        {/* Quick Factual Stats Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-3 border-t border-stone-200 dark:border-neutral-800/80 pt-5 sm:pt-6">
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-xl sm:rounded-2xl border border-stone-200/80 dark:border-neutral-800/80 bg-stone-50/60 dark:bg-black/50 p-3 sm:p-4 text-center sm:text-left transition-all duration-300 hover:border-amber-500/40"
            >
              <p className="font-display text-xl sm:text-3xl font-extrabold leading-none text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                {stat.value}
              </p>
              <p className="mt-1 sm:mt-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </article>

      {/* Profile Card & Interactive CLI Sidebar */}
      <aside className="animate-rise space-y-5 sm:space-y-6 [animation-delay:120ms]">
        <ProfileCard />
        <DeveloperTerminal />
      </aside>
    </section>
  );
}
