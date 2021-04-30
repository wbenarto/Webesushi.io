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
} from "./SustainabilityElements";
import { FaChevronLeft, FaHome, FaStore, FaTape } from "react-icons/fa";

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
          {data.map((e) => (
            <CardWrapper rec={e.recommendation}>
              <h1>{e.species}</h1>
              <p>Also known as : {e.alias}</p>
              <p>Region: {e.region}</p>
              <p>Method: {e.method}</p>
              <h2>{e.recommendation}</h2>
            </CardWrapper>
          ))}
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
