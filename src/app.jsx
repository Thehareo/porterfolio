import React, { useState, useEffect } from "react";
import Header from "./components/header.jsx";
import Wave from "./components/wave.jsx";
import "./styles/home.css";
import Footer from "./components/footer.jsx";
import Image from "./components/img.jsx";
import Scroller from "./components/scroller.jsx";
import Projects from "./components/projects.jsx";
import Contacts from "./components/contacts.jsx";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState("home");
  const [animateOut, setAnimateOut] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const handleComponentChange = (newComponent) => {
    if (newComponent !== currentComponent) {
      setAnimateOut(true); 
      setTimeout(() => {
        setCurrentComponent(newComponent); 
        setAnimateOut(false); 
        setAnimateIn(true); 
      }, 2000); 
    }
  };

  useEffect(() => {
    if (animateIn) {
      const timer = setTimeout(() => {
        setAnimateIn(false); 
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [animateIn]);

  return (
    <div>
      <Wave />
      <Header onComponentChange={handleComponentChange} 
      animateOut = {animateOut} animateIn = {animateIn}/>
      <div className="component-Container">
        {currentComponent === "home" && (
          <Image animateOut={animateOut} animateIn={animateIn} />
        )}
        {currentComponent === "projects" && (
          <Projects animateOut={animateOut} animateIn={animateIn} />
        )}
        {currentComponent === "contact" && (
         <Contacts animateOut = {animateOut} animateIn = {animateIn} />
        )}
      </div>
      <Scroller />
      <Footer />
    </div>
  );
};

export default App;
