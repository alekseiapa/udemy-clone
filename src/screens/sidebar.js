import React from "react";
import logo from "../ui/logo-udemy.svg";

function Sidebar() {
  return (
    <div className="sidebar fixed">
      <a href="#" className="logo bl">
        <img src={logo} className="bl" />
      </a>
    </div>
  );
}

export default Sidebar;
