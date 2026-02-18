const navigation = [
  { label: "Summary", href: "#summary" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

const skillGroups = [
  {
    title: "Networking",
    items: "TCP/IP, DNS, DHCP, Subnetting, Routing and Switching (Foundational)"
  },
  {
    title: "Systems",
    items: "Linux Administration (Basic), Windows Server Fundamentals"
  },
  {
    title: "Tools",
    items: "Git, GitHub, VS Code, Linux CLI"
  },
  {
    title: "Backend and Databases",
    items: "PostgreSQL, SQL, REST APIs"
  },
  {
    title: "Programming",
    items: "Java (Spring Boot), .NET (C#), Python, JavaScript"
  },
  {
    title: "Core Competencies",
    items:
      "Network Monitoring Basics, Incident Handling, Documentation, Troubleshooting, Analytical Thinking"
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
  { name: "Kinyarwanda", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Intermediate" }
];

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-100 text-slate-900 selection:bg-cyan-200/80">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_8%_-10%,rgba(14,116,144,0.24),transparent_34%),radial-gradient(circle_at_90%_0%,rgba(217,119,6,0.2),transparent_35%),linear-gradient(180deg,#f8fcff_0%,#edf4f8_50%,#f8fcff_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(14,116,144,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,144,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-800 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-cyan-900/10 bg-slate-50/85 backdrop-blur-md">
        <div className="mx-auto flex min-h-[74px] w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <a href="#home" className="font-display text-sm font-bold tracking-wide sm:text-base">
            IRANKUNDA BADAGA Steven
          </a>
          <nav aria-label="Primary navigation">
            <ul className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition hover:text-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <section
          id="home"
          className="grid gap-4 pb-14 md:grid-cols-[1.3fr_minmax(270px,0.9fr)] md:items-stretch"
        >
          <article className="animate-rise rounded-[1.6rem] bg-gradient-to-br from-cyan-700 to-cyan-900 p-6 text-slate-100 shadow-soft sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
              Aspiring Network and Systems Engineer
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
              Reliable systems. Stable networks. Clean backend architecture.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-cyan-50 sm:text-lg">
              Final-year Software Engineering student with a strong foundation in
              networking, Linux systems, and infrastructure monitoring. Focused on
              reliability, troubleshooting, and operational efficiency in NOC environments.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:badagaclass@gmail.com"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-cyan-900 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Email Me
              </a>
              <a
                href="#projects"
                className="rounded-full border border-cyan-100/40 px-5 py-2.5 text-sm font-bold text-cyan-50 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                View Projects
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2 text-sm">
              <li className="rounded-full border border-white/20 bg-white/10 px-3 py-1">Kigali, Rwanda</li>
              <li className="rounded-full border border-white/20 bg-white/10 px-3 py-1">+250 788 883 986</li>
              <li className="rounded-full border border-white/20 bg-white/10 px-3 py-1">Expected Graduation: 2026</li>
            </ul>
          </article>

          <aside
            className="animate-rise rounded-[1.4rem] border border-slate-200/80 bg-white/90 p-4 shadow-soft [animation-delay:120ms] sm:p-5"
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
            <p className="text-slate-600">Network and Systems Engineering Track</p>
            <a
              href="/assets/Irankunda-Badaga-Steven-CV.docx"
              download
              className="mt-3 inline-block font-semibold text-cyan-800 underline decoration-cyan-200 underline-offset-4"
            >
              Download CV
            </a>
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

        <section id="summary" className="space-y-3 pb-12">
          <h2 className="font-display text-3xl font-semibold text-slate-900">Professional Summary</h2>
          <p className="max-w-4xl text-lg text-slate-600">
            Aspiring Network and Systems Engineer and final-year Software Engineering student
            with hands-on experience in backend architecture and infrastructure support.
            Passionate about network reliability, system performance, and operational
            efficiency. Seeking to contribute in a Network Operations Center environment
            through monitoring, troubleshooting, and high-availability support.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Network Monitoring Basics",
              "Incident Handling",
              "Troubleshooting",
              "Linux CLI",
              "Documentation",
              "Analytical Thinking"
            ].map((item, idx) => (
              <span
                key={item}
                className="animate-rise rounded-full border border-slate-300 bg-white/80 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm"
                style={{ animationDelay: `${idx * 70}ms` }}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="skills" className="pb-12">
          <h2 className="font-display text-3xl font-semibold text-slate-900">Skills</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((skill, idx) => (
              <article
                key={skill.title}
                className="animate-rise rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-soft"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <h3 className="font-display text-lg font-semibold text-slate-900">{skill.title}</h3>
                <p className="mt-2 text-slate-600">{skill.items}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="pb-12">
          <h2 className="font-display text-3xl font-semibold text-slate-900">Projects</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {projects.map((project, idx) => (
              <article
                key={project.name}
                className="animate-rise rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-soft"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-slate-900">{project.name}</h3>
                  <span className="rounded-full border border-cyan-800/25 bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-800">
                    {project.badge}
                  </span>
                </div>
                {project.link ? (
                  <p className="mt-2 text-sm text-slate-600">
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

        <section id="education" className="pb-12">
          <h2 className="font-display text-3xl font-semibold text-slate-900">Education</h2>
          <div className="mt-4 grid gap-3">
            {education.map((item, idx) => (
              <article
                key={item.school}
                className="animate-rise rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-soft"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <h3 className="font-display text-xl font-semibold text-slate-900">{item.school}</h3>
                <p className="text-slate-600">{item.location}</p>
                <p className="mt-1 text-slate-700">{item.detail}</p>
                <p className="mt-1 font-semibold text-cyan-800">{item.date}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="languages" className="pb-12">
          <h2 className="font-display text-3xl font-semibold text-slate-900">Languages</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {languages.map((language, idx) => (
              <article
                key={language.name}
                className="animate-rise rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-soft"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <h3 className="font-display text-lg font-semibold text-slate-900">{language.name}</h3>
                <p className="text-slate-600">{language.level}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="pb-6">
          <h2 className="font-display text-3xl font-semibold text-slate-900">Contact</h2>
          <p className="mt-2 max-w-3xl text-lg text-slate-600">
            Open to internship and early-career roles in network operations, systems support,
            and backend infrastructure engineering.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="mailto:badagaclass@gmail.com"
              className="rounded-2xl border border-cyan-900/20 bg-gradient-to-br from-cyan-700 to-cyan-900 p-4 text-slate-50 shadow-soft transition hover:-translate-y-0.5"
            >
              <span className="block text-sm text-cyan-100">Email</span>
              <strong className="font-display text-lg">badagaclass@gmail.com</strong>
            </a>
            <a
              href="tel:+250788883986"
              className="rounded-2xl border border-cyan-900/20 bg-gradient-to-br from-cyan-700 to-cyan-900 p-4 text-slate-50 shadow-soft transition hover:-translate-y-0.5"
            >
              <span className="block text-sm text-cyan-100">Phone</span>
              <strong className="font-display text-lg">+250 788 883 986</strong>
            </a>
            <a
              href="https://www.linkedin.com/in/steven-irankunda-badaga-54b7a62b2/"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-2xl border border-cyan-900/20 bg-gradient-to-br from-cyan-700 to-cyan-900 p-4 text-slate-50 shadow-soft transition hover:-translate-y-0.5"
            >
              <span className="block text-sm text-cyan-100">LinkedIn</span>
              <strong className="font-display text-lg">Profile</strong>
            </a>
            <a
              href="https://github.com/Badagasteven"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-2xl border border-cyan-900/20 bg-gradient-to-br from-cyan-700 to-cyan-900 p-4 text-slate-50 shadow-soft transition hover:-translate-y-0.5"
            >
              <span className="block text-sm text-cyan-100">GitHub</span>
              <strong className="font-display text-lg">Badagasteven</strong>
            </a>
            <div className="rounded-2xl border border-cyan-900/20 bg-gradient-to-br from-cyan-700 to-cyan-900 p-4 text-slate-50 shadow-soft">
              <span className="block text-sm text-cyan-100">Location</span>
              <strong className="font-display text-lg">Kigali, Rwanda</strong>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-cyan-900/10 bg-slate-50/70 py-5 text-center text-slate-600">
        <p>&copy; {currentYear} IRANKUNDA BADAGA Steven</p>
      </footer>
    </div>
  );
}

export default App;
