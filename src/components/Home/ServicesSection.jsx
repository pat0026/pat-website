import React from "react";
import services from "../../data/services";
import Service from "./Service";

export default function ServicesSection() {
  const list = services.map((service) => <Service service={service} />);

  return (
    <div
      id="services_section"
      className="p-4 container max-w-screen-lg scroll-mt-16"
    >
      <h1>Services</h1>
      <p>
        I have plenty of services that I could offer in your company. Here are
        the following services that can be an asset in your team:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list}
      </div>
    </div>
  );
}
