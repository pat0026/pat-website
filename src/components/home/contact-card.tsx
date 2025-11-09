import React from "react";
import { contactInfosWithIcon } from "../../data/contact-info";
import ContactInfo from "./contact-info";

export default function ContactCard() {
  const contactInfos = contactInfosWithIcon.map((contactInfo) => (
    <ContactInfo contactInfo={contactInfo} key={crypto.randomUUID()}/>
  ));
  return (
    <div className="card bg-base-100 flex-1 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title">Contact Information</h2>
        {contactInfos}
      </div>
    </div>
  );
}
