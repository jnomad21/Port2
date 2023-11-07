import './SplashPage.css';
import React, { useState, useEffect } from 'react';

export default function Splash() {
  const [showVideo, setShowVideo] = useState(false);
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const videoTimeout = setTimeout(() => {
      setShowVideo(true);
    }, 3000);
    const elementsTimeout = setTimeout(() => {
      setShowElements(true);
    }, 4500);

    return () => {
      clearTimeout(videoTimeout);
      clearTimeout(elementsTimeout);
    };
  }, []);

  return (
    <body className="splash-body center">
      {showVideo && (
        <video id="background-video" autoPlay muted>
          <source src="Lightning-Splash1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="splash-title-container">
        <span className={`splash-kappa ${showElements ? 'visible' : 'hidden'}`}>
          Engineer
        </span>
        &nbsp;Jason McGrath&nbsp;
        <span className={`splash-beta ${showElements ? 'visible' : 'hidden'}`}>
          Solutionist
        </span>
      </div>
    </body>
  );
}

