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
    title: "Project Title",
    name: "Project Name",
    bio: "Resume AI: Enhance resumes using AI",
    projectMeta: {
      Timeline: "25 days",
      Role: "Full Stack",
      Team: "Solo",
      Status: "Completed",
    },

    description:
      "An AI-powered resume builder that analyzes content, improves clarity, and provides ATS-friendly scoring with real-time feedback.",
    image: project,

    overview: {
      "Why I Built This": [
        "Enhance existing resumes instead of generating generic ones.",
        "Use AI in a practical, real-world scenario.",
        "Gain hands-on experience with AI integration.",
        "Strengthen skills in Next.js, TypeScript, Tailwind CSS, and Supabase.",
      ],
      Features: [
        "Secure authentication",
        "AI-powered resume analysis",
        "ATS score evaluation",
        "Resume management",
        "Resume history tracking",
        "Voice-based feedback",
      ],
      Technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Supabase",
        "Gemini",
        "React Hook Form",
        "Shadcn/Ui",
      ],
    },
    socialLinks: {
      liveDemo: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "Tripping App",
    name: "tripping",
    bio: "Smart trip planner with drag-and-drop timeline and map visualization",

    projectMeta: {
      Timeline: "60 days",
      Role: "Full Stack",
      Team: "3 Members",
      Status: "Completed",
    },

    description:
      "An interactive trip planning application that allows users to organize their travel itinerary using a drag-and-drop timeline, visualize routes on a map, and manage activities efficiently with real-time updates and transport integration.",

    image: project,

    overview: {
      "Why I Built This": [
        "Solve real-world problem of messy trip planning and scattered information.",
        "Build an intuitive drag-and-drop based UI for better user experience.",
        "Work deeply with maps, routes, and geolocation-based features.",
        "Strengthen frontend architecture and state management skills.",
        "Handle complex UI interactions and real-time updates.",
      ],

      Features: [
        "Drag & drop activities between timeline and activity panel",
        "Day-wise timeline planning with automatic time adjustments",
        "Transport integration between activities",
        "Dynamic route visualization on map",
        "Distance & duration calculation between locations",
      ],
      Challenges: [
        "Building a custom calendar view and aligning activities day by day was challenging",
        "Handling API integration for fetching distance and route data between locations",
        "Managing complex drag-and-drop interactions across multiple sections (timeline, activities, transport)",
        "Handling map issues when displaying both markers and routes together",
      ],

      Technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Google Maps API",
        "@dnd-kit",
        "Firebase",
        "Shadcn/UI",
      ],
    },

    socialLinks: {
      liveDemo: "#",
      github: "#",
    },
  },
];
