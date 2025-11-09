import React from "react";
import ProjectCard from "./project-card";

export default function PortfolioSection() {
  return (
    <div
      id="portfolio_section"
      className="p-4 container lg:max-w-screen-lg scroll-mt-16 flex flex-col gap-8"
    >
      <h1 className="text-3xl font-extrabold underline underline-offset-8">
        Portfolio
      </h1>
      <p className="text-justify">
        I have dedicated my time and effort in acquiring the knowledge that I
        have today to build the following programs and websites. Feel free to
        check out my projects.
      </p>
      <div className="grid grid-cols-2 max-md:grid-cols-1 p-8">
        <ProjectCard />
      </div>
    </div>
  );
}
