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
    name: "CodeAfrica",
    badge: "Live Platform",
    link: "https://codafrica.rw",
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
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copyMessage, setCopyMessage] = useState("");

  const currentYear = new Date().getFullYear();
  const sectionIds = useMemo(() => navigation.map((item) => item.href.replace("#", "")), []);

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
    <div className="relative min-h-screen overflow-x-clip bg-slate-100 text-slate-900 selection:bg-cyan-200/80">
      <div className="fixed inset-x-0 top-0 z-[90] h-1 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-600 via-teal-500 to-amber-500 transition-[width] duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_8%_-10%,rgba(14,116,144,0.24),transparent_34%),radial-gradient(circle_at_90%_0%,rgba(217,119,6,0.2),transparent_35%),linear-gradient(180deg,#f8fcff_0%,#edf4f8_50%,#f8fcff_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(14,116,144,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,144,0.07)_1px,transparent_1px)] [background-size:34px_34px]" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-800 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-cyan-900/10 bg-slate-50/85 backdrop-blur-md">
        <div className="mx-auto flex min-h-[74px] w-full max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-10 xl:px-12">
          <a
            href="#home"
            className="font-display text-sm font-bold tracking-wide text-slate-900 transition hover:text-cyan-800 sm:text-base"
          >
            IRANKUNDA BADAGA Steven
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-cyan-700 hover:text-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-current">
              {mobileMenuOpen ? (
                <path d="M6 6L18 18M6 18L18 6" strokeWidth="2.1" strokeLinecap="round" />
              ) : (
                <path d="M4 7H20M4 12H20M4 17H20" strokeWidth="2.1" strokeLinecap="round" />
              )}
            </svg>
          </button>

          <nav
            aria-label="Primary navigation"
            className={`${
              mobileMenuOpen ? "absolute" : "hidden"
            } left-0 top-[74px] w-full border-b border-cyan-900/10 bg-slate-50/95 px-4 py-4 shadow-lg md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1">
              {navigation.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`inline-flex rounded-full px-3 py-1.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 ${
                        isActive
                          ? "bg-cyan-900 text-white shadow-sm"
                          : "text-slate-600 hover:bg-white/80 hover:text-cyan-800"
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
        </div>
      </header>

      <main
        id="main"
        className="relative mx-auto w-full max-w-[1280px] px-4 pb-20 pt-8 sm:px-6 lg:px-10 lg:pt-10 xl:px-12 xl:pt-12"
      >
        <div className="pointer-events-none absolute left-[-10rem] top-[16rem] -z-10 hidden h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl lg:block" />
        <div className="pointer-events-none absolute right-[-8rem] top-[42rem] -z-10 hidden h-72 w-72 rounded-full bg-amber-300/20 blur-3xl lg:block" />
        <section
          id="home"
          className="grid gap-4 pb-16 md:grid-cols-[1.35fr_minmax(290px,0.95fr)] md:items-stretch lg:gap-6 xl:grid-cols-[1.5fr_minmax(320px,0.88fr)] xl:gap-8"
        >
          <article className="animate-rise overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-cyan-700 to-cyan-950 p-6 text-slate-100 shadow-soft sm:p-9 lg:p-10 xl:p-12">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-cyan-100/35 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-50">
                Open To Software Engineering Roles
              </span>
              <span className="rounded-full border border-cyan-100/35 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-50">
                Kigali, Rwanda
              </span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
              Full-Stack Software Engineer Track
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-5xl xl:text-[3.4rem]">
              Building reliable software products from backend to frontend.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-cyan-50 sm:text-lg xl:max-w-3xl">
              Final-year Software Engineering student with hands-on experience building
              production-style platforms, backend services, and responsive user interfaces.
              Focused on clean architecture, performance, and maintainable delivery.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:badagaclass@gmail.com"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-cyan-900 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Email Me
              </a>
              <a
                href="#projects"
                className="rounded-full border border-cyan-100/40 px-5 py-2.5 text-sm font-bold text-cyan-50 transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100"
              >
                View Projects
              </a>
              <a
                href="/assets/Irankunda-Badaga-Steven-CV.docx"
                download
                className="rounded-full border border-cyan-100/40 px-5 py-2.5 text-sm font-bold text-cyan-50 transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100"
              >
                Download CV
              </a>
            </div>

            <div className="mt-7 grid gap-2 sm:grid-cols-3 lg:max-w-2xl">
              {quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm"
                >
                  <p className="font-display text-2xl font-semibold leading-none">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-cyan-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </article>

          <aside
            className="animate-rise rounded-[1.4rem] border border-slate-200/80 bg-white/90 p-4 shadow-soft [animation-delay:120ms] sm:p-5 lg:sticky lg:top-24 lg:h-fit lg:bg-white/95"
            aria-label="Profile card"
          >
            <img
              src="/assets/steven-badaga.jpg"
              alt="Portrait of IRANKUNDA BADAGA Steven"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
            <h2 className="mt-4 font-display text-2xl font-semibold text-slate-900">
              IRANKUNDA BADAGA Steven
            </h2>
            <p className="text-slate-600">Software Engineering Track</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <span className="font-semibold text-slate-800">Phone:</span> +250 788 883 986
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <span className="font-semibold text-slate-800">Email:</span> badagaclass@gmail.com
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-2 text-sm font-semibold text-slate-600">
              <a
                className="rounded-full border border-slate-300 px-3 py-1 transition hover:border-cyan-700 hover:text-cyan-900"
                href="https://www.linkedin.com/in/steven-irankunda-badaga-54b7a62b2/"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
              <a
                className="rounded-full border border-slate-300 px-3 py-1 transition hover:border-cyan-700 hover:text-cyan-900"
                href="https://github.com/Badagasteven"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </div>
          </aside>
        </section>

        <section id="summary" className="pb-14">
          <div className="grid gap-4 lg:gap-5 xl:grid-cols-[1.5fr_1fr]">
            <article className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-soft sm:p-7 lg:p-8">
              <h2 className="font-display text-3xl font-semibold text-slate-900">
                Professional Summary
              </h2>
              <p className="mt-3 max-w-4xl text-lg text-slate-600">
                Final-year Software Engineering student with practical experience designing
                and delivering full-stack applications, backend systems, and data-driven
                solutions. Strong in translating requirements into clean architecture,
                maintainable code, and reliable deployments. Seeking software engineering
                opportunities where I can contribute to product delivery and system quality.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
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
                    className="animate-rise rounded-full border border-slate-300 bg-slate-50/90 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm"
                    style={{ animationDelay: `${idx * 70}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-soft sm:p-7 lg:sticky lg:top-24 lg:h-fit">
              <h3 className="font-display text-2xl font-semibold text-slate-900">Focus Areas</h3>
              <ul className="mt-3 space-y-2">
                {focusAreas.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="skills" className="pb-14">
          <div className="mb-4 flex items-end justify-between gap-3">
            <h2 className="font-display text-3xl font-semibold text-slate-900">Skills</h2>
            <p className="text-sm text-slate-500">Technical strengths across full software delivery</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {skillGroups.map((skill, idx) => (
              <article
                key={skill.title}
                className="group animate-rise rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan-200 lg:min-h-[220px] lg:p-5"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <div className="mb-3 h-1.5 w-14 rounded-full bg-gradient-to-r from-cyan-600 to-teal-500 transition group-hover:w-20" />
                <h3 className="font-display text-lg font-semibold text-slate-900">{skill.title}</h3>
                <p className="mt-2 text-slate-600">{skill.items}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="pb-14">
          <div className="mb-4 flex items-end justify-between gap-3">
            <h2 className="font-display text-3xl font-semibold text-slate-900">Projects</h2>
            <a
              href="https://github.com/Badagasteven"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-semibold text-cyan-800 transition hover:text-cyan-900"
            >
              View GitHub profile
            </a>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:auto-rows-fr">
            {projects.map((project, idx) => (
              <article
                key={project.name}
                className={`group animate-rise rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan-200 ${
                  idx === 0 ? "xl:col-span-2 xl:p-6" : ""
                }`}
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h3
                    className={`font-display font-semibold text-slate-900 ${
                      idx === 0 ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {project.name}
                  </h3>
                  <span className="rounded-full border border-cyan-800/25 bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-800">
                    {project.badge}
                  </span>
                </div>
                {project.link ? (
                  <p className="mb-2 text-sm text-slate-600">
                    Website:{" "}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-semibold text-cyan-800 underline decoration-cyan-200 underline-offset-4"
                    >
                      {project.link}
                    </a>
                  </p>
                ) : null}
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="pb-14">
          <h2 className="font-display text-3xl font-semibold text-slate-900">Education</h2>
          <div className="relative mt-5 space-y-3 pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-cyan-200 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0 lg:pl-0 lg:before:hidden">
            {education.map((item, idx) => (
              <article
                key={item.school}
                className="animate-rise rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-soft lg:p-6"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <div className="mb-2 inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-900">
                  {item.date}
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900">{item.school}</h3>
                <p className="text-slate-600">{item.location}</p>
                <p className="mt-1 text-slate-700">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="languages" className="pb-14">
          <h2 className="font-display text-3xl font-semibold text-slate-900">Languages</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {languages.map((language, idx) => (
              <article
                key={language.name}
                className="animate-rise rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-soft"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-slate-900">{language.name}</h3>
                  <span className="text-sm font-semibold text-cyan-800">{language.level}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-teal-500"
                    style={{ width: language.width }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="pb-6">
          <div className="grid gap-4 lg:gap-5 xl:grid-cols-[1.5fr_1fr]">
            <article className="rounded-2xl border border-slate-200 bg-gradient-to-br from-cyan-800 to-cyan-950 p-6 text-slate-50 shadow-soft sm:p-7 lg:p-8">
              <h2 className="font-display text-3xl font-semibold">Contact</h2>
              <p className="mt-2 max-w-3xl text-lg text-cyan-50">
                Open to internship and early-career software engineering roles across backend,
                full-stack web development, and platform-focused teams.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:badagaclass@gmail.com"
                  className="rounded-xl border border-white/20 bg-white/10 p-4 transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <span className="block text-sm text-cyan-100">Email</span>
                  <strong className="font-display text-lg">badagaclass@gmail.com</strong>
                </a>
                <a
                  href="tel:+250788883986"
                  className="rounded-xl border border-white/20 bg-white/10 p-4 transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <span className="block text-sm text-cyan-100">Phone</span>
                  <strong className="font-display text-lg">+250 788 883 986</strong>
                </a>
                <a
                  href="https://www.linkedin.com/in/steven-irankunda-badaga-54b7a62b2/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-xl border border-white/20 bg-white/10 p-4 transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <span className="block text-sm text-cyan-100">LinkedIn</span>
                  <strong className="font-display text-lg">Profile</strong>
                </a>
                <a
                  href="https://github.com/Badagasteven"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-xl border border-white/20 bg-white/10 p-4 transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <span className="block text-sm text-cyan-100">GitHub</span>
                  <strong className="font-display text-lg">Badagasteven</strong>
                </a>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-soft sm:p-7 lg:sticky lg:top-24 lg:h-fit">
              <h3 className="font-display text-2xl font-semibold text-slate-900">Quick Actions</h3>
              <p className="mt-2 text-sm text-slate-600">
                Copy contact details and reach out quickly.
              </p>
              <div className="mt-4 space-y-2">
                <button
                  type="button"
                  onClick={() => handleCopy("badagaclass@gmail.com", "Email copied")}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-left text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50"
                >
                  Copy Email
                </button>
                <button
                  type="button"
                  onClick={() => handleCopy("+250788883986", "Phone copied")}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-left text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50"
                >
                  Copy Phone
                </button>
              </div>
              <p
                className="mt-3 min-h-6 text-sm font-semibold text-cyan-800"
                aria-live="polite"
                role="status"
              >
                {copyMessage}
              </p>
              <div className="mt-4 rounded-xl border border-cyan-100 bg-cyan-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-800">
                  Current Status
                </p>
                <p className="mt-1 text-sm text-cyan-900">
                  Available for software engineering internship and entry-level opportunities.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t border-cyan-900/10 bg-slate-50/70 py-5 text-center text-slate-600">
        <p>&copy; {currentYear} IRANKUNDA BADAGA Steven</p>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 right-5 z-40 rounded-full border border-cyan-800/25 bg-cyan-800 px-3 py-2 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 ${
          showTopButton ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        aria-label="Back to top"
      >
        Top
      </button>
    </div>
  );
}

export default App;
