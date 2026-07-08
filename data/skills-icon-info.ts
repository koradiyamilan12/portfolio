import { IconType } from "react-icons/lib";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiRedux,
  SiSequelize,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type SkillIconInfoType = {
  name: string;
  label: string;
  color?: string;
  icon?: IconType;
  link: string;
  image?: string;
  aliases?: string[];
}[];

export const normalizeSkillName = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "");

export const isSkillMatch = (
  skillInfo: SkillIconInfoType[number],
  techName: string,
) => {
  const normalizedInput = normalizeSkillName(techName);
  const normalizedName = normalizeSkillName(skillInfo.name);
  const normalizedAliases = (skillInfo.aliases ?? []).map(normalizeSkillName);

  return (
    normalizedName === normalizedInput ||
    normalizedAliases.includes(normalizedInput)
  );
};

export const getSkillIconInfo = (techName: string) =>
  skillsIconInfo.find((skillInfo) => isSkillMatch(skillInfo, techName));

export const skillsIconInfo: SkillIconInfoType = [
  {
    name: "html",
    label: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
    link: "https://www.w3.org/html/",
  },
  {
    name: "css",
    label: "CSS",
    icon: SiCss3,
    color: "#1572B6",
    link: "https://www.w3.org/css/",
  },

  // Languages
  {
    name: "typescript",
    label: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "javascript",
    label: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    aliases: ["js"],
  },

  // Frameworks and Libraries
  {
    name: "react",
    label: "React.js",
    icon: SiReact,
    color: "#61DAFB",
    link: "https://react.dev/",
    aliases: ["react.js", "reactjs"],
  },

  // Styling / UI
  {
    name: "tailwind",
    label: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    link: "https://tailwindcss.com/",
    aliases: ["Tailwind CSS"],
  },

  // States
  {
    name: "redux",
    label: "Redux",
    icon: SiRedux,
    color: "#764ABC",
    link: "https://redux.js.org/",
  },

  // Backends / DB
  {
    name: "Node.js",
    label: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    link: "https://nodejs.org/",
    aliases: ["nodejs", "node js"],
  },
  {
    name: "Express.js",
    label: "Express.js",
    icon: SiExpress,
    // color: "#000000",
    link: "https://expressjs.com/",
    aliases: ["expressjs", "express"],
  },
  {
    name: "MongoDB",
    label: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    link: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    label: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    link: "https://www.postgresql.org/",
  },
  {
    name: "MySQL",
    label: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    link: "https://www.mysql.com/",
  },
  {
    name: "Redis",
    label: "Redis",
    icon: SiRedis,
    color: "#DC382D",
    link: "https://redis.io/",
  },
  {
    name: "RabbitMQ",
    label: "RabbitMQ",
    icon: SiRabbitmq,
    color: "#f60",
    link: "https://www.rabbitmq.com/",
  },
  {
    name: "Swagger Docs",
    label: "Swagger Docs",
    icon: SiSwagger,
    color: "#38b832",
    link: "https://swagger.io/",
  },
  {
    name: "Docker",
    label: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    link: "https://www.docker.com/",
  },
  {
    name: "Sequelize",
    label: "Sequelize",
    icon: SiSequelize,
    color: "#2496ED",
    link: "https://sequelize.org/",
    aliases: ["Sequelize"],
  },
  {
    name: "Prisma",
    label: "Prisma",
    icon: SiPrisma,
    color: "#2496ED",
    link: "https://www.prisma.io/",
  },
  {
    name: "Mongoose",
    label: "Mongoose",
    icon: SiMongoose,
    color: "#ff5e5e",
    link: "https://mongoosejs.com/",
  },

  // Tools
  {
    name: "git",
    label: "Git",
    icon: SiGit,
    color: "#F05032",
    link: "https://git-scm.com/",
  },
  {
    name: "github",
    label: "GitHub",
    icon: SiGithub,
    link: "https://github.com/",
  },
];
