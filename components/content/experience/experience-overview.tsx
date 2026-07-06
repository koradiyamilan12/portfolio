"use client";

import TechBadge from "@/components/ui/tech-badge";
import { ExperienceType } from "@/data/experience-info";

const ExperienceOverview = ({ data }: { data: ExperienceType }) => {
  const { company, role, status, duration, location, technologies, points } =
    data;

  return (
    <>
      <div className="flex w-full items-start justify-between">
        {/* Left Side */}
        <div className="flex flex-col">
          <div className="flex min-h-7 items-center justify-between gap-1">
            <h1 className="text-lg font-semibold tracking-tight md:tracking-normal">
              {company}
            </h1>

            {status === "working" && (
              <div className="flex items-center gap-1 rounded-sm border border-green-500/20 bg-green-500/10 px-2 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-semibold text-green-500">
                  Working
                </span>
              </div>
            )}
          </div>

          <p className="text-muted-foreground">{role}</p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col text-right tracking-tighter">
          <p className="text-muted-foreground font-medium">{duration}</p>
          <p className="text-muted-foreground">{location}</p>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="font-hankenGrotesk text-base font-semibold tracking-wider">
          Technologies & Tools
        </h2>

        {/* Badges Container */}
        <div className="mt-2 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* Experience Details */}
        <div className="mt-5 space-y-1">
          {points.map((point, index) => (
            <div
              key={index}
              className="group text-muted-foreground flex items-start gap-3 text-base"
            >
              <div className="flex h-6 shrink-0 items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
              </div>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceOverview;
