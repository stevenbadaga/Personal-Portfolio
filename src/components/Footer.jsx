import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200/70 dark:border-neutral-900 bg-stone-100/50 dark:bg-black py-8 text-center text-slate-500 dark:text-neutral-500 text-xs px-4">
      <div className="mx-auto max-w-[1280px] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-semibold tracking-wide">
          &copy; {currentYear} Steven Irankunda Badaga. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
          <a
            href="https://github.com/stevenbadaga"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-amber-500 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/steven-irankunda-badaga-54b7a62b2/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-amber-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:badagaclass@gmail.com"
            className="hover:text-amber-500 transition"
          >
            Email
          </a>
        </div>

        <p className="text-[11px] text-slate-400 dark:text-neutral-600">
          Kigali, Rwanda
        </p>
      </div>
    </footer>
  );
}
