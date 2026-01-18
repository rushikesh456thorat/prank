import React, { useEffect, useRef } from "react";
import cat from "../assets/cat.mp4";

function Prank() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 1; // 🔊 max volume
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="prank-container">
      <video
        ref={videoRef}
        src={cat}
        autoPlay
        loop             
        playsInline
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className="prank-video"
      />
    </div>
  );
}

export default Prank;
