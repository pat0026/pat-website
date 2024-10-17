import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";

export default function Service({ service }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.8, // Trigger when 10% of the item is in view
  });

  return (
    <div ref={ref} className="flex flex-col lg:flex-row p-4 gap-8 items-center">
      <FontAwesomeIcon
        icon={service.icon}
        className={`rounded-full border-2 size-16 p-4  ${
          inView ? "animate__animated animate__fadeIn" : "opacity-0"
        } `}
      />
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold text-center">{service.name}</p>
        <p className="text-justify">{service.description}</p>
      </div>
    </div>
  );
}
