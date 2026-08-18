import React from "react";

export default function Navbar({
  currentPage,
  activeSection,
  navigateToPage,
  themePreference,
  setThemePreference,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Selected Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Summary", href: "#summary" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 dark:border-neutral-900 bg-[#FAF9F6]/90 dark:bg-[#000000]/90 backdrop-blur-md transition-all duration-300 shadow-sm dark:shadow-none">
      <div className="mx-auto flex h-14 sm:h-16 w-full max-w-[1280px] items-center justify-between gap-3 px-3.5 sm:px-6 lg:px-10 xl:px-12">
        {/* Brand Name */}
        <button
          type="button"
          onClick={() => navigateToPage("home", "#home")}
          className="font-display text-xs sm:text-sm font-bold tracking-tight text-slate-900 dark:text-white transition hover:text-[#D4AF37] flex items-center gap-2 text-left shrink-0"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 animate-pulse" />
          <span className="font-extrabold tracking-tight">Steven Irankunda Badaga</span>
        </button>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigationItems.map((item) => {
              const isCertPage = item.href === "#certifications" && currentPage === "certifications";
              const isActive = (currentPage === "home" && activeSection === item.href) || isCertPage;

              return (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => {
                      if (item.href === "#certifications") {
                        navigateToPage("certifications");
                      } else {
                        navigateToPage("home", item.href);
                      }
                    }}
                    className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-sm font-extrabold"
                        : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-neutral-900"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Controls: Theme Switcher & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          {/* Theme Selector Pill */}
          <div className="flex items-center gap-0.5 rounded-full border border-stone-200 dark:border-neutral-800 bg-stone-100 dark:bg-[#0A0A0A] p-0.5 select-none">
            {[
              { id: "light", label: "Light", icon: "sun" },
              { id: "dark", label: "Dark", icon: "moon" },
              { id: "system", label: "System", icon: "monitor" }
            ].map((mode) => {
              const isActive = themePreference === mode.id;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setThemePreference(mode.id)}
                  className={`flex h-6 w-6 sm:h-6 sm:w-6 items-center justify-center rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-sm"
                      : "text-slate-500 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-white"
                  }`}
                  aria-label={`Switch to ${mode.label} theme`}
                  title={`Switch to ${mode.label} theme`}
                >
                  {mode.icon === "sun" && (
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 2.293a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM16 10a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-1.707 4a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.707 14.293a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm2.293-5.707a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 6a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
                    </svg>
                  )}
                  {mode.icon === "moon" && (
                    <svg className="h-2.5 w-2.5 fill-current" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                  {mode.icon === "monitor" && (
                    <svg className="h-3 w-3 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 dark:border-neutral-800 bg-stone-100 dark:bg-[#0A0A0A] text-slate-700 dark:text-neutral-300 transition hover:border-[#D4AF37] lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-current">
              {mobileMenuOpen ? (
                <path d="M6 6L18 18M6 18L18 6" strokeWidth="2.5" strokeLinecap="round" />
              ) : (
                <path d="M4 7H20M4 12H20M4 17H20" strokeWidth="2.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-14 bottom-0 z-40 bg-black/80 backdrop-blur-md lg:hidden animate-modal">
          <div className="border-b border-stone-200 dark:border-neutral-800 bg-[#FAF9F6] dark:bg-[#080808] px-5 py-6 shadow-2xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-3">Navigation</p>
            <ul className="grid gap-2">
              {navigationItems.map((item) => {
                const isCertPage = item.href === "#certifications" && currentPage === "certifications";
                const isActive = (currentPage === "home" && activeSection === item.href) || isCertPage;

                return (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => {
                        if (item.href === "#certifications") {
                          navigateToPage("certifications");
                        } else {
                          navigateToPage("home", item.href);
                        }
                      }}
                      className={`w-full flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black shadow-md"
                          : "bg-stone-100 dark:bg-neutral-900 text-slate-700 dark:text-neutral-300 hover:bg-stone-200 dark:hover:bg-neutral-800"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="h-2 w-2 rounded-full bg-slate-950" />}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-4 border-t border-stone-200 dark:border-neutral-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-neutral-400">
              <span>Steven Irankunda Badaga</span>
              <a href="mailto:badagaclass@gmail.com" className="text-amber-500 font-bold hover:underline">
                badagaclass@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
