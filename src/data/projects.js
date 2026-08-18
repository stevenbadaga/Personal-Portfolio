export const featuredProjects = [
  {
    id: "volcano-arts-center",
    name: "Volcano Arts Center",
    tier: 1,
    category: "Full-Stack Cultural & E-Commerce Platform",
    badge: "LIVE PRODUCTION",
    isHosted: true,
    liveUrl: "https://www.volcanoartscenterinc.org.rw/",
    githubUrl: "https://github.com/stevenbadaga/Volcan-Art-Center-Inc",
    displayUrl: "www.volcanoartscenterinc.org.rw",
    shortDescription: "A live production platform for Volcano Arts Center in Musanze, featuring cultural tour reservations, an online art marketplace, talent onboarding, and multi-role administration.",
    fullDescription: "Volcano Arts Center is a deployed production platform designed to empower local artists and elevate cultural tourism in Musanze, Rwanda. Built with an enterprise Java Spring Boot backend, Spring Security, Flyway database migrations, and PostgreSQL persistence, the platform delivers integrated tour booking workflows, a curated artwork catalog with purchasing workflows, community talent onboarding, and dedicated back-office management dashboards.",
    capabilities: [
      "Cultural tour booking workflows and workshop reservation management",
      "Digital artwork catalog and multi-category purchasing workflows",
      "Multi-role administration portals (SuperAdmin, Content Manager, Operations Manager)",
      "Artist and community talent application onboarding workflows",
      "Enterprise Spring Security authorization, Flyway migrations, and PostgreSQL persistence"
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "Flyway", "Docker", "REST API", "Tailwind CSS"],
    status: "LIVE PRODUCTION",
    architecture: "Java Spring Boot architecture with clean domain separation, responsive UI components with Tailwind styling, Spring Security multi-role authorization, Flyway schema migrations, and Docker containerization.",
    keySolution: "Unifies tourism reservations, local artisan showcases, and organizational administration into a secure, single-point digital ecosystem."
  },
  {
    id: "codafriqa",
    name: "CODAFRIQA",
    tier: 1,
    category: "Full-Stack Technology Platform & AI Services",
    badge: "LIVE PRODUCTION",
    secondaryBadge: "INDEPENDENT BUILD",
    isHosted: true,
    liveUrl: "https://www.codafriqa.rw/",
    githubUrl: null, // Private repository
    isPrivateRepo: true,
    displayUrl: "www.codafriqa.rw",
    roleNote: "Designed and developed the complete CODAFRIQA web platform and supporting backend services.",
    shortDescription: "An independently designed and developed technology company platform powered by React and a Spring Boot backend, featuring an AI assistant with provider fallback, quote estimation, and meeting workflows.",
    fullDescription: "CODAFRIQA is a comprehensive production web platform engineered to represent a technology consulting and software engineering firm. It features responsive client interfaces built with React and Vite, supported by a Java Spring Boot backend. The architecture includes an intelligent AI assistant with dual-provider fallback (OpenAI & Gemini), a dynamic software project quote estimation engine, meeting request workflows, and automated email delivery.",
    capabilities: [
      "Full multi-page technology company platform with service and product catalogues",
      "AI-powered interactive assistant with dual-provider fallback (OpenAI & Gemini)",
      "Algorithmic project cost estimation engine for client scoping",
      "Meeting request scheduling and consultation handoff workflows",
      "Contact API with automated email notifications via JavaMailSender"
    ],
    technologies: ["React", "Vite", "Java", "Spring Boot", "REST APIs", "OpenAI / Gemini APIs", "JavaMail", "Tailwind CSS"],
    status: "LIVE PRODUCTION",
    architecture: "Vite + React single-page frontend with modular route architecture connecting to a Spring Boot REST API layer with resilient third-party AI provider fallback and SMTP dispatch.",
    keySolution: "Provides enterprise software clients with instant project estimation, interactive AI consulting, and clear pathways to technical engagement."
  },
  {
    id: "geosmart-manager",
    name: "GeoSmart Manager",
    tier: 2,
    category: "GIS & Land Subdivision Management System",
    badge: "GIS ENGINEERING SYSTEM",
    secondaryBadge: "CAPSTONE PLATFORM",
    isHosted: false,
    liveUrl: null,
    githubUrl: "https://github.com/stevenbadaga/GeoSmart-Manager",
    displayUrl: "github.com/stevenbadaga/GeoSmart-Manager",
    shortDescription: "A specialized geospatial software system developed to streamline land subdivision planning, parcel boundary lookup by UPI, zoning compliance checks, and automated spatial report generation.",
    fullDescription: "GeoSmart Manager is a specialist software engineering capstone system engineered to address land fragmentation and zoning compliance challenges in Kigali. It enables urban planners, surveyors, and property owners to search parcels by Unique Parcel Identifier (UPI), view spatial boundaries on interactive maps, draw and validate proposed subdivision geometries against regulatory rules (minimum plot size, road access), and generate official compliance reports.",
    capabilities: [
      "Parcel search and boundary geometry rendering by Unique Parcel Identifier (UPI)",
      "Interactive master plan zoning constraint review and spatial overlay",
      "Proposed subdivision polygon drawing, splitting, and geometry validation",
      "Automated preliminary regulatory compliance checking against municipal rules",
      "Spatial compliance report generation with parcel geometry summaries"
    ],
    technologies: ["React", "Vite", "Leaflet / GIS", "Java", "Spring Boot", "PostgreSQL", "PostGIS", "REST API"],
    status: "GIS ENGINEERING SYSTEM",
    architecture: "React frontend integrated with spatial mapping libraries and Leaflet geometry controls, backed by a Spring Boot REST API and PostgreSQL with spatial polygon data.",
    keySolution: "Replaces manual geometry calculations and slow paper-based subdivision verification with automated preliminary rule evaluation and digital spatial reporting."
  },
  {
    id: "restaurant-pos",
    name: "Restaurant POS & Management System",
    tier: 3,
    category: "Full-Stack Restaurant Operations System",
    badge: "FULL-STACK BUSINESS SYSTEM",
    isHosted: false,
    liveUrl: null,
    githubUrl: "https://github.com/stevenbadaga/Restaurant-POS",
    displayUrl: "github.com/stevenbadaga/Restaurant-POS",
    shortDescription: "A full-scale operational restaurant platform featuring a real-time point-of-sale terminal, STOMP WebSocket-driven Kitchen Display System (KDS), role-based access, inventory tracking, and cash reconciliation.",
    fullDescription: "Restaurant POS & Management System is an enterprise-grade operational solution for restaurant and hospitality venues. Engineered with a React frontend and a Spring Boot / PostgreSQL backend, the system synchronizes orders across floor staff and kitchen stations in real time using STOMP WebSockets. It handles table layouts, role-based staff permissions with JWT security, recipe-level inventory deductions, goods receipts, supplier tracking, and cashier close-out financial reporting.",
    capabilities: [
      "Real-time dining table layout management and live order state tracking",
      "Live Kitchen Display System (KDS) synchronized via STOMP WebSockets",
      "Multi-role security (Admin, Cashier, Waiter, Kitchen) with JWT authentication",
      "Inventory control with ingredient tracking, low-stock alerts, and supplier receipts",
      "Payment processing, receipt generation, and end-of-day cashier closeout reconciliation"
    ],
    technologies: ["React", "Vite", "Java", "Spring Boot", "PostgreSQL", "WebSockets (STOMP)", "JWT Auth", "Tailwind CSS"],
    status: "FULL-STACK BUSINESS SYSTEM",
    architecture: "React single-page application with responsive touch-optimized POS views, communicating with a Spring Boot REST API and WebSocket message broker for synchronized kitchen-to-counter updates.",
    keySolution: "Eliminates communication delays between dining rooms and kitchen lines while automating stock level deductions and daily financial auditing."
  },
  {
    id: "larita-motel",
    name: "Larita Motel Booking & Management System",
    tier: 3,
    category: "Hospitality Booking & Management Platform",
    badge: "HOSPITALITY MANAGEMENT PLATFORM",
    isHosted: false,
    liveUrl: null,
    githubUrl: "https://github.com/stevenbadaga/Motel-Repository-",
    displayUrl: "github.com/stevenbadaga/Motel-Repository-",
    shortDescription: "A full-featured hospitality platform encompassing guest room booking wizards, spa and dining reservations, a comprehensive administrative dashboard, booking calendars, and TOTP 2FA security.",
    fullDescription: "Larita Motel Booking & Management System delivers an end-to-end digital experience for hospitality management. On the public side, guests can browse rooms, check real-time availability, schedule spa/wellness appointments, and complete multi-step reservations. On the administrative side, managers access interactive monthly booking calendars, inventory controls, guest records, and security controls hardened with bcrypt password hashing and TOTP 2FA verification.",
    capabilities: [
      "Multi-step room reservation wizard with real-time availability validation",
      "Integrated booking for spa/sauna, dining, and custom event packages",
      "Administrative dashboard with interactive monthly calendar and guest management",
      "Full CRUD management for room inventories, dynamic pricing, and promotional offers",
      "Enhanced security with JWT session control, rate limiting, and TOTP 2FA QR setup"
    ],
    technologies: ["React", "Vite", "Node.js", "Express", "JWT Auth", "TOTP 2FA (speakeasy)", "Tailwind CSS", "REST API"],
    status: "HOSPITALITY MANAGEMENT PLATFORM",
    architecture: "Decoupled React client interfacing with an Express REST API, secured by token middleware, per-account brute-force rate limiters, and TOTP two-factor authentication.",
    keySolution: "Replaces manual phone/paper reservations with automated booking confirmations while giving hotel staff comprehensive oversight of rooms, guests, and facilities."
  }
];

export const otherWork = [
  {
    id: "esoko",
    name: "Esoko E-Commerce Platform",
    category: "E-Commerce & Digital Marketplace",
    badge: "OPEN SOURCE",
    githubUrl: "https://github.com/stevenbadaga/Esoko",
    shortDescription: "A full-stack digital commerce platform featuring product catalogues, cart workflows, order management, and checkout integration.",
    technologies: ["React", "Node.js", "Express", "REST API", "Tailwind CSS"]
  }
];
