import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeItem from "./test-item";
import educations from "../../data/educations";

export default function Education() {
  const list = educations.map((education, index) => {
    return (
      <li key={crypto.randomUUID()}>
        {index !== 0 && <hr />}
        <div className="timeline-middle">
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div
          className={`timeline-start ${
            index !== educations.length - 1 && "pb-4"
          } space-y-3`}
        >
          <TimeItem topic={education} />
        </div>
        {index !== educations.length - 1 && <hr />}
      </li>
    );
  });

  return (
    <div className="p-2 container lg:max-w-screen-lg space-y-1">
      <h1 className="text-2xl font-bold italic">Education</h1>
      <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
        {list}
      </ul>
    </div>
  );
}
