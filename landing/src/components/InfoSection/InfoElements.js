import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#2c3138" : "#010606")};
  height: 100%;

  scroll-snap-type: start;

  @media screen and (max-width: 768px) {
    /* padding: 100px 0; */
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
    height: 100vh;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? '"col2 col1"' : '"col1 col2"'};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? '"col1" "col2"' : '"col2 col2" "col1 col1"'};
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
  margin-top: 10vh;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
  margin-top: 10vh;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;

  margin-left: 1em;

  @media screen and (max-width: 768px) {
    padding-top: 120px;
    padding-bottom: 0;
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
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-top: 0px;
    overflow: hidden;
    width: 80vw;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (max-width: 768px) {
    height: 100px;
    width: 80vw;
    overflow: scroll;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const ImgWrap = styled.div`
  max-width: 80vw;
  height: 65vh;
  color: #f5f5f5;
  overflow: hidden;
  border: 4px white solid;
  border-radius: 5px;
`;
export const Img = styled.img`
  width: 30vw;
  height: 100%;
  object-fit: cover;
`;

// Carousel
export const InfoCarouselContainer = styled.div`
  color: #fff;
  height: 100vh;
  justify-content: center;
  background: ${({ lightBg }) => (lightBg ? "#2c3138" : "#010606")};

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }
`;

// export const InfoCarouselWrapper = styled.div`
//   display: grid;
//   z-index: 1;
//   height: 70vh;
//   width: 100vw;
//   max-width: 1100px;
//   margin-right: auto;
//   margin-left: auto;

//   justify-content: center;

//   @media screen and (max-width: 768px) {
//     height: 100vh;
//     width: 100%;
//     padding: 0 0px;
//   }
// `;

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

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? '"col1" "col2"' : '"col2 col2" "col1 col1"'};
  }
`;

export const ColumnCarousel1 = styled.div`
  margin-bottom: 15px;

  grid-area: col1;

  align-items: right;
  width: 100%;
  height: 55vh;
  padding: 20px;
  overflow: hidden;

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

  /* margin-top: -350px; */
  @media screen and (max-width: 768px) {
    overflow: hidden;
  }
`;

export const ImgWrapCarousel = styled.div`
  position: absolute;
  object-fit: wrap;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 65vh;
  width: 500px;

  z-index: 4;

  @media screen and (max-width: 768px) {
    height: 50vh;
    width: 80%;
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

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const CarouselControls = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 500px;

  background-color: red;
`;

export const IconWrapperLeft = styled.div`
  z-index: 1000;
  position: absolute;
  left: 0;

  border-radius: 78px;

  font-size: 3rem;
  opacity: 0.7;
  color: #fff;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 768px) {
  }
`;

export const IconWrapperMiddle = styled.div`
  position: absolute;

  font-size: 3rem;
  opacity: 0.7;
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

  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 768px) {
    margin-top: -100px;
    margin-bottom: 60px;
    font-size: 32px;
    width: 100%;
    height: 40px;
    overflow: hidden;
  }
`;

export const CarouselSubtitle = styled.p`
  margin-bottom: 35px;

  font-size: 24px;
  line-height: 30px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  height: 200px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100px;
    overflow: hidden;
  }
`;

export const ImageSliderCarousel = styled.div`
  flex-shrink: 0;
  height: 120px;
  width: 100%;
  overflow-x: scroll;

  z-index: 50;

  display: flex;
  flex: 0;
  flex-direction: row;

  ::-webkit-scrollbar {
    width: 10%;
    height: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    width: 15px;

    background-color: black;
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
`;
