"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  CircleStackIcon,
  CogIcon,
  HashtagIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: CogIcon,
    title: "Backend Development",
    children:
      "Dedicated backend developer with 5+ of experience in building, optimizing, and maintaining server-side logic, databases, and APIs. Proficient in creating scalable and secure solutions for web and mobile applications using modern programming languages and frameworks. Passionate about improving system performance and delivering high-quality code.",
  },
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users. Skilled in building responsive, accessible, and visually appealing designs using modern frontend frameworks and tools. Adept at translating complex requirements into intuitive user experiences while ensuring performance optimization.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      " I specialize in creating responsive and intuitive mobile apps that work seamlessly across all Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: HashtagIcon,
    title: " Web Optimization",
    children:
      "Results-driven web optimization specialist enhancing website performance, improving user experience, and boosting conversion rates. Proficient in analyzing website metrics, optimizing page speed, and implementing SEO best practices to achieve measurable results. Adept at collaborating with development and design teams to create efficient and user-friendly digital experiences.",
  },
  {
    icon: CircleStackIcon,
    title: "Database",
    children:
      "Experienced database specialist in designing, optimizing, and managing relational and non-relational databases. Skilled in ensuring data integrity, improving query performance, and implementing secure and scalable database architectures. Proficient in database administration, backup/recovery strategies, and integrating databases with application ecosystems.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
