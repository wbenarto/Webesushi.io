import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ButtonElement";
import { sushi } from "./Data";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaPause,
  FaPlay,
  FaInfoCircle,
} from "react-icons/fa";
import CarouselItemInfo from "./CarouseltemInfo";
import {
  InfoCarouselContainer,
  InfoWrapperCarousel,
  InfoRowCarousel,
  ColumnCarousel1,
  TextWrapperCarousel,
  TopLine,
  ImgWrap,
  Img,
  CarouselHeading,
  CarouselSubtitle,
  CarouselInfo,
  BtnWrap,
  ColumnCarousel2,
  ImgWrapCarousel,
  ImgCarousel,
  InfoBtnLink,
  CarouselControls,
  IconWrapperLeft,
  IconWrapperMiddle,
  IconWrapperRight,
  ImageSliderCarousel,
  PreviewCarousel,
  ImgThumb,
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
  const [slidePlay, setSlidePlay] = useState(true);
  const [infoActive, setInfoActive] = useState(false);

  const autoPlayRef = useRef();
  const length = sushi.length;
  let interval;

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    console.log("PLAYYYY");
    const play = () => {
      autoPlayRef.current();
    };
    if (slidePlay === true) {
      console.log(slidePlay);
      interval = setInterval(play, 3000);

      return () => clearInterval(interval);
    } else if (slidePlay === false) {
      clearInterval(interval);
      console.log(slidePlay);
    }

    console.log(interval);
  }, [slidePlay]);

  let counter = 0;
  const prevSlide = () => {
    if (cur === 0) {
      setCur(length - 1);
    } else setCur(cur - 1);
  };

  const nextSlide = () => {
    if (cur === length - 1) {
      setCur(0);
    } else setCur(cur + 1);
    setSlidePlay(true);
  };

  const handlePause = () => {
    if (slidePlay === false) {
      setSlidePlay(true);
    } else setSlidePlay(false);
  };

  const handlePreview = (val) => {
    if (!val) {
      cur = 0;
    }

    setCur(val - 1);
  };

  const handleInfo = () => {
    if (infoActive) {
      setInfoActive(false);
    } else setInfoActive(true);
  };

  return (
    <>
      <InfoCarouselContainer lightBg={lightBg} id={id}>
        <InfoWrapperCarousel>
          <InfoRowCarousel imgStart={imgStart}>
            <ColumnCarousel2>
              <ImgWrapCarousel>
                {infoActive ? (
                  <CarouselItemInfo
                    data={sushi[cur]}
                    handleInfo={() => handleInfo()}
                    onClick={() => handleInfo()}
                  />
                ) : (
                  <></>
                )}
                <ImgCarousel
                  onClick={() => handlePause()}
                  src={sushi[cur].images}
                />

                <CarouselInfo onClick={() => handleInfo()}>
                  <FaInfoCircle />
                </CarouselInfo>

                <CarouselHeading>{sushi[cur].name}</CarouselHeading>
                <CarouselControls>
                  <IconWrapperLeft onClick={() => prevSlide()}>
                    <FaArrowAltCircleLeft />
                  </IconWrapperLeft>
                  <IconWrapperMiddle onClick={() => handlePause()}>
                    {slidePlay ? <FaPause /> : <FaPlay />}
                  </IconWrapperMiddle>
                  <IconWrapperRight onClick={() => nextSlide()}>
                    <FaArrowAltCircleRight />
                  </IconWrapperRight>
                </CarouselControls>
              </ImgWrapCarousel>
            </ColumnCarousel2>

            <ColumnCarousel1>
              <TextWrapperCarousel onClick={() => handlePause()}>
                <CarouselHeading>{sushi[cur].name}</CarouselHeading>
                <CarouselSubtitle darkText={darkText}>
                  {sushi[cur].desc}
                </CarouselSubtitle>
              </TextWrapperCarousel>
            </ColumnCarousel1>
          </InfoRowCarousel>

          <ImageSliderCarousel>
            {sushi.map((e, i) => {
              return (
                <PreviewCarousel onClick={() => handlePreview(e.id)}>
                  <ImgThumb activeClass="active" src={e.images} />
                </PreviewCarousel>
              );
            })}
          </ImageSliderCarousel>
        </InfoWrapperCarousel>
      </InfoCarouselContainer>
    </>
  );
};

export default InfoCarousel;
