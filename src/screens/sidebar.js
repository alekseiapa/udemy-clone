import React, { useState } from "react";
import logo from "../ui/logo-udemy.svg";

function Sidebar() {
  const [nav, setNav] = useState([
    {
      label: "Home",
      slug: "/",
      icon: "icon-home",
    },
    {
      label: "Dicsover",
      slug: "discover",
      icon: "icon-list2",
    },
    {
      label: "Categories",
      slug: "categories",
      icon: "icon-price-tag",
    },
    {
      label: "My courses",
      slug: "courses",
      icon: "icon-briefcase",
    },
  ]);

  const [currentPage, setCurrentPage] = useState("/");

  var navigation = [];

  for (let i = 0; i < nav.length; i++) {
    navigation.push(
      <li key={"nav-" + i + "-" + nav[i].slug}>
        <a
          href={nav[i].slug}
          className={
            "link noul flex c333" + (currentPage === nav[i].slug ? " on" : "")
          }
        >
          <div className={"ico s20 " + nav[i].icon} />
          <h2 className="lbl s20">{nav[i].label}</h2>
        </a>
      </li>
    );
  }

  return (
    <div className="sidebar fixed">
      <a href="#" className="logo bl">
        <img src={logo} className="bl" />
      </a>
      <ul className="nav">{navigation}</ul>
    </div>
  );
}

export default Sidebar;
