import React, { useState, useEffect } from "react";

const Header = ({ onComponentChange, animateOut, animateIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleButtonClick = (component) => {
    onComponentChange(component);
    if (isMobile) setIsMenuOpen(false); // Close menu in mobile view after selection

  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false); // Close menu if switching to desktop view
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isDisabled = animateOut || animateIn;

  return (
    <div id="header">
      <p id="name">Haris</p>
      {isMobile ? (
        <>
          <div
            className={`burger-container ${isMenuOpen ? "hidden" : ""}`}
            onClick={toggleMenu}
          >
            <span className="burger"></span>
            <span className="burger"></span>
            <span className="burger"></span>
          </div>
          <div className={`menu slide-in ${isMenuOpen ? "open" : ""}`}>
            <p
              id="home"
              onClick={() => handleButtonClick("home")}
              className={`${isDisabled ? "disabled" : ""}`}
              style={{ pointerEvents: isDisabled ? "none" : "auto" }}
            >
              Home
            </p>
            <p
              id="project"
              onClick={() => handleButtonClick("projects")}
              className={`${isDisabled ? "disabled" : ""}`}
              style={{ pointerEvents: isDisabled ? "none" : "auto" }}
            >
              Projects
            </p>
            <p
              id="contact"
              onClick={() => handleButtonClick("contact")}
              className={`${isDisabled ? "disabled" : ""}`}
              style={{ pointerEvents: isDisabled ? "none" : "auto" }}
            >
              Contact
            </p>
          </div>
        </>
      ) : (
        <div className="desktop-menu">
          <p
            id="home"
            onClick={() => handleButtonClick("home")}
            className={`${isDisabled ? "disabled" : ""}`}
            style={{ pointerEvents: isDisabled ? "none" : "auto" }}
          >
            Home
          </p>
          <p
            id="project"
            onClick={() => handleButtonClick("projects")}
            className={`${isDisabled ? "disabled" : ""}`}
            style={{ pointerEvents: isDisabled ? "none" : "auto" }}
          >
            Projects
          </p>
          <p
            id="contact"
            onClick={() => handleButtonClick("contact")}
            className={`${isDisabled ? "disabled" : ""}`}
            style={{ pointerEvents: isDisabled ? "none" : "auto" }}
          >
            Contact
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
