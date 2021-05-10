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
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          style={{ transform: `translateY(${offsetY * 1}px)` }}
          autoPlay
          loop
          muted
          src={Video}
        ></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1 style={{ transform: `translateY(${offsetY * 0.4}px)` }}>
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
            style={{ transform: `translateY(${offsetY * -0.2}px)` }}
          >
            Get Started
          </ButtonHero>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
