"use client";

import React, { ReactElement } from "react";
import { skills } from "../../data/skills";
import Skill from "./skill";

export default function SkillsSection() {
  const logos: ReactElement[] = [];
  for (const skill in skills) {
    logos.push(
      <Skill key={crypto.randomUUID()} skillName={skill} icon={skills[skill]} />
    );
  }

  return (
    <div
      id="skill_section"
      className="p-4 container lg:max-w-screen-lg scroll-mt-16 flex flex-col gap-8"
    >
      <h1 className="text-3xl font-extrabold underline underline-offset-8">
        Skills
      </h1>
      <p className="text-justify">
        I have acquired the set of skills for IC Layout. I&apos;m knowledgeable both
        in hardware and software which is an asset for embedded systems or
        servers. Expert in diverse CI Platforms. Proficient in different
        compiled languages and skillful in different scripting languages.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 ">{logos}</div>
    </div>
  );
}
