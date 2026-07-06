export type ExperienceType = {
  id: number;
  company: string;
  role: string;
  status: string;
  duration: string;
  location: string;
  technologies: string[];
  points: string[];
};

export const experienceInfo: ExperienceType[] = [
  {
    id: 1,
    company: "",
    role: "",
    status: "",
    duration: "",
    location: "",
    technologies: [],
    points: [],
  },
  {
    id: 2,
    company: "",
    role: "",
    status: "not",
    duration: "",
    location: "",
    technologies: [],
    points: [],
  },
  {
    id: 3,
    company: "",
    role: "",
    status: "not",
    duration: "",
    location: "",
    technologies: [""],
    points: [],
  },
];
