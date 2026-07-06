"use client";

import { BsFillFileTextFill, BsPatchCheckFill } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

import { useRouter } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import TechBadge from "@/components/ui/tech-badge";

import { Button } from "../ui/button";
import { LinksIcon } from "../ui/link-icon";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="mx-auto max-w-3xl space-y-6 px-4">
      {/* Name */}
      <div>
        <h1 className="flex items-center gap-2 text-xl font-semibold sm:text-2xl">
          Milan Koradiya
          <BsPatchCheckFill size={20} className="text-sky-400" />
        </h1>

        <p className="text-muted-foreground md:text-base">
          Full Stack Developer
        </p>
      </div>
      <Separator />

      <p className="text-muted-foreground line text-lg leading-9 tracking-wide">
        Frontend developer working with <TechBadge tech="react" />,{" "}
        <TechBadge tech="nextjs" />, and <TechBadge tech="typescript" /> to
        build modern, responsive web applications, using{" "}
        <TechBadge tech="tailwind" /> and <TechBadge tech="shadcn" /> for clean
        and consistent UI.
      </p>

      <div>
        <LinksIcon />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        {/* Resume Button */}
        <Button
          onClick={() => router.push("/resume")}
          className="group cursor-pointer"
        >
          <div className="flex items-center">
            <BsFillFileTextFill className="text-base transition-transform duration-300 group-hover:-rotate-20" />
            <span className="ml-2">Resume / CV</span>
          </div>
        </Button>

        {/* Contact Button */}
        <Button
          variant="secondary"
          onClick={() => router.push("/contact")}
          className="group cursor-pointer"
        >
          <div className="flex items-center">
            <span className="mr-2">Get in touch</span>
            <IoIosSend className="text-base transition-transform duration-300 group-hover:rotate-45" />
          </div>
        </Button>
      </div>
    </section>
  );
}
