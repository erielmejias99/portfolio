// sections
import Hero from "./hero";
import Skills from "./skills";
import ContactForm from "./contact-form";
import React from "react";
import Testimonial from "@/app/testimonial";
import Clients from "@/app/clients";
import PopularClients from "@/app/popular-clients";
import Resume from "@/app/resume";
import Projects from "@/app/projects";

export default function Portfolio() {
  return (
    <>
      <Hero />
      <Clients />
      <Skills />
      <Projects />
      {/*<Resume />*/}
      <Testimonial />
      {/*<PopularClients />*/}
      <ContactForm />
    </>
  );
}
