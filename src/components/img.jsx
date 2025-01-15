import React from "react";
import reactDOM from "react-dom/client";

function Image({animateOut, animateIn}) {
 return (<><div id="img-cont" className={`${animateOut ? "animate-out" : ""} ${
   animateIn ? "animate-in" : ""
 }`}><div id="img">

    

 </div>
 <div id="introdiv">  <p id="intro">Hi, I'm Haris! 
    I'm a passionate web developer with expertise in building modern, user-friendly websites and web applications. I specialize in front-end technologies like React, HTML, CSS, and JavaScript. Additionally, I have experience with back-end development using Node.js and PostgreSQL, allowing me to create full-stack solutions.
 Whether it's crafting dynamic user interfaces or developing robust back-end systems, I enjoy bringing ideas to life on the web. Take a look at my work, and feel free to reach out for any opportunities or collaborations!</p></div></div>
 </>)
}
export default Image