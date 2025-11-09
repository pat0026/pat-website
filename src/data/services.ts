import { ServiceItem } from "@/type/services";
import { faComputer, faGlobe, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const services: readonly ServiceItem[] = [
  {
    icon: faComputer,
    name: "Computer Assembly and Repair",
    description:
      "I can assemble PC to your liking. I can also troubleshoot and repair PC that you're having a problem with.",
  },
  {
    icon: faLaptopCode,
    name: "Program Application",
    description:
      "I can create interactive applications. I can create a program using the above skills mentioned. I will learn more and develop my skills in GUI based applications",
  },
  {
    icon: faGlobe,
    name: "Website Creation and Design",
    description:
      "I can design basic websites - front end and back end. I will continue to learn more.",
  },
] as const;

export default services;
