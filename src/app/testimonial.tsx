"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {TestimonialCard} from "@/components/TestimonialCard";

const testimonials = [
  {
    avatar: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/testimonial/scott-rogers.jpeg',
    name: 'Scott Rogers',
    subtitle: 'IT Director at Stinger Solutions',
    content: 'Just getting a chance to read thru this in detail and really appreciate all the effort here and efficiency and cost saving! Thanks Eriel and team...',
    contact: 'scottrogers@stingersolutions.com',
  },
  {
    avatar: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/testimonial/jay-prakash.jpeg',
    name: 'Jay Prakash Mishra',
    subtitle: 'Software Developer Engineer at Undostres',
    content: 'I couldn’t have asked for a better lead than Eriel. He is one of the most dedicated professionals I’ve worked with and is willing to put that extra help whenever you need it. His expertise as a developer is considerable, and it helped me always to come up with more efficient solutions on different projects. I highly recommend Eriel and would love to work with him again.',
    contact: 'jaypmishra030@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jpmishra000/'
  },
  {
    avatar: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/testimonial/surya-pratap.jpeg',
    name: 'Surya Pratap Singh',
    subtitle: 'Senior Software Engineer @UnDosTres',
    content: 'You are one of the most hardworking person I have known. It feels good to know you and be a small part of your journey. More growth to you.',
    contact: 'surya.singh15071999@gmail.com',
    linkedin: 'https://www.linkedin.com/in/suryapts07/'
  },
  {
    avatar: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/testimonial/shrawan-sah.jpeg',
    name: 'Shrawan Sah',
    subtitle: 'Member Of Technical Staff at Salesforce (SDE 2) | UnDosTres(Mexico) | MNNIT',
    content: 'Great work Eriel Mejias Rodriguez !! congrats.',
    contact: 'surya.singh15071999@gmail.com',
  },
  {
    avatar: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/testimonial/no-image.webp',
    name: 'Justin Murphy',
    subtitle: 'IT Lead at Stinger Solutions',
    content: 'Eriel I think I speak for everyone that we are glade to have you here.',
    contact: 'jmurphy@stingersolutions.com',
  },
];

export function Testimonial() {
  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container mx-auto mb-20 text-center">
        <div className="text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            What Clients Say
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Discover what clients have to say about their experiences working
            with me. My client&apos;s satisfaction is my greatest achievement!
          </Typography>
        </div>
        <div className="container mx-auto max-w-screen-xlg p-4">
          <div className="px-5 grid gap-9 grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                avatar={testimonial.avatar}
                name={testimonial.name}
                content={testimonial.content}
                subtitle={testimonial.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
