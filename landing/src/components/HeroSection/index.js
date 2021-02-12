import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg type="video/mp4" autoPlay loop muted src={Video}></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to WeBe Sushi</HeroH1>
        <HeroP>
          Here I'll share some of my favorite sushi recipes and knowledge about
          consuming sushi sustainably.
        </HeroP>
        <Button>Whats This</Button>
      </HeroContent>
      {/* <HeroBtnWrapper></HeroBtnWrapper> */}
    </HeroContainer>
  );
};

export default HeroSection;
