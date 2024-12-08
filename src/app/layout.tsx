/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import {Layout, Navbar, Footer} from "@/components";
import React from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eriel Mejias | Software Engineer | Full-Stack Developer Portfolio",
  description:
    "Eriel Mejias is a software engineer specializing in full-stack development, web optimization, and scalable backend solutions. Explore my portfolio and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
        <meta name="description"
              content="Eriel Mejias is a software engineer specializing in full-stack development, web optimization, and scalable backend solutions. Explore my portfolio and projects."/>
        <meta name="keywords"
              content="Software Engineer, Full-Stack Developer, Backend Developer, Frontend Developer, Portfolio, JavaScript, React, Node.js, Python"/>
        <meta name="author" content="Eriel Mejias"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        {/* Open Graph (OG) Tags */}
        <meta property="og:title" content="Eriel Mejias | Software Engineer Portfolio"/>
        <meta property="og:description"
              content="Explore Eriel Mejias's portfolio showcasing web development, scalable backend systems, and cutting-edge software engineering."/>
        <meta property="og:image"
              content="https://erielmejias.com/image/home_profile.jpeg"/>
        <meta property="og:url" content="https://erielmejias.com"/>
        <meta property="og:type" content="website"/>

        {/*  Tweeter/X card metadata */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Eriel Mejias | Software Engineer Portfolio"/>
        <meta name="twitter:description"
              content="Explore Eriel Mejias's software engineering portfolio, including web development, backend solutions, and optimization projects."/>
        <meta name="twitter:image"
              content="https://erielmejias.com/image/home_profile.jpeg"/>
      </head>
      <body className={roboto.className}>
        <Layout>
          <Navbar />
            {children}
            {/*<FixedPlugin />*/}
          <Footer />
        </Layout>

      </body>
    </html>
  );
}
