import { TimeItemType } from "@/type/time-item";
import React from "react";

export default function TimeItem({ topic }: { topic: TimeItemType }) {
  return (
    <>
      <h3 className="text-lg font-black">{topic.value.subject}</h3>

      <time className="font-mono italic border-solid rounded border-2 px-1  inline-block bg-base-300 border-base-300">
        {topic.value.year}
      </time>

      <p className="italic">{topic.value.location}</p>
      {topic.type === "education" ? (
        <p className="text-justify">{topic.value.description}</p>
      ) : (
        <ul>
          {topic.value.description_list.map((item) => (
            <li
              className="list-disc list-inside pl-2"
              key={crypto.randomUUID()}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
