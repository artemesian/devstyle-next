"use client";
import React, { useEffect, useRef } from "react";

function ComingSoon() {
  const vidRef = useRef();
  useEffect(() => {
    window.testA = vidRef.current;
    vidRef.current.muted = false;
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#220f00",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <title> Coming Soon | Wait For It</title>
      <video autoPlay controls loop width={"90%"} muted ref={vidRef}>
        <source
          src={"/assets/videos/_DevStyle Coming Back.mp4"}
          type="video/mp4"
        />
      </video>
      <div
        style={{
          position: "absolute",
          bottom: 100,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <a
          style={{
            border: "2px solid #A9EFF2",
            borderRadius: "50%",
            height: "38px",
            width: "38px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "7px",
          }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/_devstyle"
        >
          <img src={"/assets/icons/twitter-white.png"} alt="twitter icon" />
        </a>
        &nbsp; &nbsp;
        <a
          style={{
            border: "2px solid #A9EFF2",
            borderRadius: "50%",
            height: "38px",
            width: "38px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "7px",
          }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/devstyle"
        >
          <img src={"/assets/icons/linkedin-white.png"} alt="linkedin icon" />
        </a>
        &nbsp; &nbsp;
        <a
          style={{
            border: "2px solid #A9EFF2",
            borderRadius: "50%",
            height: "38px",
            width: "38px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "7px",
          }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send/?phone=695151114&text=Hello _DevStyle"
        >
          <img src={"/assets/icons/whatsapp-white.png"} alt="whatsapp icon" />
        </a>
        &nbsp; &nbsp;
        <a
          style={{
            border: "2px solid #A9EFF2",
            borderRadius: "50%",
            height: "38px",
            width: "38px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "7px",
          }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/devstyl"
        >
          <img src={"/assets/icons/facebook-white.png"} alt="facebook icon" />
        </a>
        &nbsp; &nbsp;
        <a
          style={{
            border: "2px solid #A9EFF2",
            borderRadius: "50%",
            height: "38px",
            width: "38px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "7px",
          }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tiktok.com/@_devstyle"
        >
          <img src={"/assets/icons/tiktok-white.png"} alt="tiktok icon" />
        </a>
        &nbsp; &nbsp;
        <a
          style={{
            border: "2px solid #A9EFF2",
            borderRadius: "50%",
            height: "38px",
            width: "38px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "7px",
          }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/_devstyle/"
        >
          <img src={"/assets/icons/insta-white.png"} alt="insta icon" />
        </a>
      </div>
    </div>
  );
}

export default ComingSoon;
