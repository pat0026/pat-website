import React from "react";
import Work from "./Work";
import Education from "./Education";

export default function Background() {
  return (
    <div
      id="background_section"
      className="p-4 container max-w-screen-lg scroll-mt-16"
    >
      <h1>Background</h1>
      <p>
        I am a hardworking individual with a life long learning goal as you can
        see from my educational background. Experienced diverse work experiences
        in different fields. This shows my perseverance in different
        environments and fields on each job.
      </p>
      <div className="flex max-md:flex-col">
        <Education />
        <Work />
      </div>
    </div>
  );
}
