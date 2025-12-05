import React, { useState } from "react";
import { Menu, X, Sun, Moon, Download } from "../../utils/icons";
import { sections } from "../../data";
import { useTheme } from "../../context/ThemeContext";
import { site } from "../../data/site";
import ResumeModal from "./ResumeModal";

const Navbar = ({
  theme,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
  isNavHidden,
}) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const shouldHideNav = isNavHidden && !isMenuOpen;
  const { theme: themeString, toggleTheme } = useTheme();
  const darkMode = themeString === "dark";

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl transition-all duration-500 ${
          shouldHideNav
            ? "opacity-0 -translate-y-8"
            : "opacity-100 translate-y-0"
        }`}
        aria-label="Primary"
      >
        {/* Centered glass container (rounded corners like footer) */}
        <div
          className={`w-full ${theme.navBg} ${theme.cardBg} ${theme.border} backdrop-blur-2xl border shadow-xl rounded-3xl`}
          style={{ boxShadow: "0 10px 30px rgba(2,6,23,0.45)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Left: Logo / home button */}
              <button
                type="button"
                className="cursor-pointer text-2xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                onClick={() => scrollToSection("home")}
              >
                Milan Koradiya
              </button>

              {/* Center: navigation links (visible on md+) */}
              <div className="hidden md:flex gap-8 items-center justify-center flex-1">
                {sections.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`cursor-pointer relative capitalize transition-all duration-300 px-2 py-1 ${
                      activeSection === item
                        ? "text-cyan-500 scale-105 font-semibold"
                        : `${theme.textSecondary} hover:text-cyan-500`
                    }`}
                  >
                    {item}
                    {activeSection === item && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 rounded-full bg-linear-to-r from-purple-400 to-cyan-400"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Right: actions */}
              <div className="hidden md:flex items-center gap-4">
                <button
                  onClick={toggleTheme}
                  className={`cursor-pointer p-2 ${theme.cardBg} ${theme.border} border rounded-full ${theme.hover} transition-all duration-300`}
                  aria-label={
                    darkMode ? "Switch to light mode" : "Switch to dark mode"
                  }
                  type="button"
                >
                  {darkMode ? (
                    <Sun
                      className="w-5 h-5 text-yellow-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <Moon
                      className="w-5 h-5 text-cyan-500"
                      aria-hidden="true"
                    />
                  )}
                </button>

                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="cursor-pointer px-5 py-2 bg-linear-to-r from-purple-500 to-cyan-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2"
                  aria-label="Preview Resume"
                  type="button"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </button>
              </div>

              {/* Mobile controls (right) */}
              <div className="md:hidden flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className={`p-2 ${theme.cardBg} ${theme.border} border rounded-full`}
                  aria-label={
                    darkMode ? "Switch to light mode" : "Switch to dark mode"
                  }
                  type="button"
                >
                  {darkMode ? (
                    <Sun
                      className="w-5 h-5 text-yellow-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <Moon
                      className="w-5 h-5 text-cyan-500"
                      aria-hidden="true"
                    />
                  )}
                </button>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-nav"
                  aria-haspopup="menu"
                  type="button"
                  className={`p-2 ${theme.cardBg} ${theme.border} border rounded-full`}
                >
                  {isMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu (glass card with rounded corners matching navbar) */}
          {isMenuOpen && (
            <div
              id="mobile-nav"
              className={`md:hidden ${theme.navBg} ${theme.cardBg} ${theme.border} border-t backdrop-blur-2xl rounded-b-3xl overflow-hidden`}
            >
              <div className="flex flex-col gap-3 p-4">
                {sections.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item);
                      setIsMenuOpen(false);
                    }}
                    className={`capitalize text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === item
                        ? "text-cyan-500 font-semibold"
                        : `${theme.textSecondary} hover:text-cyan-500`
                    }`}
                  >
                    {item}
                  </button>
                ))}

                <div className="flex items-center gap-3 mt-2 px-2">
                  <button
                    onClick={() => {
                      setIsResumeOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="flex-1 text-center px-4 py-2 rounded-full bg-linear-to-r from-purple-500 to-cyan-500 font-semibold"
                  >
                    Preview Resume
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      {isResumeOpen && (
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          url={site.resumePreview}
        />
      )}
    </>
  );
};

export default Navbar;
