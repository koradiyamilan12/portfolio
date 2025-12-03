
const ExperienceSection = ({ theme, experiences, isVisible }) => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 
          data-animate
          id="experience-title"
          className={`text-5xl md:text-6xl font-bold mb-16 text-center transition-all duration-1000 ${
            isVisible['experience-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Work <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              data-animate
              id={`exp-${idx}`}
              className={`relative pl-8 border-l-2 ${theme.border} transition-all duration-1000 ${
                isVisible[`exp-${idx}`] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
              <div className={`${theme.cardBg} ${theme.border} border rounded-xl p-6 hover:scale-105 transition-all duration-300`}>
                <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                <p className="text-cyan-400 mb-2">{exp.company}</p>
                <p className={`${theme.textSecondary} text-sm mb-4`}>{exp.period}</p>
                <p className={theme.textSecondary}>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
