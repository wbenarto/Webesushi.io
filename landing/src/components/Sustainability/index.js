import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../ButtonElement";
import {
  AppNav,
  AppNavLogo,
  AppHeading,
} from "../Homemakase/HomemakaseElements";
import {
  InfoContainer,
  InfoWrapper,
  SushiSeafood,
  CardWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  Icon,
  Reason,
} from "./SustainabilityElements";
import {
  FaChevronLeft,
  FaHome,
  FaStore,
  FaTape,
  FaExclamationTriangle,
} from "react-icons/fa";

import seafoodData from "../../data2/seafoodData";

const Sustainability = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData(seafoodData);
  }, []);

  return (
    <>
      <InfoContainer>
        <AppNav>
          <AppNavLogo to="/">
            <FaChevronLeft />
          </AppNavLogo>
          <AppHeading>SUSTAINABILITY</AppHeading>
        </AppNav>

        <InfoWrapper>
          <Heading>What is Sustainable Seafood?</Heading>
          <h2>
            Environmentally sustainable seafood is wild or farmed seafood that
            is harvested in ways that don’t harm the environment or other
            wildlife — helping to ensure healthy and resilient ocean ecosystems.
          </h2>
          <Heading>
            How we can make seafood more enviromentally sustainable?
          </Heading>

          <h2>Avoid Overfishing and Limit Bycatch</h2>

          <h2>Preserve Habitats</h2>
          <h2>Manage Pollution and Disease</h2>

          <Heading>What can we do as sushi consumer?</Heading>
          <h2>
            We can help by consuming sushi with ingredients that are
            environmentally sustainable, plentiful in population, and following
            safe farming practices. Webesushi vows to avoid consuming seafood
            that are fished with methods that can cause overfishing and bycatch,
            also avoid species that are endangered.
          </h2>
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

      {/* <Icon to="/">WebeSushi</Icon>
      <InfoContainer lightBg={lightBg}>
        <Heading lightText="true">Sustainabilty page</Heading>
        <Subtitle> Helloooo </Subtitle>
        <h1>Hello</h1>
        <Icon to="/">WebeSushi </Icon>
        {loading ? <h1>{data}</h1> : <h1>LOADINGGGGGG</h1>}

      </InfoContainer> */}
    </>
  );
};

export default Sustainability;
