import React from "react";
import services from "../../data/services";
import Service from "./service";

export default function ServicesSection() {
  const list = services.map((service) => (
    <Service service={service} key={crypto.randomUUID()} />
  ));

  return (
    <div
      id="services_section"
      className="p-4 container lg:max-w-screen-lg scroll-mt-16 flex flex-col gap-8"
    >
      <h1 className="text-3xl font-extrabold underline underline-offset-8">
        Services
      </h1>
      <p className="text-justify">
        Having the set of skills I have, I offer it to anyone in need of my
        services. I offer the following services:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{list}</div>
    </div>
  );
}
