"use client";
import React, { useEffect } from "react";

const IntroVideo = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs").WOW; // ← درست
      new WOW({ live: false }).init(); // ← فقط WOW، نه WOW.WOW
    }
  }, []);

  return (
    <div className="intro-video">
      <div className="container-fluid">
        <div className="ow max-lg:block!">
          <div className="col-lg-12">
            <div className="intro-video-box">
              <div className="intro-bg-video">
                <video autoPlay muted loop id="myVideo">
                  <source
                    src="https://demo.awaikenthemes.com/assets/videos/spicyhunt-intro-bg-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="video-play-button">
                <a href="/" className="popup-video">
                  play
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;
