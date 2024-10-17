import React from "react";
import { contactInfoWithIcon } from "../../data/contactInfo";
import ContactInfo from "./ContactInfo";

export default function ContactCard() {
  const contactInfos = contactInfoWithIcon.map((contactInfo) => (
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
