"use client";
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

import Link from "next/link";

import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { experienceInfo } from "@/data/experience-info";

import { Separator } from "../../ui/separator";
import ExperienceCard from "./experience-card";

const experienceInfoTwoData = experienceInfo.slice(0, 2);

const ExperienceSection = () => {
  const [openItem, setOpenItem] = useState<string[]>([
    experienceInfoTwoData[0]?.company,
  ]);

  return (
    <div className="mx-auto mt-8 max-w-3xl px-4">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Experience</h1>
      </div>

      {/* Accordion */}
      <Accordion
        type="multiple"
        value={openItem}
        onValueChange={setOpenItem}
        className="space-y-6"
      >
        {experienceInfoTwoData.map((data) => (
          <AccordionItem
            key={data.id}
            value={data.company}
            className="mb-6 border-none last:mb-0"
          >
            <ExperienceCard
              data={data}
              isOpen={openItem.includes(data.company)}
            />
          </AccordionItem>
        ))}
      </Accordion>

      {/* button */}
      <div className="mt-8 flex items-center justify-center">
        <Button variant="secondary" asChild>
          <Link href="/work" className="flex items-center gap-2">
            Show all experiences
            <RiArrowRightSLine />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ExperienceSection;
