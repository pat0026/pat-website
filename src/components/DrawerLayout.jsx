import React, { useState, useRef, useEffect } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

function DrawerLayout({ children }) {
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
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <Navbar />
          {/* Page content here */}
          {children}
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

export default DrawerLayout;
