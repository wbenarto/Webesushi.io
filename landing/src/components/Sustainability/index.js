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
  Solution,
  SushiSeafood,
  SeafoodFilter,
  SeafoodDisplay,
  FilterButton,
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

import seafoodData from "../../data/seafoodData";

const Sustainability = () => {
  const [data, setData] = useState([]);
  const [hero, setHero] = useState("seafood");
  const [active, setActive] = useState("seafood");

  // Paralax
  const [offset, setOffset] = useState(0);
  const handleScroll = () => setOffset(window.pageYOffset);

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
      .from(fish1, 1.5, { x: -500, opacity: 0.1, ease: Power3.easeIn }, 0.3)
      .from(fish2, 1.5, { x: 650, opacity: 0.1, ease: Power3.easeIn }, 0.8);

    console.log(app, fish1, fish2);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    setData(seafoodData);
  }, []);

  const handleHero = (event) => {
    setHero(event.target.value);
  };

  const handleFilter = (filter) => {
    setData(seafoodData.filter((e) => e.recommendation == filter));
  };

  const handleSeafood = (filter) => {
    setData(seafoodData.filter((e) => e.species == filter));
  };

  const sustainableSolutions = [
    "Avoid Overfishing",
    "Limit Bycatch",
    "Manage Pollution & Disease",
    "Preserve Habitats",
    "Protect Endangered Species",
  ];

  return (
    <>
      <InfoContainer>
        <HeroImg num={1} src={wave} />

        <AppNav>
          <AppNavLogo to="/">
            <FaChevronLeft />
          </AppNavLogo>
          <AppHeading>SUSTAINABILITY</AppHeading>
        </AppNav>

        <InfoWrapper>
          <Heading>Sushi and Seafood Sustainability</Heading>
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
                <InfoCanvas props={1}>
                  {" "}
                  <HeroImg src={market}></HeroImg>
                </InfoCanvas>
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
                <InfoCanvas>
                  {sustainableSolutions.map((e, i) => {
                    return (
                      <Solution>
                        {i + 1}. {e}
                      </Solution>
                    );
                  })}
                </InfoCanvas>
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

          <SushiSeafood>
            <Heading>Seafood Filter</Heading>
            <SeafoodFilter>
              <FilterButton onClick={() => handleFilter("Best Choice")}>
                Recommended
              </FilterButton>
              <FilterButton onClick={() => handleFilter("Avoid")}>
                Avoid
              </FilterButton>

              <FilterButton onClick={() => handleSeafood("Salmon")}>
                Salmon
              </FilterButton>
              <FilterButton onClick={() => handleSeafood("Tuna")}>
                Tuna
              </FilterButton>

              <FilterButton onClick={() => handleSeafood("Amberjack")}>
                Amberjack
              </FilterButton>
              <FilterButton onClick={() => handleSeafood("Mackerel")}>
                Mackerel
              </FilterButton>
              <FilterButton onClick={() => handleSeafood("Albacore")}>
                Albacore
              </FilterButton>
              <FilterButton onClick={() => handleSeafood("Urchin")}>
                Sea Urchin
              </FilterButton>
              <FilterButton onClick={() => handleSeafood("Octopus")}>
                Octopus
              </FilterButton>
              <FilterButton onClick={() => handleSeafood("Lobster")}>
                Lobster
              </FilterButton>
              <FilterButton onClick={() => handleSeafood("Urchin")}>
                Sea Urchin
              </FilterButton>
            </SeafoodFilter>
            <SeafoodDisplay>
              {data.map((e) => (
                <CardWrapper key={e.id} rec={e.recommendation}>
                  <ImgWrap>
                    <Img src={e.img} alt="fish"></Img>
                  </ImgWrap>
                  <TextWrapper>
                    <Heading>{e.title}</Heading>
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
            </SeafoodDisplay>
          </SushiSeafood>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Sustainability;
