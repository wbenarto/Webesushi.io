import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#2c3138" : "#010606")};
  height: 100%;

  scroll-snap-align: start;

  @media screen and (max-width: 768px) {
    /* padding: 100px 0; */
    height: 100vh;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? '"col2 col1"' : '"col1 col2"'};

  @media screen and (max-width: 768px) {
    margin-top: 13vh;
    height: 90vh;
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? '"col2" "col1"' : '"col2" "col1"'};
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
  margin-top: 10vh;
  flex-direction: column;

  @media screen and (max-width: 475px) {
    height: 55vh;
    margin-top: -130px;
    flex: 1;
    position: relative;
  }
  /* @media screen and (max-width: 768px) {
    margin-top: -20px;
    margin-bottom: 30px;
    padding: 0;
    height: 35svh;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: top;
  } */
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
  margin-top: 10vh;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin-top: -70px;
    margin-bottom: 10px;
    height: 80%;
    display: flex;
    flex: 1;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    width: 85%;
    flex-direction: column;
    display: flex;
    text-align: left;
    flex: 1;

    height: 350px;
  }
`;

export const TopLine = styled.p`
  color: #dbd6a9;
  font-size: 24px;
  line-height: 40px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    overflow: hidden;
    width: 80vw;
    height: 50px;
    font-size: 14px;

    margin-bottom: 10px;
  }
`;

export const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 1;

    margin-right: 0px;
    overflow: hidden;
    width: 80vw;
    min-height: 50px;
    margin-bottom: 10px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 80vw;
    /* height: ${({ short }) => (short ? "15vh" : "25vh")}; */
    overflow-y: scroll;
    margin-top: 10px;
    ::-webkit-scrollbar {
      display: none;
    }
    margin-bottom: 0;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    width: 80vw;

    justify-content: center;
    display: flex;
    flex: 1;
  }
`;

export const ImgWrap = styled.div`
  max-width: 80vw;
  height: 65vh;
  color: #f5f5f5;
  overflow: hidden;
  border: 4px #dbd6a9 solid;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export const Img = styled.img`
  height: 100%;
  width: 700px;
  object-fit: cover;
  object-position: top right;

  @media screen and (max-width: 768px) {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

// Carousel
export const InfoCarouselContainer = styled.div`
  color: #fff;
  height: 100vh;
  justify-content: center;
  background: ${({ lightBg }) => (lightBg ? "#2c3138" : "#010606")};
  scroll-snap-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }

  // iphone
`;

export const InfoWrapperCarousel = styled.div`
  display: grid;
  z-index: 100;
  height: 80vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  flex-direction: column;
  flex: 1 0 auto;

  background-color: #2c3138;
  @media screen and (max-width: 475px) {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    overflow: hidden;
  }
`;

export const InfoRowCarousel = styled.div`
  display: grid;
  margin-top: 15vh;
  margin-bottom: 100px;
  grid-auto-columns: minmax(auto, 1fr);
  flex-direction: column;
  flex: 1 0 auto;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? '"col2 col1"' : '"col1 col2"'};

  height: 80%;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 475px) {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 90px;
  }

  /* @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
    imgStart ? '"col1" "col2"' : '"col2 col2" "col1 col1"'};
  } */
`;

export const ColumnCarousel1 = styled.div`
  margin-bottom: 15px;
  grid-area: col1;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 55vh;
  padding: 20px;
  overflow: hidden;

  @media screen and (max-width: 475px) {
    display: flex;
    flex-direction: column;
    position: relative;
    background: linear-gradient(#dbd6a9, #010606);
    z-index: 5;
    border-top: 6px solid #2c3138;
    border-radius: 45px;
    height: 38vh;
    margin-top: 300px;
    width: 90%;
    padding: 0px;
  }
  @media screen and (max-width: 768px) {
    overflow: hidden;
  }
`;

export const ColumnCarousel2 = styled.div`
  margin-bottom: 15px;
  grid-area: col2;
  margin-left: 0px;
  background-color: "green";
  width: 100%;
  align-content: center;
  object-fit: wrap;
  overflow: hidden;
  @media screen and (max-width: 475px) {
    display: flex;
    flex: 1;
  }
  /* margin-top: -350px; */
  @media screen and (max-width: 768px) {
    overflow: hidden;
    justify-content: center;
  }
`;

export const TextWrapperCarousel = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    width: 95%;
    flex-direction: column;
    display: flex;
    text-align: left;
    flex: 1;
    height: 85%;
  }
  @media screen and (max-height: 569px) {
    position: relative;
  }
`;

export const ImgWrapCarousel = styled.div`
  position: relative;
  object-fit: wrap;
  display: flex;

  align-items: center;
  overflow: hidden;
  max-width: 80vw;
  height: 65vh;
  border: 4px #dbd6a9 solid;

  border-radius: 5px;
  z-index: 4;

  @media screen and (max-width: 475px) {
    position: absolute;
    object-fit: cover;
    overflow: hidden;
    margin-top: 3vh;
    width: 90%;
    height: 100vw;
    border: 2px solid #dbd6a9;
  }

  @media screen and (max-width: 768px) {
    /* height: 50vh;
    width: 80%; */
  }
`;

export const ImgCarousel = styled.img`
  height: 100%;

  object-fit: contain;
  border-radius: 20px;
  margin-left: 30px;
  &.slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  &.slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }

  @media screen and (max-width: 475px) {
    display: flex;
    flex: 1;
    border-radius: 0;
    object-fit: fill;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const CarouselControls = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  min-width: 20vw;
  align-items: center;

  @media screen and (max-width: 475px) {
    width: 100%;
    position: relative;
    display: flex;
    flex: 1;
    transform: scale(0.5);
  }
`;

export const IconWrapperLeft = styled.div`
  position: absolute;
  left: 0;

  border-radius: 78px;

  font-size: 3rem;
  opacity: 0.7;
  color: #fff;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 475px) {
    color: #dbd6a9;
  }
`;

export const IconWrapperMiddle = styled.div`
  position: absolute;

  font-size: 3rem;
  opacity: 0.7;
  @media screen and (max-width: 475px) {
    color: #dbd6a9;
  }
`;

export const IconWrapperRight = styled.div`
  z-index: 100;
  position: absolute;
  right: 0;

  font-size: 3rem;
  opacity: 0.7;
  color: #fff;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 475px) {
    color: #dbd6a9;
  }
`;

export const CarouselHeading = styled.h1`
  margin-bottom: 100px;
  padding: 10px 20px;
  font-size: 48px;
  height: 120px;
  width: 100%;
  line-height: 1.1;
  font-weight: 600;
  vertical-align: text-bottom;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  text-align: left;
  border-radius: 20px;
  border-bottom: 4px solid #dbd6a9;
  @media screen and (max-width: 475px) {
    padding-top: 10px;
    font-size: 26px;
    min-height: 80px;
    margin-bottom: 0;
    justify-content: bottom;
    color: ${({ lightText }) => (lightText ? "#010606" : "#010606")};
    border-bottom: 4px solid #010606;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const CarouselSubtitle = styled.p`
  margin-bottom: 35px;

  font-size: 24px;
  line-height: 30px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  height: 200px;

  @media screen and (max-width: 475px) {
    font-size: 18px;
    width: 80vw;
    height: 300px;
    line-height: 24px;
    padding: 20px;
    color: ${({ darkText }) => (darkText ? "#010606" : "#dbd6a9")};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }
`;

export const ImageSliderCarousel = styled.div`
  flex-shrink: 0;
  height: 110px;
  width: 100%;
  overflow-x: scroll;
  display: flex;
  flex: 0;
  flex-direction: row;
  align-items: center;
  ::-webkit-scrollbar {
    height: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #dbd6a9;
    border-radius: 50px;
  }

  @media screen and (max-width: 475px) {
    width: 90%;
    position: absolute;
    display: flex;
    flex-shrink: 0;
    margin-left: 5%;
    border-radius: 50px;
  }
`;

export const PreviewCarousel = styled.div`
  height: 80px;
  width: 100%;
  background-color: #000000;
  margin: 10px;
  border-radius: 50%;
  justify-content: center;
  &:hover {
    transform: scale(1.2);
  }
`;

export const ImgThumb = styled.img`
  height: 100%;
  object-fit: contain;
  border-radius: 10%;

  &.active {
    transform: scale(1.2);
  }
`;
// Carousel Ends

export const InfoBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#dbd6a9" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#dbd6a9")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-top: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#edecdf" : "#dbd6a9")};
    color: ${({ primary }) => (primary ? "#010606" : "#010606")};
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
