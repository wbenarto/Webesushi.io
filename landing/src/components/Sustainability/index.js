import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { TweenMax, TimelineLite, Power3 } from "gsap";

import {
  AppNav,
  AppNavLogo,
  AppHeading,
} from "../Homemakase/HomemakaseElements";
import {
  InfoContainer,
  InfoWrapper,
  SustainableControl,
  SushiSeafood,
  CardWrapper,
  TextWrapper,
  TopLine,
  HeroImg,
  InfoHeroSection,
  HeroSlider,
  Heading,
  Subtitle,
  InfoCanvas,
  InfoHeading,
  InfoSub,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  Icon,
  Reason,
} from "./SustainabilityElements";

import { FaChevronLeft, FaExclamationTriangle } from "react-icons/fa";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import market from "../../images/market.jpg";
import wave from "../../images/wave.jpg";
import fishing from "../../images/fishing.jpeg";
import fishes from "../../images/fishes.jpg";

import seafoodData from "../../data2/seafoodData";

const Sustainability = () => {
  const [data, setData] = useState([]);

  const [hero, setHero] = useState("seafood");

  const [active, setActive] = useState("seafood");

  // Paralax
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // TweenMax
  let app = useRef(null);
  let canvasRef = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    const fish1 = canvasRef.current.children[0];
    const fish2 = canvasRef.current.children[1];

    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    tl.from(app, 2, { y: 1400, ease: Power3.easeOut })
      .from(
        app,
        1,
        {
          scale: 2,
          ease: Power3.easeOut,
        },
        0.2
      )
      .from(fish1, 1.5, { x: -500, ease: Power3.easeIn }, 0.1);

    // app.from(fish2, 1, { x: 800, ease: Power3.easeIn });

    console.log(app, fish1, fish2);
  }, []);

  useEffect(() => {
    setData(seafoodData);
  }, []);

  const handleHero = (event) => {
    setHero(event.target.value);
  };

  return (
    <>
      <InfoContainer>
        <HeroImg num={1} src={wave} />
        {/* <HeroImg src={fishing} /> */}
        {/* <HeroImg num={2} src={market} /> */}

        {/* <HeroImg num={3} src={fishes} /> */}
        <AppNav>
          <AppNavLogo to="/">
            <FaChevronLeft />
          </AppNavLogo>
          <AppHeading>SUSTAINABILITY</AppHeading>
        </AppNav>

        <InfoWrapper>
          <InfoHeroSection ref={(el) => (app = el)}>
            {active == "seafood" ? (
              <div ref={canvasRef}>
                <InfoHeading props={1}>
                  What is Sustainable Seafood?
                </InfoHeading>
                <InfoSub props={1}>
                  Environmentally sustainable seafood is wild or farmed seafood
                  that is harvested in ways that don’t harm the environment or
                  other wildlife — helping to ensure healthy and resilient ocean
                  ecosystems.
                </InfoSub>
                <InfoCanvas props={1}>hi</InfoCanvas>
              </div>
            ) : active == "solution" ? (
              <>
                <InfoHeading>
                  {" "}
                  How can we make seafood more enviromentally sustainable?
                </InfoHeading>
                <InfoSub>
                  We can help by consuming sushi with ingredients that are
                  environmentally sustainable, plentiful in population, and
                  following safe farming practices. Webesushi vows to avoid
                  consuming seafood that are fished with methods that can cause
                  overfishing and bycatch, also avoid species that are
                  endangered.
                </InfoSub>
                <InfoCanvas>hi</InfoCanvas>
              </>
            ) : (
              "seafood"
            )}

            <HeroSlider>
              <RadioGroup
                style={{ flexDirection: "row", fontSize: "32px" }}
                aria-label="Hero"
                value={hero}
                onChange={handleHero}
              >
                <FormControlLabel
                  value="seafood"
                  onClick={() => setActive("seafood")}
                  control={<Radio color="primary" />}
                  label="Sustainable Seafood"
                />
                <FormControlLabel
                  value="Solution"
                  onClick={() => setActive("solution")}
                  control={<Radio />}
                  label="Solution"
                />
              </RadioGroup>
            </HeroSlider>
          </InfoHeroSection>

          <br />
          <br />
          <br />
          <br />

          <SushiSeafood>
            {data.map((e) => (
              <CardWrapper key={e.id} rec={e.recommendation}>
                <ImgWrap>
                  <Img src={e.img} alt="fish"></Img>
                </ImgWrap>
                <TextWrapper>
                  <Heading>{e.species}</Heading>
                  <Subtitle>
                    <span>Also known as : </span>
                    {e.alias}
                  </Subtitle>
                  <Subtitle>
                    <span>Region : </span> {e.region}
                  </Subtitle>
                  <Subtitle>
                    <span>Method:</span> {e.method[0]}{" "}
                    {e.method[1] == "bad" ? <FaExclamationTriangle /> : ""}
                  </Subtitle>
                  <Subtitle>
                    <span>Population:</span> {e.population}{" "}
                    {e.population == "Endangered" ? (
                      <FaExclamationTriangle />
                    ) : (
                      ""
                    )}
                  </Subtitle>

                  <TopLine rec={e.recommendation}>{e.recommendation}</TopLine>
                  <Reason avoid={e.reason}>{e.reason}</Reason>
                </TextWrapper>
              </CardWrapper>
            ))}
          </SushiSeafood>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Sustainability;
