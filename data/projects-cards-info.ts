import { StaticImageData } from "next/image";

import project from "@/assets/projectsImg/project.png";

export type ProjectsCardInfoType = {
  id: number;
  title: string;
  name: string;
  description: string;
  image: StaticImageData | string;
  technologies: string[];
  socialLinks: { label: string; link: string }[];
};
export const projectsCardInfo: ProjectsCardInfoType[] = [
  {
    id: 1,
    title: "Project Title",
    name: "Project Name",
    description: "Project Description",

    image: project,
    technologies: ["nextjs", "typescript", "tailwind", "firebase", "shadcn"],
    socialLinks: [
      {
        label: "Live Demo",
        link: "#",
      },
      {
        label: "Github",
        link: "",
      },
    ],
  },
  {
    id: 2,
    title: "Project Title",
    name: "Project Name",
    description: "Project Description",
    image: project,
    technologies: [
      "nextjs",
      "typescript",
      "tailwind",
      "supabase",
      "gemini",
      "shadcn",
    ],

    socialLinks: [
      {
        label: "Live Demo",
        link: "#",
      },
      {
        label: "Github",
        link: "#",
      },
    ],
  },
];
