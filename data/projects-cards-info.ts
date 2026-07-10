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
    title: "ShopNest E-Commerce Platform",
    name: "shopnest-ecommerce-platform",

    description:
      "A production-ready full-stack e-commerce platform featuring secure authentication, PostgreSQL, Redis, Razorpay payments, admin dashboard, and scalable backend architecture.",

    image: project,

    technologies: [
      "react",
      "vite",
      "redux-toolkit",
      "nodejs",
      "express",
      "postgresql",
      "sequelize",
      "redis",
      "bullmq",
      "passportjs",
      "jwt",
      "cloudinary",
      "multer",
      "razorpay",
      "swagger",
      "axios",
    ],

    socialLinks: [
      {
        label: "Live Demo",
        link: "https://your-live-demo.com",
      },
      {
        label: "Github",
        link: "https://github.com/yourusername/shopnest-ecommerce-platform",
      },
    ],
  },
];
