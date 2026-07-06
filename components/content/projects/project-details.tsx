import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";

import { projectInfos } from "@/data/projects-info";

import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import { ProjectOverview } from "./project-overview";

const ProjectDetails = ({ slug }: { slug: string }) => {
  const projectData = projectInfos.find((data) => data.name === slug);

  if (!slug || !projectData) return null;
  const overviewKeys = Object.keys(projectData?.overview);

  return (
    <div className="mx-auto max-w-3xl px-4">
      {/* back to home button */}
      <Button variant="outline" className="group mb-6 cursor-pointer" asChild>
        <Link href={"/"}>
          <MdArrowBackIosNew className="transition-all duration-200 group-hover:-translate-x-1" />{" "}
          Back to Home
        </Link>
      </Button>

      <div className="space-y-5">
        {/* Image section */}
        <div className="relative aspect-video rounded-md shadow-md">
          <Image
            alt={projectData.name}
            fill
            placeholder="blur"
            src={projectData.image}
            className="rounded-md object-cover"
          />
        </div>
        {/* Content Section */}
        <div className="mt-10 space-y-5">
          <h1 className="font-hankenGrotesk text-4xl font-bold md:text-5xl">
            {projectData.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            {projectData.description}
          </p>
        </div>

        {/* Project Meta */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {Object.entries(projectData.projectMeta).map(([key, value]) => (
            <div
              key={key}
              className="bg-card rounded-xl border p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-muted-foreground text-[11px] tracking-widest uppercase">
                {key}
              </p>
              <p className="font-hankenGrotesk mt-1 text-base font-semibold">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          <Button asChild>
            <Link
              href={projectData.socialLinks.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiGlobe size={16} />
              Live Demo
            </Link>
          </Button>

          <Button variant={"secondary"} asChild>
            <Link
              href={projectData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={16} />
              Source Code
            </Link>
          </Button>
        </div>
      </div>

      <Separator className="my-10" />

      <h1 className="font-hankenGrotesk mb-10 text-3xl font-bold md:text-4xl">
        {projectData?.bio}
      </h1>

      <div className="space-y-10">
        {/* Overview Section*/}
        {overviewKeys.map((key, i) => (
          <ProjectOverview
            key={i}
            title={key}
            data={projectData?.overview[key]}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
