import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ButtonElement";

import { sushi } from "./Data";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaPause,
  FaPlay,
} from "react-icons/fa";

import {
  InfoCarouselContainer,
  InfoWrapperCarousel,
  InfoRowCarousel,
  ColumnCarousel1,
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
  // Autoplay 4s with animation
  // Button to pause
  // Preview images bar, onClick, show data
  const handlePreview = (val) => {
    if (!val) {
      cur = 0;
    }

    setCur(val - 1);
  };

  return (
    <>
      <InfoCarouselContainer
        onClick={() => handlePause()}
        lightBg={lightBg}
        id={id}
      >
        <InfoWrapperCarousel>
          <InfoRowCarousel imgStart={imgStart}>
            <ColumnCarousel1>
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
                <CarouselControls>
                  <IconWrapperLeft onClick={prevSlide}>
                    <FaArrowAltCircleLeft />
                  </IconWrapperLeft>
                  <IconWrapperMiddle>
                    {slidePlay ? <FaPause /> : <FaPlay />}
                  </IconWrapperMiddle>
                  <IconWrapperRight onClick={() => nextSlide()}>
                    <FaArrowAltCircleRight />
                  </IconWrapperRight>
                </CarouselControls>
              </TextWrapper>
            </ColumnCarousel1>

            <ColumnCarousel2>
              <ImgWrapCarousel>
                <ImgCarousel src={sushi[cur].images} />
              </ImgWrapCarousel>
            </ColumnCarousel2>
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
