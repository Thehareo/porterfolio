import React, { useState, useEffect, useRef } from "react";
import screenshot1 from "../assets/screenshot1.png";
import video1 from "../assets/hero.mp4";
import screenshot2 from "../assets/screenshot2.png";
import video2 from "../assets/vid2.mp4";

function Projects({ animateOut, animateIn }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseEnter = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const movementStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%) translate(${-mousePosition.x / 25}px, ${-mousePosition.y / 25}px)`,
  };

  return (
    <div
      id="proj-cont"
      style={movementStyle}
      className={`${animateOut ? "animate-out" : ""} ${animateIn ? "animate-in" : ""}`}
    >
      
      
          <div
            id="proj1"
            className={`${animateOut ? "animate-out" : ""} ${animateIn ? "animate-in" : ""}`}
            onMouseEnter={() => handleMouseEnter(videoRef1)}
            onMouseLeave={() => handleMouseLeave(videoRef1)}
          >
            <img src={screenshot1} alt="heroeshub" />
            <video ref={videoRef1} src={video1} type="video/mp4" poster={screenshot1} muted loop>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        
        
      

      <div
        id="proj2"
        className={`${animateOut ? "animate-out" : ""} ${animateIn ? "animate-in" : ""}`}
        onMouseEnter={() => handleMouseEnter(videoRef2)}
        onMouseLeave={() => handleMouseLeave(videoRef2)}
      >
        <img src={screenshot2} alt="keeper" />
        <video ref={videoRef2} src={video2} type="video/mp4" poster={screenshot2} muted loop>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    
    </div>
  );
}

export default Projects;