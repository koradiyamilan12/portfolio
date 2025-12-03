import { Link } from "react-router-dom";
import { renderIcon, Copyright } from "../../utils/icons";
import { socialLinks } from "../../data";

const Footer = ({ theme, site }) => {
  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Floating Blur Orbs */}
      <div className="absolute -bottom-10 -left-10 w-60 h-50 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-50 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Glass Container */}
      <div
        className={`max-w-7xl mx-auto backdrop-blur-2xl border ${theme.border} ${theme.cardBg} rounded-3xl p-10 shadow-xl bg-opacity-60`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-md">
            Milan Koradiya
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            {socialLinks.map((social, idx) => (
              <Link
                key={idx}
                to={social.href}
                aria-label={social.label}
                rel="noopener noreferrer"
                className={`
                  group cursor-pointer relative p-3 rounded-full border
                  ${theme.cardBg} ${theme.border}
                  transition-all duration-300 ease-out
                  hover:scale-125 hover:-translate-y-1 hover:rotate-6
                  active:scale-95
                `}
              >
                {/* Glow Ring */}
                <span
                  className="
                    absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                    bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-xl
                    transition-opacity duration-300
                  "
                ></span>

                {/* Icon */}
                <span
                  aria-hidden="true"
                  className={`
                    relative z-10 transition-all duration-300 ease-out 
                    group-hover:text-cyan-400 group-hover:scale-125 
                    group-active:scale-90
                    ${theme.textSecondary}
                  `}
                >
                  {renderIcon(social.iconKey, "w-6 h-6")}
                </span>
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p
            className={`text-sm flex items-center gap-1 ${theme.textSecondary}`}
          >
            <Copyright size={14} className="opacity-80" />
            {site.yearStart} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
