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
    title: "Dummy Project One",
    name: "dummy-project-one",
    description:
      "Sample project card content used for testing the portfolio layout.",

    image: project,
    technologies: ["nextjs", "typescript", "tailwind", "firebase", "shadcn"],
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
  {
    id: 2,
    title: "Dummy Project Two",
    name: "dummy-project-two",
    description:
      "Another placeholder entry for testing the project details experience.",
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
