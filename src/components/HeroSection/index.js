import React, { useEffect, useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroProfileImage,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  InfoBtnLink,
} from "./HeroElements";
import { ButtonHero } from "../ButtonElement";
import Video from "../../videos/video.mp4";
import torch from "../../images/torch.jpg";

const HeroSection = () => {
  const [offset, setOffset] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const handleScroll = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeroContainer>
      <HeroProfileImage src={torch} />
      <HeroContent>
        <HeroH1>
          {" "}
          <b>
            WE BE
            <span> S</span>US<span>HI</span>
          </b>
        </HeroH1>
        <HeroH1></HeroH1>
        <HeroP></HeroP>
        <HeroBtnWrapper>
          <InfoBtnLink
            to="/homemakase"
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offset={0}
          >
            Homemakase
          </InfoBtnLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
