import { StaticImageData } from "next/image";

import project from "@/assets/projectsImg/project.png";

export type ProjectsInfoType = {
  id: number;
  title: string;
  name: string;
  bio: string;
  projectMeta: {
    Timeline: string;
    Role: string;
    Team: string;
    Status: string;
  };
  description: string;
  image: StaticImageData | string;
  overview: {
    [key: string]: string[];
  };
  socialLinks: {
    liveDemo: string;
    github: string;
  };
};

export const projectInfos: ProjectsInfoType[] = [
  {
    id: 1,
    title: "ShopNest E-Commerce Platform",
    name: "shopnest-ecommerce-platform",

    bio: "A production-ready full-stack e-commerce platform featuring secure authentication, online payments, background job processing, admin dashboard, and scalable architecture.",

    projectMeta: {
      Timeline: "2026",
      Role: "Full Stack Developer",
      Team: "Solo Project",
      Status: "Ongoing",
    },

    description:
      "ShopNest is a modern full-stack e-commerce application built with React, Node.js, Express, PostgreSQL, Sequelize, Redis, and BullMQ. The platform provides customers with a seamless shopping experience while offering administrators powerful tools for managing products, orders, users, and analytics. It includes secure JWT authentication, Google OAuth, Razorpay payment integration, Cloudinary image storage, background email processing, Swagger API documentation, and production-ready architecture.",

    image: project,

    overview: {
      Overview: [
        "Built a scalable full-stack e-commerce platform using React, Express.js, PostgreSQL, and Redis.",
        "Designed with production-ready architecture following clean coding practices.",
        "Implemented secure authentication, payment gateway, admin dashboard, and background job processing.",
      ],

      Features: [
        "JWT Authentication & Authorization",
        "Google OAuth 2.0 Login",
        "Product Search & Category Filtering",
        "Shopping Cart & Wishlist",
        "Multi-step Checkout Flow",
        "Razorpay Payment Integration",
        "Order Tracking & Order History",
        "Product Reviews & Ratings",
        "Responsive Admin Dashboard",
        "Product & Order Management",
        "User Management",
        "Sales Analytics Dashboard",
      ],

      "Backend Architecture": [
        "RESTful API using Express.js",
        "Layered Architecture (Routes, Controllers, Services, Models)",
        "PostgreSQL with Sequelize ORM",
        "Redis-powered BullMQ Background Jobs",
        "Swagger API Documentation",
        "Centralized Winston Logger",
        "Cloudinary Image Uploads",
        "Environment-based Configuration",
      ],

      Technologies: [
        "React 19",
        "Redux Toolkit",
        "Vite",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Sequelize ORM",
        "Redis",
        "BullMQ",
        "Passport.js",
        "JWT",
        "Google OAuth",
        "Cloudinary",
        "Multer",
        "Razorpay",
        "Swagger",
        "Winston Logger",
        "Axios",
      ],

      Challenges: [
        "Implementing secure authentication with JWT and Google OAuth.",
        "Managing asynchronous email notifications using BullMQ and Redis.",
        "Designing scalable database relationships using PostgreSQL and Sequelize.",
        "Handling payment verification securely with Razorpay webhooks and signatures.",
        "Building a modular backend architecture suitable for production deployment.",
      ],

      Achievements: [
        "Designed a production-ready scalable backend architecture.",
        "Integrated secure online payment workflow.",
        "Implemented asynchronous job queues for improved performance.",
        "Created a responsive admin dashboard with business analytics.",
        "Documented APIs using Swagger for easier development and testing.",
      ],
    },

    socialLinks: {
      liveDemo: "https://shopnest.milankoradiya.in/",
      github: "https://github.com/koradiyamilan12/shopnest-ecommerce-mern",
    },
  },
];
