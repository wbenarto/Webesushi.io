import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { TweenMax, Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const sections = [
  { title: "Title 1", subtitle: "$15" },
  {
    title: "Salmon Tataki",
    subtitle: "$34",
  },
  {
    title: "Tuna Nigiri",
    subtitle: "$25",
  },
];

const Intro = () => {
  const [bg, setBg] = useState(" #6890df");

  const toggleBackground = () => {
    const color = bg !== " #6890df" ? " #6890df" : "#1b4943";
    setBg(color);
  };

  const headerRef = useRef(null);
  let logoItem = useRef(null);
  let h1 = useRef(null);
  let blue = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];
  const addToRefs = (e) => {
    if (e && !revealRefs.current.includes(e)) {
      revealRefs.current.push(e);
    }
    console.log(revealRefs.current);
  };

  useEffect(() => {
    gsap.to(headerRef.current, {
      duration: 2,
      backgroundColor: bg,
      x: "-300px",
      ease: "easeOut",
      height: "100%",
    });
  }, [bg]);

  useEffect(() => {
    console.log(logoItem);

    gsap.from(h1.current, {
      x: "-600px",
      duration: 2,
      autoAlpha: 0,
      ease: "easeIn",
      height: "100%",
      delay: 1,
    });

    gsap.from(blue.current, {
      x: "600px",
      duration: 2,
      autoAlpha: 0,
      ease: "easeOut",
      delay: 1,
    });

    revealRefs.current.forEach((e, i) => {
      gsap.fromTo(
        e,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `App-section-${i + 1}`,
            trigger: e,
            start: "top center+=100",
            toggleActions: "play none none reverse",
            markers: true,
          },
        }
      );
    });
  }, []);
  console.log(logoItem);

  return (
    <div className="intro">
      <div ref={headerRef} className="hero">
        <h1 ref={h1}>The New Golden Salmon Tataki</h1>
        <button onClick={toggleBackground}>Toggle Bg-color</button>
      </div>
      <div ref={blue} className="trigger"></div>
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
      {sections.map(({ title, subtitle }) => {
        return (
          <div key={title} className="App-section" ref={addToRefs}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        );
      })}
      {/* <video alt="Test Video" src="/test.mp4" type="video/mp4"></video> */}
    </div>
  );
};

export default Intro;
