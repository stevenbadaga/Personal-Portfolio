import { useEffect, useMemo, useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Summary", href: "#summary" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Languages", href: "#languages" },
  { label: "Contact", href: "#contact" }
];

const skillGroups = [
  {
    title: "Software Engineering Foundations",
    items: "Data modeling, API design, system decomposition, debugging, and maintainable code practices"
  },
  {
    title: "Backend Engineering",
    items: "Java (Spring Boot), .NET (C#), Python, REST APIs, service-oriented backend design"
  },
  {
    title: "Frontend Engineering",
    items: "React, JavaScript, HTML5, CSS3, responsive UI implementation"
  },
  {
    title: "Databases and Data",
    items: "PostgreSQL, SQL, relational schema design, query-based optimization"
  },
  {
    title: "Systems and Infrastructure",
    items: "Linux CLI, Linux administration basics, Windows Server fundamentals, deployment workflows"
  },
  {
    title: "Engineering Practices",
    items: "Git/GitHub workflow, documentation, troubleshooting, incident analysis, analytical thinking"
  }
];

const projects = [
  {
    name: "Codafriqa",
    badge: "Live Platform",
    link: "https://www.codafriqa.rw/",
    points: [
      "Designed and deployed a platform supporting the African tech ecosystem.",
      "Architected a modular backend focused on scalability and maintainability.",
      "Managed hosting configuration and deployment processes.",
      "Monitored backend stability to improve reliability.",
      "Documented system structure and operations for continuity."
    ]
  },
  {
    name: "Kitenge Bora - Curated African Fabrics",
    badge: "Live Site",
    points: [
      "Built a responsive e-commerce experience for authentic African textiles.",
      "Integrated a custom UI for high-resolution imagery.",
      "Optimized frontend performance for better retention.",
      "Stack: HTML5, CSS3, JavaScript, React."
    ]
  },
  {
    name: "Agricultural Management System",
    badge: "2025",
    points: [
      "Engineered a data-driven platform for crop and inventory tracking.",
      "Designed a relational schema supporting weather-based planning.",
      "Stack: Java, PostgreSQL."
    ]
  },
  {
    name: "Schooling Institution System",
    badge: "2024",
    points: [
      "Developed a portal for academic records and schedules.",
      "Implemented automated grade reporting and attendance tracking.",
      "Stack: HTML, CSS, JavaScript."
    ]
  },
  {
    name: "Hospital Management System",
    badge: "2023",
    points: [
      "Built a secure system for patient registration and role-based access.",
      "Supported healthcare operations with structured data handling.",
      "Stack: C, SQL."
    ]
  }
];

const education = [
  {
    school: "Adventist University of Central Africa (AUCA)",
    location: "Kigali, Rwanda",
    detail: "Bachelor of Science in Software Engineering",
    date: "Expected Graduation: 2026"
  },
  {
    school: "Lycee St. Jerome",
    location: "Gakenke, Rwanda",
    detail: "High School Diploma (Physics, Chemistry, and Mathematics)",
    date: "Graduated: 2022"
  }
];

const languages = [
  { name: "Kinyarwanda", level: "Native", width: "100%" },
  { name: "English", level: "Fluent", width: "90%" },
  { name: "French", level: "Intermediate", width: "65%" }
];

const focusAreas = [
  "Designing scalable backend services and clean APIs",
  "Building responsive, user-focused web interfaces",
  "Improving performance, reliability, and maintainability",
  "Collaborating through documentation and version control"
];

const quickStats = [
  { value: "5+", label: "Projects Built" },
  { value: "2", label: "Live Platforms" },
  { value: "2026", label: "Expected Graduation" }
];

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("theme");
        if (stored) return stored;
      } catch (e) {
        // Fallback if localStorage is disabled/blocked
      }
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      return mql.matches ? "dark" : "light";
    }
    return "dark";
  });

  const [activeSection, setActiveSection] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copyMessage, setCopyMessage] = useState("");

  const currentYear = new Date().getFullYear();
  const sectionIds = useMemo(() => navigation.map((item) => item.href.replace("#", "")), []);

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";
    console.log("Applying theme to HTML class: isDark =", isDark, "theme =", theme);
    root.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      console.error("Failed to write to localStorage:", e);
    }
  }, [theme]);

  const toggleTheme = () => {
    console.log("Toggle theme clicked! Current theme:", theme);
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      console.log("Setting theme state to:", next);
      return next;
    });
  };

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element) => Boolean(element));

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.45, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const onScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setShowTopButton(window.scrollY > 560);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopy = async (value, successText) => {
    if (!navigator.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopyMessage(successText);
      window.setTimeout(() => setCopyMessage(""), 1800);
    } catch {
      setCopyMessage("");
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#FAF9F6] text-slate-800 dark:bg-[#060814] dark:text-slate-300 selection:bg-amber-500/20 dark:selection:bg-amber-500/30 selection:text-slate-900 dark:selection:text-white transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <div className="fixed inset-x-0 top-0 z-[90] h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-amber-500 via-[#D4AF37] to-teal-500 transition-[width] duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Light Theme Background Glows */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_15%_10%,rgba(212,175,55,0.04),transparent_40%),radial-gradient(circle_at_85%_60%,rgba(20,184,166,0.04),transparent_40%),radial-gradient(circle_at_50%_110%,rgba(59,130,246,0.05),transparent_50%),linear-gradient(180deg,#FAF9F6_0%,#F5F4F0_50%,#FAF9F6_100%)] transition-opacity duration-700 opacity-100 dark:opacity-0" />
      
      {/* Dark Theme Background Glows */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_15%_10%,rgba(212,175,55,0.06),transparent_40%),radial-gradient(circle_at_85%_60%,rgba(20,184,166,0.06),transparent_40%),radial-gradient(circle_at_50%_110%,rgba(59,130,246,0.08),transparent_50%),linear-gradient(180deg,#040712_0%,#090D1A_50%,#03050C_100%)] transition-opacity duration-700 opacity-0 dark:opacity-100" />

      {/* Grid Pattern Overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03] dark:opacity-[0.03] [background-image:linear-gradient(rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.07)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px]" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:ring-2 focus:ring-amber-500"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-stone-200/60 dark:border-slate-900 bg-[#FAF9F6]/80 dark:bg-[#060814]/80 backdrop-blur-lg transition-all duration-300 shadow-sm dark:shadow-none">
        <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 xl:px-12">
          <a
            href="#home"
            className="font-display text-[10px] sm:text-xs font-black tracking-widest text-slate-800 dark:text-white transition hover:text-[#D4AF37] flex items-center gap-1.5 uppercase select-none shrink-0"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500" />
            IRANKUNDA BADAGA Steven
          </a>

          <nav
            aria-label="Primary navigation"
            className={`${
              mobileMenuOpen ? "absolute block" : "hidden"
            } left-0 top-16 w-full border-b border-stone-200 dark:border-slate-800 bg-[#FAF9F6]/95 dark:bg-[#060814]/95 px-4 py-5 shadow-xl md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0 md:shadow-none transition-colors duration-300`}
          >
            <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1">
              {navigation.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`inline-flex rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 ${
                        isActive
                          ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-sm shadow-amber-500/10"
                          : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-stone-200/40 dark:hover:bg-slate-800/40"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Row containing Switcher and Menu Buttons */}
          <div className="flex items-center gap-2">
            {/* Premium Theme Switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              className="relative inline-flex h-[26px] w-[52px] shrink-0 cursor-pointer rounded-full border border-stone-200 dark:border-slate-800 bg-stone-100 dark:bg-slate-950 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-amber-500 items-center"
              role="switch"
              aria-checked={theme === "dark"}
              aria-label="Toggle light or dark theme"
            >
              {/* Switch Knob containing Sun/Moon Icon */}
              <span
                className={`${
                  theme === "dark" ? "translate-x-[28px] bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950" : "translate-x-[2px] bg-white text-amber-500"
                } pointer-events-none flex h-5 w-5 items-center justify-center rounded-full shadow-sm transition-all duration-300 ease-in-out`}
              >
                {theme === "dark" ? (
                  /* Moon icon for dark mode knob */
                  <svg className="h-2.5 w-2.5 fill-current" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  /* Sun icon for light mode knob */
                  <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 2.293a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM16 10a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-1.707 4a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.707 14.293a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm2.293-5.707a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 6a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-[26px] w-[26px] sm:h-8 sm:w-8 items-center justify-center rounded-full border border-stone-200 dark:border-slate-800 bg-stone-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 transition hover:border-[#D4AF37] hover:text-slate-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 stroke-current">
                {mobileMenuOpen ? (
                  <path d="M6 6L18 18M6 18L18 6" strokeWidth="2.5" strokeLinecap="round" />
                ) : (
                  <path d="M4 7H20M4 12H20M4 17H20" strokeWidth="2.5" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main
        id="main"
        className="relative mx-auto w-full max-w-[1280px] px-3 sm:px-6 lg:px-10 lg:pt-12 xl:px-12"
      >
        {/* Glow decorative blobs */}
        <div className="pointer-events-none absolute left-[-10rem] top-[16rem] -z-10 hidden h-72 w-72 rounded-full bg-amber-500/5 blur-3xl lg:block" />
        <div className="pointer-events-none absolute right-[-8rem] top-[42rem] -z-10 hidden h-72 w-72 rounded-full bg-teal-500/5 blur-3xl lg:block" />

        {/* Hero Section */}
        <section
          id="home"
          className="grid gap-6 pb-16 md:grid-cols-[1.35fr_minmax(290px,0.95fr)] md:items-stretch lg:gap-8 xl:grid-cols-[1.5fr_minmax(320px,0.88fr)]"
        >
          {/* Main Hero Card */}
          <article className="relative animate-rise overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-stone-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5 sm:p-9 lg:p-10 xl:p-12 transition-all duration-300">
            {/* Ambient glows inside card */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-amber-500/10 blur-[80px]" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-teal-500/10 blur-[80px]" />

            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-500 dark:bg-emerald-400" />
                Open To Software Engineering Roles
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 dark:border-slate-800 bg-stone-100 dark:bg-slate-900/50 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                Kigali, Rwanda
              </span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600 dark:text-[#D4AF37]">
              Full-Stack Software Engineer Track
            </p>
            
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl xl:text-[3.5rem] tracking-tight">
              Building reliable software products from <span className="bg-gradient-to-r from-amber-650 via-amber-500 to-teal-650 dark:from-amber-400 dark:via-yellow-200 dark:to-teal-400 bg-clip-text text-transparent">backend to frontend</span>.
            </h1>
            
            <p className="mt-5 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg leading-relaxed xl:max-w-3xl">
              Final-year Software Engineering student with hands-on experience building
              production-style platforms, backend services, and responsive user interfaces.
              Focused on clean architecture, performance, and maintainable delivery.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="mailto:badagaclass@gmail.com"
                className="col-span-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-[#D4AF37] to-yellow-500 px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-955 dark:text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-105 active:translate-y-0 text-center"
              >
                Email Me
              </a>
              <a
                href="#projects"
                className="col-span-1 inline-flex items-center justify-center rounded-full border border-stone-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/40 px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-stone-400 dark:hover:border-slate-600 active:translate-y-0 text-center"
              >
                View Projects
              </a>
              <a
                href="/assets/Irankunda-Badaga-Steven-CV.docx"
                download
                className="col-span-2 inline-flex items-center justify-center rounded-full border border-amber-600/50 dark:border-[#D4AF37]/45 bg-transparent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-[#D4AF37] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-500/5 dark:hover:bg-[#D4AF37]/10 active:translate-y-0 text-center"
              >
                <svg className="mr-2 h-5 w-5 flex-shrink-0 fill-current" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                Download CV
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:max-w-2xl border-t border-stone-200 dark:border-slate-800/80 pt-8">
              {quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-stone-200/80 dark:border-slate-800/60 bg-white/60 dark:bg-slate-900/30 p-4 transition-all duration-300 hover:border-stone-300 dark:hover:border-slate-700/80 hover:bg-stone-50 dark:hover:bg-slate-900/50"
                >
                  <p className="font-display text-3xl font-extrabold leading-none text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#D4AF37] transition-colors duration-300">{stat.value}</p>
                  <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Profile Sidebar Card */}
          <aside
            className="animate-rise rounded-[1.5rem] sm:rounded-[2.2rem] border border-stone-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 p-5 shadow-2xl backdrop-blur-md [animation-delay:120ms] lg:sticky lg:top-24 lg:h-fit transition-all duration-300"
            aria-label="Profile card"
          >
            <div className="relative group overflow-hidden rounded-2xl border border-stone-200 dark:border-slate-700/40">
              <img
                src="/assets/steven-badaga.jpg"
                alt="Portrait of IRANKUNDA BADAGA Steven"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-200 via-transparent to-transparent dark:from-slate-950 opacity-80" />
            </div>
            
            <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              IRANKUNDA BADAGA Steven
            </h2>
            <p className="text-xs font-bold tracking-widest uppercase text-amber-600 dark:text-[#D4AF37] mt-1">Software Engineering Track</p>
            
            <ul className="mt-5 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              <li className="rounded-xl border border-stone-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 px-4 py-3 flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Phone</span>
                <a href="tel:+250788883986" className="font-bold text-slate-800 dark:text-white tracking-wide hover:text-amber-600 dark:hover:text-[#D4AF37] transition-colors">+250 788 883 986</a>
              </li>
              <li className="rounded-xl border border-stone-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Email</span>
                <a href="mailto:badagaclass@gmail.com" className="font-bold text-slate-800 dark:text-white break-all text-xs sm:text-sm hover:text-amber-600 dark:hover:text-[#D4AF37] transition-colors">badagaclass@gmail.com</a>
              </li>
            </ul>

            <div className="mt-5 flex gap-3 text-[10px] font-bold uppercase tracking-widest">
              <a
                className="flex-1 text-center rounded-xl border border-stone-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 py-3 text-slate-600 dark:text-slate-300 transition-all duration-300 hover:border-amber-600 dark:hover:border-[#D4AF37] hover:text-slate-900 dark:hover:text-white hover:bg-stone-100/50 dark:hover:bg-slate-800/40"
                href="https://www.linkedin.com/in/steven-irankunda-badaga-54b7a62b2/"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
              <a
                className="flex-1 text-center rounded-xl border border-stone-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 py-3 text-slate-600 dark:text-slate-300 transition-all duration-300 hover:border-amber-600 dark:hover:border-[#D4AF37] hover:text-slate-900 dark:hover:text-white hover:bg-stone-100/50 dark:hover:bg-slate-800/40"
                href="https://github.com/stevenbadaga"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </div>
          </aside>
        </section>

        {/* Professional Summary Section */}
        <section id="summary" className="pb-16">
          <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
            <article className="rounded-[1.5rem] sm:rounded-[2rem] border border-stone-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5 sm:p-8 lg:p-10 transition-all duration-300">
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Professional Summary
              </h2>
              <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
              
              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Final-year Software Engineering student with practical experience designing
                and delivering full-stack applications, backend systems, and data-driven
                solutions. Strong in translating requirements into clean architecture,
                maintainable code, and reliable deployments. Seeking software engineering
                opportunities where I can contribute to product delivery and system quality.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  "Full-Stack Development",
                  "Backend Architecture",
                  "REST API Development",
                  "Database Design",
                  "Troubleshooting",
                  "Git Workflow",
                  "Documentation",
                  "Analytical Thinking"
                ].map((item, idx) => (
                  <span
                    key={item}
                    className="animate-rise rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 shadow-sm transition hover:border-amber-500 dark:hover:border-[#D4AF37] hover:text-slate-900 dark:hover:text-white"
                    style={{ animationDelay: `${idx * 70}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>

            {/* Focus Areas Card */}
            <article className="rounded-[1.5rem] sm:rounded-[2rem] border border-stone-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5 sm:p-8 lg:sticky lg:top-24 lg:h-fit transition-all duration-300">
              <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Focus Areas</h3>
              <div className="mt-2.5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
              
              <ul className="mt-6 space-y-3">
                {focusAreas.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-stone-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 flex items-start gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500 dark:bg-[#D4AF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="pb-16">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-stone-200 dark:border-slate-800 pb-4 transition-all duration-300">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Skills</h2>
              <div className="mt-2.5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
            </div>
            <p className="text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">Technical strengths across software delivery</p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((skill, idx) => (
              <article
                key={skill.title}
                className="group animate-rise rounded-[1.5rem] sm:rounded-[2rem] border border-stone-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/50 lg:min-h-[220px] flex flex-col"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300 group-hover:w-20" />
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-amber-600 dark:group-hover:text-[#D4AF37]">{skill.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-300 flex-grow">{skill.items}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="pb-16">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-stone-200 dark:border-slate-800 pb-4 transition-all duration-300">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Projects</h2>
              <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
            </div>
            <a
              href="https://github.com/stevenbadaga"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-[#D4AF37] transition-all hover:text-slate-950 dark:hover:text-white"
            >
              View GitHub profile
              <svg className="h-5 w-5 flex-shrink-0 fill-current" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5zM5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
          
          <div className="grid gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3 xl:auto-rows-fr">
            {projects.map((project, idx) => (
              <article
                key={project.name}
                className={`group relative animate-rise rounded-[1.5rem] sm:rounded-[2rem] border border-stone-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5 sm:p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/50 ${
                  idx === 0 ? "xl:col-span-2 xl:p-8" : ""
                }`}
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h3
                    className={`font-display font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-amber-600 dark:group-hover:text-[#D4AF37] ${
                      idx === 0 ? "text-2xl sm:text-3xl" : "text-xl"
                    }`}
                  >
                    {project.name}
                  </h3>
                  <span className="rounded-full border border-amber-600/30 dark:border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-[#D4AF37]">
                    {project.badge}
                  </span>
                </div>
                
                {project.link ? (
                  <div className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Live Website: </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-bold text-amber-600 dark:text-[#D4AF37] hover:underline hover:text-amber-800 dark:hover:text-white transition-colors duration-200"
                    >
                      {project.link.replace("https://", "")}
                    </a>
                  </div>
                ) : null}

                <ul className="mt-4 space-y-2.5 text-slate-500 dark:text-slate-400 text-sm">
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      <span className="leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="pb-16">
          <div className="mb-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Education</h2>
            <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
          </div>
          
          <div className="relative mt-6 space-y-4 pl-5 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-amber-500 before:to-transparent lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0 lg:pl-0 lg:before:hidden">
            {education.map((item, idx) => (
              <article
                key={item.school}
                className="animate-rise rounded-[1.5rem] sm:rounded-[2rem] border border-stone-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5 shadow-2xl backdrop-blur-md lg:p-7 transition-all duration-300 hover:border-stone-300 dark:hover:border-slate-700/80"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <div className="mb-3 inline-block rounded-full border border-amber-600/20 dark:border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-[#D4AF37]">
                  {item.date}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{item.school}</h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">{item.location}</p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="pb-16">
          <div className="mb-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Languages</h2>
            <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {languages.map((language, idx) => (
              <article
                key={language.name}
                className="animate-rise rounded-[1.5rem] sm:rounded-[2rem] border border-stone-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-stone-300 dark:hover:border-slate-700/80"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{language.name}</h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-[#D4AF37]">{language.level}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-stone-200 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 dark:via-[#D4AF37]"
                    style={{ width: language.width }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pb-8">
          <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
            <article className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-stone-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5 sm:p-8 lg:p-10 transition-all duration-300">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-amber-500/10 blur-[80px]" />
              
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Contact</h2>
              <div className="mt-2.5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
              
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Open to internship and early-career software engineering roles across backend,
                full-stack web development, and platform-focused teams.
              </p>
              
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href="mailto:badagaclass@gmail.com"
                  className="group rounded-2xl border border-stone-200 dark:border-slate-800 bg-stone-100/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:bg-stone-50 dark:hover:bg-slate-900/30 bg-white/40 dark:bg-slate-950/40"
                >
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 transition-colors group-hover:text-amber-600 dark:group-hover:text-[#D4AF37]">Email</span>
                  <strong className="mt-1.5 block font-display text-lg text-slate-900 dark:text-white break-all">badagaclass@gmail.com</strong>
                </a>
                
                <a
                  href="tel:+250788883986"
                  className="group rounded-2xl border border-stone-200 dark:border-slate-800 bg-stone-100/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:bg-stone-50 dark:hover:bg-slate-900/30 bg-white/40 dark:bg-slate-950/40"
                >
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 transition-colors group-hover:text-amber-600 dark:group-hover:text-[#D4AF37]">Phone</span>
                  <strong className="mt-1.5 block font-display text-lg text-slate-900 dark:text-white">+250 788 883 986</strong>
                </a>

                <a
                  href="https://www.linkedin.com/in/steven-irankunda-badaga-54b7a62b2/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group rounded-2xl border border-stone-200 dark:border-slate-800 bg-stone-100/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:bg-stone-50 dark:hover:bg-slate-900/30 bg-white/40 dark:bg-slate-950/40"
                >
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 transition-colors group-hover:text-amber-600 dark:group-hover:text-[#D4AF37]">LinkedIn</span>
                  <strong className="mt-1.5 block font-display text-lg text-slate-900 dark:text-white">Steven Irankunda Badaga</strong>
                </a>

                <a
                  href="https://github.com/stevenbadaga"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group rounded-2xl border border-stone-200 dark:border-slate-800 bg-stone-100/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:bg-stone-50 dark:hover:bg-slate-900/30 bg-white/40 dark:bg-slate-950/40"
                >
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 transition-colors group-hover:text-amber-600 dark:group-hover:text-[#D4AF37]">GitHub</span>
                  <strong className="mt-1.5 block font-display text-lg text-slate-900 dark:text-white">stevenbadaga</strong>
                </a>
              </div>
            </article>

            {/* Quick Actions Card */}
            <article className="rounded-[1.5rem] sm:rounded-[2rem] border border-stone-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5 sm:p-8 lg:sticky lg:top-24 lg:h-fit transition-all duration-300">
              <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Quick Actions</h3>
              <div className="mt-2.5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
              
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Copy contact details and reach out quickly.
              </p>
              
              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={() => handleCopy("badagaclass@gmail.com", "Email copied")}
                  className="w-full rounded-xl border border-stone-200 dark:border-slate-800 bg-stone-100/55 dark:bg-slate-950/60 px-4 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 transition-all duration-300 hover:border-amber-500 hover:bg-stone-100 dark:hover:bg-slate-900/30 hover:text-slate-900 dark:hover:text-white"
                >
                  Copy Email Address
                </button>
                <button
                  type="button"
                  onClick={() => handleCopy("+250788883986", "Phone copied")}
                  className="w-full rounded-xl border border-stone-200 dark:border-slate-800 bg-stone-100/55 dark:bg-slate-950/60 px-4 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 transition-all duration-300 hover:border-amber-500 hover:bg-stone-100 dark:hover:bg-slate-900/30 hover:text-slate-900 dark:hover:text-white"
                >
                  Copy Phone Number
                </button>
              </div>
              
              <p
                className="mt-4 min-h-6 text-center text-sm font-bold text-amber-600 dark:text-[#D4AF37]"
                aria-live="polite"
                role="status"
              >
                {copyMessage}
              </p>
              
              <div className="mt-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-[#D4AF37]">
                  Current Status
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Available for software engineering internship and entry-level opportunities.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200/80 dark:border-slate-900 bg-stone-100/60 dark:bg-slate-955/80 py-8 text-center text-slate-500 text-sm transition-colors duration-300 dark:bg-slate-950/80">
        <p className="font-medium tracking-wide">&copy; {currentYear} IRANKUNDA BADAGA Steven. All rights reserved.</p>
        <p className="mt-1.5 text-xs text-slate-400 dark:text-slate-600 font-display">Crafted as a premium technical portfolio</p>
      </footer>

      {/* Back to Top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 rounded-full border border-stone-300 dark:border-amber-500/30 bg-white dark:bg-slate-900 p-3 text-slate-700 dark:text-slate-200 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-stone-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
          showTopButton ? "translate-y-0 opacity-100 scale-100" : "pointer-events-none translate-y-4 opacity-0 scale-90"
        }`}
        aria-label="Back to top"
      >
        <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
          <path d="M10 3a1 1 0 01.707.293l6 6a1 1 0 01-1.414 1.414L11 6.414V17a1 1 0 11-2 0V6.414L4.707 10.707a1 1 0 01-1.414-1.414l6-6A1 1 0 0110 3z" />
        </svg>
      </button>
    </div>
  );
}

export default App;
