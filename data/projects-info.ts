import { StaticImageData } from "next/image";

import project from "@/assets/projectsImg/project.png";

export type ProjectsInfoType = {
  id: number;
  title: string;
  name: string;
  bio: string;
  projectMeta: { Timeline: string; Role: string; Team: string; Status: string };
  description: string;
  image: StaticImageData | string;
  overview: {
    [key: string]: string[];
  };
  socialLinks: { liveDemo: string; github: string };
};
export const projectInfos: ProjectsInfoType[] = [
  {
    id: 1,
    title: "Dummy Project One",
    name: "dummy-project-one",
    bio: "Test data placeholder for a sample project detail page.",
    projectMeta: {
      Timeline: "TBD",
      Role: "Sample Role",
      Team: "Test Team",
      Status: "Draft",
    },

    description:
      "This is dummy test content created for UI preview purposes only. It does not represent a real project.",
    image: project,

    overview: {
      "Why This Exists": [
        "Show how the project detail page looks with sample content.",
        "Test layout spacing and section rendering.",
        "Keep the page visually complete without real project data.",
      ],
      Features: [
        "Sample feature list",
        "Placeholder timeline",
        "Mock technology badges",
        "Test CTA buttons",
      ],
      "Sample Notes": [
        "This content is intentionally fictional.",
        "Replace it later with real project details.",
      ],
    },
    socialLinks: {
      liveDemo: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "Dummy Project Two",
    name: "dummy-project-two",
    bio: "Another example of placeholder test data for project pages.",

    projectMeta: {
      Timeline: "TBD",
      Role: "Sample Role",
      Team: "Test Team",
      Status: "Draft",
    },

    description:
      "This is additional dummy data used to verify the detail view. It is not tied to any actual product or service.",

    image: project,

    overview: {
      "Why This Exists": [
        "Validate the project detail UI with a second example.",
        "Check how multiple sections appear on the page.",
        "Keep the portfolio demo functional without real project info.",
      ],

      Features: [
        "Mock planning flow",
        "Sample collaboration notes",
        "Placeholder results section",
      ],
      Challenges: [
        "Testing how bullet lists look in the overview area",
        "Checking section headings and spacing",
      ],

      Technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Sample API",
        "Dummy Library",
      ],
    },

    socialLinks: {
      liveDemo: "#",
      github: "#",
    },
  },
];
