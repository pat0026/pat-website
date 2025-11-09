import React from "react";
import EmailCard from "./email-card";
import ContactCard from "./contact-card";

export default function ContactSection() {
  return (
    <div
      id="contact_section"
      className="p-4 container lg:max-w-screen-lg scroll-mt-16 flex flex-col gap-8"
    >
      <h1 className="text-3xl font-extrabold underline underline-offset-8">
        Contact
      </h1>
      <div className="flex flex-grow max-md:flex-col gap-4">
        <ContactCard />
        <EmailCard />
      </div>
    </div>
  );
}
