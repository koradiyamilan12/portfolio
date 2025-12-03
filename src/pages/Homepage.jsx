import { useState, useEffect, useRef, useMemo, useCallback, lazy } from "react";
import { ArrowUp } from "../utils/icons";
import Navbar from "../components/common/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";

const AboutSection = lazy(() => import("../components/AboutSection.jsx"));
const ProjectsSection = lazy(() => import("../components/ProjectsSection.jsx"));
const SkillsSection = lazy(() => import("../components/SkillsSection.jsx"));
const ExperienceSection = lazy(() =>
  import("../components/ExperienceSection.jsx")
);

const ContactSection = lazy(() => import("../components/ContactSection.jsx"));
const Footer = lazy(() => import("../components/common/Footer.jsx"));
import {
  projects,
  experiences,
  contactItems,
  socialLinks,
  site,
  sections,
} from "../data";
import { getTheme } from "../utils/theme.js";

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [isVisible, setIsVisible] = useState({});
  const [isNavHidden, setIsNavHidden] = useState(false);
  const observerRef = useRef(null);

  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const previousScroll = lastScrollYRef.current;

      setScrollY(currentScroll);
      setShowScrollTop(currentScroll > 500);

      if (currentScroll > previousScroll && currentScroll > 80) {
        setIsNavHidden(true);
      } else if (currentScroll < previousScroll - 10 || currentScroll <= 80) {
        setIsNavHidden(false);
      }

      lastScrollYRef.current = currentScroll;

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    observerRef.current = observer;

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches && node.matches("[data-animate]")) {
            observer.observe(node);
          }
          node.querySelectorAll &&
            node
              .querySelectorAll("[data-animate]")
              .forEach((el) => observer.observe(el));
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const theme = useMemo(() => getTheme(darkMode), [darkMode]);

  return (
    <div
      className={`${theme.bg} ${theme.text} min-h-screen overflow-x-hidden transition-colors duration-500`}
    >
      <div className="fixed inset-0 z-0">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${theme.gradient1} via-transparent ${theme.gradient2} transition-colors duration-500`}
        ></div>
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-500"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl transition-all duration-500"
          style={{
            transform: `translate(-${scrollY * 0.08}px, -${scrollY * 0.06}px)`,
          }}
        ></div>
      </div>

      <Navbar
        theme={theme}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isNavHidden={isNavHidden}
      />

      <div className="relative z-10">
        <HeroSection
          theme={theme}
          scrollY={scrollY}
          scrollToSection={scrollToSection}
        />

        <AboutSection theme={theme} isVisible={isVisible} />
        <ProjectsSection
          theme={theme}
          projects={projects}
          isVisible={isVisible}
        />
        <SkillsSection theme={theme} isVisible={isVisible} />
        <ExperienceSection
          theme={theme}
          experiences={experiences}
          isVisible={isVisible}
        />
      </div>

      <ContactSection
        theme={theme}
        isVisible={isVisible}
        contactItems={contactItems}
      />
      <Footer theme={theme} socialLinks={socialLinks} site={site} />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default Homepage;
