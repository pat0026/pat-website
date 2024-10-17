import React from "react";
import { skills } from "../../data/skills";
import Skill from "./Skill";

export default function SkillsSection() {

  const logos = [];
  for (const skill in skills) {
    console.log(`Key: ${skill} | Value: ${skills[skill]}`);
    logos.push(
      <Skill key={crypto.randomUUID()} skill_name={skill} icon={skills[skill]} />
    );
  }
  return (
    <div
      id="skill_section"
      className="p-4 container max-w-screen-lg scroll-mt-16"
    >
      {console.log("rendered")}
      <h1>Skills</h1>
      <p>
        I have acquired the set of skills for IC Layout, knowledgable both in
        hardware and software that is an asset for any embedded systems. Expert
        in CI Platforms. Proficient in different compiled languages and skillful
        in different scripting languages. The following data is subjective based
        on my perception towards my skills.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 ">{logos}</div>
    </div>
  );
}
