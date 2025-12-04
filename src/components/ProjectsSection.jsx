import { ExternalLink, Star } from "../utils/icons";

const ProjectsSection = ({ theme, projects, isVisible }) => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl w-full">
        <h2
          data-animate
          id="projects-title"
          className={`text-5xl md:text-6xl font-bold mb-16 text-center transition-all duration-1000 ${
            isVisible["projects-title"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-animate
              id={`project-${idx}`}
              className={`group relative ${
                theme.cardBg
              } backdrop-blur-sm rounded-2xl ${
                theme.border
              } border hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                isVisible[`project-${idx}`]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>
              <div className="relative z-10 p-8">
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}
                  >
                    <ExternalLink className="w-8 h-8" />
                  </div>
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold">{project.stars}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className={`${theme.textSecondary} mb-6 leading-relaxed`}>
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 ${theme.inputBg} rounded-full text-sm ${theme.border} border`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex-1 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 text-center"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button className="cursor-pointer flex-1 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                      Live Demo
                    </button>
                  )}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`cursor-pointer flex-1 py-2 ${theme.border} border rounded-lg font-semibold ${theme.hover} transition-all duration-300 text-center`}
                    >
                      Code
                    </a>
                  ) : (
                    <button
                      className={`cursor-pointer flex-1 py-2 ${theme.border} border rounded-lg font-semibold ${theme.hover} transition-all duration-300`}
                    >
                      Code
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
