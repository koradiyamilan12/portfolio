"use client";

import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { skillsIcon } from "@/components/ui/skills-icon";
import { ProjectsCardInfoType } from "@/data/projects-cards-info";

import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

export default function ProjectCard({
  title,
  name,
  description,
  image,
  technologies,
  socialLinks,
}: ProjectsCardInfoType) {
  const router = useRouter();
  return (
    <div className="group bg-card border-border gap-6 rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md">
      {/* Image */}
      <div
        onClick={() => router.push(`/projects/${name}`)}
        className="relative aspect-16/10 w-full cursor-pointer overflow-hidden rounded-t-xl"
        role="button"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 355px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-5">
          <div className="flex justify-between">
            <h3 className="font-hankenGrotesk text-xl font-semibold">
              {title}
            </h3>
            {/* Live Demo & Github Icons */}
            <div className="flex gap-3">
              {socialLinks?.map((social, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-2xl transition"
                    asChild
                  >
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={social.link}
                    >
                      {social.label === "Github" ? <FaGithub /> : <CiGlobe />}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social?.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          <p className="text-muted-foreground line-clamp-3 leading-relaxed tracking-wide">
            {description}
          </p>

          {/* Tech stack */}
          <div>
            <h1 className="font-hankenGrotesk text-muted-foreground tracking-wide sm:text-base">
              Technologies
            </h1>
            <div className="mt-2">{skillsIcon(technologies, "h-6 w-6", 3)}</div>
          </div>
        </div>

        <button
          onClick={() => router.push(`/projects/${name}`)}
          className="text-muted-foreground hover:text-primary mt-6 inline-flex cursor-pointer items-center gap-2 font-medium hover:underline"
        >
          View Details <FaArrowRightLong size={14} />
        </button>
      </div>
    </div>
  );
}
