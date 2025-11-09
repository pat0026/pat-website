import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import resume from "../assets/RESUME.jpg";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ closeSidebar }) {
  return (
    <ul className="menu bg-base-200 min-h-full w-72 space-y-6 ">
      {/* Sidebar content here */}
      <div className="avatar mt-12 self-center">
        <div className="ring-primary ring-offset-base-100 size-36 rounded-full ring-offset-2 ring-4">
          <Image src={resume} alt="Resume 2x2" />
        </div>
      </div>
      <div className="container flex flex-col mx-auto gap-2">
        <h1 className="mx-auto">Patrick Christain Caparros</h1>
        <div className="flex mx-auto gap-4 items-center">
          <Link href="https://www.facebook.com/pat00026 " target="_blank">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="rounded-full border-2 size-4 p-2 border-primary"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/patrick-caparros"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="rounded-full border-2 size-4 p-2 border-primary"
            />
          </Link>
        </div>
      </div>
      <div>
        <li>
          <h2 className="menu-title">Sections</h2>
          <ul>
            <li>
              <Link href="/home#about_section" onClick={closeSidebar}>
                About
              </Link>
            </li>
            <li>
              <Link href="/home#skill_section" onClick={closeSidebar}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="/home#background_section" onClick={closeSidebar}>
                Background
              </Link>
            </li>
            <li>
              <Link href="/home#portfolio_section" onClick={closeSidebar}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/home#services_section" onClick={closeSidebar}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/home#contact_section" onClick={closeSidebar}>
                Contacts
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/projects" onClick={closeSidebar}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/blogs" onClick={closeSidebar}>
            Blogs
          </Link>
        </li>
      </div>
    </ul>
  );
}
