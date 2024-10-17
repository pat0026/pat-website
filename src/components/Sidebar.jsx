import React from "react";

export default function Sidebar(props) {
  return (
    <ul className="menu bg-base-200 min-h-full w-72 p-4">
      {/* Sidebar content here */}

      <li>
        <details>
          <summary>Sections</summary>
          <ul>
            <li>
              <a href="#about_section" onClick={props.closeSidebar}>About</a>
            </li>
            <li>
              <a href="#skill_section" onClick={props.closeSidebar}>Skills</a>
            </li>
            <li>
              <a href="#background_section" onClick={props.closeSidebar}>Background</a>
            </li>
            <li>
              <a href="#portfolio_section" onClick={props.closeSidebar}>Portfolio</a>
            </li>
            <li>
              <a href="#services_section" onClick={props.closeSidebar}>Services</a>
            </li>
            <li>
              <a href="#testimonial_section" onClick={props.closeSidebar}>Testimonial</a>
            </li>
            <li>
              <a href="#contact_section" onClick={props.closeSidebar}>Contacts</a>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Blogs</a>
      </li>
    </ul>
  );
}
