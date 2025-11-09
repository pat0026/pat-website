"use client";
import { useInView } from "react-intersection-observer";

type SkillProps = {
  skillName: string;
  icon: string;
};

export default function Skill(props: SkillProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.8, // Trigger when 10% of the item is in view
  });

  return (
    <div ref={ref} className="flex flex-col p-4 items-center">
      <i
        className={`${props.icon} text-8xl p-2   ${
          inView ? "animate__animated animate__fadeInUp" : "opacity-0"
        } `}
      ></i>
      <p>{props.skillName}</p>
    </div>
  );
}
