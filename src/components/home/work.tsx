import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeItem from "./test-item";
import work from "../../data/work";

export default function Work() {
  const list = work.map((education, index) => {
    return (
      <li key={crypto.randomUUID()}>
        {index !== 0 && <hr />}
        <div className="timeline-middle">
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div
          className={`timeline-start ${
            index !== work.length - 1 && "pb-4"
          } space-y-3`}
        >
          <TimeItem topic={education} />
        </div>
        {index !== work.length - 1 && <hr />}
      </li>
    );
  });

  return (
    <div className="p-2 container lg:max-w-screen-lg space-y-1">
      <h1 className="text-2xl font-bold italic">Work</h1>
      <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
        {list}
      </ul>
    </div>
  );
}
