import React from "react";

export default function ProfileCard() {
  return (
    <div className="rounded-[1.6rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-4 sm:p-5 shadow-xl backdrop-blur-md">
      {/* Profile Photo Container */}
      <div className="relative group overflow-hidden rounded-2xl border border-stone-200 dark:border-neutral-800">
        <img
          src="/assets/steven-badaga.jpg"
          alt="Steven Irankunda Badaga, Software Engineer"
          className="h-56 sm:h-64 md:aspect-[4/5] md:h-auto w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85" />
        <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
          <p className="text-[10px] sm:text-[11px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
            <svg className="h-3 w-3 fill-amber-400" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Kigali, Rwanda
          </p>
          <h3 className="font-display text-base sm:text-lg font-bold tracking-tight">Steven Irankunda Badaga</h3>
          <p className="text-[11px] font-medium text-neutral-300">Software Engineer & Full-Stack Developer</p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="mt-4 space-y-2 text-xs">
        <div className="rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-50 dark:bg-black/60 px-3 py-2.5 flex items-center justify-between">
          <span className="text-slate-500 dark:text-neutral-400 font-medium">Email</span>
          <a
            href="mailto:badagaclass@gmail.com"
            className="font-bold text-slate-800 dark:text-white hover:text-amber-500 transition break-all text-right"
          >
            badagaclass@gmail.com
          </a>
        </div>
        <div className="rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-50 dark:bg-black/60 px-3 py-2.5 flex items-center justify-between">
          <span className="text-slate-500 dark:text-neutral-400 font-medium">Phone</span>
          <a
            href="tel:+250788883986"
            className="font-bold text-slate-800 dark:text-white hover:text-amber-500 transition"
          >
            +250 788 883 986
          </a>
        </div>
      </div>

      {/* Social Profiles Grid */}
      <div className="mt-4 flex gap-2 text-[10px] font-bold uppercase tracking-wider">
        <a
          href="https://www.linkedin.com/in/steven-irankunda-badaga-54b7a62b2/"
          target="_blank"
          rel="noreferrer noopener"
          className="flex-1 text-center rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-50 dark:bg-black/60 py-2.5 text-slate-700 dark:text-neutral-300 hover:border-amber-500 hover:text-amber-500 transition flex items-center justify-center gap-1.5"
        >
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </a>
        <a
          href="https://github.com/stevenbadaga"
          target="_blank"
          rel="noreferrer noopener"
          className="flex-1 text-center rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-50 dark:bg-black/60 py-2.5 text-slate-700 dark:text-neutral-300 hover:border-amber-500 hover:text-amber-500 transition flex items-center justify-center gap-1.5"
        >
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  );
}
