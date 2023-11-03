import React, { useState } from "react";
import logo from "./VA1.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [menuClass, setMenuClass] = useState("hbmenu hidden");
  const [hbbar, setHbbar] = useState("bar unclicked");

  const updateMenu = () => {
    if (!menuClicked) {
      setHbbar("bar clicked");
      setMenuClass("hbmenu visible");
    } else {
      setHbbar("bar unclicked");
      setMenuClass("hbmenu hidden");
    }
    setMenuClicked(!menuClicked)
  };

  const scrollToComponent = (id, offset = 0) => {
    const element = document.getElementById(id);

    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="navbar-cont">
      <div className="navbar">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => scrollToComponent("Home", 100)}
        />
        <div className="menu">
          <a
            className="menuitems"
            onMouseOver={() => scrollToComponent("Home", 100)}
          >
            Home
          </a>
          <a
            className="menuitems"
            onMouseOver={() => scrollToComponent("About", 50)}
          >
            About
          </a>
          <a
            className="menuitems"
            onMouseOver={() => scrollToComponent("Projects", 50)}
          >
            Projects
          </a>
          <a
            className="menuitems"
            onMouseOver={() => scrollToComponent("Certify", 50)}
          >
            Certifications
          </a>
        </div>
        <button className="btn" onClick={() => scrollToComponent("Contact")}>
          Contact Me
        </button>
        <nav className="hb-menu" onClick={updateMenu}>
          <div className={hbbar}></div>
          <div className={hbbar}></div>
          <div className={hbbar}></div>
        </nav>
      </div>
      <div className={menuClass}>
          <a
            className="menuitems"
            onMouseOver={() => scrollToComponent("Home", 100)}
          >
            Home
          </a>
          <a
            className="menuitems"
            onMouseOver={() => scrollToComponent("About", 50)}
          >
            About
          </a>
          <a
            className="menuitems"
            onMouseOver={() => scrollToComponent("Projects", 50)}
          >
            Projects
          </a>
          <a
            className="menuitems"
            onMouseOver={() => scrollToComponent("Certify", 50)}
          >
            Certifications
          </a>
          <a
            className="menuitems"
            onMouseOver={() => scrollToComponent("Contact")}
          >
            Contact Me
          </a>
        </div>
    </div>
  );
};

export default Navbar;
