import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface ContactInfo {
    website: string;
    phone: string;
    email: string;
    location: string;
}

export interface ContactInfoWithIcon {
    title: string;
    icon: IconDefinition;
    value: string;
}