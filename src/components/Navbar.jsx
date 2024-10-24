import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef(null);

  const toggleDetails = () => {
    console.log(`Toggle button clicked. Before: ${isOpen}`);
    setIsOpen((prev) => !prev);
  };

  // Effect to synchronize the state with the <details> element
  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.open = isOpen;
    }
  }, [isOpen]);

  // Effect to add and clean up the event listener
  useEffect(() => {
    const detailsElement = detailsRef.current;

    const handleToggle = () => {
      console.log(`Details toggled. Current state: ${detailsElement.open}`);
      setIsOpen(detailsElement.open); // Sync state with details element
    };

    if (detailsElement) {
      detailsElement.addEventListener("toggle", handleToggle);
    }

    // Clean up the event listener on unmount
    return () => {
      if (detailsElement) {
        detailsElement.removeEventListener("toggle", handleToggle);
      }
    };
  }, []);

  return (
    <div className="navbar bg-base-300 w-full fixed z-10">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="mx-2 flex-1 px-2">
        <a
          href="#"
          className="btn btn-ghost no-animation text-xl hover:bg-transparent "
        >
          Patrick's Website
        </a>
      </div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}

          <li>
            <details ref={detailsRef}>
              <summary>Sections</summary>
              <ul>
                <li>
                  <a href="#about_section" onClick={toggleDetails}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#skill_section" onClick={toggleDetails}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#background_section" onClick={toggleDetails}>
                    Background
                  </a>
                </li>
                <li>
                  <a href="#portfolio_section" onClick={toggleDetails}>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#services_section" onClick={toggleDetails}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact_section" onClick={toggleDetails}>
                    Contacts
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a className="btn-disabled opacity-40" >Projects</a>
          </li>
          <li>
            <a className="btn-disabled opacity-40" >Blogs</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
