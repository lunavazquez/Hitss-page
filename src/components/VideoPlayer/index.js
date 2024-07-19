import React from "react";
import "./index.css";

export default function VideoPlayer() {
  return (
    <div>
      <div className="video-content">
        <iframe
          width="640"
          height="350"
          src="https://www.youtube.com/embed/geYr0-Mlm-k?si=B7eUnvzZuC9uL66J"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
