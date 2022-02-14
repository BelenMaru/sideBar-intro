import React from "react";
import logo from "./logo.svg";

const Sidebar = () => {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding addict" />
      </div>
    </aside>
  );
};

export default Sidebar;
