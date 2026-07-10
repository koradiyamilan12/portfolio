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
    company: "TechRover Solutions",
    role: "Node JS Internship",
    status: "",
    duration: "July 22 2025 - October 22 2025 ",
    location: "On site Junagadh",
    technologies: [
      "Node.js",
      "Express.js",
      "Postgresql",
      "Redis",
      "AWS S3",
      "Swagger Docs",
      "RabbitMQ",
      "Sequelize",
    ],
    points: [
      "Built scalable REST APIs with Node.js, Express.js, and PostgreSQL, implementing JWT/OAUTH authentication and Swagger documentation, and Winston logging.",
      "Improved backend performance using Redis caching, RabbitMQ, for asynchronous processing, and AWS S3 for secure file storage.",
      "Wrote unit tests with Jest, followed clean architecture, and collaborated using Git and Postman.",
    ],
  },
  {
    id: 2,
    company: "TechRover Solutions",
    role: "React JS Internship",
    status: "not",
    duration: "April 15 2025 - July 15 2025",
    location: "On site Junagadh",
    technologies: ["HTML", "CSS", "Tailwind CSS", "JS", "React.js", "Redux"],
    points: [
      "Built responsive and user-friendly web applications using React.js, JavaScript, HTML and CSS.",
      "Integrated REST APIs, managed application state, and developed reusable UI components for better performance.",
      "Optimized frontend performance, implemented responsive design, and collaborated using Git and Postman",
    ],
  },
];
