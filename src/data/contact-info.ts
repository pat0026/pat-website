import { ContactInfo, ContactInfoWithIcon } from "@/type/contact-info";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export const contactInfo: ContactInfo = {
  website: "pat0026.github.io/pat-portfolio",
  phone: "+63 9458297391",
  email: " patrick.caparros026@gmail.com",
  location: "Taguig City",
};

export const contactInfosWithIcon: ContactInfoWithIcon[] = [
  {
    title: "Location",
    icon: faLocationDot,
    value: contactInfo.location,
  },
  {
    title: "Email",
    icon: faEnvelope,
    value: contactInfo.email,
  },
  {
    title: "Phone",
    icon: faPhone,
    value: contactInfo.phone,
  },
];
