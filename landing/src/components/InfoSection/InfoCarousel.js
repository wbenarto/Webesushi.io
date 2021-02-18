import React, { useState } from "react";
import { Button } from "../ButtonElement";
import { sushi } from "./Data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

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
  ImgWrapCarousel,
  ImgCarousel,
  InfoBtnLink,
  IconWrapperLeft,
  IconWrapperRight,
} from "./InfoElements";

const InfoCarousel = ({
  lightBg,
  id,
  page,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  images,
  alt,
  primary,
  dark,
  dark2,
}) => {
  const [cur, setCur] = useState(0);
  const length = sushi.length;
  const prevSlide = () => {
    setCur(cur === 0 ? length - 1 : cur - 1);

    console.log("prev clicked");
  };

  const nextSlide = () => {
    setCur(cur === length - 1 ? 0 : cur + 1);
    console.log("next clicked");
  };
  console.log(cur);
  console.log(sushi[cur].name);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{sushi[cur].name}</Heading>
                <Subtitle darkText={darkText}>{sushi[cur].desc}</Subtitle>
                <BtnWrap>
                  <InfoBtnLink
                    to={page}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </InfoBtnLink>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapCarousel>
                <IconWrapperLeft onClick={prevSlide}>
                  <FaArrowAltCircleLeft />
                </IconWrapperLeft>
                {sushi.map((e, i) => {
                  //   console.log(e);
                  return (
                    <div className={i === cur ? "slide active" : "slide"}>
                      {i === cur && <ImgCarousel src={e.images} alt={e.name} />}
                    </div>
                  );
                })}
                {/* <ImgCarousel src={images} alt={alt} /> */}
                <IconWrapperRight onClick={nextSlide}>
                  <FaArrowAltCircleRight />
                </IconWrapperRight>
              </ImgWrapCarousel>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoCarousel;
