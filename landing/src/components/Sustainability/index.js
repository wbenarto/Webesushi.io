import React from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
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

const Sustainability = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <Icon to="/">WebeSushi</Icon>
      <InfoContainer lightBg={lightBg}>
        <Heading lightText="true">Sustainabilty page</Heading>
        <Subtitle> Helloooo </Subtitle>
        <h1>Hello</h1>
        <Icon to="/">WebeSushi</Icon>
      </InfoContainer>
    </>
  );
};

export default Sustainability;
