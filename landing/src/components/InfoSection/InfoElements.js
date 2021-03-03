import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#bd8f5e" : "#010606")};

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
  margin-top: 110px;

  @media screen and (max-width: 768px) {
    margin-top: 0px;

    width: 100%;
  }
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
  margin-top: 100px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
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
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
    margin-top: 0px;
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
    overflow: scroll;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px;
  padding-right: 0;
`;

// Carousel
export const InfoCarouselContainer = styled.div`
  color: #fff;

  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const InfoCarouselWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;

  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100%;
    padding: 0 0px;
  }
`;

export const InfoWrapperCarousel = styled.div`
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
  align-items: left;
  width: 530px;
  height: 300px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ColumnCarousel2 = styled.div`
  margin-bottom: 15px;
  grid-area: col2;
  margin-left: 0px;
  background-color: "green";
  max-width: 600px;
  align-content: center;

  /* margin-top: -350px; */
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ImgWrapCarousel = styled.div`
  position: absolute;
  object-fit: contain;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 700px;
  width: 500px;
  border-radius: 10px;
  z-index: 4;

  @media screen and (max-width: 768px) {
    margin-top: 130px;
    height: 50vh;
    width: 100%;
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
  }
`;

export const IconWrapperLeft = styled.div`
  z-index: 100;
  position: absolute;
  top: 50%;
  height: 300px;
  left: 20px;
  font-size: 2rem;
  color: #000;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 768px) {
  }
`;

export const IconWrapperRight = styled.div`
  z-index: 100;
  position: absolute;
  top: 50%;
  right: 20px;
  font-size: 2rem;
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
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  text-align: right;
  border-radius: 20px;
  border-bottom: 4px solid #dbd6a9;
  @media screen and (max-width: 480px) {
    margin-top: -100px;
    margin-bottom: 60px;
    font-size: 32px;
    width: 100%;
    height: 40px;
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
  height: 120px;

  position: sticky;
  z-index: 5;
  background-color: #dbd6a9bf;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  overflow: scroll;

  ::-webkit-scrollbar-thumb {
    width: 5px;
    color: black;
  }
`;

export const PreviewCarousel = styled.div`
  height: 80px;
  width: 60px;
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
