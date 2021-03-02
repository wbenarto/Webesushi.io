import React, { useState } from "react";
import { Button } from "../ButtonElement";
import { Carousel } from "antd";
import { sushi } from "./Data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import {
  InfoCarouselContainer,
  InfoWrapperCarousel,
  InfoRowCarousel,
  Column1,
  TextWrapper,
  TopLine,
  ImgWrap,
  Img,
  CarouselHeading,
  CarouselSubtitle,
  BtnWrap,
  ColumnCarousel2,
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

  setTimeout(nextSlide, 3000);
  console.log(cur);
  console.log(sushi[cur].name);
  return (
    <>
      <InfoCarouselContainer lightBg={lightBg} id={id}>
        <InfoWrapperCarousel>
          <InfoRowCarousel imgStart={false}>
            <IconWrapperLeft onClick={prevSlide}>
              <FaArrowAltCircleLeft />
            </IconWrapperLeft>
            <Column1>
              <TextWrapper>
                {/* <TopLine>{topLine}</TopLine> */}
                <CarouselHeading lightText={lightText}>
                  {sushi[cur].name}
                </CarouselHeading>
                <CarouselSubtitle darkText={darkText}>
                  {sushi[cur].desc}
                </CarouselSubtitle>
                {/* <BtnWrap>
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
                </BtnWrap> */}
              </TextWrapper>
            </Column1>

            <ColumnCarousel2>
              <ImgWrapCarousel>
                <img src={sushi[cur].images}></img>
                {/* {sushi.map((image, index) => (
                  <div>
                    <img
                      key={index}
                      style={{
                        width: "320px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                      src={image.images}
                      alt="sushi"
                    ></img>
                  </div>
                ))} */}
              </ImgWrapCarousel>

              <ImgWrapCarousel>
                {/* {sushi.map((e, i) => {
                  console.log(e);
                  return (
                    <div className={i === cur ? "slide active" : "slide"}>
                      {i === cur && <ImgCarousel src={e.images} alt={e.name} />}
                    </div>
                  );
                })} */}
                {/* 
                <ImgCarousel src={images} alt={alt} /> */}
              </ImgWrapCarousel>
            </ColumnCarousel2>
            <IconWrapperRight onClick={nextSlide}>
              <FaArrowAltCircleRight />
            </IconWrapperRight>
          </InfoRowCarousel>
        </InfoWrapperCarousel>
      </InfoCarouselContainer>
    </>
  );
};

export default InfoCarousel;
