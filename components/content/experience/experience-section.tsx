"use client";

import { Separator } from "@/components/ui/separator";
import { experienceInfo } from "@/data/experience-info";

import ExperienceOverview from "./experience-overview";

const ExperienceSection = () => {
  return (
    <div className="mx-auto max-w-3xl px-4">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="font-hankenGrotesk text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Work Experience
        </h1>
        <p className="text-muted-foreground mt-4 text-center text-lg">
          Professional experience building scalable and user-focused web
          applications.
        </p>
      </div>

      {/* Experience Info */}
      <div className="flex flex-col gap-8">
        {experienceInfo.map((data) => {
          return (
            <div key={data.id}>
              <Separator className="mb-8" />
              <ExperienceOverview data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;
