import { Github, Linkedin, Mail, ChevronDown } from "../utils/icons";
import { Link } from "react-router-dom";

const HeroSection = ({ theme, scrollY, scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 mt-10"
    >
      <div className="text-center max-w-5xl">
        <div
          className="mb-8"
          style={{
            opacity: Math.max(0, 1 - scrollY / 500),
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div className="mb-6 inline-block">
            <span
              className={`px-4 py-2 ${theme.cardBg} ${theme.border} border rounded-full text-sm`}
            >
              👋 Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Creative
            </span>
          </h1>
          <h2 className="text-4xl md:text-7xl font-bold mb-8">
            Full-Stack Developer
          </h2>
          <p
            className={`text-xl md:text-2xl ${theme.textSecondary} mb-12 max-w-3xl mx-auto`}
          >
            Crafting beautiful digital experiences with code and creativity.
            Transforming ideas into powerful, scalable applications.
          </p>
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50"
              type="button"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`cursor-pointer px-8 py-4 ${theme.border} border-2 rounded-full font-semibold ${theme.hover} transition-all duration-300`}
              type="button"
            >
              Contact Me
            </button>
          </div>
          <div className="flex gap-4 justify-center">
            {[
              {
                icon: <Github className="w-6 h-6" />,
                href: "https://github.com/koradiyamilan12/",
                target: "_blank",
                label: "GitHub profile",
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                href: "https://www.linkedin.com/in/milankoradiya",
                target: "_blank",
                label: "LinkedIn profile",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=milankoradiya.work@gmail.com",
                target: "_blank",
                label: "Send email",
              },
            ].map((social, idx) => (
              <Link
                key={idx}
                to={social.href}
                target={social.target}
                className={`p-4 ${theme.cardBg} ${theme.hover} rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${theme.border} border`}
                aria-label={social.label}
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">{social.icon}</span>
              </Link>
            ))}
          </div>
          <div className="mt-20 animate-bounce">
            <ChevronDown
              className="w-8 h-8 mx-auto text-cyan-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
