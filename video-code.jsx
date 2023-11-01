import React, { useState, useEffect } from 'react';
import './SplashPage.css';

export default function Splash() {
  const [videoPlay, setVideoPlay] = useState(false);
  const [animationsStarted, setAnimationsStarted] = useState(false);

  useEffect(() => {
    const playVideo = () => {
      const video = document.getElementById('background-video');
      if (video) {
        video.play();
        setTimeout(() => {
          video.pause();
          setVideoPlay(false);
        }, 2000);
      }
    };

    // Add an event listener to start the video 5 seconds after the page loads
    const timeout = setTimeout(() => {
      setVideoPlay(true);
      playVideo();
    }, 5000);

    // Start animations at 9 seconds
    setTimeout(() => {
      setAnimationsStarted(true);
    }, 9000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="splash-body center">
      {videoPlay && (
        <video id="background-video" autoPlay muted>
          <source src="Lightning-Splash1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className={`splash-title-container ${animationsStarted ? 'text-visible' : ''}`}>
        <span className="splash-kappa">Are you ready to meet</span>
        <span className="splash-beta">???</span>
      </div>
    </div>
  );
}
