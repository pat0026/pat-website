import React from "react";

export default function TimeItem({ topic }) {
  return (
    <>
      <h3 className="text-lg font-black">{topic.subject}</h3>

      <time className="font-mono italic border-solid rounded border-2 px-1  inline-block">
        {topic.year}
      </time>

      <p className="italic">{topic.location}</p>
      {topic.description ? (
        <p>{topic.description}</p>
      ) : (
        <ul>
          {topic.description_list.map((item) => (
            <li className="list-disc list-inside pl-2">{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}
