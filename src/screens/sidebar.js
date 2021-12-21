import React from "react";
import logo from "../ui/logo-udemy.svg";

function Sidebar() {
  return (
    <div className="sidebar fixed">
      <a href="#" className="logo bl">
        <img src={logo} className="bl" />
      </a>

      <ul className="nav">
        <li>
          <a href="#">
            <div className="ico icon-home" />
            <h2 className="lbl">Home</h2>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
