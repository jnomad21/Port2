import './SplashPage.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Splash() {
  const [showVideo, setShowVideo] = useState(false);
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const videoTimeout = setTimeout(() => {
      setShowVideo(true);
    }, 3000);
    const elementsTimeout = setTimeout(() => {
      setShowElements(true);
    }, 4800);

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
          Engineer&nbsp;&#183;
        </span>
        &nbsp;Jason McGrath&nbsp;
        <span className={`splash-beta ${showElements ? 'visible' : 'hidden'}`}>
          &#183;&nbsp;Solutionist
        </span>
        <Link to="/app"><button className={`enter-button ${showElements ? 'visible' : 'hidden'}`}>Enter</button></Link>
      </div>
    </body>
  );
}

