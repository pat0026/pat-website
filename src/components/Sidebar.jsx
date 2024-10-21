import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import resume from "../assets/RESUME.jpg"
import React from "react";

export default function Sidebar({ closeSidebar }) {
  return (
    <ul className="menu bg-base-200 min-h-full w-72 space-y-6 ">
      {/* Sidebar content here */}
      <div className="avatar mt-12 self-center">
        <div className="ring-primary ring-offset-base-100 size-36 rounded-full ring-offset-2 ring-4">
          <img src={resume} alt="Resume 2x2" />
        </div>
      </div>
      <div className="container flex flex-col mx-auto gap-2">
        <h1 className="mx-auto">Patrick Christain Caparros</h1>
        <div className="flex mx-auto gap-4 items-center">
          <a href="https://www.facebook.com/pat00026 " target="_blank">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="rounded-full border-2 size-4 p-2 border-primary"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/patrick-caparros"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="rounded-full border-2 size-4 p-2 border-primary"
            />
          </a>
        </div>
      </div>
      <div>
        <li>
          <h2 className="menu-title">Sections</h2>
          <ul>
            <li>
              <a href="#about_section" onClick={closeSidebar}>
                About
              </a>
            </li>
            <li>
              <a href="#skill_section" onClick={closeSidebar}>
                Skills
              </a>
            </li>
            <li>
              <a href="#background_section" onClick={closeSidebar}>
                Background
              </a>
            </li>
            <li>
              <a href="#portfolio_section" onClick={closeSidebar}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#services_section" onClick={closeSidebar}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact_section" onClick={closeSidebar}>
                Contacts
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a className="btn-disabled opacity-40">Projects</a>
        </li>
        <li>
          <a className="btn-disabled opacity-40">Blogs</a>
        </li>
      </div>
    </ul>
  );
}
