import Image from "next/image";
import Link from "next/link";

import { Download, ExternalLink } from "lucide-react";

import resume from "@/assets/document/resume.png";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const ResumeSection = () => {
  const url =
    "https://drive.google.com/file/d/1Aqr5-MHNBmuMxHRMmmRVCZghr_wfsRTn/view?usp=sharing";
  return (
    <section className="mx-auto max-w-3xl px-4">
      <div className="mb-10">
        <h1 className="font-hankenGrotesk text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Resume
        </h1>
        <p className="text-muted-foreground mt-4 text-center text-lg">
          View my resume to explore my skills, experience, and projects.
        </p>
      </div>
      <Separator className="my-10" />

      {/* Buttons */}
      <div className="mb-6 flex items-end justify-end gap-3">
        <Button asChild>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            Open
          </Link>
        </Button>

        <Button variant={"secondary"} asChild>
          <Link href="/resume.pdf" download>
            <Download size={16} />
            Download
          </Link>
        </Button>
      </div>

      {/* Resume PDF */}
      <div className="group bg-secondary relative aspect-square overflow-hidden rounded-xl border shadow-sm">
        <Image
          alt="Resume preview"
          fill
          src={resume}
          placeholder="blur"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    </section>
  );
};

export default ResumeSection;
