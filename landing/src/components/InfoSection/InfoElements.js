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
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    overflow: hidden;
    padding-top: 120px;
    padding-bottom: 0;
  }
`;

export const TopLine = styled.p`
  color: #dbd6a9;
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
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
  height: 80vh;
  object-fit: fill;
  overflow: hidden;
  border-radius: 20px;
`;
export const Img = styled.img`
  height: 100%;
  margin: 0 0 10px;

  border-radius: 20px;
`;

// Carousel
export const InfoCarouselContainer = styled.div`
  color: #fff;
  height: 100vh;

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
  justify-content: center;
  background-color: white;
  @media screen and (max-width: 768px) {
    height: 100%;
    overflow: hidden;
  }
`;

export const InfoRowCarousel = styled.div`
  display: grid;
  margin-top: -200px;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? '"col2 col1"' : '"col1 col2"'};

  height: 100vh;

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? '"col1" "col2"' : '"col2 col2" "col1 col1"'};
  }
`;

export const ColumnCarousel1 = styled.div`
  margin-bottom: 15px;
  margin-top: 150px;
  grid-area: col1;
  margin-left: 0px;
  align-items: right;
  width: 530px;
  height: 300px;
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
  max-width: 30vw;
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
  object-fit: contain;
  margin-top: -15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 70vh;
  width: 30vw;
  border-radius: 10px;
  z-index: 4;

  @media screen and (max-width: 768px) {
    height: 50vh;
    width: 80%;
  }
`;

export const ImgCarousel = styled.img`
  height: 100%;
  width: 100%;
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

export const IconWrapperLeft = styled.div`
  z-index: 100;
  position: absolute;
  align-items: center;

  margin-left: 10vw;
  height: 100vh;
  width: 100px;
  border-radius: 78px;

  left: 20px;
  font-size: 2rem;
  opacity: 0.2;
  color: #000;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 768px) {
  }
`;

export const IconWrapperRight = styled.div`
  z-index: 100;
  position: absolute;
  align-items: center;
  height: 100vh;
  right: 10vw;
  font-size: 2rem;
  opacity: 0.2;
  color: #000;
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
  height: 100px;
  max-width: 50%;
  position: absolute;
  z-index: 5;
  background-color: #2c3138;
  border-radius: 10px;

  display: flex;
  flex: 0;
  flex-direction: row;

  ::-webkit-scrollbar-thumb {
    width: 5px;
    color: black;
  }
`;

export const PreviewCarousel = styled.div`
  height: 80px;
  width: 10%;
  background-color: #000000;
  margin: 10px;
  border-radius: 10px;
  justify-content: center;
  &:hover {
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
