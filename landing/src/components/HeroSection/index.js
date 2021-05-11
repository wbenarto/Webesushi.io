import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";
import { ButtonHero } from "../ButtonElement";
import Video from "../../videos/video.mp4";
import torch from "../../images/torch.jpg";
// const Video = lazy(() => import("../../videos/video.mp4"));

const HeroSection = () => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg offset={offset} autoPlay loop muted src={torch}></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1 style={{ transform: `translateX(${offset * 1}px)` }}>
          {" "}
          WE BE BETTER{" "}
        </HeroH1>
        <HeroH1></HeroH1>
        <HeroP></HeroP>
        <HeroBtnWrapper>
          <ButtonHero
            to="home-makase"
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offset={0}
            style={{ transform: `translateX(${offset * -2.5}px)` }}
          >
            Get Started
          </ButtonHero>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
