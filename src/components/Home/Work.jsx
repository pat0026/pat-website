import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeItem from "./TimeItem";
import educations from "../../data/work";

export default function Work() {
  const list = educations.map((education, index) => {
    return (
      <li>
        {index !== 0 && <hr />}
        <div className="timeline-middle">
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div
          className={`timeline-start ${
            index !== educations.length - 1 && "pb-10"
          } space-y-3`}
        >
          <TimeItem topic={education} />
        </div>
        {index !== educations.length - 1 && <hr />}
      </li>
    );
  });

  return (
    <div className="p-4 container max-w-screen-lg">
      <h1 className="">Work</h1>
      <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
        {list}
      </ul>
    </div>
  );
}
