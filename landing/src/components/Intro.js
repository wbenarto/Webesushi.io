import React, { useRef, useEffect } from "react";
import { TweenMax, Power3, ScrollTrigger, gsap } from "gsap";

const Intro = () => {
  const headerRef = useRef(null);
  let logoItem = useRef(null);
  let h1 = useRef(null);
  useEffect(() => {
    console.log(logoItem);

    gsap.from(headerRef.current, {
      x: "-200px",
      duration: 1,
      autoAlpha: 0,
      ease: "easeIn",
      delay: 1,
    });
  }, []);
  console.log(logoItem);

  return (
    <div className="intro">
      <div ref={headerRef} className="hero">
        <h1 ref={h1}>The New Golden Salmon Tataki</h1>
      </div>
      <div className="trigger"></div>
      <iframe
        className="logoItem"
        ref={logoItem}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Z4TXCZG_NEY"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      {/* <video alt="Test Video" src="/test.mp4" type="video/mp4"></video> */}
    </div>
  );
};

export default Intro;
