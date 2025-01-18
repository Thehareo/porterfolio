import React, { useEffect } from 'react';
import KUTE from 'kute.js';

function Wave() {
  useEffect(() => {
    // Wait for the DOM to be ready
    const fromPath = document.querySelector('#fromPath');
    const toPath = document.querySelector('#toPath');
    
    
    toPath.style.display = 'none';
    
    
    const morph = KUTE.fromTo(
      "#fromPath", 
      { path: "#fromPath" }, 
      { path: "#toPath" }, 
      {
        duration: 2000, 
        repeat: Infinity, 
        yoyo: true
      }
    );

    
    morph.start();
  }, []);

  return (
    <div id='wave-cont'>
      <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          id="fromPath"
          fill="#0099ff"
          d="M0,192L60,202.7C120,213,240,235,360,202.7C480,171,600,85,720,42.7C840,0,960,0,1080,10.7C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
      <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ display: 'none' }}>
        <path
          id="toPath"
          fill="#0099ff"
          d="M0,64L48,74.7C96,85,192,107,288,149.3C384,192,480,256,576,266.7C672,277,768,235,864,197.3C960,160,1056,128,1152,101.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <div id='footer'></div>
    </div>
   
  );
}

export default Wave;
