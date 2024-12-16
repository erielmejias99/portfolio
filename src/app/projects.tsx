"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/projects/kimiagroup-aftrad.png",
    title: "Aftrad SaaS",
    desc: "Aftrad is a cutting-edge SaaS platform designed to revolutionize the advertisement industry. The platform provides businesses with tools to create, manage, and analyze advertising campaigns with ease.",
    tech: '#go #golang #docker #typescript #vue3 #pinia #node #microservices #ttd #postgres #clickhouse #kafka #kubernetes #vuetify'
  },
  {
    img: "https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/projects/pac-audio.png",
    title: "Pac Audio Website",
    desc: "Pac-Audio is a leading provider of automotive audio integration solutions, offering advanced tools and products for enhancing vehicle audio systems.",
    tech: '#typescript #express #shopify #shpoify-custom-app #docker #dev-op #cd/ci #aws #heroku #postgres'
  },
  {
    img: "https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/projects/undostres.png",
    title: "Undostres Website",
    desc: "Undostres is a premier digital payment platform in Mexico, offering seamless online transactions for mobile recharges, bill payments, and more.",
    tech: '#go #javascript #java #golang #mysql #aws #php #docker #react #postgres #java #html #css #javascript'
  },
  {
    img: "https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/projects/undostres-mobile-app.png",
    title: "Undostres Mobile App",
    desc: "Undostres is a premier digital payment platform in Mexico, offering seamless online transactions for mobile recharges, bill payments, and more.",
    tech: '#java #kotlin #appsflayer #firebase'
  },
  {
    img: "https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/projects/budget-app.jpeg",
    title: "MyBudget App",
    desc: "MyBudget is a sleek and intuitive app designed to help users take control of their finances. With features like expense tracking, budget planning, and real-time insights.",
    tech: '#go #gowails #vue #vuetify #backend #frontend #postgres'
  },
  {
    img: "https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/projects/matdisc.jpeg",
    title: "MatDisc",
    desc: "This project is an educational application specifically designed to enhance students’ understanding of matrices, a critical topic in mathematics and linear algebra.",
    tech: '#typescript #node #electron #react #redux #react-router #backend #frontend #postgres'
  },
  // {
  //   img: "/image/blog3.svg",
  //   title: "Mobile App Development",
  //   desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  // },
  // {
  //   img: "/image/blog4.svg",
  //   title: "E-commerce development",
  //   desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
  // },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
