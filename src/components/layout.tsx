"use client";

import React, { useState } from "react";

import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen((prevState) => !prevState);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <div>
      <div className="drawer">
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
          checked={isSidebarOpen}
          onChange={toggleSidebar}
        />
        <div className="drawer-content flex flex-col min-h-screen">
          <Navbar />
          <div className="pt-16 flex-1">{children}</div>
          <Footer />
        </div>
        <div className="drawer-side z-20">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <Sidebar closeSidebar={closeSidebar} />
        </div>
      </div>
    </div>
  );
}
