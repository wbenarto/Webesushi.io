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
    height: 90vh;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-height: 645px) {
    height: 85vh;
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
  margin-top: 10vh;
  flex-direction: column;

  @media screen and (max-width: 475px) {
    height: 45vh;

    flex: 1;
    position: relative;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    margin-top: 0;
    height: 40vh;
  }
  @media screen and (max-height: 740px) {
  }
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
  margin-top: 10vh;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 475px) {
    display: flex;
    justify-content: center;
    height: 35vh;
  }

  @media screen and (max-width: 768px) {
    display: flex;

    justify-content: center;
  }

  @media screen and (max-height: 740px) {
    margin-top: 8vh;
    position: relative;
    height: 30vh;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 85%;
    display: flex;
    text-align: left;
    flex: 1;
  }
  @media screen and (max-height: 740px) {
    height: ${({ id }) => (id == "about" ? "60vh" : "40vh")};
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
  display: flex;
  height: 50px;

  @media screen and (max-width: 768px) {
    overflow: hidden;

    font-size: 14px;
    margin-bottom: 5px;
    height: 25px;
  }
  @media screen and (max-height: 645px) {
    margin-top: 50px;
    height: 90px;
    margin-bottom: -10px;
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
    display: flex;
    justify-content: center;
    font-size: 16px;
    width: 80vw;

    height: ${({ id }) => (id == "about" ? "35vh" : "15vh")};
    margin-bottom: 0px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
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
    height: 100%;
    width: 100%;
    position: relative;
  }
  @media screen and (max-width: 475px) {
    height: 100%;
  }
`;
export const Img = styled.img`
  height: 100%;
  width: 700px;
  object-fit: cover;
  object-position: top right;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 475px) {
    width: 100%;
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
    margin-top: 5vh;
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
    height: 100%;
  }

  /* @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
    imgStart ? '"col1" "col2"' : '"col2 col2" "col1 col1"'};
  } */
`;

export const ColumnCarousel1 = styled.div`
  margin-bottom: 15px;
  flex-direction: column;
  align-content: center;
  position: relative;
  width: 100%;
  height: 55vh;
  padding: 20px;
  overflow: hidden;

  @media screen and (max-width: 475px) {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    /* background: linear-gradient(#dbd6a9, #010606); */
    z-index: 5;
    border-top: 6px solid #2c3138;
    border-radius: 45px;
    height: 38vh;

    width: 90%;
    padding: 0px;
  }
  @media screen and (max-height: 685px) {
  }

  @media screen and (max-width: 475px) {
    display: none;
  }
  @media screen and (max-height: 685px) {
    height: 40vh;
    margin-top: 300px;
  }
`;

export const ColumnCarousel2 = styled.div`
  margin-bottom: 15px;
  grid-area: col2;
  margin-left: 0px;

  align-content: center;
  object-fit: wrap;
  overflow: hidden;
  @media screen and (max-width: 475px) {
    display: flex;
    flex: 1;
    position: relative;
    height: 100%;
  }
  /* margin-top: -350px; */
  @media screen and (max-width: 768px) {
    overflow: hidden;
    justify-content: center;
  }
  @media screen and (max-height: 685px) {
    object-fit: cover;
    object-position: bottom;
  }
`;

export const TextWrapperCarousel = styled.div`
  max-width: 540px;
  padding-top: 0;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    display: flex;
    text-align: left;
    flex: 1;
    height: 65%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

export const ImgWrapCarousel = styled.div`
  position: absolute;
  object-fit: wrap;
  display: flex;

  align-items: center;
  overflow: hidden;
  width: 35vw;
  margin-right: 50px;
  height: 70vh;
  border: 4px #dbd6a9 solid;
  border-radius: 5px;
  z-index: 4;
  margin-bottom: 0;

  @media screen and (max-width: 475px) {
    position: relative;
    overflow: hidden;
    display: block;
    margin: auto;
    border: 2px solid #dbd6a9;
    height: 65vh;
    width: 80vw;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    /* height: 50vh;
    width: 80%; */
  }
  @media screen and (max-height: 685px) {
    height: 65vh;
  }
`;

export const ImgCarousel = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 475px) {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const CarouselControls = styled.div`
  position: absolute;
  display: flex;
  flex: 1;
  bottom: 60px;
  flex-direction: row;
  justify-content: center;
  width: 70%;
  margin-left: 7vw;
  object-fit: wrap;

  @media screen and (max-width: 475px) {
    width: 100%;
    position: absolute;
    transform: scale(0.5);
    bottom: 20px;
    z-index: 60;
    margin-left: 0;
  }
`;

export const IconWrapperLeft = styled.div`
  position: absolute;
  left: 0;

  border-radius: 78px;

  font-size: 2rem;
  opacity: 0.7;
  color: #dbd6a9;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 475px) {
    /* color: #dbd6a9; */
  }
`;

export const IconWrapperMiddle = styled.div`
  position: absolute;
  color: #dbd6a9;
  font-size: 2rem;
  opacity: 0.7;
  @media screen and (max-width: 475px) {
  }
`;

export const IconWrapperRight = styled.div`
  position: absolute;
  right: 0;
  color: #dbd6a9;
  font-size: 2rem;
  opacity: 0.7;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 475px) {
  }
`;

export const CarouselHeading = styled.h1`
  margin-bottom: 100px;
  padding: 10px 20px;
  font-size: 48px;
  height: 120px;
  width: 100%;
  line-height: 1.1;
  vertical-align: text-bottom;
  text-align: left;
  /* border-radius: 20px; */
  border-bottom: 4px solid #dbd6a9;

  @media screen and (max-width: 475px) {
    position: absolute;
    padding-top: 10px;
    font-size: 1.6rem;
    height: 7.5rem;
    bottom: 0;
    font-family: "Cormorant Unicase";
    margin-bottom: 0;
    justify-content: bottom;
    color: ${({ lightText }) => (lightText ? "#fff" : "#dbd6a9")};
    /* background: linear-gradient(#dbd6a9, #d3d4ba);  */
    background-color: transparent;
    border-bottom: none;
    z-index: 3;

    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
          -180deg,
          rgba(235, 235, 235, 0.2) 100%,
          rgba(235, 235, 235, 0.2) 50%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.9) 100%);
      z-index: 2;
    }
  }

  @media screen and (max-height: 685px) {
  }
`;

export const CarouselSubtitle = styled.p`
  margin-bottom: 35px;

  font-size: 24px;
  line-height: 30px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (max-width: 475px) {
    font-size: 16px;
    font-size: 18px;
    width: 80vw;
    height: 300px;
    line-height: 24px;

    color: ${({ darkText }) => (darkText ? "#010606" : "#dbd6a9")};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: scroll;
    height: 350px;
    margin-bottom: 0px;
    padding-top: 5px;
  }
`;

export const CarouselInfo = styled.div`
  width: 50px;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 12px;
  font-size: 2.3rem;
  z-index: 99;
  justify-content: center;
  /* color: #2c3138; */
  color: #dbd6a9;
`;

export const ImageSliderCarousel = styled.div`
  height: 110px;
  width: 95%;
  overflow-x: scroll;
  display: flex;
  margin-bottom: 50px;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-left: 15px;
  ::-webkit-scrollbar {
    height: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #dbd6a9;
    border-radius: 50px;
  }

  @media screen and (max-width: 475px) {
    width: 100%;
    position: relative;
    display: flex;
    margin-bottom: 100px;
    border-radius: 5px;
  }
  @media screen and (max-height: 685px) {
    margin-bottom: 8vh;
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
    display: ${({ id }) => (id == "about" ? "none" : "flex")};
  }
`;
