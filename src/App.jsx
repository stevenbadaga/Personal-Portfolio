import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import SkillsSection from "./components/SkillsSection";
import SummarySection from "./components/SummarySection";
import EducationSection from "./components/EducationSection";
import CertificationsSection from "./components/CertificationsSection";
import LanguagesSection from "./components/LanguagesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProjectDetailsModal from "./components/ProjectDetailsModal";
import CertificateModal from "./components/CertificateModal";
import DedicatedCertificationsPage from "./components/DedicatedCertificationsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
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

  const [activeSection, setActiveSection] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Modals State
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  const sectionIds = useMemo(
    () => ["home", "projects", "skills", "summary", "education", "certifications", "contact"],
    []
  );

  // Handle URL hash changes for Certifications page
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#certifications-page") {
        setCurrentPage("certifications");
      } else if (currentPage === "certifications" && window.location.hash !== "#certifications-page") {
        setCurrentPage("home");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [currentPage]);

  const navigateToPage = (pageName, targetHash = null) => {
    setCurrentPage(pageName);
    setMobileMenuOpen(false);
    if (pageName === "certifications") {
      window.location.hash = "#certifications-page";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (targetHash) {
        window.location.hash = targetHash;
      } else {
        window.location.hash = "#home";
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Theme Synchronizer
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

  // Section Observer
  useEffect(() => {
    if (currentPage !== "home") return undefined;

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
  }, [sectionIds, currentPage]);

  // Scroll Progress and Top Button
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

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#FAF9F6] text-slate-800 dark:bg-[#000000] dark:text-neutral-300 selection:bg-amber-500/20 dark:selection:bg-amber-500/30 selection:text-slate-900 dark:selection:text-white transition-colors duration-300 font-body">
      {/* Scroll Progress Bar */}
      <div className="fixed inset-x-0 top-0 z-[90] h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-amber-500 via-[#D4AF37] to-teal-500 transition-[width] duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* AMOLED Black Dark Mode Gradient Glows */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_15%_10%,rgba(212,175,55,0.04),transparent_40%),radial-gradient(circle_at_85%_60%,rgba(20,184,166,0.04),transparent_40%),linear-gradient(180deg,#FAF9F6_0%,#F5F4F0_50%,#FAF9F6_100%)] transition-opacity duration-700 opacity-100 dark:opacity-0" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_15%_10%,rgba(212,175,55,0.06),transparent_45%),radial-gradient(circle_at_85%_60%,rgba(20,184,166,0.05),transparent_45%),linear-gradient(180deg,#000000_0%,#000000_100%)] transition-opacity duration-700 opacity-0 dark:opacity-100" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03] dark:opacity-[0.04] [background-image:linear-gradient(rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.07)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Accessible Skip Link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-black focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:ring-2 focus:ring-amber-500"
      >
        Skip to content
      </a>

      {/* Sticky Navbar */}
      <Navbar
        currentPage={currentPage}
        activeSection={activeSection}
        navigateToPage={navigateToPage}
        themePreference={themePreference}
        setThemePreference={setThemePreference}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content Area */}
      <main id="main" className="relative mx-auto w-full max-w-[1280px] px-3.5 sm:px-6 lg:px-10 pt-8 sm:pt-14 xl:px-12">
        {currentPage === "certifications" ? (
          <DedicatedCertificationsPage
            onBackToHome={() => navigateToPage("home", "#home")}
            onSelectCert={(cert) => setSelectedCert(cert)}
          />
        ) : (
          <>
            <Hero />
            <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />
            <SkillsSection />
            <SummarySection />
            <EducationSection />
            <CertificationsSection
              onNavigateToCertificationsPage={() => navigateToPage("certifications")}
              onSelectCert={(cert) => setSelectedCert(cert)}
            />
            <LanguagesSection />
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}

      {/* Floating Scroll To Top Button */}
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
