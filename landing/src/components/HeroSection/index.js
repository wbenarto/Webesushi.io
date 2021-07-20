import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroProfileImage,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";
import { InfoBtnLink } from "../InfoSection/InfoElements";
import { ButtonHero } from "../ButtonElement";
import Video from "../../videos/video.mp4";
import torch from "../../images/torch.jpg";
import { FaRProject } from "react-icons/fa";

const HeroSection = () => {
  const [offset, setOffset] = useState(0);
  const [text, setText] = useState("BETTER");
  const [intervalId, setIntervalId] = useState(0);

  const handleScroll = () => {
    setOffset(window.pageYOffset);
  };

  let texts = ["Sushi", "Better"];

  const playText = (text) => {
    if (text == "BETTER") {
      setText("Sushi");
    } else setText("Better");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   let intervalId = setInterval(() => playText(text), 300000);
  //   setIntervalId(intervalId);
  // }, [intervalId]);
  return (
    <HeroContainer>
      {/* <HeroBg>
        <VideoBg offset={offset} autoPlay loop muted src={torch}></VideoBg>
      </HeroBg> */}
      <HeroProfileImage src={torch} />
      <HeroContent>
        <HeroH1> WE BE {text} </HeroH1>
        <HeroH1></HeroH1>
        <HeroP></HeroP>
        <HeroBtnWrapper>
          {/* <ButtonHero
            to="home-makase"
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offset={0}
          >
            Get Started
          </ButtonHero> */}
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
          <InfoBtnLink
            to="/sustainability"
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offset={0}
          >
            Sustainability
          </InfoBtnLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
