import React, { useState } from "react";
import ResumeModal from "./common/ResumeModal";
import { site } from "../data/site";

const AboutSection = ({ theme, isVisible }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl w-full">
          <h2
            data-animate
            id="about-title"
            className={`text-5xl md:text-6xl font-bold mb-16 text-center transition-all duration-1000 ${
              isVisible["about-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              data-animate
              id="about-image"
              className={`relative group transition-all duration-1000 delay-200 ${
                isVisible["about-image"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50"></div>
              <div
                className={`relative h-96 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl ${theme.border} border flex items-center justify-center overflow-hidden`}
              >
                <div className="text-9xl transform group-hover:scale-110 transition-transform duration-500">
                  👨‍💻
                </div>
              </div>
            </div>
            <div
              data-animate
              id="about-content"
              className={`transition-all duration-1000 delay-300 ${
                isVisible["about-content"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-3xl font-bold mb-6">
                Hi, I'm Milan Koradiya
              </h3>
              <p
                className={`text-lg ${theme.textSecondary} mb-4 leading-relaxed`}
              >
                I'm a passionate full-stack developer with 6+ months of
                experience building scalable web applications. I specialize in
                modern JavaScript frameworks and love creating seamless user
                experiences.
              </p>
              <p
                className={`text-lg ${theme.textSecondary} mb-6 leading-relaxed`}
              >
                With expertise in React, Node.js, and cloud technologies, I
                transform complex problems into elegant solutions that users
                love.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: "🎯", text: "Based in Gujarat, India" },
                  { icon: "💼", text: "Available for freelance projects" },
                  { icon: "🚀", text: "Open to collaboration" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className={theme.textSecondary}>
                      {item.icon} {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="cursor-pointer px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  Preview Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default AboutSection;
