import React, { useState } from "react";



const Header = ({ onComponentChange , animateOut, animateIn }) => {
  const [activeComponent, setActiveComponent] = useState("home");
  const handleButtonClick = (component) => {
    setActiveComponent(component);
    onComponentChange(component);
    
  };
const isDisabled = animateOut || animateIn;
return (
  <div id="header">
    <p id="name">Haris</p>
    <p
      id="home"
      onClick={() => handleButtonClick("home")}
      className={`${activeComponent === "home" ? "active" : ""} ${isDisabled ? "disabled" : ""}`}
      style={{ pointerEvents: isDisabled ? "none" : "auto" }}
    >
      Home
    </p>
    <p
      id="project"
      onClick={() => handleButtonClick("projects")}
      className={`${activeComponent === "projects" ? "active" : ""} ${isDisabled ? "disabled" : ""}`}
      style={{ pointerEvents: isDisabled ? "none" : "auto" }}
    >
      Projects
    </p>
    <p
      id="contact"
      onClick={() => handleButtonClick("contact")}
      className={`${activeComponent === "contact" ? "active" : ""} ${isDisabled ? "disabled" : ""}`}
      style={{ pointerEvents: isDisabled ? "none" : "auto" }}
    >
      Contact
    </p>
  </div>
);
};

export default Header;
