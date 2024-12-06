"use client";
import { Spotlight } from "./ui/Spotlight";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { IconCloud } from "./IconCloud";
import { WavyBackground } from "./ui/wavy-background";

const instructors = [
  {
    id: 1,
    name: "HTML",
    designation:"",
    image: "/techstack/html.png",
  },
  {
    id: 2,
    name: "CSS",
    designation:"",
    image: "/techstack/CSS3.jpg",

  },
  {
    id: 3,
    name: "Javascript",
    designation:"",
    image: "/techstack/js.png",
  },
  {
    id: 4,
    name: "Typescript",
    designation:"",
    image: "/techstack/Typescript.png",
  },
  {
    id: 5,
    name: "MySQL",
    designation:"",
    image: "/techstack/mysql.png",
  },
  {
    id: 6,
    name: "MongoDB",
    designation:"",
    image: "/techstack/MongoDB.png",
  },

  {
    id: 7,
    name: "Express.js",
    designation:"",
    image: "/techstack/Express.png",
  },
  {
    id: 8,
    name: "React",
    designation:"",
    image: "/techstack/React.png",
  },
  {
    id: 9,
    name: "Nodejs",
    designation:"",
    image: "/techstack/NodeJS.png",
  },

  {
    id: 11,
    name: "Python",
    designation:"",
    image: "/techstack/python.png",
  },
  {
    id: 12,
    name: "Java",
    designation:"",
    image: "/techstack/java.png",
  },
  {
    id: 13,
    name: "BootStrap",
    designation:"",
    image: "/techstack/bootstrap.png",
  },
  {
    id: 14,
    name: "Tailwind CSS",
    designation:"",
    image: "/techstack/tailwind.jpg",
  },
  {
    id: 15,
    name: "Git",
    designation:"",
    image: "/techstack/git.png",
  },
  {
    id : 16,
    name : "Prisma",
    designation:"",
    image:"/techstack/prisma.jpg"
  }
];

function Instructors() {
  const iconSlugs = [
    "html",
    "css",
    "javascript",
    "typescript",
    "mysql",
    "mongodb",
    "express",
    "react",
    "nodejs",
    "python",
    "java",
    "bootstrap",
    "tailwindcss",
    "git",
    "prisma",
  ];
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 ">
          My TechStack
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Here are few amazing technologies I have worked with and deep-dived
          into
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
