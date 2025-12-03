const TECH = [
  { name: "HTML", icon: "🌐", color: "from-orange-400 to-orange-600" },
  { name: "CSS", icon: "🎨", color: "from-blue-400 to-blue-600" },
  { name: "Tailwind CSS", icon: "🌬️", color: "from-cyan-300 to-cyan-500" },
  { name: "JavaScript", icon: "🟨", color: "from-yellow-300 to-amber-500" },
  { name: "TypeScript", icon: "🟦", color: "from-blue-400 to-blue-600" },
  { name: "React JS", icon: "⚛️", color: "from-cyan-400 to-cyan-600" },
  { name: "Next JS", icon: "⚡", color: "from-cyan-400 to-cyan-600" },
  { name: "Redux", icon: "🟣", color: "from-violet-400 to-violet-600" },
  { name: "Node JS", icon: "🟢", color: "from-lime-400 to-lime-600" },
  { name: "Express JS", icon: "🖤", color: "from-zinc-300 to-zinc-500" },
  { name: "MongoDB", icon: "🍃", color: "from-emerald-400 to-emerald-600" },
  { name: "PostgreSQL", icon: "🐘", color: "from-sky-400 to-sky-700" },
  { name: "Sequelize", icon: "🔗", color: "from-blue-500 to-blue-700" },
  { name: "Git", icon: "🔶", color: "from-orange-400 to-orange-600" },
  { name: "Github", icon: "🐙", color: "from-zinc-700 to-zinc-900" },
];

const SkillsSection = ({ theme, isVisible }) => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full">
        <h2
          data-animate
          id="skills-title"
          className={`text-5xl md:text-6xl font-bold mb-16 text-center transition-all duration-1000 ${
            isVisible["skills-title"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        {/* Animated icon grid for MERN + PostgreSQL and more */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {TECH.map((t, idx) => (
            <div
              key={t.name}
              data-animate
              id={`skill-${idx}`}
              style={{ transitionDelay: `${idx * 70}ms` }}
              className={`group relative ${theme.cardBg} ${
                theme.border
              } border rounded-2xl p-5 overflow-hidden transition-all duration-700 will-change-transform ${
                isVisible[`skill-${idx}`]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              } hover:shadow-xl hover:-translate-y-1`}
            >
              <div
                className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr ${t.color} blur-2xl`}
              />
              <div className="relative z-10 flex flex-col items-center text-center gap-3">
                <div className="relative">
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-tr ${t.color} opacity-20 scale-0 group-hover:scale-100 transition-transform duration-500`}
                  />
                  <span className="text-3xl md:text-4xl select-none">
                    {t.icon}
                  </span>
                </div>
                <span className="font-semibold text-sm md:text-base">
                  {t.name}
                </span>
                <div className="flex gap-1 mt-1">
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 transition-colors duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
