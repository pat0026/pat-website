import React from "react";
import Work from "./Work";
import Education from "./Education";

export default function Background() {
  return (
    <div
      id="background_section"
      className="p-4 container lg:max-w-screen-lg scroll-mt-16 flex flex-col gap-8"
    >
      <h1 className="text-3xl font-extrabold underline underline-offset-8">
        Background
      </h1>
      <p className="text-justify">
        I am a hardworking individual with a life long learning goal as you can
        see from my educational background. Experienced in diverse working
        environments in different fields. This shows my perseverance in in any
        job.
      </p>
      <div className="flex max-md:flex-col gap-8">
        <Education />
        <Work />
      </div>
    </div>
  );
}
