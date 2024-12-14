"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  {
    site: 'https://stingersolutions.com/',
    logo: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/clients/stinger-solutions.png'
  },
  {
    site: 'https://kimiagroup.com/',
    logo: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/clients/kimiagroup.png'
  },
  {
    site: 'https://undostres.com.mx/',
    logo: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/clients/undostres.png'
  }
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          My awesome clients
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {CLIENTS.map((client, key) => (
            <Image
              key={key}
              alt={client.site}
              width={768}
              height={768}
              className="w-40"
              src={client.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
