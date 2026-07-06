import { projectsCardInfo } from "@/data/projects-cards-info";

import { Separator } from "../../ui/separator";
import ProjectCard from "./project-card";

const ProjectSection = () => {
  return (
    <div id="projects" className="mx-auto mt-6 max-w-3xl px-4">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-hankenGrotesk text-3xl font-bold">Projects</h1>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6">
        {projectsCardInfo.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            name={project.name}
            description={project.description}
            image={project.image}
            technologies={project?.technologies}
            socialLinks={project?.socialLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
