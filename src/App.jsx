import { useEffect, useMemo, useRef, useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Summary", href: "#summary" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];

const skillGroups = [
  {
    category: "Frontend",
    title: "Frontend Development",
    description: "Building clean, responsive, and user-friendly interfaces with modern frontend tools and reusable component architectures.",
    skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI", "Component Design", "Mobile-First Layouts", "Vite"]
  },
  {
    category: "Backend & APIs",
    title: "Backend & API Development",
    description: "Developing backend services, RESTful APIs, authentication flows, and structured application logic for scalable systems.",
    skills: ["Java", "Spring Boot", "C#", ".NET Core", "Python", "REST APIs", "JWT / Auth Flows", "Microservice Basics"]
  },
  {
    category: "Databases",
    title: "Databases & Data Management",
    description: "Designing relational databases, managing structured data, and creating efficient database-backed applications.",
    skills: ["PostgreSQL", "MySQL", "SQL Queries", "Schema Design", "Query Optimization", "Data Modeling", "ORMs (Hibernate/EF)"]
  },
  {
    category: "Infrastructure & Systems",
    title: "Deployment, Systems & Infrastructure",
    description: "Preparing applications for real use through deployment workflows, environment configuration, version control, and system troubleshooting.",
    skills: ["Linux CLI", "Git / GitHub", "Build Workflows", "Environment Variables", "Netlify Deployment", "CI/CD Basics", "Debugging & Logging"]
  },
  {
    category: "GIS & Land",
    title: "GIS, Mapping & Land Systems",
    description: "Applying software engineering to land planning, parcel management, GIS-style workflows, and digital report generation.",
    skills: ["GIS Interfaces", "Parcel Workflows", "Land Subdivision Logic", "Map-Based Visualization", "GeoSmart Manager", "Spatial Reports"]
  },
  {
    category: "UI/UX & Product",
    title: "UI/UX & Product Design",
    description: "Designing clean digital experiences, dashboards, and professional interfaces that are easy to use and visually polished.",
    skills: ["UI/UX Design", "Dashboard Design", "Admin Interfaces", "Design Systems", "Glassmorphism UI", "User Workflows"]
  },
  {
    category: "Engineering Practices",
    title: "Software Engineering Practices",
    description: "Following practical engineering habits that support maintainable, reliable, and well-organized software delivery.",
    skills: ["Clean Architecture", "Code Documentation", "Unit Testing", "Troubleshooting", "Problem Solving", "Agile / Scrum Basics"]
  }
];

const projects = [
  {
    id: "volcano-art-center",
    name: "Volcano Art Center Platform",
    category: "Full-Stack Web Platform & Cultural Booking Hub",
    badge: "Featured Hosted Platform",
    isHosted: true,
    liveUrl: "https://volcano-art-center.netlify.app",
    githubUrl: "https://github.com/stevenbadaga/Volcano-Art-Center",
    displayUrl: "volcano-art-center.netlify.app",
    shortDescription: "A live, premium digital platform for Volcano Art Center in Musanze, designed to showcase local art, conservation work, talent applications, and tourism bookings.",
    fullDescription: "The Volcano Art Center platform bridges eco-tourism, cultural heritage, and local talent empowerment in Musanze, Rwanda. It features a public-facing art market, conservation blog stories, interactive tour booking forms, and a robust administrative backend for content and application management.",
    tags: ["React", "Tailwind CSS", "Vite", "REST API", "Admin Dashboard", "Authentication", "Responsive UI"],
    status: "Live Hosted Platform",
    points: [
      "Designed a modern, responsive public showcase for artwork and conservation initiatives.",
      "Integrated booking workflows for cultural tours and artist workspace reservations.",
      "Built a secure admin dashboard interface for managing content, events, and talent applications."
    ],
    architecture: "React SPA frontend with modular state management, styled using Tailwind CSS tokens, connecting to a structured backend API with JWT authentication.",
    keySolution: "Solves fragmented tourism booking and local artist visibility by centralizing event ticketing, artwork showcases, and community talent registration under one cohesive hub."
  },
  {
    id: "geosmart-manager",
    name: "GeoSmart Manager GIS",
    category: "GIS & Land Subdivision Management System",
    badge: "Hosted Capstone System",
    isHosted: true,
    liveUrl: "https://geosmart-manager.netlify.app",
    githubUrl: "https://github.com/stevenbadaga/GeoSmart-Manager",
    displayUrl: "geosmart-manager.netlify.app",
    shortDescription: "A live GIS-based land planning and parcel management system created to streamline subdivision workflows, automated regulatory checks, and report generation.",
    fullDescription: "GeoSmart Manager is a specialized land engineering tool designed to address land fragmentation and zoning compliance. It empowers urban planners and surveyors to visualize parcel boundaries on interactive maps, calculate optimal plot subdivisions, and generate compliance reports automatically.",
    tags: ["React", "Tailwind CSS", "GIS / Leaflet", "Land Subdivision", "Spatial Analysis", "Automated Reports", "PostgreSQL"],
    status: "Live Hosted Platform",
    points: [
      "Developed an interactive map view supporting parcel geometry visualization and zoning checks.",
      "Implemented automated subdivision calculations based on minimum plot size and road access rules.",
      "Created a digital report generator producing downloadable parcel summaries for urban planning authorities."
    ],
    architecture: "React frontend integrated with spatial mapping libraries, communicating with a relational spatial database for parcel polygon queries and zoning constraint checks.",
    keySolution: "Eliminates manual geometry calculations and reduces parcel subdivision processing time by providing automated validation checks against municipal zoning master plans."
  },
  {
    id: "personal-portfolio",
    name: "Steven Badaga Developer Portfolio",
    category: "Production Web Platform & Interactive CLI",
    badge: "Live Production Site",
    isHosted: true,
    liveUrl: "https://stevenbadaga.netlify.app",
    githubUrl: "https://github.com/stevenbadaga/Personal-Portfolio",
    displayUrl: "stevenbadaga.netlify.app",
    shortDescription: "A high-performance production portfolio engineered with React, Tailwind CSS, dark mode aesthetics, interactive developer CLI, and Netlify CI/CD auto-deployment.",
    fullDescription: "This production portfolio application highlights full-stack capabilities, live hosted projects, interactive terminal emulation, and direct netlify form handling with pure AMOLED black aesthetics.",
    tags: ["React", "Tailwind CSS", "Vite", "Netlify CI/CD", "Interactive CLI", "Pure Black Dark Mode"],
    status: "Live Production Platform",
    points: [
      "Built with component-based React architecture and mobile-first responsive layout.",
      "Integrated live interactive CLI terminal emulator for developer inspection.",
      "Configured automated GitHub to Netlify continuous deployment pipeline."
    ],
    architecture: "Vite + React single-page application deployed to global CDN edge servers via Netlify git integration with automated build checks.",
    keySolution: "Provides technical recruiters and project stakeholders with an instant, interactive demonstration of engineering capabilities and live software platforms."
  }
];

const education = [
  {
    school: "Adventist University of Central Africa (AUCA)",
    location: "Kigali, Rwanda",
    degree: "Bachelor of Science in Software Engineering",
    date: "Expected Graduation: 2026",
    achievements: [
      "Focused on Full-Stack Development, Software Architecture, and Database Systems.",
      "Lead developer for GeoSmart Manager final-year software engineering capstone.",
      "Active participant in tech innovation forums and collaborative dev projects."
    ]
  },
  {
    school: "Lycée St. Jérôme",
    location: "Gakenke, Rwanda",
    degree: "High School Diploma (PCM - Physics, Chemistry & Mathematics)",
    date: "Graduated: 2022",
    achievements: [
      "Graduated with strong analytical and mathematical distinction.",
      "Founded student science & technology discussion group."
    ]
  }
];

const certifications = [
  {
    title: "Software Engineering Capstone Distinction",
    issuer: "Adventist University of Central Africa",
    year: "2025 - 2026",
    description: "Awarded for exceptional software design, architectural rigor, and practical utility in the GeoSmart Manager GIS platform."
  },
  {
    title: "Full-Stack Web & API Engineering",
    issuer: "Self-Directed / Academic Track",
    year: "2024",
    description: "Comprehensive practical mastery of React, RESTful API design, Spring Boot, and database modeling."
  },
  {
    title: "Database Management & SQL Systems",
    issuer: "AUCA Department of Computer Science",
    year: "2023",
    description: "Advanced relational schema design, query optimization, indexing, and PostgreSQL transaction integrity."
  }
];

const languages = [
  { name: "Kinyarwanda", level: "Native / Bilingual", width: "100%" },
  { name: "English", level: "Fluent / Professional", width: "95%" },
  { name: "French", level: "Intermediate", width: "65%" },
  { name: "Swahili", level: "Intermediate", width: "65%" }
];

const engineeringPrinciples = [
  {
    icon: "⚡",
    title: "Performance & Reliability",
    description: "Writing lightweight, optimized code with fast load times and clean fallback mechanisms."
  },
  {
    icon: "🧩",
    title: "Modular Clean Code",
    description: "Structuring software into reusable, decoupled components for high maintainability."
  },
  {
    icon: "🛡️",
    title: "Security & Validation",
    description: "Enforcing strict input validation, safe authentication flows, and data protection."
  },
  {
    icon: "🗺️",
    title: "Domain-Driven Solutions",
    description: "Solving real-world problems like land planning and cultural platform management through software."
  }
];

const quickStats = [
  { value: "3", label: "Live Hosted Platforms" },
  { value: "5+", label: "Systems Built" },
  { value: "2026", label: "AUCA Grad" }
];

// Interactive Terminal Showcase Component (Pure Black Theme)
function DeveloperTerminal() {
  const [history, setHistory] = useState([
    { text: "System initialized. Welcome to Steven Badaga's Console v2.0", type: "system" },
    { text: "Type 'help' or tap buttons below to inspect live developer profile.", type: "info" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef(null);

  const executeCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    let newLogs = [...history, { text: `$ ${cmdStr}`, type: "command" }];

    switch (cmd) {
      case "help":
        newLogs.push({
          text: "Available commands: about | skills | projects | education | contact | status | clear",
          type: "output"
        });
        break;
      case "about":
        newLogs.push({
          text: "IRANKUNDA BADAGA Steven - Software Engineering student @ AUCA. Building full-stack platforms, Spring Boot backend services, and GIS systems.",
          type: "output"
        });
        break;
      case "skills":
        newLogs.push({
          text: "Primary Stack: React, JavaScript, Java, Spring Boot, PostgreSQL, C#, Tailwind CSS, Linux CLI, GIS.",
          type: "output"
        });
        break;
      case "projects":
        newLogs.push({
          text: "1. Volcano Art Center (Live Hosted Hub)\n2. GeoSmart Manager (Live Hosted GIS Platform)\n3. Personal Portfolio (Live Production)",
          type: "output"
        });
        break;
      case "education":
        newLogs.push({
          text: "B.Sc Software Engineering @ AUCA Kigali (Expected 2026) | Lycée St. Jérôme PCM Diploma (2022)",
          type: "output"
        });
        break;
      case "contact":
        newLogs.push({
          text: "Email: badagaclass@gmail.com | Phone: +250 788 883 986 | GitHub: github.com/stevenbadaga",
          type: "output"
        });
        break;
      case "status":
        newLogs.push({
          text: "STATUS: Open for Software Engineering roles, developer internships, and technical projects.",
          type: "success"
        });
        break;
      case "clear":
        newLogs = [];
        break;
      default:
        if (cmd !== "") {
          newLogs.push({
            text: `Command not recognized: '${cmdStr}'. Type 'help' for options.`,
            type: "error"
          });
        }
    }

    setHistory(newLogs);
    setInputVal("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal) executeCommand(inputVal);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="rounded-2xl border border-neutral-800 bg-[#080808] shadow-2xl overflow-hidden font-mono text-xs text-neutral-300">
      {/* Terminal Bar */}
      <div className="flex items-center justify-between bg-[#121212] px-3.5 py-2.5 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-1 text-[10px] sm:text-[11px] font-bold text-neutral-400">steven@badaga-dev-shell:~</span>
        </div>
        <span className="text-[9px] sm:text-[10px] text-amber-400 font-semibold uppercase tracking-wider">CLI</span>
      </div>

      {/* Terminal Screen */}
      <div className="p-3 sm:p-4 h-36 sm:h-44 overflow-y-auto space-y-1.5 scrollbar-thin bg-black">
        {history.map((item, idx) => (
          <div
            key={idx}
            className={`leading-relaxed whitespace-pre-wrap text-[11px] sm:text-xs ${
              item.type === "command"
                ? "text-amber-400 font-bold"
                : item.type === "success"
                ? "text-emerald-400 font-semibold"
                : item.type === "error"
                ? "text-rose-400"
                : item.type === "info"
                ? "text-teal-300"
                : "text-neutral-300"
            }`}
          >
            {item.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Preset Command Buttons */}
      <div className="bg-[#121212] px-2.5 py-2 border-t border-neutral-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <span className="text-[9px] uppercase text-neutral-500 font-bold shrink-0">Presets:</span>
        {["about", "skills", "projects", "status", "contact", "clear"].map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => executeCommand(preset)}
            className="rounded bg-neutral-900 hover:bg-amber-500/20 hover:text-amber-300 border border-neutral-800 px-2 py-1 text-[10px] font-bold uppercase transition text-neutral-300 shrink-0"
          >
            {preset}
          </button>
        ))}
      </div>

      {/* Terminal Input Line */}
      <form onSubmit={handleSubmit} className="flex items-center px-3 sm:px-4 py-2 bg-black border-t border-neutral-800">
        <span className="text-emerald-400 font-bold mr-2 text-xs">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help'..."
          className="w-full bg-transparent text-white focus:outline-none placeholder-neutral-600 text-xs"
        />
        <button type="submit" className="sr-only">Submit</button>
      </form>
    </div>
  );
}

function App() {
  const [themePreference, setThemePreference] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("themePreference");
        if (stored) return stored;
      } catch (e) {
        // Fallback
      }
    }
    return "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copyMessage, setCopyMessage] = useState("");

  // Interactive Skill Filter & Search
  const [skillCategoryFilter, setSkillCategoryFilter] = useState("All");
  const [skillSearchQuery, setSkillSearchQuery] = useState("");

  // Interactive Project Filter
  const [projectCategoryFilter, setProjectCategoryFilter] = useState("All");

  // Interactive Project Modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Interactive Contact Form state & validation
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    service: "Full-Stack Engineering",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const currentYear = new Date().getFullYear();
  const sectionIds = useMemo(() => navigation.map((item) => item.href.replace("#", "")), []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () => {
      let isDark = false;
      if (themePreference === "dark") {
        isDark = true;
      } else if (themePreference === "light") {
        isDark = false;
      } else {
        isDark = mediaQuery.matches;
      }
      setResolvedTheme(isDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", isDark);
    };

    updateTheme();
    mediaQuery.addEventListener("change", updateTheme);
    return () => mediaQuery.removeEventListener("change", updateTheme);
  }, [themePreference]);

  useEffect(() => {
    try {
      localStorage.setItem("themePreference", themePreference);
    } catch (e) {
      console.error("Failed to write themePreference:", e);
    }
  }, [themePreference]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element) => Boolean(element));

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-25% 0px -40% 0px", threshold: [0.1, 0.3, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const onScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setShowTopButton(window.scrollY > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopy = async (value, successText) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(value);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = value;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopyMessage(successText);
      window.setTimeout(() => setCopyMessage(""), 2000);
    } catch {
      setCopyMessage("Failed to copy");
    }
  };

  const validateContactForm = () => {
    const errors = {};
    if (!contactForm.name.trim()) errors.name = "Full name is required";
    if (!contactForm.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!contactForm.subject.trim()) errors.subject = "Subject is required";
    if (!contactForm.message.trim()) {
      errors.message = "Message is required";
    } else if (contactForm.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters long";
    }
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateContactForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setFormSubmitted(true);
  };

  // Filter skills dynamically
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

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    if (projectCategoryFilter === "All") return projects;
    if (projectCategoryFilter === "Live") return projects.filter((p) => p.isHosted);
    if (projectCategoryFilter === "Full-Stack") return projects.filter((p) => p.category.includes("Full-Stack") || p.category.includes("Web Platform"));
    if (projectCategoryFilter === "GIS") return projects.filter((p) => p.category.includes("GIS"));
    return projects;
  }, [projectCategoryFilter]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#FAF9F6] text-slate-800 dark:bg-[#000000] dark:text-neutral-300 selection:bg-amber-500/20 dark:selection:bg-amber-500/30 selection:text-slate-900 dark:selection:text-white transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <div className="fixed inset-x-0 top-0 z-[90] h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-amber-500 via-[#D4AF37] to-teal-500 transition-[width] duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Pure Black Dark Theme Background Glows */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_15%_10%,rgba(212,175,55,0.04),transparent_40%),radial-gradient(circle_at_85%_60%,rgba(20,184,166,0.04),transparent_40%),linear-gradient(180deg,#FAF9F6_0%,#F5F4F0_50%,#FAF9F6_100%)] transition-opacity duration-700 opacity-100 dark:opacity-0" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_15%_10%,rgba(212,175,55,0.06),transparent_45%),radial-gradient(circle_at_85%_60%,rgba(20,184,166,0.05),transparent_45%),linear-gradient(180deg,#000000_0%,#000000_100%)] transition-opacity duration-700 opacity-0 dark:opacity-100" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03] dark:opacity-[0.04] [background-image:linear-gradient(rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.07)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-black focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:ring-2 focus:ring-amber-500"
      >
        Skip to content
      </a>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-stone-200/60 dark:border-neutral-900 bg-[#FAF9F6]/90 dark:bg-[#000000]/90 backdrop-blur-lg transition-all duration-300 shadow-sm dark:shadow-none">
        <div className="mx-auto flex h-14 sm:h-16 w-full max-w-[1280px] items-center justify-between gap-3 px-3.5 sm:px-6 lg:px-10 xl:px-12">
          <a
            href="#home"
            className="font-display text-[10px] sm:text-xs font-black tracking-widest text-slate-800 dark:text-white transition hover:text-[#D4AF37] flex items-center gap-1.5 uppercase select-none shrink-0"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 animate-pulse" />
            IRANKUNDA BADAGA Steven
          </a>

          {/* Desktop Navigation Menu */}
          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-sm shadow-amber-500/10 font-black"
                          : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-stone-200/40 dark:hover:bg-neutral-900"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <div className="flex items-center gap-0.5 rounded-full border border-stone-200 dark:border-neutral-800 bg-stone-100 dark:bg-[#0A0A0A] p-0.5 select-none">
              {["light", "dark", "system"].map((mode) => {
                const isActive = themePreference === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setThemePreference(mode)}
                    className={`flex h-[24px] w-[24px] sm:h-[22px] sm:w-[22px] items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-sm"
                        : "text-slate-500 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-white"
                    }`}
                    aria-label={`Switch to ${mode} theme`}
                  >
                    {mode === "light" && (
                      <svg className="h-2.5 w-2.5 fill-current" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 2.293a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM16 10a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-1.707 4a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.707 14.293a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm2.293-5.707a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 6a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
                      </svg>
                    )}
                    {mode === "dark" && (
                      <svg className="h-2 w-2 fill-current" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    )}
                    {mode === "system" && (
                      <svg className="h-2.5 w-2.5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
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
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 dark:border-neutral-800 bg-stone-100 dark:bg-[#0A0A0A] text-slate-700 dark:text-neutral-300 transition hover:border-[#D4AF37] md:hidden"
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

        {/* Mobile Navigation Drawer Overlay (Pure Black Theme) */}
        {mobileMenuOpen && (
          <div className="fixed inset-x-0 top-14 bottom-0 z-40 bg-black/80 backdrop-blur-md md:hidden animate-modal">
            <div className="border-b border-stone-200 dark:border-neutral-800 bg-[#FAF9F6] dark:bg-[#050505] px-5 py-6 shadow-2xl">
              <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-3">Navigation Menu</p>
              <ul className="grid gap-2">
                {navigation.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black shadow-md"
                            : "bg-stone-100/70 dark:bg-neutral-900/80 text-slate-700 dark:text-neutral-300 hover:bg-stone-200 dark:hover:bg-neutral-800"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="h-2 w-2 rounded-full bg-slate-950" />}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 pt-4 border-t border-stone-200 dark:border-neutral-800 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>AUCA Software Engineer</span>
                <a href="mailto:badagaclass@gmail.com" className="text-amber-500 font-bold">Email Steven</a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main id="main" className="relative mx-auto w-full max-w-[1280px] px-3.5 sm:px-6 lg:px-10 pt-10 sm:pt-16 xl:px-12">
        {/* HERO SECTION */}
        <section id="home" className="grid gap-6 pb-12 sm:pb-16 md:grid-cols-[1.35fr_minmax(290px,0.95fr)] md:items-stretch lg:gap-8 xl:grid-cols-[1.5fr_minmax(320px,0.88fr)]">
          <article className="relative animate-rise overflow-hidden rounded-[1.6rem] sm:rounded-[2.2rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-9 lg:p-10 xl:p-12 transition-all duration-300 flex flex-col justify-between">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-amber-500/10 blur-[80px]" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-teal-500/10 blur-[80px]" />

            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Software Engineering Roles
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  AUCA Class of 2026
                </span>
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600 dark:text-[#D4AF37]">
                Full-Stack & Systems Engineering
              </p>

              <h1 className="mt-3 font-display text-2xl sm:text-4xl md:text-5xl xl:text-[3.5rem] font-extrabold leading-tight text-slate-900 dark:text-white tracking-tight">
                Architecting reliable software products from <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-teal-600 dark:from-amber-400 dark:via-yellow-200 dark:to-teal-400 bg-clip-text text-transparent">backend to frontend</span>.
              </h1>

              <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base lg:text-lg text-slate-600 dark:text-neutral-300 leading-relaxed">
                Final-year Software Engineering student at Adventist University of Central Africa (AUCA).
                Experienced in full-stack web platforms, Spring Boot backend services, GIS mapping systems, and high-availability database architectures.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-[#D4AF37] to-yellow-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] text-center min-h-[44px]"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-stone-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-200 transition-all duration-300 hover:bg-stone-100 dark:hover:bg-neutral-800 text-center min-h-[44px]"
                >
                  View Live Projects
                </a>
                <a
                  href="/assets/Irankunda-Badaga-Steven-CV.docx"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-amber-600/50 dark:border-[#D4AF37]/45 bg-transparent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-[#D4AF37] transition-all duration-300 hover:bg-amber-500/10 text-center min-h-[44px]"
                >
                  <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-3 border-t border-stone-200 dark:border-neutral-800/80 pt-5 sm:pt-6">
              {quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-xl sm:rounded-2xl border border-stone-200/80 dark:border-neutral-800/80 bg-white/60 dark:bg-black/50 p-3 sm:p-4 text-center sm:text-left transition-all duration-300 hover:border-amber-500/40"
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

          {/* Profile & Interactive CLI Sidebar */}
          <aside className="animate-rise space-y-5 sm:space-y-6 [animation-delay:120ms]">
            {/* Profile Card */}
            <div className="rounded-[1.6rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-4 sm:p-5 shadow-xl backdrop-blur-md">
              <div className="relative group overflow-hidden rounded-2xl border border-stone-200 dark:border-neutral-800">
                <img
                  src="/assets/steven-badaga.jpg"
                  alt="Portrait of IRANKUNDA BADAGA Steven"
                  className="h-52 sm:h-64 md:aspect-[4/5] md:h-auto w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest">Kigali, Rwanda</p>
                  <h3 className="font-display text-base sm:text-lg font-bold">IRANKUNDA BADAGA Steven</h3>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs">
                <div className="rounded-xl border border-stone-200 dark:border-neutral-800 bg-white/50 dark:bg-black/60 px-3 py-2.5 flex items-center justify-between">
                  <span className="text-slate-500 dark:text-neutral-400 font-medium">Email</span>
                  <a href="mailto:badagaclass@gmail.com" className="font-bold text-slate-800 dark:text-white hover:text-amber-500 break-all text-right">badagaclass@gmail.com</a>
                </div>
                <div className="rounded-xl border border-stone-200 dark:border-neutral-800 bg-white/50 dark:bg-black/60 px-3 py-2.5 flex items-center justify-between">
                  <span className="text-slate-500 dark:text-neutral-400 font-medium">Phone</span>
                  <a href="tel:+250788883986" className="font-bold text-slate-800 dark:text-white hover:text-amber-500">+250 788 883 986</a>
                </div>
              </div>

              <div className="mt-4 flex gap-2 text-[10px] font-bold uppercase tracking-wider">
                <a
                  href="https://www.linkedin.com/in/steven-irankunda-badaga-54b7a62b2/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex-1 text-center rounded-xl border border-stone-200 dark:border-neutral-800 bg-white/50 dark:bg-black/60 py-2.5 text-slate-700 dark:text-neutral-300 hover:border-amber-500 hover:text-amber-500 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/stevenbadaga"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex-1 text-center rounded-xl border border-stone-200 dark:border-neutral-800 bg-white/50 dark:bg-black/60 py-2.5 text-slate-700 dark:text-neutral-300 hover:border-amber-500 hover:text-amber-500 transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Interactive Terminal */}
            <DeveloperTerminal />
          </aside>
        </section>

        {/* SUMMARY & PHILOSOPHY SECTION */}
        <section id="summary" className="pb-12 sm:pb-16">
          <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
            <article className="rounded-[1.6rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-8 lg:p-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Professional Summary
              </h2>
              <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />

              <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-slate-600 dark:text-neutral-300">
                Final-year Software Engineering student with practical experience designing and building full-stack web applications, backend services, database-driven systems, and responsive user interfaces. Skilled in translating project requirements into clean architecture, maintainable code, and deployment-ready solutions. My work includes portfolio platforms, dashboard interfaces, GIS-style land management workflows, and web systems that support real operational needs. I am focused on building reliable software products that are scalable, user-friendly, and ready for real-world use.
              </p>

              <div className="mt-6 sm:mt-8 grid gap-3 sm:grid-cols-2">
                {engineeringPrinciples.map((principle) => (
                  <div
                    key={principle.title}
                    className="rounded-2xl border border-stone-200 dark:border-neutral-800 bg-white/40 dark:bg-black/50 p-4 transition hover:border-amber-500/40"
                  >
                    <span className="text-2xl">{principle.icon}</span>
                    <h3 className="mt-1.5 font-display text-sm font-bold text-slate-900 dark:text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 dark:text-neutral-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            {/* Core Competencies Badge Grid */}
            <article className="rounded-[1.6rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Core Engineering Competencies
                </h3>
                <div className="mt-2.5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
                
                <p className="mt-3 text-xs text-slate-500 dark:text-neutral-400">
                  Key technological areas mastered throughout degree coursework and practical software delivery.
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    "Full-Stack React",
                    "Spring Boot & Java",
                    "REST API Architecture",
                    "PostgreSQL & SQL",
                    "GIS & Parcel Systems",
                    "Tailwind CSS & UI/UX",
                    "Linux CLI & Git",
                    "Deployments & Netlify",
                    "Clean Code Practices",
                    "Database Optimization",
                    "C# & .NET Basics",
                    "System Debugging"
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-100/70 dark:bg-black/70 px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300 shadow-sm transition hover:border-amber-500 hover:text-amber-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  Academic Excellence
                </p>
                <p className="mt-1 text-xs text-slate-600 dark:text-neutral-300 leading-relaxed">
                  Adventist University of Central Africa (AUCA) • Software Engineering Program. Expected Graduation: 2026.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* SKILLS SECTION WITH INTERACTIVE FILTERING & SEARCH */}
        <section id="skills" className="pb-12 sm:pb-16">
          <div className="mb-5 sm:mb-6 flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 dark:border-neutral-800 pb-4">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Skills & Capabilities</h2>
              <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
            </div>

            {/* Interactive Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={skillSearchQuery}
                onChange={(e) => setSkillSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. React, SQL)..."
                className="w-full rounded-full border border-stone-300 dark:border-neutral-800 bg-white dark:bg-black px-4 py-2 text-xs font-medium text-slate-800 dark:text-white focus:border-amber-500 focus:outline-none placeholder-stone-400 shadow-sm"
              />
              {skillSearchQuery && (
                <button
                  type="button"
                  onClick={() => setSkillSearchQuery("")}
                  className="absolute right-3 top-2.5 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Mobile Horizontally Scrollable Category Pills */}
          <div className="mb-6 flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1.5 sm:pb-0 sm:flex-wrap">
            {["All", "Frontend", "Backend & APIs", "Databases", "Infrastructure & Systems", "GIS & Land", "UI/UX & Product", "Engineering Practices"].map((cat) => (
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
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">{group.category}</span>
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

        {/* HOSTED PROJECTS SHOWCASE SECTION */}
        <section id="projects" className="pb-12 sm:pb-16">
          <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 dark:border-neutral-800 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Hosted Systems
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Featured Hosted Projects
              </h2>
              <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 via-[#D4AF37] to-emerald-400" />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {[
                { label: "All Projects", key: "All" },
                { label: "⚡ Live Hosted", key: "Live" },
                { label: "🏛️ Full-Stack", key: "Full-Stack" },
                { label: "🗺️ GIS & Spatial", key: "GIS" }
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setProjectCategoryFilter(tab.key)}
                  className={`rounded-full px-3.5 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                    projectCategoryFilter === tab.key
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black shadow-md"
                      : "border border-stone-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 text-slate-600 dark:text-neutral-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Hosted Projects Cards Container */}
          <div className="grid gap-6 lg:grid-cols-3">
            {filteredProjects.map((project) => {
              return (
                <article
                  key={project.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[1.8rem] border border-stone-200 dark:border-neutral-800 bg-white/80 dark:bg-[#0D0D0D] p-5 sm:p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/60"
                >
                  {/* Glowing ambient light */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-500/10 blur-2xl group-hover:bg-amber-500/20 transition-all" />

                  <div>
                    {/* Simulated Browser Frame Bar for Hosted Projects */}
                    <div className="mb-4 rounded-xl border border-stone-200 dark:border-neutral-800/80 bg-stone-100/80 dark:bg-black/80 px-3 py-2 flex items-center justify-between font-mono text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-rose-500/80 inline-block" />
                        <span className="h-2 w-2 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="h-2 w-2 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 dark:text-neutral-400 truncate max-w-[170px] sm:max-w-[200px]">
                        <span className="text-emerald-400 font-bold">🔒 https://</span>
                        <span className="truncate text-amber-300 font-semibold">{project.displayUrl}</span>
                      </div>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    {/* Header Row */}
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                          {project.category}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 shrink-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        LIVE
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-neutral-300 leading-relaxed mt-3">
                      {project.shortDescription}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="mt-4 space-y-2 text-xs text-slate-500 dark:text-neutral-400">
                      {project.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer & Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-stone-200 dark:border-neutral-800/80">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded bg-stone-100 dark:bg-black border border-stone-200/60 dark:border-neutral-800 px-2 py-0.5 text-[9px] font-semibold text-slate-600 dark:text-neutral-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="col-span-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-[#D4AF37] to-yellow-500 py-2.5 px-3 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 hover:brightness-110 shadow-md transition text-center min-h-[38px]"
                        >
                          <span>🚀 Visit Live Site</span>
                        </a>
                      ) : null}

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="col-span-1 inline-flex items-center justify-center gap-1 rounded-xl border border-stone-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 py-2.5 px-3 text-[10px] font-bold uppercase tracking-wider text-slate-800 dark:text-neutral-200 hover:border-amber-500 hover:text-white transition text-center min-h-[38px]"
                      >
                        <span>🔍 Insights</span>
                      </button>
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-2 block w-full text-center text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-neutral-400 hover:text-amber-400 transition py-1"
                      >
                        View Source Code on GitHub →
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* PROJECT DETAIL MODAL (Pure Black Theme) */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md animate-modal">
            <div className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-amber-500/30 bg-[#0A0A0A] p-5 sm:p-8 text-white shadow-2xl">
              <div className="sticky top-0 z-10 flex items-center justify-between pb-3 mb-4 border-b border-neutral-800 bg-[#0A0A0A]">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-amber-400">{selectedProject.badge}</span>
                  <h3 className="font-display text-lg sm:text-2xl font-extrabold text-white">{selectedProject.name}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="h-8 w-8 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-400 hover:text-white hover:border-amber-400 flex items-center justify-center transition shrink-0"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                {selectedProject.liveUrl && (
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Live Hosted Platform Address</p>
                      <p className="font-mono text-xs font-bold text-white break-all">{selectedProject.liveUrl}</p>
                    </div>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-[10px] font-bold uppercase text-slate-950 hover:bg-emerald-400 shrink-0"
                    >
                      Open Live Site ↗
                    </a>
                  </div>
                )}

                <div>
                  <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">Overview</h4>
                  <p className="mt-1 leading-relaxed">{selectedProject.fullDescription}</p>
                </div>

                <div>
                  <h4 className="font-bold text-teal-400 uppercase tracking-wider text-[11px]">System Architecture</h4>
                  <p className="mt-1 leading-relaxed bg-black border border-neutral-800 p-3 rounded-xl font-mono text-[11px] sm:text-xs text-neutral-300">
                    {selectedProject.architecture}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">Key Problem Solved</h4>
                  <p className="mt-1 leading-relaxed">{selectedProject.keySolution}</p>
                </div>

                <div>
                  <h4 className="font-bold text-neutral-400 uppercase tracking-wider text-[11px] mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="rounded-lg bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 text-[10px] sm:text-xs font-bold text-amber-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 hover:brightness-110"
                >
                  Close Insights
                </button>
              </div>
            </div>
          </div>
        )}

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section id="education" className="pb-12 sm:pb-16">
          <div className="mb-5 sm:mb-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Academic Journey & Education</h2>
            <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.school}
                className="rounded-[1.5rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-6 shadow-xl backdrop-blur-md border-l-4 border-l-amber-500"
              >
                <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
                  {item.date}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{item.school}</h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-neutral-400 mt-0.5">{item.location}</p>
                <p className="mt-2 text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400">{item.degree}</p>

                <ul className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-neutral-300">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS & MILESTONES SECTION */}
        <section id="certifications" className="pb-12 sm:pb-16">
          <div className="mb-5 sm:mb-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Certifications & Milestones</h2>
            <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="rounded-[1.5rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-6 shadow-xl backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-bold uppercase text-amber-600 dark:text-amber-400 mb-2">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">{cert.title}</h3>
                  <p className="mt-2 text-xs text-slate-500 dark:text-neutral-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-200 dark:border-neutral-800/80 flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-wider">
                  <span>✓ Verified Distinction</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* LANGUAGES SECTION */}
        <section id="languages" className="pb-12 sm:pb-16">
          <div className="mb-5 sm:mb-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Language Proficiency</h2>
            <div className="mt-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
          </div>

          <div className="grid gap-3.5 sm:gap-4 grid-cols-2 lg:grid-cols-4">
            {languages.map((language) => (
              <article
                key={language.name}
                className="rounded-[1.5rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-4 sm:p-5 shadow-xl backdrop-blur-md"
              >
                <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-display text-sm sm:text-lg font-bold text-slate-900 dark:text-white">{language.name}</h3>
                  <span className="text-[10px] sm:text-xs font-bold text-amber-600 dark:text-amber-400">{language.level}</span>
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

        {/* CONTACT SECTION WITH INTERACTIVE VALIDATED FORM */}
        <section id="contact" className="pb-12">
          <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            {/* Interactive Contact Form (Netlify Form Ready) */}
            <article className="rounded-[1.6rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-8 lg:p-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Get In Touch</h2>
              <div className="mt-2.5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-neutral-300">
                Send a direct message regarding software engineering roles, project inquiries, or technical consultations.
              </p>

              {formSubmitted ? (
                <div className="mt-6 sm:mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-600 dark:text-emerald-400 animate-modal">
                  <span className="text-4xl">🎉</span>
                  <h3 className="mt-3 font-display text-lg sm:text-xl font-bold">Message Sent Successfully!</h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-neutral-300">
                    Thank you for reaching out, Steven will review your message and reply promptly to <strong className="text-slate-900 dark:text-white">{contactForm.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setContactForm({ name: "", email: "", subject: "", service: "Full-Stack Engineering", message: "" });
                    }}
                    className="mt-5 rounded-full bg-emerald-500 px-6 py-2.5 text-xs font-bold text-slate-950 uppercase tracking-wider hover:bg-emerald-400"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleFormSubmit}
                  className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full rounded-xl border ${
                          formErrors.name ? "border-rose-500" : "border-stone-300 dark:border-neutral-800"
                        } bg-white dark:bg-black px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:border-amber-500 focus:outline-none`}
                      />
                      {formErrors.name && <p className="mt-1 text-[10px] text-rose-500 font-bold">{formErrors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full rounded-xl border ${
                          formErrors.email ? "border-rose-500" : "border-stone-300 dark:border-neutral-800"
                        } bg-white dark:bg-black px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:border-amber-500 focus:outline-none`}
                      />
                      {formErrors.email && <p className="mt-1 text-[10px] text-rose-500 font-bold">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        placeholder="Software Developer Role Inquiry"
                        className={`w-full rounded-xl border ${
                          formErrors.subject ? "border-rose-500" : "border-stone-300 dark:border-neutral-800"
                        } bg-white dark:bg-black px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:border-amber-500 focus:outline-none`}
                      />
                      {formErrors.subject && <p className="mt-1 text-[10px] text-rose-500 font-bold">{formErrors.subject}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                        Area of Interest
                      </label>
                      <select
                        name="service"
                        value={contactForm.service}
                        onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                        className="w-full rounded-xl border border-stone-300 dark:border-neutral-800 bg-white dark:bg-black px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:border-amber-500 focus:outline-none"
                      >
                        <option value="Full-Stack Engineering">Full-Stack Development</option>
                        <option value="Backend Services">Backend Services & REST APIs</option>
                        <option value="GIS & Land Systems">GIS & Spatial Applications</option>
                        <option value="UI/UX & Web Apps">UI/UX & Web App Design</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Share project details or opportunity requirements..."
                      className={`w-full rounded-xl border ${
                        formErrors.message ? "border-rose-500" : "border-stone-300 dark:border-neutral-800"
                      } bg-white dark:bg-black px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:border-amber-500 focus:outline-none`}
                    />
                    {formErrors.message && <p className="mt-1 text-[10px] text-rose-500 font-bold">{formErrors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-amber-500 via-[#D4AF37] to-yellow-500 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:brightness-105 shadow-md transition min-h-[44px]"
                  >
                    Submit Message
                  </button>
                </form>
              )}
            </article>

            {/* Quick Actions & Contact Details Sidebar */}
            <article className="rounded-[1.6rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Direct Reach</h3>
                <div className="mt-2.5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />

                <div className="mt-5 space-y-3">
                  <a
                    href="mailto:badagaclass@gmail.com"
                    className="block rounded-2xl border border-stone-200 dark:border-neutral-800 bg-white/50 dark:bg-black/60 p-4 transition hover:border-amber-500"
                  >
                    <span className="text-[9px] font-bold uppercase text-amber-500">Email Address</span>
                    <p className="mt-1 font-display text-xs sm:text-sm font-bold text-slate-900 dark:text-white break-all">badagaclass@gmail.com</p>
                  </a>

                  <a
                    href="tel:+250788883986"
                    className="block rounded-2xl border border-stone-200 dark:border-neutral-800 bg-white/50 dark:bg-black/60 p-4 transition hover:border-amber-500"
                  >
                    <span className="text-[9px] font-bold uppercase text-amber-500">Phone Number</span>
                    <p className="mt-1 font-display text-xs sm:text-sm font-bold text-slate-900 dark:text-white">+250 788 883 986</p>
                  </a>
                </div>

                <div className="mt-5 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleCopy("badagaclass@gmail.com", "Email copied to clipboard!")}
                    className="w-full rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-100/70 dark:bg-black/70 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300 hover:border-amber-500 hover:text-amber-500 transition min-h-[44px]"
                  >
                    Copy Email
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCopy("+250788883986", "Phone copied to clipboard!")}
                    className="w-full rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-100/70 dark:bg-black/70 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300 hover:border-amber-500 hover:text-amber-500 transition min-h-[44px]"
                  >
                    Copy Phone
                  </button>
                  {copyMessage && (
                    <p className="mt-2 text-center text-xs font-bold text-amber-500 animate-pulse">{copyMessage}</p>
                  )}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-500">Current Availability</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-neutral-300">
                  Open to full-time roles, software engineering internships, and technical contracts in Rwanda or remote worldwide.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* Footer (Pure Black Theme) */}
      <footer className="border-t border-stone-200/60 dark:border-neutral-900 bg-stone-100/40 dark:bg-black py-6 text-center text-slate-500 dark:text-neutral-500 text-xs px-4">
        <p className="font-semibold tracking-wide">&copy; {currentYear} IRANKUNDA BADAGA Steven. Engineered with React & Tailwind CSS.</p>
      </footer>

      {/* Scroll To Top Button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 right-5 z-40 rounded-full border border-amber-500/30 bg-neutral-900 p-3 text-amber-400 shadow-2xl transition-all duration-300 hover:bg-amber-500 hover:text-slate-950 ${
          showTopButton ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-90"
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
