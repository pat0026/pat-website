import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactInfo({ contactInfo: contactInfo }) {
  return (
    <div className="flex py-2 gap-4 align-middle">
      <FontAwesomeIcon
        icon={contactInfo.icon}
        className="rounded-full border-2 size-6 p-2 mt-0.5"
      />
      <div className="flex flex-col overflow-y-auto">
        <p>{contactInfo.title}</p>
        <p>{contactInfo.value}</p>
      </div>
    </div>
  );
}
